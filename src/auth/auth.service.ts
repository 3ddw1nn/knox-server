import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
  ConflictException,
  // NotFoundException, // Removed as it was unused
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthenticatedUser } from './jwt.strategy';
import { EnsureProfileDto } from './dto/ensure-profile.dto';
import { Employee, Vendor, EmployeeRole, Prisma } from '../../generated/prisma'; // Added Prisma for error types
import { UserProfileResponse } from '../users/interfaces/user-profile.interface';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private prisma: PrismaService) {}

  private mapEmployeeToUserProfileResponse(
    employee: Employee,
  ): UserProfileResponse {
    return {
      id: employee.id,
      email: employee.email,
      name: employee.name,
      role: employee.role as string,
      supabaseUserId: employee.supabaseUserId,
    };
  }

  // We might need a similar mapper for Vendor if its profile response is different
  // For now, let's assume UserProfileResponse can represent a Vendor conceptually
  // or we'll create a distinct response type later.
  private mapVendorToUserProfileResponse(vendor: Vendor): UserProfileResponse {
    return {
      id: vendor.id,
      email: vendor.contactEmail, // Assuming contactEmail is the primary email for a vendor user
      name: vendor.name,
      role: 'vendor', // Explicitly set role
      supabaseUserId: vendor.supabaseUserId,
    };
  }

  private _handlePrismaCreateError(
    error: unknown,
    email: string,
    profileType: 'employee' | 'vendor',
    uniqueFieldToCheck: 'email' | 'contactEmail',
  ): never {
    const baseErrorMessage = `profile for ${email}`;
    const logMessage = `Error creating new ${profileType} ${baseErrorMessage}: ${error instanceof Error ? error.message : String(error)}`;
    const stack = error instanceof Error ? error.stack : undefined;
    this.logger.error(logMessage, stack);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        error.code === 'P2002' &&
        (error.meta?.target as string[])?.includes(uniqueFieldToCheck)
      ) {
        const badRequestMsg = `An account with email ${email} (as ${profileType}) already exists but is not linked to this OAuth user. Please contact support.`;
        throw new BadRequestException(badRequestMsg);
      }
    }
    const internalErrorMsg = `Could not create ${profileType} profile.`;
    throw new InternalServerErrorException(internalErrorMsg);
  }

  async ensureProfile(
    authenticatedUser: AuthenticatedUser,
    ensureProfileDto: EnsureProfileDto,
  ): Promise<UserProfileResponse> {
    const { email, supabaseUserId, fullName } = authenticatedUser;
    const { intendedRole } = ensureProfileDto;

    if (!supabaseUserId) {
      this.logger.error(
        'Supabase User ID (sub) missing from JWT. Cannot ensure profile.',
        authenticatedUser.originalPayload,
      );
      throw new InternalServerErrorException(
        'Supabase User ID missing from token.',
      );
    }
    if (!email) {
      this.logger.error(
        'Email missing from JWT. Cannot ensure profile.',
        authenticatedUser.originalPayload,
      );
      throw new InternalServerErrorException('User email missing from token.');
    }

    const employeeProfile = await this.prisma.employee.findUnique({
      where: { supabaseUserId },
    });

    if (employeeProfile) {
      this.logger.log(
        `Existing employee profile found for supabaseUserId: ${supabaseUserId}`,
      );
      return this.mapEmployeeToUserProfileResponse(employeeProfile);
    }

    const vendorProfile = await this.prisma.vendor.findUnique({
      where: { supabaseUserId },
    });

    if (vendorProfile) {
      this.logger.log(
        `Existing vendor profile found for supabaseUserId: ${supabaseUserId}`,
      );
      return this.mapVendorToUserProfileResponse(vendorProfile);
    }

    // If we reach here, no existing profile was found.
    // Now, we require intendedRole to create a new one.
    this.logger.log(
      `No existing profile found for supabaseUserId: ${supabaseUserId}. Checking intendedRole to create new profile.`,
    );

    if (!intendedRole) {
      this.logger.warn(
        `No existing profile for ${supabaseUserId} and intendedRole not provided. Cannot create profile.`,
      );
      throw new BadRequestException(
        'No profile found. Please specify an intendedRole (employee or vendor) to create a new profile.',
      );
    }

    this.logger.log(
      `Attempting to create new profile for supabaseUserId: ${supabaseUserId} with role: ${intendedRole}`,
    );

    if (intendedRole === 'employee') {
      try {
        const newEmployee = await this.prisma.employee.create({
          data: {
            email,
            supabaseUserId,
            name: fullName || email,
            role: EmployeeRole.employee,
          },
        });
        this.logger.log(
          `Created new employee profile for ${email} with supabaseUserId: ${supabaseUserId}`,
        );
        return this.mapEmployeeToUserProfileResponse(newEmployee);
      } catch (error: unknown) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002'
        ) {
          const targetFields = error.meta?.target as string[] | undefined;
          if (targetFields?.includes('email')) {
            // Unique constraint on email
            const isEmailVerified =
              authenticatedUser.originalPayload?.email_verified === true;
            if (isEmailVerified) {
              this.logger.log(
                `Attempting to link OAuth user ${supabaseUserId} to existing employee with email ${email}`,
              );
              const existingEmployeeByEmail =
                await this.prisma.employee.findUnique({ where: { email } });

              if (
                existingEmployeeByEmail &&
                (existingEmployeeByEmail.supabaseUserId === null ||
                  existingEmployeeByEmail.supabaseUserId === supabaseUserId)
              ) {
                const updatedEmployee = await this.prisma.employee.update({
                  where: { id: existingEmployeeByEmail.id },
                  data: { supabaseUserId: supabaseUserId },
                });
                this.logger.log(
                  `Successfully linked OAuth user to existing employee ${updatedEmployee.id}`,
                );
                return this.mapEmployeeToUserProfileResponse(updatedEmployee);
              } else if (
                existingEmployeeByEmail &&
                existingEmployeeByEmail.supabaseUserId !== null &&
                existingEmployeeByEmail.supabaseUserId !== supabaseUserId
              ) {
                this.logger.warn(
                  `Employee with email ${email} exists but is linked to a different Supabase user (${existingEmployeeByEmail.supabaseUserId}). Current OAuth user is ${supabaseUserId}.`,
                );
                throw new ConflictException(
                  `An account with this email is already linked to a different sign-in method. Please contact support.`,
                );
              } else {
                this.logger.error(
                  `Prisma P2002 on email for employee, but no existing employee found with email ${email}. This is an inconsistent state.`,
                );
                throw new InternalServerErrorException(
                  'Could not create employee profile due to inconsistent data.',
                );
              }
            } else {
              this.logger.warn(
                `Cannot link OAuth user ${supabaseUserId}: email ${email} is not verified by provider.`,
              );
              throw new BadRequestException(
                'Your email address must be verified by your sign-in provider to link accounts.',
              );
            }
          }
        }
        this._handlePrismaCreateError(error, email, 'employee', 'email');
      }
    } else {
      // If not 'employee', it implies intendedRole is 'vendor' here.
      try {
        const vendorName = fullName || `Vendor (${email.split('@')[0]})`;

        const newVendor = await this.prisma.vendor.create({
          data: {
            contactEmail: email,
            supabaseUserId,
            name: vendorName,
          },
        });
        this.logger.log(
          `Created new vendor profile for ${email} with supabaseUserId: ${supabaseUserId}`,
        );
        return this.mapVendorToUserProfileResponse(newVendor);
      } catch (error: unknown) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002'
        ) {
          const targetFields = error.meta?.target as string[] | undefined;
          if (targetFields?.includes('contactEmail')) {
            // Unique constraint on contactEmail
            const isEmailVerified =
              authenticatedUser.originalPayload?.email_verified === true;
            if (isEmailVerified) {
              this.logger.log(
                `Attempting to link OAuth user ${supabaseUserId} to existing vendor with email ${email}`,
              );
              const existingVendorByEmail = await this.prisma.vendor.findUnique(
                { where: { contactEmail: email } },
              );

              if (
                existingVendorByEmail &&
                (existingVendorByEmail.supabaseUserId === null ||
                  existingVendorByEmail.supabaseUserId === supabaseUserId)
              ) {
                const updatedVendor = await this.prisma.vendor.update({
                  where: { id: existingVendorByEmail.id },
                  data: { supabaseUserId: supabaseUserId },
                });
                this.logger.log(
                  `Successfully linked OAuth user to existing vendor ${updatedVendor.id}`,
                );
                return this.mapVendorToUserProfileResponse(updatedVendor);
              } else if (
                existingVendorByEmail &&
                existingVendorByEmail.supabaseUserId !== null &&
                existingVendorByEmail.supabaseUserId !== supabaseUserId
              ) {
                this.logger.warn(
                  `Vendor with email ${email} exists but is linked to a different Supabase user (${existingVendorByEmail.supabaseUserId}). Current OAuth user is ${supabaseUserId}.`,
                );
                throw new ConflictException(
                  `An account with this email is already linked to a different sign-in method. Please contact support.`,
                );
              } else {
                this.logger.error(
                  `Prisma P2002 on contactEmail for vendor, but no existing vendor found with email ${email}. This is an inconsistent state.`,
                );
                throw new InternalServerErrorException(
                  'Could not create vendor profile due to inconsistent data.',
                );
              }
            } else {
              this.logger.warn(
                `Cannot link OAuth user ${supabaseUserId}: email ${email} is not verified by provider.`,
              );
              throw new BadRequestException(
                'Your email address must be verified by your sign-in provider to link accounts.',
              );
            }
          }
        }
        this._handlePrismaCreateError(error, email, 'vendor', 'contactEmail');
      }
    }
  }
}

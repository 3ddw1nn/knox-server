import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
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

    this.logger.log(
      `No existing profile found for supabaseUserId: ${supabaseUserId}. Creating new profile with role: ${intendedRole}`,
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
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        this.logger.error(
          `Error creating new employee profile for ${email}: ${errorMessage}`,
          error instanceof Error ? error.stack : undefined, // Log stack if available
        );
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (
            error.code === 'P2002' &&
            (error.meta?.target as string[])?.includes('email')
          ) {
            throw new BadRequestException(
              `An account with email ${email} already exists but is not linked to this OAuth user. Please contact support.`,
            );
          }
        }
        throw new InternalServerErrorException(
          'Could not create employee profile.',
        );
      }
    } else if (intendedRole === 'vendor') {
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
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        this.logger.error(
          `Error creating new vendor profile for ${email}: ${errorMessage}`,
          error instanceof Error ? error.stack : undefined, // Log stack if available
        );
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (
            error.code === 'P2002' &&
            (error.meta?.target as string[])?.includes('contactEmail')
          ) {
            throw new BadRequestException(
              `A vendor account with email ${email} already exists but is not linked to this OAuth user. Please contact support.`,
            );
          }
        }
        throw new InternalServerErrorException(
          'Could not create vendor profile.',
        );
      }
    } else {
      this.logger.warn(`Invalid intendedRole received: ${intendedRole}`);
      throw new BadRequestException(
        `Invalid intendedRole: '${intendedRole}'. Must be 'employee' or 'vendor'.`,
      );
    }
  }
}

import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Employee, EmployeeRole } from '../../generated/prisma'; // Ensure EmployeeRole is imported
import { AuthenticatedUser } from '../auth/jwt.strategy'; // User object from JWT
import { UserProfileResponse } from './interfaces/user-profile.interface';
import { Vendor } from '../../generated/prisma';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Employee | null> {
    return this.prisma.employee.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<Employee | null> {
    const user = await this.prisma.employee.findUnique({ where: { id } });
    if (!user) {
      // Keep original NotFoundException for direct ID lookups if desired elsewhere
      // For /me, a more specific handling might occur before calling this directly
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  private mapEmployeeToProfile(employee: Employee): UserProfileResponse {
    return {
      id: employee.id,
      email: employee.email,
      name: employee.name,
      role: employee.role,
      supabaseUserId: employee.supabaseUserId,
      companyName: employee.companyName ?? undefined,
    };
  }

  private isValidEmployeeRole(role: string): role is EmployeeRole {
    return Object.values(EmployeeRole).includes(role as EmployeeRole);
  }

  async getMyProfile(
    authenticatedUser: AuthenticatedUser,
  ): Promise<UserProfileResponse> {
    const { supabaseUserId } = authenticatedUser;
    this.logger.debug(`Fetching profile for supabaseUserId: ${supabaseUserId}`);

    if (!supabaseUserId) {
      // This shouldn't happen if JWT validation is correct
      this.logger.error('getMyProfile called without supabaseUserId in token');
      throw new NotFoundException('User identifier missing.');
    }

    // Check Employee table first
    const employee = await this.prisma.employee.findUnique({
      where: { supabaseUserId },
    });
    if (employee) {
      this.logger.debug(`Found employee profile for ${supabaseUserId}`);
      return this.mapEmployeeToProfile(employee);
    }

    // Check Vendor table if not found as Employee
    const vendor = await this.prisma.vendor.findUnique({
      where: { supabaseUserId },
    });
    if (vendor) {
      this.logger.debug(`Found vendor profile for ${supabaseUserId}`);
      return this.mapVendorToProfile(vendor);
    }

    // If user is authenticated but has no profile in DB (should not happen after ensureProfile)
    this.logger.warn(
      `No profile found for authenticated user ${supabaseUserId}`,
    );
    throw new NotFoundException(
      'User profile not found. Please ensure profile is created.',
    );
  }

  private mapVendorToProfile(vendor: Vendor): UserProfileResponse {
    return {
      id: vendor.id,
      email: vendor.contactEmail,
      name: vendor.name,
      role: 'vendor',
      supabaseUserId: vendor.supabaseUserId as string | null,
      // companyName is not applicable here
    };
  }

  async registerProfile(
    authenticatedUser: AuthenticatedUser,
    // requestEmail: string, // from DTO, frontend sends this.
    // We'll primarily use the authenticatedUser.email from JWT for security.
  ): Promise<UserProfileResponse> {
    const { email, supabaseUserId, jwtRole, fullName } = authenticatedUser;

    if (!email) {
      this.logger.error(
        'JWT did not contain an email address for registration.',
        authenticatedUser.originalPayload,
      );
      throw new InternalServerErrorException(
        'User email missing from token for registration.',
      );
    }

    // For registerProfile, we expect the user NOT to exist.
    const existingEmployee = await this.prisma.employee.findUnique({
      where: { email },
    });

    if (existingEmployee) {
      this.logger.warn(
        `Attempt to register profile for existing user ${email}.`,
      );
      throw new ConflictException(`User profile for ${email} already exists.`);
    }

    if (!jwtRole) {
      this.logger.warn(
        `User ${email} has no role in JWT (raw_user_meta_data.role) during registration.`,
      );
      throw new ForbiddenException(
        'User role not specified in token; cannot register profile.',
      );
    }

    if (!this.isValidEmployeeRole(jwtRole)) {
      this.logger.warn(
        `User ${email} has an invalid role ('${jwtRole}') in JWT for registration.`,
      );
      throw new ForbiddenException(
        `Role '${jwtRole}' is not a valid role for profile registration here.`,
      );
    }
    const mappedRole = jwtRole;

    try {
      const newEmployee = await this.prisma.employee.create({
        data: {
          email,
          supabaseUserId,
          name: fullName || email,
          role: mappedRole,
        },
      });
      this.logger.log(
        `Registered new employee profile for ${email} with role ${mappedRole} via dedicated endpoint.`,
      );
      return this.mapEmployeeToProfile(newEmployee);
    } catch (error: unknown) {
      // Log the error safely
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error(
        `Failed to register employee for ${email}: ${errorMessage}`,
      );
      // Re-throw a standard server error
      throw new InternalServerErrorException(
        'Could not register user profile.',
      );
    }
  }
}

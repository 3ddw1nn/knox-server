import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma/prisma.service'; // Adjust path as needed
import { Role } from '../enums/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AuthenticatedRequest extends Request {
  user?: SupabaseUser; // User from Supabase
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // No roles specified, so allow access
    }

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const supabaseUser = request.user;

    if (!supabaseUser || !supabaseUser.email) {
      // This should ideally not happen if SupabaseAuthGuard ran successfully
      // and the Supabase user has an email.
      throw new UnauthorizedException(
        'User not authenticated or email missing from token.',
      );
    }

    // Fetch the employee from your database using the email from the Supabase token
    const employee = await this.prisma.employee.findUnique({
      where: { email: supabaseUser.email },
    });

    if (!employee || !employee.role) {
      throw new ForbiddenException(
        'User not found in our system or role not assigned.',
      );
    }

    const hasRequiredRole = requiredRoles.some(
      (role) => employee.role === role,
    );

    if (!hasRequiredRole) {
      throw new ForbiddenException(
        'You do not have the required role to access this resource.',
      );
    }

    // Optional: You might want to replace request.user with your internal employee object
    // (request as any).user = employee; // Be mindful of typing if you do this

    return true;
  }
}

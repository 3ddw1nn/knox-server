import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { Request } from 'express';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AuthenticatedRequest extends Request {
  user?: SupabaseUser;
}

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private readonly supabaseService: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const supabase = this.supabaseService.getClient();
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser(token);

      if (error || !user) {
        // console.error('Supabase auth getUser error:', error); // Optional: more specific logging for errors
        throw new UnauthorizedException('Invalid token or user not found');
      }

      console.log(
        `Supabase user authenticated in backend: ID - ${user.id}, Email - ${user.email}`,
      );
      request.user = user;
    } catch (e) {
      // console.error('Authentication guard error:', e);
      if (e instanceof UnauthorizedException) {
        throw e;
      }
      // Check if e is an error instance to safely access message
      if (e instanceof Error) {
        throw new UnauthorizedException(e.message);
      }
      throw new UnauthorizedException(
        'Authentication failed due to an unknown error',
      );
    }
    return true;
  }

  private extractTokenFromHeader(
    request: AuthenticatedRequest,
  ): string | undefined {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return undefined;
    }
    const [type, token] = authHeader.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

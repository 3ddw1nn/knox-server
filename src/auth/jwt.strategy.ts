import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

// Define the expected structure of the JWT payload from Supabase
export interface SupabaseJwtPayload {
  sub: string; // Supabase User ID
  email: string;
  aud: string; // Should be 'authenticated'
  exp: number;

  raw_user_meta_data?: {
    full_name?: string;
    role?: string; // This is the custom role we expect

    [key: string]: any;
  };

  user_metadata?: {
    // Older tokens might have this instead of raw_user_meta_data
    full_name?: string;
    role?: string;

    [key: string]: any;
  };
  role?: string; // This is the Supabase internal role, e.g., 'authenticated'
  // Add other fields if necessary
}

// Define the user object that will be attached to the request
export interface AuthenticatedUser {
  supabaseUserId: string;
  email: string;
  jwtRole?: string; // The role from raw_user_meta_data or user_metadata
  fullName?: string;
  originalPayload: Record<string, any>; // More specific than any
}

// A simplified payload structure for now to avoid deep type issues with linter
interface JwtPayload {
  sub: string;
  email: string;
  aud?: string;
  app_metadata?: { role?: string; [key: string]: any };
  user_metadata?: { full_name?: string; [key: string]: any };
  role?: string;
  [key: string]: any;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(configService: ConfigService) {
    const secret = configService.get<string>('SUPABASE_JWT_SECRET');
    if (!secret) {
      console.error(
        'FATAL: SUPABASE_JWT_SECRET is not defined. JWT strategy cannot be initialized.',
      );
      throw new InternalServerErrorException(
        'JWT secret is not configured for the application.',
      );
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
    this.logger.log('JwtStrategy initialized successfully.');
  }

  validate(payload: JwtPayload): AuthenticatedUser {
    // this.logger.debug('JWT Payload received for validation:', payload);

    if (payload.aud && payload.aud !== 'authenticated') {
      this.logger.warn(
        `Invalid JWT: aud claim is not 'authenticated'. Received: ${payload.aud}`,
      );
      throw new UnauthorizedException('Invalid token: audience mismatch.');
    }

    const appMetadata = payload.app_metadata || {};
    const userMetadata = payload.user_metadata || {};

    const authenticatedUser: AuthenticatedUser = {
      supabaseUserId: payload.sub,
      email: payload.email,
      jwtRole: appMetadata.role || payload.role,
      fullName: userMetadata.full_name,
      originalPayload: payload,
    };

    // this.logger.debug('Authenticated user object prepared:', authenticatedUser);
    return authenticatedUser;
  }
}

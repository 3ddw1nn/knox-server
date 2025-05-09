import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard'; // Assuming jwt-auth.guard.ts will be in the same folder
import { EnsureProfileDto } from './dto/ensure-profile.dto';
import { AuthenticatedUser } from './jwt.strategy'; // For Request.user typing
import { UserProfileResponse } from '../users/interfaces/user-profile.interface';

@Controller('auth') // Base path for this controller will be /api/auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('ensure-profile')
  @HttpCode(HttpStatus.OK) // Return 200 OK on success, even if creating a new profile
  async ensureProfile(
    @Request() req: { user: AuthenticatedUser }, // Extract JWT-decoded user
    @Body() ensureProfileDto: EnsureProfileDto,
  ): Promise<UserProfileResponse> {
    return this.authService.ensureProfile(req.user, ensureProfileDto);
  }
}

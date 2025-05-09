import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  Logger,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/user.decorator';
import { AuthenticatedUser } from '../auth/jwt.strategy';
import { UserProfileResponse } from './interfaces/user-profile.interface';
import { RegisterProfileDto } from './dto/register-profile.dto';

@Controller('users') // Path will be /api/users if global prefix 'api' is set
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMyProfile(
    @Request() req: { user: AuthenticatedUser },
  ): Promise<UserProfileResponse> {
    const profile = await this.usersService.getMyProfile(req.user);
    // getMyProfile now throws NotFoundException if profile doesn't exist,
    // so NestJS will automatically handle sending a 404 response.
    return profile;
  }

  @UseGuards(JwtAuthGuard)
  @Post('register-profile')
  @HttpCode(HttpStatus.CREATED) // Or HttpStatus.OK if returning existing, but Conflict is handled
  async registerNewProfile(
    @GetUser() user: AuthenticatedUser,
    @Body() registerProfileDto: RegisterProfileDto, // DTO has { email: string }
  ): Promise<UserProfileResponse> {
    this.logger.log(
      `Attempting to register profile for user: ${user.email}, DTO email: ${registerProfileDto.email}`,
    );
    // The service primarily uses user.email from JWT for security.
    // The DTO's email can be used for an additional check if desired, but not strictly necessary here.
    return this.usersService.registerProfile(user);
  }
}

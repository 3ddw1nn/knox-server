import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
// No need to import AuthModule typically, guards handle auth

@Module({
  imports: [
    PrismaModule, // PrismaModule is Global, but explicit import is fine too
    // AuthModule, // Usually not needed here
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

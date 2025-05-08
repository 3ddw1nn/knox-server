import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
// PrismaModule is global, so no need to import it here explicitly for PrismaService injection
// unless you prefer explicit imports for clarity.

@Module({
  providers: [UsersService],
  exports: [UsersService], // Export UsersService so AuthModule can use it
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
// Import other feature modules here as they are created
import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { VendorsModule } from './vendors/vendors.module';
// import { SoftwareModule } from './software/software.module';
// import { LicensesModule } from './licenses/licenses.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // For environment variables
    PrismaModule,
    AuthModule,
    // UsersModule,
    // VendorsModule,
    // SoftwareModule,
    // LicensesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

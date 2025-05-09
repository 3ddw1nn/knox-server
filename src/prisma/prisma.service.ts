import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// Adjust the import path based on your prisma generate output setting
// If output is '../generated/prisma', this path should be correct from src/prisma/
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    // Optional: Log connection or perform initial checks
    try {
      await this.$connect();
      console.log('Successfully connected to the database via Prisma');
    } catch (error) {
      console.error('Failed to connect to the database via Prisma', error);
      // Depending on your app's needs, you might want to throw or exit here
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

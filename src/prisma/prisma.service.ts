import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
// Adjust the import path based on your prisma generate output setting
// If output is '../generated/prisma', this path should be correct from src/prisma/
import { PrismaClient } from '../../generated/prisma';

interface PrismaClientOptions {
  log?: Array<'query' | 'info' | 'warn' | 'error'>;
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const options: PrismaClientOptions = {
      log:
        process.env.NODE_ENV === 'development'
          ? ['query', 'error', 'warn']
          : ['error'],
    };
    super(options);
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('Successfully connected to the database via Prisma');
    } catch (error) {
      this.logger.error('Failed to connect to the database via Prisma', error);
      // In production, we might want to exit the process if we can't connect to the database
      if (process.env.NODE_ENV === 'production') {
        process.exit(1);
      }
      throw error;
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect();
      this.logger.log('Successfully disconnected from the database');
    } catch (error) {
      this.logger.error('Error disconnecting from the database', error);
      throw error;
    }
  }
}

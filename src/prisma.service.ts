import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

interface PrismaClientWithLifecycle extends PrismaClient {
  $connect(): Promise<void>;
  $disconnect(): Promise<void>;
}

interface PrismaClientOptions {
  log?: Array<'query' | 'info' | 'warn' | 'error'>;
}

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly prisma: PrismaClientWithLifecycle;

  constructor() {
    const options: PrismaClientOptions = {
      log:
        process.env.NODE_ENV === 'development'
          ? ['query', 'error', 'warn']
          : ['error'],
    };
    const client = new (PrismaClient as unknown as {
      new (options: PrismaClientOptions): PrismaClientWithLifecycle;
    })(options);
    this.prisma = client;
  }

  async onModuleInit(): Promise<void> {
    await this.prisma.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.prisma.$disconnect();
  }

  get client(): PrismaClient {
    return this.prisma;
  }
}

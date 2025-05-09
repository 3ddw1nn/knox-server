import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Make PrismaService available globally without needing to import PrismaModule everywhere
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export PrismaService so modules importing PrismaModule can use it (if not Global)
})
export class PrismaModule {}

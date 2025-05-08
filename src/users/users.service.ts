import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Employee } from '../../generated/prisma'; // Adjust if your Prisma client output is different
// import * as bcrypt from 'bcrypt'; // Will be needed for password hashing

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Employee | null> {
    return this.prisma.employee.findUnique({ where: { email } });
  }

  async findById(id: string): Promise<Employee | null> {
    const user = await this.prisma.employee.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  // We will add methods for creating users, etc., later if needed directly
  // For now, auth will primarily use findByEmail.
}

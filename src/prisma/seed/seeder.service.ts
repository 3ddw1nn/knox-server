import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  generateMockAvailableLicenses,
  generateMockActivationHistory,
} from '../seed/mock-data';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeederService {
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    try {
      // Generate dynamic mock data
      const mockAvailableLicenses = generateMockAvailableLicenses();
      const mockActivationHistory = generateMockActivationHistory(
        mockAvailableLicenses,
      );

      // Upsert two employees
      const john = await this.prisma.employee.upsert({
        where: { email: 'john.doe@seed.com' },
        update: {},
        create: {
          id: faker.string.uuid(),
          name: 'John Doe',
          email: 'john.doe@seed.com',
          role: 'EMPLOYEE',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      const jane = await this.prisma.employee.upsert({
        where: { email: 'jane.doe@seed.com' },
        update: {},
        create: {
          id: faker.string.uuid(),
          name: 'Jane Doe',
          email: 'jane.doe@seed.com',
          role: 'EMPLOYEE',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      const employees = [john, jane];

      // Insert vendors and their licenses
      for (const vendorData of mockAvailableLicenses) {
        console.log('Seeding vendor:', vendorData.vendor.name);
        const vendor = await this.prisma.vendor.upsert({
          where: { id: vendorData.vendor.id },
          update: {},
          create: {
            id: vendorData.vendor.id,
            name: vendorData.vendor.name,
            contactEmail: vendorData.vendor.contactEmail,
          },
        });

        for (const license of vendorData.licenses) {
          console.log('  Seeding software:', license.software.name);
          const software = await this.prisma.software.upsert({
            where: { id: license.software.id },
            update: {},
            create: {
              id: license.software.id,
              name: license.software.name,
              vendorId: vendor.id,
              pricingModel: license.software.pricingModel,
              monthlyRate: license.software.monthlyRate,
            },
          });

          // Insert available license keys
          for (const keyId of license.availableLicenseIds) {
            console.log('    Seeding license key:', keyId);
            await this.prisma.licenseKey.upsert({
              where: { id: keyId },
              update: {},
              create: {
                id: keyId,
                key: `MOCK-KEY-${keyId}`,
                status: 'AVAILABLE',
                vendorId: vendor.id,
                softwareId: software.id,
              },
            });
          }
        }
      }

      // Insert activation history
      for (const activation of mockActivationHistory) {
        console.log('Seeding activation:', activation.id);
        const vendor = await this.prisma.vendor.findFirst({
          where: { name: activation.vendorName },
        });
        if (vendor) {
          // Find an existing license key for this vendor and software
          const licenseKey = await this.prisma.licenseKey.findFirst({
            where: {
              vendorId: vendor.id,
              softwareId: activation.softwareId,
              status: 'AVAILABLE',
            },
          });
          if (licenseKey) {
            // Pick a random employee for this activation
            const employee =
              employees[Math.floor(Math.random() * employees.length)];
            // Upsert the activation record
            await this.prisma.activation.upsert({
              where: { licenseKeyId: licenseKey.id },
              update: {},
              create: {
                id: faker.string.uuid(),
                licenseKeyId: licenseKey.id,
                activatedById: employee.id,
                softwareId: activation.softwareId,
                vendorId: vendor.id,
                activatedAt: activation.activatedAt,
                createdAt: activation.activatedAt,
              },
            });
            // Update the license key status to ACTIVATED
            await this.prisma.licenseKey.update({
              where: { id: licenseKey.id },
              data: {
                status: 'ACTIVATED',
                activatedAt: activation.activatedAt,
                activatedById: employee.id,
              },
            });
          }
        }
      }

      console.log('Database seeding completed successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
      throw error;
    }
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  mockAvailableLicenses,
  mockActivationHistory,
} from '../seed/mock-data';

@Injectable()
export class SeederService {
  constructor(private readonly prisma: PrismaService) {}

  async seed() {
    try {
      // Insert vendors and their licenses
      for (const vendorData of mockAvailableLicenses) {
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
        const vendor = await this.prisma.vendor.findFirst({
          where: { name: activation.vendorName },
        });

        if (vendor) {
          await this.prisma.licenseKey.upsert({
            where: { id: activation.id },
            update: {},
            create: {
              id: activation.id,
              key: `MOCK-KEY-${activation.id}`,
              status: 'ACTIVATED',
              vendorId: vendor.id,
              softwareId: activation.softwareId,
              activatedAt: activation.activatedAt,
            },
          });
        }
      }

      console.log('Database seeding completed successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
      throw error;
    }
  }
}

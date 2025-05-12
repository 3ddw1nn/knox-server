import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VendorService {
  constructor(private readonly prisma: PrismaService) {}

  async getVendors() {
    return this.prisma.vendor.findMany();
  }

  async getVendor(id: string) {
    return this.prisma.vendor.findUnique({
      where: { id },
    });
  }

  async getVendorDashboard(id: string) {
    const vendor = await this.prisma.vendor.findUnique({
      where: { id },
      include: {
        activations: {
          select: {
            id: true,
            createdAt: true,
          },
        },
        licenseKeys: {
          select: {
            id: true,
            status: true,
            createdAt: true,
          },
        },
        software: {
          select: {
            pricingModel: true,
            pricePerUse: true,
          },
        },
      },
    });

    if (!vendor) {
      throw new NotFoundException('Vendor not found');
    }

    // only return license keys with status 'AVAILABLE'
    const availableLicenseKeys = vendor.licenseKeys.filter(
      (licenseKey) => licenseKey.status === 'AVAILABLE',
    );

    // calculate expected revenue for the month
    // need to multiply the number of available license keys by the price per use

    return {
      name: vendor.name,
      licenseKeys: availableLicenseKeys.length,
      activations: vendor.activations.length,
    };
  }
}

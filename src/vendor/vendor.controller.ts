import { Controller, Get, Param } from '@nestjs/common';
import { VendorService } from './vendor.service';
@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get()
  async getVendors() {
    return await this.vendorService.getVendors();
  }

  @Get(':id/dashboard')
  async getVendorDashboard(@Param('id') id: string) {
    // get userId from session

    return await this.vendorService.getVendorDashboard(id);
  }
}

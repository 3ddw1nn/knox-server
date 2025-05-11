import { faker } from '@faker-js/faker';
import { PricingModel } from '../../../generated/prisma';

// --- Quick control variables ---
export const NUM_VENDORS = 5;
export const MIN_SOFTWARE_PER_VENDOR = 1;
export const MAX_SOFTWARE_PER_VENDOR = 3;
export const MIN_LICENSES_PER_SOFTWARE = 1;
export const MAX_LICENSES_PER_SOFTWARE = 10;
export const NUM_ACTIVATIONS = 64;

export interface Vendor {
  id: string;
  name: string;
  contactEmail: string;
}

export interface Software {
  id: string;
  name: string;
  pricingModel: PricingModel;
  monthlyRate: number;
}

export interface License {
  software: Software;
  availableLicenseIds: string[];
}

export interface VendorData {
  vendor: Vendor;
  licenses: License[];
}

export interface ActivationHistory {
  id: string;
  vendorName: string;
  softwareId: string;
  activatedAt: Date;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: 'EMPLOYEE' | 'ADMIN' | 'VENDOR';
  createdAt: Date;
  updatedAt: Date;
}

const pricingModels = [
  PricingModel.FLAT,
  PricingModel.PER_USE,
  PricingModel.MONTHLY_SUBSCRIPTION,
];

export function generateMockAvailableLicenses(): VendorData[] {
  return Array.from({ length: NUM_VENDORS }, () => {
    const vendorId = faker.string.uuid();
    const vendorName = faker.company.name();
    const vendor: Vendor = {
      id: vendorId,
      name: vendorName,
      contactEmail: faker.internet.email(),
    };
    const numSoftware = faker.number.int({
      min: MIN_SOFTWARE_PER_VENDOR,
      max: MAX_SOFTWARE_PER_VENDOR,
    });
    const licenses: License[] = Array.from({ length: numSoftware }, () => {
      const softwareId = faker.string.uuid();
      const software: Software = {
        id: softwareId,
        name: faker.commerce.productName(),
        pricingModel: faker.helpers.arrayElement(pricingModels) as PricingModel,
        monthlyRate: faker.number.float({ min: 5, max: 100 }),
      };
      const numLicenses = faker.number.int({
        min: MIN_LICENSES_PER_SOFTWARE,
        max: MAX_LICENSES_PER_SOFTWARE,
      });
      const availableLicenseIds = Array.from({ length: numLicenses }, () =>
        faker.string.uuid(),
      );
      return { software, availableLicenseIds };
    });
    return { vendor, licenses };
  });
}

export function generateMockActivationHistory(
  vendorData: VendorData[],
): ActivationHistory[] {
  // Flatten all software for all vendors
  const allSoftware = vendorData.flatMap((vd) =>
    vd.licenses.map((lic) => ({
      vendorName: vd.vendor.name,
      softwareId: lic.software.id,
    })),
  );
  return Array.from({ length: NUM_ACTIVATIONS }, () => {
    const sw = faker.helpers.arrayElement(allSoftware);
    return {
      id: faker.string.uuid(),
      vendorName: sw.vendorName,
      softwareId: sw.softwareId,
      activatedAt: faker.date.recent({ days: 90 }),
    };
  });
}

// export function generateMockEmployees(num: number): Employee[] {
//   return Array.from({ length: num }, () => ({
//     id: faker.string.uuid(),
//     name: faker.person.fullName(),
//     email: faker.internet.email(),
//     role: faker.helpers.arrayElement(['EMPLOYEE', 'ADMIN', 'VENDOR']) as
//       | 'EMPLOYEE'
//       | 'ADMIN'
//       | 'VENDOR',
//     createdAt: faker.date.past(),
//     updatedAt: faker.date.recent(),
//   }));
// }

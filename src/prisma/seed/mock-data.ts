import { PricingModel } from '../../../generated/prisma';

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

export const mockAvailableLicenses: VendorData[] = [
  {
    vendor: {
      id: 'vendor-1',
      name: 'Microsoft',
      contactEmail: 'contact@microsoft.com',
    },
    licenses: [
      {
        software: {
          id: 'ms-office',
          name: 'Microsoft Office',
          pricingModel: PricingModel.MONTHLY_SUBSCRIPTION as PricingModel,
          monthlyRate: 12.99,
        },
        availableLicenseIds: ['key-1', 'key-2', 'key-3'],
      },
    ],
  },
  {
    vendor: {
      id: 'vendor-2',
      name: 'Adobe',
      contactEmail: 'contact@adobe.com',
    },
    licenses: [
      {
        software: {
          id: 'adobe-creative-cloud',
          name: 'Adobe Creative Cloud',
          pricingModel: PricingModel.MONTHLY_SUBSCRIPTION as PricingModel,
          monthlyRate: 52.99,
        },
        availableLicenseIds: ['key-4', 'key-5'],
      },
    ],
  },
];

export const mockActivationHistory: ActivationHistory[] = [
  {
    id: 'key-6',
    vendorName: 'Microsoft',
    softwareId: 'ms-office',
    activatedAt: new Date('2024-01-01'),
  },
  {
    id: 'key-7',
    vendorName: 'Adobe',
    softwareId: 'adobe-creative-cloud',
    activatedAt: new Date('2024-01-15'),
  },
];

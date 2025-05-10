import { PricingModel } from "@/types/enums";
import type {
  ActivationHistoryResponse,
  AvailableLicensesByVendor,
  LicenseKeySummary,
} from "../types/licenses";

// Mock data for activation history
export const mockActivationHistory: ActivationHistoryResponse = [
  {
    id: "bs-lic-prev-1",
    softwareId: "sw-1",
    softwareName: "Beat Saber Clone",
    vendorName: "VR Fun Inc.",
    activatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    activatedByEmployeeName: "Alice Employee",
  },
  {
    id: "mr-lic-prev-1",
    softwareId: "sw-3",
    softwareName: "VR Meeting Room Pro",
    vendorName: "Productivity Tools Ltd.",
    activatedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(), // 26 hours ago
    activatedByEmployeeName: "Bob Employee",
  },
  {
    id: "se-lic-prev-1",
    softwareId: "sw-2",
    softwareName: "Space Explorer VR",
    vendorName: "VR Fun Inc.",
    activatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    activatedByEmployeeName: "Alice Employee",
  },
  // Add more mock history items as needed
];

export const mockAvailableLicenses: AvailableLicensesByVendor = [
  {
    vendor: {
      id: "vendor-1",
      name: "VR Fun Inc.",
      contactEmail: "contact@vrfun.dev",
    },
    licenses: [
      {
        software: {
          id: "sw-1",
          name: "Beat Saber Clone",
          description: "A fast-paced VR rhythm game.",
          vendor: {
            id: "vendor-1",
            name: "VR Fun Inc.",
            contactEmail: "contact@vrfun.dev",
          },
          pricingModel: PricingModel.FLAT,
        },
        availableCount: 15,
        availableLicenseIds: Array.from(
          { length: 15 },
          (_, i) => `bs-lic-${i + 1}`,
        ),
      },
      {
        software: {
          id: "sw-2",
          name: "Space Explorer VR",
          description: "Explore distant galaxies in VR.",
          vendor: {
            id: "vendor-1",
            name: "VR Fun Inc.",
            contactEmail: "contact@vrfun.dev",
          },
          pricingModel: PricingModel.MONTHLY_SUBSCRIPTION,
          monthlyRate: 29.99,
        },
        availableCount: 7,
        availableLicenseIds: Array.from(
          { length: 7 },
          (_, i) => `se-lic-${i + 1}`,
        ),
      },
    ],
  },
  {
    vendor: {
      id: "vendor-2",
      name: "Productivity Tools Ltd.",
      contactEmail: "sales@prodtools.com",
    },
    licenses: [
      {
        software: {
          id: "sw-3",
          name: "VR Meeting Room Pro",
          description: "Collaborative virtual meeting spaces.",
          vendor: {
            id: "vendor-2",
            name: "Productivity Tools Ltd.",
            contactEmail: "sales@prodtools.com",
          },
          pricingModel: PricingModel.MONTHLY_SUBSCRIPTION,
          monthlyRate: 49.99,
        },
        availableCount: 22,
        availableLicenseIds: Array.from(
          { length: 22 },
          (_, i) => `mr-lic-${i + 1}`,
        ),
      },
      {
        software: {
          id: "sw-4",
          name: "3D Modeler VR",
          description: "Create 3D models in an immersive environment.",
          vendor: {
            id: "vendor-2",
            name: "Productivity Tools Ltd.",
            contactEmail: "sales@prodtools.com",
          },
          pricingModel: PricingModel.FLAT,
        },
        availableCount: 0,
        availableLicenseIds: [],
      },
    ],
  },
];

const ALL_MOCK_LICENSES: LicenseKeySummary[] = [
  // Populate with more diverse data, ensuring various statuses and softwareIds
  // Sample Data (expand this significantly for realistic testing)
  { id: "lk-001", status: "activated", softwareId: "sw-001" },
  { id: "lk-002", status: "available", softwareId: "sw-001" },
  { id: "lk-003", status: "activated", softwareId: "sw-002" },
  { id: "lk-004", status: "canceled", softwareId: "sw-001" },
  { id: "lk-005", status: "activated", softwareId: "sw-003" },
  { id: "lk-006", status: "activated", softwareId: "sw-001" },
  { id: "lk-007", status: "available", softwareId: "sw-002" },
  { id: "lk-008", status: "activated", softwareId: "sw-004" },
  { id: "lk-009", status: "activated", softwareId: "sw-002" },
  { id: "lk-010", status: "available", softwareId: "sw-003" },
  // Add at least 20-30 more entries with varied software IDs and statuses
  { id: "lk-011", status: "activated", softwareId: "sw-005" },
  { id: "lk-012", status: "canceled", softwareId: "sw-005" },
  { id: "lk-013", status: "available", softwareId: "sw-006" },
  { id: "lk-014", status: "activated", softwareId: "sw-006" },
  { id: "lk-015", status: "activated", softwareId: "sw-007" },
  { id: "lk-016", status: "activated", softwareId: "sw-001" },
  { id: "lk-017", status: "available", softwareId: "sw-008" },
  { id: "lk-018", status: "activated", softwareId: "sw-008" },
  { id: "lk-019", status: "canceled", softwareId: "sw-002" },
  { id: "lk-020", status: "activated", softwareId: "sw-009" },
  { id: "lk-021", status: "available", softwareId: "sw-009" },
  { id: "lk-022", status: "activated", softwareId: "sw-010" },
  { id: "lk-023", status: "activated", softwareId: "sw-003" },
  { id: "lk-024", status: "available", softwareId: "sw-004" },
  { id: "lk-025", status: "activated", softwareId: "sw-005" },
  { id: "lk-026", status: "canceled", softwareId: "sw-007" },
  { id: "lk-027", status: "activated", softwareId: "sw-010" },
  { id: "lk-028", status: "available", softwareId: "sw-001" },
  { id: "lk-029", status: "activated", softwareId: "sw-008" },
  { id: "lk-030", status: "activated", softwareId: "sw-009" },
];

export const fetchAllLicenseSummaries = async (): Promise<
  LicenseKeySummary[]
> => {
  console.log("API CALL: fetchAllLicenseSummaries (mock)");
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API delay
  return Promise.resolve([...ALL_MOCK_LICENSES]); // Return a copy
};

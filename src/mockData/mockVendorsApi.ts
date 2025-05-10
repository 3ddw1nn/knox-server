import type { OwedAmountResponse } from "../types/vendors";

// Mock data simulating the response from GET /vendors/owed
const mockOwedAmounts: OwedAmountResponse = [
  {
    vendorId: "vendor-1",
    vendorName: "VR Fun Inc.", // Matching names from license mock for consistency
    totalOwed: 150.75, // Example amount
  },
  {
    vendorId: "vendor-2",
    vendorName: "Productivity Tools Ltd.",
    totalOwed: 890.0, // Example amount
  },
  // Add more vendors if needed, or handle cases where a vendor has 0 owed
];

// Mock API function
export const fetchOwedAmountByVendor =
  async (): Promise<OwedAmountResponse> => {
    console.log("Mock API: Fetching owed amounts by vendor...");
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Simulate potential error
    // if (Math.random() > 0.9) {
    //   console.error('Mock API: Failed to fetch owed amounts');
    //   throw new Error('Failed to fetch owed amounts');
    // }

    console.log("Mock API: Successfully fetched owed amounts");
    return mockOwedAmounts;
  };

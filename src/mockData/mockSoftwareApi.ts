import type {
  SoftwareDetailsResponse,
  ActivatedKeyInfo,
  ActivationRecord,
} from "../types/licenses";
import {
  mockAvailableLicenses,
  mockActivationHistory,
} from "./mockLicensesApi"; // Import shared mock data

// Mock API: Fetch details and counts for a specific software
export const fetchSoftwareDetails = async (
  softwareId: string
): Promise<SoftwareDetailsResponse> => {
  console.log(`Mock API: Fetching details for software ID: ${softwareId}...`);
  await new Promise((resolve) => setTimeout(resolve, 700));

  let foundSoftware: SoftwareDetailsResponse["software"] | null = null;
  let availableCount = 0;

  for (const vendorData of mockAvailableLicenses) {
    const foundLicInfo = vendorData.licenses.find(
      (lic) => lic.software.id === softwareId
    );
    if (foundLicInfo) {
      foundSoftware = foundLicInfo.software;
      availableCount = foundLicInfo.availableCount;
      break;
    }
  }

  if (!foundSoftware) {
    throw new Error(`Software with ID ${softwareId} not found.`);
  }

  // Mock counts: Calculate activated based on history, total is harder to mock accurately
  const activatedCount = mockActivationHistory.filter(
    (rec) => rec.softwareId === softwareId
  ).length;
  // Mock total = available + activated (simplification)
  const totalCount = availableCount + activatedCount;

  return {
    software: foundSoftware,
    counts: {
      total: totalCount,
      available: availableCount,
      activated: activatedCount,
    },
  };
};

// Mock API: Fetch activated keys for a specific software
export const fetchActivatedKeys = async (
  softwareId: string
): Promise<ActivatedKeyInfo[]> => {
  console.log(
    `Mock API: Fetching activated keys for software ID: ${softwareId}...`
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Filter global history to find activations for this software
  const relevantHistory = mockActivationHistory.filter(
    (rec) => rec.softwareId === softwareId
  );

  // Create mock keys based on the history IDs
  const activatedKeys: ActivatedKeyInfo[] = relevantHistory.map((rec) => ({
    id: rec.id,
    // IMPORTANT: In a real app, NEVER generate keys like this.
    // This mock key is just illustrative.
    key: `MOCK-KEY-${rec.id.substring(0, 8).toUpperCase()}`,
    activatedAt: rec.activatedAt,
    activatedByEmployeeName: rec.activatedByEmployeeName,
  }));

  return activatedKeys;
};

// Mock API: Fetch activation history for a specific software
export const fetchSoftwareActivationHistory = async (
  softwareId: string
): Promise<ActivationRecord[]> => {
  console.log(
    `Mock API: Fetching activation history for software ID: ${softwareId}...`
  );
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Filter global history
  const filteredHistory = mockActivationHistory.filter(
    (rec) => rec.softwareId === softwareId
  );

  return filteredHistory;
};

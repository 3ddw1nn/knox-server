// import { EmployeeRole } from '../../generated/prisma';

// Defines the standard shape for user profile data returned by the API
export interface UserProfileResponse {
  id: string; // Local database ID (Employee or Vendor)
  email: string; // Primary contact email
  name: string; // User or Vendor name
  role: string; // e.g., 'employee', 'vendor', 'admin'
  supabaseUserId: string | null; // Linked Supabase Auth User ID
  companyName?: string; // Optional: Specific to Employee
  // Add other common fields if necessary
}

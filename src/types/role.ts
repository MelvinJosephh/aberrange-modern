export type RoleName = "client" | "va" | "admin" | "superadmin"; // Enforce valid role names
export interface Role {
  id: number;
  name: RoleName; // Use RoleName for type safety
  permissions: string[]; // e.g., ["view_requests", "assign_tasks"]
}
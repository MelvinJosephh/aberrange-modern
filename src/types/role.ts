// src/types/user.ts
export interface User {
    id: number;
    name: string;
    email: string;
    role: string; // e.g., "client", "va", "admin", "superadmin"
    status: string; // e.g., "active", "inactive"
  }
  
  // src/types/role.ts
  export interface Role {
    id: number;
    name: string; // e.g., "client", "admin", "support_admin"
    permissions: string[]; // e.g., ["view_requests", "assign_tasks"]
  }
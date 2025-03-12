import { RoleName } from "./role"; 

export interface User {
    id: string;
    name: string;
    email: string;
    role: RoleName; // Restrict to valid role names
    status: string; // e.g., "active", "inactive"
  }
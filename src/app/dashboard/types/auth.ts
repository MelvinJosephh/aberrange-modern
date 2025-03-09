// app/dashboard/types.ts
export type Role = "client" | "va" | "admin" | "superadmin";

export interface UserData {
  id: string;
  role: Role;
  email: string | null;
  status: string | null;
  name: string | null;
}
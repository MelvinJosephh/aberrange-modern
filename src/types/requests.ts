export interface Request {
    id: number;
    type: string; // e.g., "Consultation", "VA Request", "Quote"
    details: string; // e.g., "Mar 15, 2025" or "Tech Support"
    status: string; // e.g., "Pending", "Scheduled", "Sent"
    client?: string; // Optional, for admin dashboard
    date?: string; // Optional, for admin dashboard (e.g., submission date)
  }
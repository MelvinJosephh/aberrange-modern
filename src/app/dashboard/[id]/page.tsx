// src/app/dashboard/[id]/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Section",
  description: "Dashboard section for a specific ID",
};

// Make the component async to handle params correctly
export default async function DashboardSection({ params }: { params: Promise<{ id: string }> }) {
  // Await the params object to resolve the id
  const { id } = await params;

  return (
    <div>
      <h1>Dashboard Section: {id}</h1>
      <p>Content for {id} section</p>
    </div>
  );
}
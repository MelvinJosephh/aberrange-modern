"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuthFetch } from "@/hooks/useAuthFetch"; // Import the new hook
import { format } from "date-fns";
import { toast } from "sonner";

interface Consultation {
  id: string;
  name: string;
  email: string;
  company?: string;
  message?: string;
  consultationDate: string;
  status: "pending" | "approved" | "rejected";
}

const Consultations = () => {
  const { fetch: authFetch } = useAuthFetch(); // Destructure fetch
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const data = await authFetch<Consultation[]>("api/consultations");
        setConsultations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch consultations");
      } finally {
        setLoading(false);
      }
    };
    fetchConsultations();
  }, [authFetch]);

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      await authFetch(`api/consultations/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setConsultations((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status } : c))
      );
      toast.success(`Consultation ${status} successfully`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update status");
    }
  };

  if (loading) return <p>Loading consultations...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Consultation Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consultations.map((consultation) => (
            <TableRow key={consultation.id}>
              <TableCell>{consultation.name}</TableCell>
              <TableCell>{consultation.email}</TableCell>
              <TableCell>{consultation.company || "N/A"}</TableCell>
              <TableCell>
  {consultation.consultationDate && !isNaN(new Date(consultation.consultationDate).getTime())
    ? format(new Date(consultation.consultationDate), "PPP")
    : "Invalid Date"}
</TableCell>

              <TableCell>{consultation.status}</TableCell>
              <TableCell>
                {consultation.status === "pending" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mr-2"
                      onClick={() => updateStatus(consultation.id, "approved")}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(consultation.id, "rejected")}
                    >
                      Reject
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Consultations;
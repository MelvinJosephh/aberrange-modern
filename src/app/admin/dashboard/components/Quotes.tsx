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

interface Quote {
  id: string;
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  projectOverView: string;
  date?: string;
  status: "pending" | "approved" | "rejected";
}

const Quotes = () => {
  const { fetch: authFetch } = useAuthFetch(); // Destructure fetch
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const data = await authFetch<Quote[]>("api/quotes");
        setQuotes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch quotes");
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, [authFetch]);

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      await authFetch(`api/quotes/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setQuotes((prev) =>
        prev.map((q) => (q.id === id ? { ...q, status } : q))
      );
      toast.success(`Quote ${status} successfully`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to update status");
    }
  };

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Quote Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Services</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotes.map((quote) => (
            <TableRow key={quote.id}>
              <TableCell>{quote.name}</TableCell>
              <TableCell>{quote.email}</TableCell>
              <TableCell>{quote.service}</TableCell>
              <TableCell>{quote.budget || "N/A"}</TableCell>
              <TableCell>
                {quote.date ? format(new Date(quote.date), "PPP") : "N/A"}
              </TableCell>
              <TableCell>{quote.status}</TableCell>
              <TableCell>
                {quote.status === "pending" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mr-2"
                      onClick={() => updateStatus(quote.id, "approved")}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(quote.id, "rejected")}
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

export default Quotes;
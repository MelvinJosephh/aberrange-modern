// src/app/admin/dashboard/components/AdminSidebar.tsx
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Calendar, Users, FileText, BarChart} from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm h-full flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/admin/dashboard?view=dashboard">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/admin/dashboard?view=consultations">
              <Calendar className="mr-2 h-4 w-4" /> Consultations
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/admin/dashboard?view=requestTable">
              <Users className="mr-2 h-4 w-4" /> VA Requests
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/admin/dashboard?view=quotes">
              <FileText className="mr-2 h-4 w-4" /> Quotes
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/admin/dashboard?view=analytics">
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </Link>
          </Button>
        </nav>
      </ScrollArea>
      {/* Logout moved to AdminHeader */}
    </aside>
  );
};

export default AdminSidebar;
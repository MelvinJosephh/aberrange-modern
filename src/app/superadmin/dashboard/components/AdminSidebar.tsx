// src/app/superadmin/dashboard/components/AdminSidebar.tsx
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Users, Shield, BarChart } from "lucide-react";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold">Superadmin</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/superadmin/dashboard?view=dashboard">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/superadmin/dashboard?view=users">
              <Users className="mr-2 h-4 w-4" /> Users
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/superadmin/dashboard?view=roles">
              <Shield className="mr-2 h-4 w-4" /> Roles
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/superadmin/dashboard?view=analytics">
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </Link>
          </Button>
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default AdminSidebar;
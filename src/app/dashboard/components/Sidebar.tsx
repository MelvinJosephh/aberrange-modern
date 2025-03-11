import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Calendar, Users, FileText, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold">Aberrange</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/dashboard"><Home className="mr-2 h-4 w-4" /> Dashboard</a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/dashboard/consultations"><Calendar className="mr-2 h-4 w-4" /> Consultations</a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/dashboard/va-requests"><Users className="mr-2 h-4 w-4" /> VA Requests</a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="/dashboard/quotes"><FileText className="mr-2 h-4 w-4" /> Quotes</a>
          </Button>
          <Button variant="ghost" className="w-full justify-start mt-4 text-red-600" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
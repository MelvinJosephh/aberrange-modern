import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Calendar, Users, FileText, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  onLinkClick?: () => void; // For closing mobile sidebar
}

export default function Sidebar({ onLinkClick }: SidebarProps) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/dashboard/consultations", icon: Calendar, label: "Consultations" },
    { href: "/dashboard/va-requests", icon: Users, label: "VA Requests" },
    { href: "/dashboard/quotes", icon: FileText, label: "Quotes" },
  ];

  return (
    <aside className="w-full h-full p-4">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold">Aberrange</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start"
              asChild
              onClick={onLinkClick}
            >
              <a href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </a>
            </Button>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start mt-4 text-red-600"
            onClick={() => {
              handleLogout();
              onLinkClick?.();
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </nav>
      </ScrollArea>
    </aside>
  );
}
// src/app/client/dashboard/components/ClientSidebar.tsx
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Calendar, Users, FileText } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  onLinkClick?: () => void; // For closing mobile sidebar
}

export default function ClientSidebar({ onLinkClick }: SidebarProps) {
  const navItems = [
    { href: "/client/dashboard?view=dashboard", icon: Home, label: "Dashboard" },
    { href: "/client/dashboard?view=consultations", icon: Calendar, label: "Consultations" },
    { href: "/client/dashboard?view=va-requests", icon: Users, label: "VA Requests" },
    { href: "/client/dashboard?view=quotes", icon: FileText, label: "Quotes" },
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
              onClick={onLinkClick}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

export default function UserProfile() {
//   const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    console.log("User signed out");
    router.push("/"); // Redirect to home or login page
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-10 h-10 flex items-center justify-center rounded-full">
          {/* Replacing Avatar with User Icon */}
          <User className="w-6 h-6 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
          <User className="mr-2 h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
          <Settings className="mr-2 h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth"; // Import useAuth

const Header = () => {
  const router = useRouter();
  const { logout, user } = useAuth(); // Use useAuth to get logout and user data

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function from useAuth
      router.push("/auth/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally handle error (e.g., show a message)
      router.push("/auth/login"); // Redirect even if logout fails
    }
  };

  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle>Welcome, {user?.name || "[User Name]"}!</CardTitle> {/* Dynamic user name */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon"><User className="h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
    </Card>
  );
};

export default Header;
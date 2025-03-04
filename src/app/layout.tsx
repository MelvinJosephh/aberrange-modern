'use client';
import Header from "@/components/header";  
import Footer from "@/components/footer";  
import { usePathname } from "next/navigation"; 
import "@/styles/globals.scss";
import "font-awesome/css/font-awesome.min.css";
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 
  const isDashboard = pathname.startsWith("/dashboard"); 

  return (
    <html lang="en">
      <head>
        <title>Aberrange</title>
      </head>
      <body>
        {!isDashboard && <Header />} 
        <main>{children}</main>
        <Toaster />
        {!isDashboard && <Footer />} 
      </body>
    </html>
  );
}

// src/app/layout.tsx
'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import "@/styles/globals.scss";
import "font-awesome/css/font-awesome.min.css";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";

// Load Inter font for better typography
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Exclude Header/Footer for all dashboard routes
  const isDashboard =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/va/dashboard") ||
    pathname.startsWith("/admin/dashboard") ||
    pathname.startsWith("/superadmin/dashboard");

  return (
    <html lang="en">
      <head>
        <title>Aberrange</title>
      </head>
      <body className={inter.className}>
        {!isDashboard && <Header />}
        <main>{children}</main>
        <Toaster />
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
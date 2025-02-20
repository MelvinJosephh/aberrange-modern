"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Define submenu data without descriptions
const mainServices = [
  { title: "Administrative VA", href: "/services/administrative-va" },
  { title: "Business Support VA", href: "/services/business-support-va" },
  { title: "Marketing VA", href: "/services/marketing-va" },
  { title: "Technical VA", href: "/services/technical-va" },
];

const industries = [
  { title: "Ecommerce", href: "/industries/ecommerce" },
  { title: "IT", href: "/industries/it" },
  { title: "Financial Accounting", href: "/industries/financial-accounting" },
  { title: "Data Entry", href: "/industries/data-entry" },
  { title: "Real Estate VA", href: "/industries/real-estate-va" },
  { title: "Telehealth VA", href: "/industries/telehealth-va" },
  { title: "Lead Generation VA", href: "/industries/lead-generation-va" },
];

const businessHubs = [
  { title: "IT Services", href: "/business-hubs/it-services" },
  { title: "Call Center VA", href: "/business-hubs/call-center-va" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-neutral">
          Aberrange
        </Link>

        {/* Hamburger Menu */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation */}
        <nav
          className={cn(
            "md:flex items-center space-x-6",
            isMenuOpen ? "block absolute top-16 left-0 w-full bg-white p-4 shadow-md z-10" : "hidden md:block"
          )}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navigationMenuTriggerStyle(), "text-neutral hover:text-primary")}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Main Services Column */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-neutral">Main Services</h3>
                        <ul className="space-y-1">
                          {mainServices.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                  "block select-none rounded-md p-2 text-sm text-neutral leading-none no-underline outline-none transition-colors",
                                  "hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                                )}
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Industries Column */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-neutral">Industries</h3>
                        <ul className="space-y-1">
                          {industries.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                  "block select-none rounded-md p-2 text-sm text-neutral leading-none no-underline outline-none transition-colors",
                                  "hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                                )}
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Business Hubs Column */}
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-neutral">Business Hubs</h3>
                        <ul className="space-y-1">
                          {businessHubs.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className={cn(
                                  "block select-none rounded-md p-2 text-sm text-neutral leading-none no-underline outline-none transition-colors",
                                  "hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
                                )}
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Full-Width Schedule a Call Button */}
                    <NavigationMenuLink
                      href="/schedule-call"
                      className="block w-full mt-4 px-4 py-3 text-center rounded-md bg-gradient-to-r from-primary to-primary-dark text-white font-medium text-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    >
                      Schedule a Call
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Links */}
              <NavigationMenuItem>
                <Link href="/how-it-works" className="text-neutral hover:text-primary">
                  How It Works
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" className="text-neutral hover:text-primary">
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" className="text-neutral hover:text-primary">
                  Resources
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="text-neutral hover:text-primary">
                  About Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/hire-va" className="text-primary font-medium hover:text-primary-dark md:ml-4">
            Hire a VA
          </Link>
          <Link href="/join" className="text-primary font-medium hover:text-primary-dark md:ml-4">
            Join Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/get-quote" className="bg-secondary text-neutral px-4 py-2 rounded-md hover:bg-secondary-dark">
            Get a Quote
          </Link>
          <div className="relative">
            <AccountCircleIcon
              className="text-neutral cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <Link href="/login" className="block px-4 py-2 text-neutral hover:bg-secondary">
                  Login
                </Link>
                <Link href="/signup" className="block px-4 py-2 text-neutral hover:bg-secondary">
                  Sign Up
                </Link>
                <Link href="/dashboard" className="block px-4 py-2 text-neutral hover:bg-secondary">
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
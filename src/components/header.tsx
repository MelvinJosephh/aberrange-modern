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

// Define submenu data
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
    <header className="bg-[var(--secondary-color)] shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[var(--neutral-color)]">
          Aberrange
        </Link>

        {/* Hamburger Menu */}
        <button className="lg:hidden p-2 text-[var(--neutral-color)]" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Navigation */}
        <nav
          className={cn(
            "lg:flex items-center",
            isMenuOpen
              ? "block absolute top-16 left-0 w-full bg-[var(--secondary-color)] p-4 shadow-md z-10"
              : "hidden lg:block"
          )}
        >
          <NavigationMenu>
            <NavigationMenuList
              className={cn(
                "flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6",
                "lg:items-center"
              )}
            >
              {/* Services - Only visible on desktop */}
              {!isMenuOpen && (
                <NavigationMenuItem className="hidden lg:block">
                  <NavigationMenuTrigger
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-[var(--neutral-color)] bg-[var(--secondary-color)] hover:font-bold"
                    )}
                    style={{ fontSize: "16px" }}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 bg-[var(--secondary-color)]">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-[var(--neutral-color)]">
                            Main Services
                          </h3>
                          <ul className="space-y-2">
                            {mainServices.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="block text-[var(--neutral-color)] hover:font-bold px-2 py-1 rounded-md transition-all"
                                >
                                  {item.title}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold text-[var(--neutral-color)]">
                            Industries
                          </h3>
                          <ul className="space-y-2">
                            {industries.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="block text-[var(--neutral-color)] hover:font-bold px-2 py-1 rounded-md transition-all"
                                >
                                  {item.title}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold text-[var(--neutral-color)]">
                            Business Hubs
                          </h3>
                          <ul className="space-y-2">
                            {businessHubs.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink
                                  href={item.href}
                                  className="block text-[var(--neutral-color)] hover:font-bold px-2 py-1 rounded-md transition-all"
                                >
                                  {item.title}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}

              {/* Other Navigation Links - Background in responsive mode */}
              <NavigationMenuItem>
                <Link
                  href="/public/how-it-works"
                  className={cn(
                    "block text-[var(--neutral-color)] hover:font-bold font-medium text-base",
                    isMenuOpen && "bg-[var(--secondary-color)] px-4 py-2 rounded-md"
                  )}
                >
                  How It Works
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/public/pricing"
                  className={cn(
                    "block text-[var(--neutral-color)] hover:font-bold font-medium text-base",
                    isMenuOpen && "bg-[var(--secondary-color)] px-4 py-2 rounded-md"
                  )}
                >
                  Pricing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/public/resources"
                  className={cn(
                    "block text-[var(--neutral-color)] hover:font-bold font-medium text-base",
                    isMenuOpen && "bg-[var(--secondary-color)] px-4 py-2 rounded-md"
                  )}
                >
                  Resources
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/public/about"
                  className={cn(
                    "block text-[var(--neutral-color)] hover:font-bold font-medium text-base",
                    isMenuOpen && "bg-[var(--secondary-color)] px-4 py-2 rounded-md"
                  )}
                >
                  About Us
                </Link>
              </NavigationMenuItem>

              {/* Buttons - Full width with background */}
              <NavigationMenuItem>
                <Link
                  href="/public/hire"
                  className={cn(
                    "block w-full lg:w-auto bg-[var(--secondary-color)] text-[var(--neutral-color)] px-4 py-2 rounded-md hover:font-bold transition-all font-medium border border-[var(--neutral-color)] text-base text-center"
                  )}
                >
                  Hire a VA
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/public/get-quote"
                  className={cn(
                    "block w-full lg:w-auto bg-[var(--secondary-color)] text-[var(--neutral-color)] px-4 py-2 rounded-md hover:font-bold transition-all font-medium border border-[var(--neutral-color)] text-base text-center"
                  )}
                >
                  Get a Quote
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Profile Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <AccountCircleIcon
              className="text-[var(--neutral-color)] cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[var(--secondary-color)] shadow-lg rounded-md p-2 z-20">
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 text-[var(--neutral-color)] hover:font-bold rounded-md"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="block px-4 py-2 text-[var(--neutral-color)] hover:font-bold rounded-md"
                >
                  Sign Up
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
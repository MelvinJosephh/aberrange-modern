"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// const mainServices = [
//   { title: "Administrative VA", href: "/services/administrative-va" },
//   { title: "Business Support VA", href: "/services/business-support-va" },
//   { title: "Marketing VA", href: "/services/marketing-va" },
//   { title: "Technical VA", href: "/services/technical-va" },
// ];

// const industries = [
//   { title: "Ecommerce", href: "/industries/ecommerce" },
//   { title: "IT", href: "/industries/it" },
//   { title: "Financial Accounting", href: "/industries/financial-accounting" },
//   { title: "Data Entry", href: "/industries/data-entry" },
//   { title: "Real Estate VA", href: "/industries/real-estate-va" },
//   { title: "Telehealth VA", href: "/industries/telehealth-va" },
//   { title: "Lead Generation VA", href: "/industries/lead-generation-va" },
// ];

// const businessHubs = [
//   { title: "IT Services", href: "/business-hubs/it-services" },
//   { title: "Call Center VA", href: "/business-hubs/call-center-va" },
// ];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-[var(--secondary-color)] shadow-sm fixed w-full top-0 z-[var(--z-index-sticky)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Button
  variant="ghost"
  asChild
  className="text-base font-bold text-[var(--neutral-color)] px-2 py-1 hover:text-[var(--interactive-hover)]"
>
  <Link href="/">Aberrange</Link>
</Button>

        {/* Hamburger Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-[var(--neutral-color)]"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-[var(--secondary-color)] border-[var(--border-color-light)] shadow-md w-[300px] sm:w-[400px]"
          >
            <nav className="flex flex-col space-y-4 mt-6">

            <Link
                href="/services"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/public/how-it-works"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/public/pricing"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/public/resources"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/public/about"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/public/hire-va"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire a VA
              </Link>
              <Link
                href="/public/get-quote"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href="/auth/login"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              {/* <Link
                href="/auth/signup"
                className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] px-4 py-2 rounded-md font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link> */}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6">
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)] hover:text-[var(--interactive-hover)] bg-transparent font-medium text-base px-3 py-2 rounded-md"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6 bg-[var(--secondary-color)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[var(--neutral-color)] border-b border-[var(--border-color-light)] pb-1">
                          Main Services
                        </h3>
                        <ul className="space-y-2">
                          {mainServices.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className="block text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)] hover:text-[var(--interactive-hover)] px-2 py-1 rounded-md transition-all"
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[var(--neutral-color)] border-b border-[var(--border-color-light)] pb-1">
                          Industries
                        </h3>
                        <ul className="space-y-2">
                          {industries.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className="block text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)] hover:text-[var(--interactive-hover)] px-2 py-1 rounded-md transition-all"
                              >
                                {item.title}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[var(--neutral-color)] border-b border-[var(--border-color-light)] pb-1">
                          Business Hubs
                        </h3>
                        <ul className="space-y-2">
                          {businessHubs.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink
                                href={item.href}
                                className="block text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)] hover:text-[var(--interactive-hover)] px-2 py-1 rounded-md transition-all"
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
              </NavigationMenuItem> */}

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/public/how-it-works"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  How It Works
                </NavigationMenuLink>
              </NavigationMenuItem>



              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/public/pricing"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/public/resources"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/public/about"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/public/hire-va"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  Hire a VA
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/public/get-quote"
                  className="text-[var(--neutral-color)] hover:text-[var(--interactive-hover)] font-medium text-base px-3 py-2 rounded-md"
                >
                  Get a Quote
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Profile Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[var(--neutral-color)] hover:bg-[var(--secondary-color)]"
              >
                <AccountCircleIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-48 bg-[var(--secondary-color)] border-[var(--border-color-light)] shadow-[var(--shadow-lg)] rounded-[var(--border-radius-md)] p-2"
            >
              <div className="space-y-1">
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)] hover:text-[var(--interactive-hover)] rounded-[var(--border-radius-sm)]"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Sign In
                </Link>
                {/* <Link
                  href="/auth/signup"
                  className="block px-4 py-2 text-[var(--neutral-color)] hover:bg-[var(--secondary-color-dark)] hover:text-[var(--interactive-hover)] rounded-[var(--border-radius-sm)]"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Sign Up
                </Link> */}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
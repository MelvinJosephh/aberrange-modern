"use client";

import * as React from "react";
import { Portal } from "@radix-ui/react-portal";
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
import styles from "@/styles/components/header.module.scss";

// Define submenu data with descriptions
const mainServices = [
  { title: "Administrative VA", href: "/services/administrative-va", description: "Streamline your daily operations with expert admin support." },
  { title: "Business Support VA", href: "/services/business-support-va", description: "Optimize workflows with dedicated business assistance." },
  { title: "Marketing VA", href: "/services/marketing-va", description: "Boost your brand with skilled marketing professionals." },
  { title: "Technical VA", href: "/services/technical-va", description: "Handle IT and tech tasks with specialized support." },
];

const industries = [
  { title: "Ecommerce", href: "/industries/ecommerce", description: "Grow your online store with tailored VA solutions." },
  { title: "IT", href: "/industries/it", description: "Support for tech-driven businesses and startups." },
  { title: "Financial Accounting", href: "/industries/financial-accounting", description: "Precision bookkeeping and financial management." },
  { title: "Data Entry", href: "/industries/data-entry", description: "Accurate and efficient data handling." },
  { title: "Real Estate VA", href: "/industries/real-estate-va", description: "Manage properties and clients effortlessly." },
  { title: "Telehealth VA", href: "/industries/telehealth-va", description: "Support for healthcare providers remotely." },
  { title: "Lead Generation VA", href: "/industries/lead-generation-va", description: "Drive sales with targeted lead strategies." },
];

const businessHubs = [
  { title: "IT Services", href: "/business-hubs/it-services", description: "Comprehensive IT support for your team." },
  { title: "Call Center VA", href: "/business-hubs/call-center-va", description: "Enhance customer service with expert VAs." },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo and Tagline */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            Aberrange
          </Link>
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), styles.navTrigger)}>
                  Services
                </NavigationMenuTrigger>
                <Portal>
                  <NavigationMenuContent className={cn("w-full max-w-screen-lg", styles.navContent)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                      {/* Main Services */}
                      <div>
                        <h3 className="font-medium text-base mb-4 text-neutral-200">Main Services</h3>
                        <ul className="space-y-2">
                          {mainServices.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      {/* Industries */}
                      <div>
                        <h3 className="font-medium text-base mb-4 text-neutral-200">Industries</h3>
                        <ul className="space-y-2">
                          {industries.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      {/* Business Hubs */}
                      <div>
                        <h3 className="font-medium text-base mb-4 text-neutral-200">Business Hubs</h3>
                        <ul className="space-y-2">
                          {businessHubs.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      {/* Schedule a Call */}
                      <div>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/schedule-call"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/10 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-primary">
                              Schedule a Call
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Book a free consultation to explore how Aberrange can transform your business.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </Portal>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Other nav links */}
          <Link href="/how-it-works" className={styles.link}>How It Works</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/resources" className={styles.link}>Resources</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/hire-va" className={styles.ctaLink}>Hire a VA</Link>
          <Link href="/join" className={styles.navButton}>Join Us</Link>
        </nav>

        {/* Right-Aligned Actions */}
        <div className={styles.actions}>
          <Link href="/get-quote" className={styles.actionButton}>Get a Quote</Link>
          <div className={styles.profileWrapper}>
            <AccountCircleIcon
              className={styles.profileIcon}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && (
              <div className={styles.profileDropdown}>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
                <Link href="/dashboard">Dashboard</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-neutral-100">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
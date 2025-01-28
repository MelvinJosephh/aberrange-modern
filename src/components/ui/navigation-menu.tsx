import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility is defined in your project

export const NavigationMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("navigation-menu", className)} {...props} />
));
NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("navigation-menu-content", className)} {...props} />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("navigation-menu-item", className)} {...props} />
));
NavigationMenuItem.displayName = "NavigationMenuItem";

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a ref={ref} className={cn("navigation-menu-link", className)} {...props} />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

export const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("navigation-menu-list", className)} {...props} />
));
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={cn("navigation-menu-trigger", className)} {...props} />
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

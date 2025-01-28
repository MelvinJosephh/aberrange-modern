// src/components/Dropdown.tsx
import React from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { JobCategory, JobDescription } from '../lib/models/services-model';

interface DropdownProps {
  data?: JobCategory;
  descriptions?: JobDescription;
}

export const Dropdown: React.FC<DropdownProps> = ({ data, descriptions }) => {
  if (!data || !descriptions) return null;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.keys(data).map(category => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                {data[category].map((item, index) => (
                  <li key={index}>
                    <NavigationMenuLink className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {item}
                    </NavigationMenuLink>
                  </li>
                ))}
                <li>
                  <p className="text-sm text-muted-foreground">{descriptions[category]}</p>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
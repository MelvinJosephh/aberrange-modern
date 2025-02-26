'use client';

import React from 'react';
import { industriesData } from '../lib/models/industries-model';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const IndustriesDropdown: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent 
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 grid grid-cols-2 gap-4 p-6 shadow-lg bg-white rounded-lg md:w-[400px] lg:w-[500px]"
          >
            <div className="col-span-1">
              <h3 className="mb-2 text-lg font-semibold">Industries</h3>
              <ul className="space-y-2">
                {industriesData.industries.map((industry, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <a 
                        href={`/industries-specific/${industry.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block p-2 rounded-md hover:bg-gray-100 transition text-gray-700"
                      >
                        {industry}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="mb-2 text-lg font-semibold">Actions</h3>
              <ul className="space-y-2">
                {industriesData.actions.map((action, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <a 
                        href={action.link}
                        className="block text-sm text-blue-600 p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        {action.name}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 mt-4">
              <NavigationMenuLink asChild>
                <a 
                  href={industriesData.button.link}
                  className="w-full block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                  {industriesData.button.label}
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default IndustriesDropdown;

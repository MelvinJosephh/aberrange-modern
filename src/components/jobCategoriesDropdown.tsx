'use client';

import React, { useState } from 'react';
import { data, descriptions } from '../lib/models/hire-talent-model';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils'; // Assuming you have this utility for class concatenation

const JobCategoriesDropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  return (
    <NavigationMenu  className="flex justify-center items-start w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hire Talent</NavigationMenuTrigger>
          <NavigationMenuContent 
            className="grid grid-cols-3 gap-4 p-6 md:w-[600px] lg:w-[800px]"
          >
            {/* Categories */}
            <div className="col-span-1">
              <h3 className="mb-2 text-lg font-medium">Categories</h3>
              <ul className="space-y-2">
                {Object.keys(data).map((category) => (
                  <li key={category}>
                    <NavigationMenuLink asChild>
                      <a 
                        onClick={() => {
                          setActiveCategory(category);
                          setActiveSubCategory(null);
                        }}
                        className={cn(
                          "block text-gray-700 p-2 rounded-md transition",
                          activeCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                        )}
                      >
                        {category}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            {activeCategory && (
              <div className="col-span-1">
                <h3 className="mb-2 text-lg font-medium">Roles</h3>
                <ul className="space-y-2">
                  {data[activeCategory].map((role, index) => (
                    <li key={index}>
                      <NavigationMenuLink asChild>
                        <a 
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSubCategory(role);
                          }}
                          className={cn(
                            "block text-gray-700 p-2 rounded-md transition",
                            activeSubCategory === role ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                          )}
                        >
                          {role}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Details */}
            {activeSubCategory && (
              <div className="col-span-1 p-2">
                <h3 className="text-lg font-semibold">{activeSubCategory}</h3>
                <p className="text-gray-600 text-sm mt-1">{descriptions[activeCategory]}</p>
              </div>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default JobCategoriesDropdown;
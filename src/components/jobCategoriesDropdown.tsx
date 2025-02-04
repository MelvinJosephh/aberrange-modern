'use client';

import React, { useState } from 'react';
import { hireTalentData } from '../lib/models/hire-talent-model';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const JobCategoriesDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedRole(null); // Reset role when changing category
    setSelectedCategory(category);
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Job Categories</NavigationMenuTrigger>
          <NavigationMenuContent 
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 grid grid-cols-3 gap-4 p-6 shadow-lg bg-white rounded-lg md:w-[700px] lg:w-[900px]"
          >
            {/* Categories */}
            <div className="col-span-1">
              <h3 className="mb-2 text-lg font-semibold">Categories</h3>
              <ul className="space-y-2">
                {hireTalentData.map((category, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleCategoryClick(category)}
                    className={`p-2 rounded-md cursor-pointer transition ${selectedCategory === category ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  >
                    {category.category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Roles */}
            <div className="col-span-1">
              {selectedCategory && (
                <>
                  <h3 className="mb-2 text-lg font-semibold">Roles</h3>
                  <ul className="space-y-2">
                    {selectedCategory.roles.map((role, idx) => (
                      <li 
                        key={idx}
                        onClick={() => handleRoleClick(role)}
                        className={`p-2 rounded-md cursor-pointer transition ${selectedRole === role ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                      >
                        {role.title}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Role Details */}
            <div className="col-span-1">
              {selectedRole && (
                <>
                  <h3 className="mb-2 text-lg font-semibold">Details</h3>
                  <div className="p-2 rounded-md bg-gray-50">
                    <p className="font-medium">{selectedRole.title}</p>
                    <p className="text-sm text-gray-600">{selectedCategory.description}</p>
                    <NavigationMenuLink asChild>
                      <a 
                        href={selectedRole.link}
                        className="w-full block text-center bg-blue-600 text-white py-2 mt-2 rounded-md hover:bg-blue-700 transition"
                      >
                        Hire
                      </a>
                    </NavigationMenuLink>
                  </div>
                </>
              )}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default JobCategoriesDropdown;
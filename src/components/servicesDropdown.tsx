'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { servicesData } from '../lib/models/services-model';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const ServicesDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent 
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 grid grid-cols-4 gap-4 p-6 shadow-lg bg-white rounded-lg md:w-[700px] lg:w-[900px]"
          >
            {/* Engagement Models */}
            <div className="col-span-1">
              <h2 className="mb-2 text-lg font-semibold text-center">Engagement Models</h2>
              <ul className="space-y-2">
                {servicesData.engagementModels.map((model) => (
                  <li key={model.title} className="flex items-center space-x-2">
                    <Image 
                      src={model.icon} 
                      alt={model.title} 
                      width={24} height={24} className="w-6 h-6 object-contain"
                    />
                    <div>
                      <span className="font-medium">{model.title}</span>
                      <p className="text-sm text-gray-600">{model.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="col-span-1">
              <h2 className="mb-2 text-lg font-semibold">Categories</h2>
              <ul className="space-y-2">
                {servicesData.categories.map((category, index) => (
                  <li 
                    key={index} 
                    onClick={() => setSelectedCategory(category.title)}
                    className={`p-2 rounded-md cursor-pointer transition ${selectedCategory === category.title ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subcategories */}
            <div className="col-span-1">
              {selectedCategory && (
                <>
                  <h2 className="mb-2 text-lg font-semibold">Subcategories</h2>
                  <ul className="space-y-2">
                    {servicesData.categories
                      .find(c => c.title === selectedCategory)
                      ?.subcategories.map((subcat, index) => (
                        <li 
                          key={index}
                          onClick={() => setSelectedSubcategory(subcat.title)}
                          className={`p-2 rounded-md cursor-pointer transition ${selectedSubcategory === subcat.title ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                        >
                          {subcat.title}
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>

            {/* Items */}
            <div className="col-span-1">
              {selectedSubcategory && (
                <>
                  <h2 className="mb-2 text-lg font-semibold">Items</h2>
                  <ul className="space-y-2">
                    {servicesData.categories
                      .find(c => c.title === selectedCategory)
                      ?.subcategories.find(s => s.title === selectedSubcategory)
                      ?.items.map((item, index) => (
                        <li key={index} className="p-2 rounded-md bg-gray-50">
                          <span className="font-medium">{item.name}</span>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServicesDropdown;

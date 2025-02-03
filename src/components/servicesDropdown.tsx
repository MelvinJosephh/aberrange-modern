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
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const ServicesDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleCategoryClick = (title: string) => {
    // Reset the subcategory when a new category is selected
    setSelectedCategory(title);
    setSelectedSubcategory(null);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          {/* Wrap the content in a relative container to provide positioning context */}
          <div className="absolute">
            <NavigationMenuContent 
              className="absolute left-1/2 transform -translate-x-1/2 grid justify-center gap-3 p-6 md:w-[700px] lg:w-[900px] lg:grid-cols-[.75fr_1fr_1fr_1fr]"
            >
              {/* Engagement Models */}
              <div className="col-span-1">
                <h2 className="mb-2 text-lg font-medium text-center">Engagement Models</h2>
                <ul className="space-y-2">
                  {servicesData.engagementModels.map((model) => (
                    <li key={model.title} className="flex items-center space-x-2">
                     <Image 
                        src={model.icon} 
                        alt={model.title} 
                        width={24} // Match the width to the CSS class 'w-6' which is 24px
                        height={24} // Match the height to the CSS class 'h-6' which is 24px
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <span className="font-medium">{model.title}</span>
                        <p className="text-sm text-muted-foreground">{model.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="col-span-1 overflow-y-auto max-h-60">
                {/* <h2 className="mb-2 text-lg font-medium text-center">Categories</h2> */}
                <ul>
                  {servicesData.categories.map((category, index) => (
                    <ListItem 
                      key={index}
                      onClick={() => handleCategoryClick(category.title)}
                      title={category.title}
                      className={selectedCategory === category.title ? 'bg-accent text-accent-foreground' : ''}
                    />
                  ))}
                </ul>
              </div>

              {/* Subcategories */}
              <div className="col-span-1 overflow-y-auto max-h-60">
                {/* <h2 className="mb-2 text-lg font-medium text-center">Subcategories</h2> */}
                {selectedCategory && 
                  <ul>
                    {servicesData.categories
                      .find(c => c.title === selectedCategory)
                      ?.subcategories.map((subcat, index) => (
                        <ListItem 
                          key={index}
                          onClick={() => setSelectedSubcategory(subcat.title)}
                          title={subcat.title}
                          className={selectedSubcategory === subcat.title ? 'bg-accent text-accent-foreground' : ''}
                        />
                      ))}
                  </ul>
                }
              </div>

              {/* Items */}
              <div className="col-span-1 overflow-y-auto max-h-60">
                {/* <h2 className="mb-2 text-lg font-medium text-center">Items</h2> */}
                {selectedSubcategory && 
                  <ul>
                    {servicesData.categories
                      .find(c => c.title === selectedCategory)
                      ?.subcategories.find(s => s.title === selectedSubcategory)
                      ?.items.map((item, index) => (
                        <ListItem 
                          key={index}
                          title={item.name}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                  </ul>
                }
              </div>
            </NavigationMenuContent>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; onClick?: () => void }
>(({ className, title, children, onClick, href, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href || "#"}
          onClick={handleClick}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default ServicesDropdown;

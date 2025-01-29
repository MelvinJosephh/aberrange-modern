'use client';
// src/components/Dropdown.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { data, descriptions } from '../lib/models/hire-talent-model';
import styles from '../styles/components/dropdown.module.scss';

interface DropdownProps {
  data: typeof data;
  descriptions: typeof descriptions;
}

export function Dropdown({ data, descriptions }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger 
          onMouseEnter={handleToggle} 
          onMouseLeave={handleToggle} 
          onClick={handleToggle}
          className={styles.hasDropdown}
        >
          Hire Talent
        </NavigationMenuTrigger>
        <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
          <div className={styles.categoryList}>
            <ul>
              {Object.keys(data).map(category => (
                <li key={category} className={styles.categoryItem}>
                  <button 
                    onClick={() => {
                      setActiveCategory(category);
                      handleToggle(); // Close the dropdown after selection for cleaner UX
                    }}
                    className={styles.categoryButton}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {activeCategory && (
            <div className={styles.content}>
              <div className={styles.itemList}>
                <ul>
                  {data[activeCategory].map((item, index) => (
                    <li key={index} className={styles.item}>
                      <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.description}>
                <h3>{activeCategory}</h3>
                <p>{descriptions[activeCategory]}</p>
                <Link href="/contact" className={styles.learnMoreButton}>
                  Learn More
                </Link>
              </div>
            </div>
          )}
        </div>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
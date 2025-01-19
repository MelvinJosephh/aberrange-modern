'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from '@/styles/modal-pages/product-managers.module.scss'; // Using CSS modules
import categories from '@/lib/data/skills/productManagersData';
import { useRouter } from 'next/navigation';  

interface Category {
  title: string;
  items: string[];
}

const HireProductManagers: React.FC = () => {
  const [showPage, setShowPage] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);  // State to store the clicked item
  const router = useRouter();  // Hook for navigation

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);  // Open the modal with the selected product manager item
  };

  const closeItemDetail = () => {
    setActiveItem(null);  // Close the modal
  };

  const handleActionClick = () => {
    closeItemDetail();  // Close the item detail modal
    router.push('/hire-product-manager/step2');  // Navigate to the next step in the hiring process
  };

  if (!showPage) return null;

  return (
    <div className={styles.hireProductManagersPage}>
      <div className={styles.headerSection}>
        <h1>Hire Product Managers</h1>
        <CloseIcon className={styles.closeIcon} onClick={closePage} />
      </div>

      <div className={styles.categories}>
        {categories.map((category: Category, index: number) => (
          <div key={index} className={styles.category}>
            <div
              className={styles.categoryHeader}
              onClick={() => toggleCategory(index)}
            >
              <h2>{category.title}</h2>
              <span>{activeCategory === index ? '-' : '+'}</span>
            </div>
            {activeCategory === index && (
              <ul className={styles.categoryItems}>
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleItemClick(item)}  // Open the modal when an item is clicked
                  >
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Show the modal when an item is selected */}
      {activeItem && (
        <div className={styles.itemDetailModal}>
          <div className={styles.modalContent}>
            <CloseIcon className={styles.closeIcon} onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected Product Manager role will be shown here.</p>
            <button className={styles.primaryBtn} onClick={handleActionClick}>
              Hire Product Manager
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireProductManagers;

"use client";

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from '@/styles/modal-pages/hire-developers.module.scss';
import categories from '@/lib/data/skills/developersData';
import { useRouter } from 'next/navigation';  

const HireDevelopers: React.FC = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);  // Store the selected item for modal details
  const router = useRouter();  // Hook for navigating to different pages

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);  // Set the selected item for the modal
  };

  const closeItemDetail = () => {
    setActiveItem(null);  // Close the modal
  };

  const handleActionClick = () => {
    closeItemDetail();  // Close the item detail modal
    router.push('/hire-talent/step2-company-size');  // Navigate to the hire developer process
  };

  if (!showPage) return null;

  return (
    <div className={styles.hireDevelopersPage}>
      <div className={styles.headerSection}>
        <h3>Hire Developers</h3>
        <CloseIcon className={styles.closeIcon} onClick={closePage} />
      </div>

      <div className={styles.categories}>
        {categories.map((category, index) => (
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
                    onClick={() => handleItemClick(item)}  // Open modal with clicked item
                  >
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Show Item Detail Modal if activeItem is selected */}
      {activeItem && (
        <div className={styles.itemDetailModal}>
          <div className={styles.modalContent}>
            <CloseIcon className={styles.closeIcon} onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected developer skill will be shown here.</p>
            <button className={styles.primaryBtn} onClick={handleActionClick}>
              Hire Developer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireDevelopers;

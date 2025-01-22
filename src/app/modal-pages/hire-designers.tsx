'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from '@/styles/modal-pages/hire-designers.module.scss';
import hireDesignersData from '@/lib/data/skills/designersData';
import { useRouter } from 'next/navigation';

const HireDesigners: React.FC = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();

  const closePage = () => setShowPage(false);

  const toggleCategory = (index: number) =>
    setActiveCategory(activeCategory === index ? null : index);

  const handleItemClick = (item: string) => setActiveItem(item);

  const closeItemDetail = () => setActiveItem(null);

  const handleActionClick = () => {
    closeItemDetail();
    router.push('/hire-talent/step2');
  };

  if (!showPage) return null;

  return (
    <div className={styles.hireDesignersPage}>
      <div className={styles.headerSection}>
        <h1>Hire Designers</h1>
        <CloseIcon className={styles.closeIcon} onClick={closePage} />
      </div>

      <div className={styles.categories}>
        {hireDesignersData.map((category, index) => (
          <div key={index} className={styles.category}>
            <div
              className={styles.categoryHeader}
              onClick={() => toggleCategory(index)}
              role="button"
              aria-expanded={activeCategory === index}
              tabIndex={0}
              onKeyPress={() => toggleCategory(index)}
            >
              <h2>{category.title}</h2>
              <span>{activeCategory === index ? '-' : '+'}</span>
            </div>
            {activeCategory === index && (
              <ul className={styles.categoryItems}>
                {category.items.map((item, idx) => (
                  <li key={idx} onClick={() => handleItemClick(item)}>
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {activeItem && (
        <div className={styles.itemDetailModal}>
          <div className={styles.modalContent}>
            <CloseIcon className={styles.closeIcon} onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected designer role will be shown here.</p>
            <button
              className={styles.primaryButton}
              onClick={handleActionClick}
            >
              Hire Designer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireDesigners;

'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from '@/styles/modal-pages/hire-assistants.module.scss';
import categories from '@/lib/data/skills/assistantsData';
import { useRouter } from 'next/navigation';


const HireAssistants: React.FC = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();

  const closePage = () => setShowPage(false);
  const toggleCategory = (index: number) => setActiveCategory(activeCategory === index ? null : index);
  const handleItemClick = (item: string) => setActiveItem(item);
  const closeItemDetail = () => setActiveItem(null);
  const handleActionClick = () => {
    closeItemDetail();
    router.push('/hire-talent/step2');
  };

  if (!showPage) return null;

  return (
    <div className={styles.hireAssistantsPage}>
      <header className={styles.headerSection}>
        <h1>Hire Assistants</h1>
        <button
          className={styles.closeButton}
          onClick={closePage}
          aria-label="Close Hire Assistants Page"
        >
          <CloseIcon />
        </button>
      </header>

      <section className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            <div
              className={styles.categoryHeader}
              onClick={() => toggleCategory(index)}
              aria-expanded={activeCategory === index}
            >
              <h2>{category.title}</h2>
              <span>{activeCategory === index ? '-' : '+'}</span>
            </div>
            {activeCategory === index && (
              <ul className={styles.categoryItems}>
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.replace(/ /g, '-').toLowerCase()}`}
                      onClick={() => handleItemClick(item)}
                      className={styles.categoryItemLink}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {activeItem && (
        <div className={styles.itemDetailModal} role="dialog" aria-labelledby="modal-title">
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={closeItemDetail}
              aria-label="Close Item Details"
            >
              <CloseIcon />
            </button>
            <h4 id="modal-title">{activeItem}</h4>
            <p>Details about the selected assistant role will be shown here.</p>
            <button className={styles.primaryButton} onClick={handleActionClick}>
              Hire Assistant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireAssistants;

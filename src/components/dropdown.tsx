'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/dropdown.module.scss';

interface DropdownProps {
  title: string;
  data: any; // This should be more specific based on your data structure
  onToggle: () => void; 
  isOpen: boolean; 
}

interface Item {
  name: string;
  description?: string;
  link?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, data, isOpen, onToggle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const selectCategory = (categoryTitle: string) => {
    if (selectedCategory === categoryTitle) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryTitle);
    }
    setSelectedSubcategory(null);
  };

  const selectSubcategory = (subcategoryTitle: string) => {
    if (selectedSubcategory === subcategoryTitle) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcategoryTitle);
    }
  };

  const renderContent = () => {
    if (!data || Object.keys(data).length === 0) return <div>No data available</div>;

    if (Array.isArray(data)) {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.simpleList}>
            {data.map((item: Item, idx) => (
              <div key={idx} className={styles.item}>
                {item.link ? <Link href={item.link}>{item.name}</Link> : <span>{item.name}</span>}
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      );
    } else if ('industries' in data) {
      return (
        <div className={styles.gridContainer}>
          <div className={styles.categories}>
            <ul>
              {data.industries.map((industry: string, i: number) => (
                <li key={i} className={styles.item}>{industry}</li>
              ))}
            </ul>
            {data.actions && data.actions.map((action: any, idx: number) => (
              <Link key={idx} href={action.link} className={styles.actionLink}>{action.name}</Link>
            ))}
            {data.button && <button className={styles.quoteButton}>{data.button.label}</button>}
          </div>
        </div>
      );
    } else if ('engagementModels' in data) {
      const { engagementModels, categories, footer } = data;
      return (
        <div className={styles.gridContainer}>
          <div className={styles.engagementModels}>
            {engagementModels.map((model: any, idx: number) => (
              <div key={idx} className={styles.model}>
                <img src={model.icon} alt={model.title} />
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.categories}>
            {categories.map((category: any, catIdx: number) => (
              <div key={catIdx} className={styles.category}>
                <h3 onClick={() => selectCategory(category.title)}>{category.title}</h3>
              </div>
            ))}
          </div>
          <div className={styles.items}>
            {selectedCategory && categories.find((c: any) => c.title === selectedCategory)?.subcategories.map((subcategory: any, subIdx: number) => (
              <div key={subIdx} className={styles.subcategory}>
                <h4 onClick={() => selectSubcategory(subcategory.title)}>{subcategory.title}</h4>
                {selectedSubcategory === subcategory.title && 
                  <ul>
                    {subcategory.items.map((item: any, itemIdx: number) => (
                      <li key={itemIdx}>
                        <strong>{item.name}</strong> - {item.description}
                      </li>
                    ))}
                  </ul>
                }
              </div>
            ))}
          </div>
          <div className={styles.footer}>
            <h2>{footer.title}</h2>
            <p>{footer.description}</p>
            <button className={styles.contactButton}>{footer.buttonLabel}</button>
          </div>
        </div>
      );
    }

    return <p>Content for {title} not specified</p>;
  };

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
      <button onClick={onToggle} className={styles.dropdownBtn}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
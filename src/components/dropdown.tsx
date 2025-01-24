'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/dropdown.module.scss';

interface DropdownProps {
  title: string;
  data: any; 
  onToggle: () => void; 
  isOpen: boolean; 
}

interface Item {
  name: string;
  description?: string;
  link?: string;
}

const getIndustryLink = (industry: string) => {
  return `/industries-specific/${industry.toLowerCase().replace(/[ &]/g, '-')}`;
};

const Dropdown: React.FC<DropdownProps> = ({ title, data, isOpen, onToggle }) => {
  const renderContent = () => {
    if (!data || Object.keys(data).length === 0) return <div>No data available</div>;

    if (Array.isArray(data)) {
      // For Talent
      return (
        <div className={styles.simpleList}>
          {data.map((item: Item, idx) => (
            <div key={idx} className={styles.item}>
              <Link href={item.link || '#'}>{item.name}</Link>
            </div>
          ))}
        </div>
      );
    } else if ('industries' in data) {
      // For Companies (Industries)
      return (
        <div className={styles.gridContainer}>
          <div className={styles.categories}>
            <ul>
              {data.industries.map((industry: string, i: number) => (
                <li key={i} className={styles.item}>
                  <Link href={getIndustryLink(industry)}>{industry}</Link>
                </li>
              ))}
            </ul>
            {data.actions && data.actions.map((action: any, idx: number) => (
              <Link key={idx} href={action.link} className={styles.actionLink}>{action.name}</Link>
            ))}
            {data.button && <Link href={data.button.link} className={styles.quoteButton}>{data.button.label}</Link>}
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
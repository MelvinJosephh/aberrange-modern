"use client";

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/dropdown.module.scss'; // Assuming the CSS Module is used

// Define types for the props
interface DropdownItem {
  label: string;
  link: string;
}

interface DropdownSection {
  title?: string;
  items: DropdownItem[];
}

interface DropdownProps {
  title: string;
  items?: DropdownSection[];
  renderContent?: (items: DropdownSection[]) => ReactNode;
  onClose?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items = [], renderContent, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the dropdown when a link is clicked
    onClose?.();
  };

  return (
    <li className={styles['dropdown-wrapper']} ref={dropdownRef}>
      <a href="#" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>
        {title}
      </a>
      {isOpen && (
        <div className={`${styles['dropdown-content']} ${isOpen ? styles.open : ''}`}>
          {renderContent ? renderContent(items) : (
            <div className={styles['dropdown-sections']}>
              {items.map(({ title, items }, idx) => (
                <div key={idx} className={styles['dropdown-section']}>
                  {title && <div className={styles['section-title']}>{title}</div>}
                  <ul className={items.length ? styles['simple-list'] : styles['subcategory-list']}>
                    {items.map(({ label, link }, itemIdx) => (
                      <li key={itemIdx} className={styles['subcategory-item']}>
                        <Link href={link}>
                          <a onClick={handleLinkClick}>{label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default Dropdown;

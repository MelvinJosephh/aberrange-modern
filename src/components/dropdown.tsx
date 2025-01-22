'use client';

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/dropdown.module.scss";

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
  renderContent?: (items: DropdownSection[]) => React.ReactNode;
  onClose?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items = [],
  renderContent,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div ref={dropdownRef} className={styles.dropdownWrapper}>
      <button
        onClick={(e) => { e.preventDefault(); toggleDropdown(); }}
        className={styles.dropdownToggle}
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
      >
        {title}
      </button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.active : ''}`}>
        {renderContent ? (
          renderContent(items)
        ) : (
          <div className={styles.dropdownSections}>
            {items.map(({ title, items }, idx) => (
              <div key={idx} className={styles.dropdownSection}>
                {title && <div className={styles.sectionTitle}>{title}</div>}
                <ul>
                  {items.map(({ label, link }, itemIdx) => (
                    <li key={itemIdx} className={styles.dropdownItem}>
                      <Link href={link}>
                        <a onClick={onClose}>{label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

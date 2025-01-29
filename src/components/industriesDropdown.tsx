'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { industriesData } from '../lib/models/industries-model'; // Assuming this is where your data is defined
import styles from '../styles/styles.module.scss';

const IndustriesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-wrapper">
      <button onClick={toggleDropdown} className={styles['dropdown-toggle']}>
        Industries {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className={styles['dropdown-menu']}>
          <ul className={styles['industry-list']}>
            {industriesData.industries.map((industry, index) => (
              <li key={index}>
                <Link href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}>
                  {industry}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles['actions']}>
            {industriesData.actions.map((action, index) => (
              <Link key={index} href={action.link} className={styles['action-link']}>
                {action.name}
              </Link>
            ))}
          </div>
          <Link href={industriesData.button.link} className={styles['button']}>
            {industriesData.button.label}
          </Link>
        </div>
      )}
    </div>
  );
};

export default IndustriesDropdown;
'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/header.module.scss';
import Dropdown from './dropdown';
import talentData from '@/lib/data/talentData';
import companiesData from '@/lib/data/companiesData';
import { industriesData } from '@/lib/models/industries-model';
import { servicesData } from '@/lib/models/services-model';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Header: React.FC = () => {
  const navItems = [
    { name: 'For Companies', data: companiesData },
    { name: 'For Talent', data: talentData },
    { name: 'Industries', data: industriesData, link: '/industries' },
    { name: 'Our Solutions', data: servicesData },
    { name: 'What we do', data: [], link: '/about' }
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/assets/logo/aberrange-logo-themed.png" // replace with the actual path to your logo
            alt="Aberrange"
            width={140}  // adjust based on your logo size
            height={40}  // adjust based on your logo size
            priority
          />
        </Link>
      </div>
      <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </div>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        {navItems.map((item, index) => (
          <div key={index} className={styles.navItem}>
            {item.link ? (
              <Link 
                href={item.link} 
                className={styles.navLink} 
                onClick={() => {
                  setActiveDropdown(null);
                  toggleMobileMenu();
                }}
              >
                {item.name}
              </Link>
            ) : (
              <Dropdown 
                title={item.name} 
                data={item.data} 
                isOpen={activeDropdown === item.name} 
                onToggle={() => toggleDropdown(item.name)} 
              />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
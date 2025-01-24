'use client';

import React, { useState } from 'react';
import styles from '@/styles/components/header.module.scss';
import Dropdown from './dropdown';
import talentData from '@/lib/data/talentData';
import { industriesData } from '@/lib/models/industries-model';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Header: React.FC = () => {
  const navItems = [
    { name: 'For Companies', data: industriesData },
    { name: 'For Talent', data: talentData },
    { name: 'Industries', link: '/industries' },
    { name: 'Our Solutions', link: '/our-solutions' },
    { name: 'What we do', data: [], link: '/about' }
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  // const getIndustryLink = (industry: string) => {
  //   // Convert industry names to kebab-case for URL
  //   const industryPath = industry.toLowerCase().replace(/[ &]/g, '-');
  //   return `/industries/${industryPath}`;
  // };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/assets/logo/aberrange-logo-themed.png" 
            alt="Aberrange"
            width={140}  
            height={40}  
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
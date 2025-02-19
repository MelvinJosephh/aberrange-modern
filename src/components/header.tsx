'use client';

import Link from 'next/link';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '@/styles/components/header.module.scss';

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Aberrange
        </Link>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/hire" className={styles.link}>Hire a VA</Link>
          <Link href="/join" className={styles.link}>Join as a VA</Link>
          <Link href="/resources" className={styles.link}>Resources</Link>

          {/* Services Dropdown */}
          <div 
            className={styles.dropdownWrapper} 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={styles.dropdownButton}>Services</button>
            {isServicesOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/services/ai-business-automation">AI-Powered Business Automation</Link>
                <Link href="/services/tech-it-support">Tech & IT Support</Link>
                <Link href="/services/admin-assistance">Admin & Executive Assistance</Link>
                <Link href="/services/finance-bookkeeping">Finance & Bookkeeping</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right-Aligned Actions */}
        <div className={styles.actions}>
          {/* User Profile Dropdown */}
          <div className={styles.profileWrapper}>
            <AccountCircleIcon
              className={styles.profileIcon}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
            {isProfileOpen && (
              <div className={styles.profileDropdown}>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
                <Link href="/dashboard">Dashboard</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

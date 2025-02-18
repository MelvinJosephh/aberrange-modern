// src/components/Header.tsx
import Link from 'next/link';
import styles from '@/styles/components/header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Aberrange
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button className={styles.ctaButton}>
          Get Started →
        </button>
      </div>
    </header>
  );
};

export default Header;
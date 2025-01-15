// src/components/Header.tsx
import styles from '@/styles/components/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Hire Talent</li>
          <li className={styles.navItem}>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

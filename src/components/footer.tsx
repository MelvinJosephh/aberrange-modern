// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link'; // Next.js Link for client-side navigation
import styles from '@/styles/components/footer.module.scss';

// Material Icons for Social Media and Contact
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Logo & Tagline */}
        <div className={styles.footerColumn}>
          <h3 className={styles.footerLogo}>Aberrange</h3>
          <p className={styles.footerTagline}>
            AI-Powered Business Solutions
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/" className={styles.footerLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.footerLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footerLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.footerLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Contact Us</h4>
          <p className={styles.footerContact}>
            <EmailIcon className={styles.contactIcon} />
            <a href="mailto:support@aberrange.com" className={styles.footerLink}>
              support@aberrange.com
            </a>
          </p>
          <p className={styles.footerContact}>
            Phone: +1 (555) 123-4567
          </p>
        </div>

        {/* Column 4: Newsletter & Socials */}
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Stay Connected</h4>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
          <div className={styles.socialIcons}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LinkedInIcon className={styles.socialIcon} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <TwitterIcon className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} Aberrange. All rights reserved.
        </p>
        <div className={styles.footerLegal}>
          <Link href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
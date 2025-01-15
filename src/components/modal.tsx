"use client";

import { useState } from 'react';
import styles from '@/styles/components/modal.module.scss';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className={styles.modalContainer}>
      <button className={styles.openButton} onClick={toggleModal}>
        Subscribe to Our Newsletter
      </button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Stay Updated!</h2>
            <p>Subscribe to our newsletter to get the latest updates and offers.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <button className={styles.closeButton} onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect } from 'react';
import styles from '@/styles/components/wrapper-one.module.scss'; // Adjust path to SCSS file
import wrapperData from '@/lib/data/wrapperData'; // Adjust path to data file
import AOS from 'aos';
import 'aos/dist/aos.css';

interface WrapperItem {
  num: number | string;
  text: string;
}

const WrapperOne: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(wrapperData.map(() => 0)); 

  const animateCount = (index: number, targetNum: number) => {
    let current = 0;
    const increment = Math.ceil(targetNum / 100); 
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        clearInterval(interval);
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = targetNum;
          return newCounts;
        });
      } else {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = current;
          return newCounts;
        });
      }
    }, 30); // Adjust speed of animation (30ms interval)
  };

  useEffect(() => {
    wrapperData.forEach((item: WrapperItem, index: number) => {
      if (typeof item.num === 'number') {
        animateCount(index, item.num); // For numbers like 35, 500, etc.
      } else {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Number(item.num); // Directly set percentages or static text
          return newCounts;
        });
      }
    });

    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Reinitialize AOS after count updates
    AOS.refresh();
  }, []); // Empty dependency array ensures it runs once when the component is mounted

  return (
    <section className={`${styles.branding} ${styles.WrapperOne}`}>
      <div className={styles.container}>
        {wrapperData.map((val: WrapperItem, index: number) => (
          <div className={styles.box} key={index} data-aos="zoom-in-up"> {/* Add the animation to each box */}
            <h1>{typeof val.num === 'number' ? counts[index] : val.num}</h1>
            <p>{val.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WrapperOne;

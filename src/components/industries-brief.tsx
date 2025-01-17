"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/styles/components/industries-brief.module.scss"; // Adjust path to match your project structure
import ServicesData from "@/lib/data/ServicesData"; // Adjust path to match your project structure

interface ServiceItem {
  cover: string;
  title: string;
  desc: string;
}

const IndustriesBrief: React.FC = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,
      once: true, // Ensure animation triggers once per element
    });

    // Refresh AOS animations when the component renders
    AOS.refresh();
  }, []);

  return (
    <section className={`${styles.services} ${styles.topMargin}`} id="Services">
      <div className={styles.container}>
        <div className={styles.heading} data-aos="fade-down">
          <h1>Interactive Services Offered</h1>
        </div>
        <div className={`${styles["services-grid"]} ${styles.topMargin}`}>
          {ServicesData.map((val: ServiceItem, index: number) => (
            <div
              key={index}
              className={styles["service-box"]}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Adding delay to animate services in sequence
            >
              <div className={styles["service-img"]} data-aos="zoom-in">
                <img src={val.cover} alt={val.title} />
              </div>
              <div className={styles["service-text"]} data-aos="fade-up">
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
              <Link href="/get-quote" className={styles["primary-btn"]}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesBrief;

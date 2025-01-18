'use client';

import { useEffect } from "react";
import { useRouter } from "next/router"; // Next.js router
import ServicesData from "@/lib/data/ServicesData";
import styles from "@/styles/pages/services.module.scss"; // Assuming SCSS file is converted to module
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const router = useRouter(); // Use Next.js's useRouter

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,
      once: true, // Ensure animation triggers once per element
    });

    // Refresh AOS animations whenever the route changes
    AOS.refresh();

    return () => {
      // Refresh AOS every time the component unmounts (if needed)
      AOS.refresh();
    };
  }, [router.pathname]); // Trigger AOS refresh when the route changes

  return (
    <section className={styles.services} id="Services">
      <div className="container">
        <div className="heading" data-aos="fade-down">
          <h1>Interactive Services Offered</h1>
        </div>
        <div className={`${styles.servicesGrid} topMargin`}>
          {ServicesData.map((val, index) => (
            <div
              key={index}
              className={styles.serviceBox}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Adding delay to animate services in sequence
            >
              <div className={styles.serviceImg} data-aos="zoom-in">
                <img src={val.cover} alt={val.title} />
              </div>
              <div className={styles.serviceText} data-aos="fade-up">
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
              </div>
              <Link href="/get-quote">
                <a className={styles.primaryBtn}>Get Started</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

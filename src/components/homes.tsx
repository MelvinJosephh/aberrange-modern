"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import companiesData from "../lib/data/companiesData";
import styles from "@/styles/components/homes.module.scss";

const Homes: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [currentWord, setCurrentWord] = useState<string>("Smart");
  const router = useRouter();

  const handleProceed = () => {
    if (selectedOption) {
      router.push(selectedOption);
    } else {
      alert("Please select an option before proceeding!");
    }
  };

  useEffect(() => {
    const words = ["Smart", "Simple", "Seamless"];
    let wordIndex = 0;

    const interval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setCurrentWord(words[wordIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.home}>
      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className={styles.content}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className={styles.brandPromise}
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className={styles.dynamicWord}
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {currentWord}
            </motion.span>
            <span className={styles.solutions}> Solutions</span>
          </motion.h1>
          <p className={styles.intro}>
            At AberRange, we redefine innovation with cutting-edge solutions in
            technology, branding, and more. Let’s shape your future together.
          </p>
          <div className={styles.ctaContainer}>
            <button
              className={styles.primaryBtn}
              onClick={() => router.push("/our-solutions")}
            >
              Explore Our Solutions
            </button>
          </div>
        </motion.div>

        <motion.div
          className={styles.dropdownContainer}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <label htmlFor="serviceDropdown" className={styles.prompt}>
            What would you like to do today?
          </label>
          <div className={styles.dropdownAndProceed}>
            <select
              id="serviceDropdown"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className={styles.dropdown}
            >
              <option value="" disabled>
                Hire Academic Writer
              </option>
              {companiesData.map((company) => (
                <option key={company.id} value={company.link}>
                  {company.name}
                </option>
              ))}
            </select>
            <button className={styles.ctaBtn} onClick={handleProceed}>
              Proceed
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Homes;

"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/pages/our-solutions.module.scss";
import {
  servicesData as initialServicesData,
  Item,
} from "@/lib/models/services-model";
import ItemDetail from "../modal-pages/item-details";
import { useRouter } from "next/navigation";
import Image from "next/image";

const OurSolutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const [servicesData, setServicesData] = useState(initialServicesData);
  const router = useRouter();

  useEffect(() => {
    setServicesData(initialServicesData);
  }, []);

  const toggleCategory = (categoryIndex: number) => {
    setActiveCategory((prev) =>
      prev === categoryIndex ? null : categoryIndex
    );
  };

  const handleItemClick = (item: Item) => {
    setActiveItem(item);
  };

  const handleActionClick = () => {
    closeItemDetail();
    router.push("/hire-talent/step2");
  };

  const closeItemDetail = () => {
    setActiveItem(null);
  };

  return (
    <section className={styles.ourSolutions}>
      <div className={styles.container}>
        <header className={styles.solutionsHeader}>
          <h1 className={styles.sectionTitle}>Our Solutions</h1>
          <p className={styles.sectionIntro}>
            Discover the wide range of solutions we offer to empower your business.
          </p>
        </header>

        <section className={styles.engagementModels}>
          <h2 className={styles.sectionSubtitle}>Engagement Models</h2>
          <div className={styles.cardsGrid}>
            {servicesData.engagementModels.map((model, index) => (
              <article className={styles.card} key={index}>
                <Image
                  src={model.icon || "/placeholder-icon.png"}
                  alt={model.title || "Default Title"}
                  className={styles.cardIcon}
                  width={100}
                  height={100}
                />
                <h3 className={styles.cardTitle}>{model.title}</h3>
                <p className={styles.cardDescription}>{model.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.categories}>
          {servicesData.categories.map((category, index) => (
            <div
              className={`${styles.category} ${
                activeCategory === index ? styles.active : ""
              }`}
              key={index}
            >
              <header
                className={styles.categoryHeader}
                onClick={() => toggleCategory(index)}
              >
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <button
                  className={styles.toggleBtn}
                  aria-expanded={activeCategory === index}
                >
                  {activeCategory === index ? "-" : "+"}
                </button>
              </header>
              {activeCategory === index && (
                <div className={styles.subcategoryList}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <article className={styles.subcategory} key={subIndex}>
                      <h3 className={styles.subcategoryTitle}>{subcategory.title}</h3>
                      <ul className={styles.subcategoryItems}>
                        {subcategory.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={styles.subcategoryItem}
                            onClick={() => handleItemClick(item)}
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {activeItem && (
          <div className={styles.itemDetailModal}>
            <ItemDetail
              title={activeItem.name}
              description={activeItem.description}
              actionLabel="Hire Talent"
              onActionClick={handleActionClick}
            />
          </div>
        )}

        <footer className={styles.cta}>
          <h2>{servicesData.footer.title}</h2>
          <p>{servicesData.footer.description}</p>
          <a className={styles.primaryBtn} href="/contact">
            {servicesData.footer.buttonLabel}
          </a>
        </footer>
      </div>
    </section>
  );
};

export default OurSolutions;

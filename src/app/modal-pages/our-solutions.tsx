'use client';

import React, { useState } from "react";
import styles from "@/styles/pages/solutions.module.scss"; // Using CSS module
import { servicesData } from "@/lib/models/services-model";
import ItemDetail from "./item-details"; // Import the new component
import Link from "next/link"; // Use Next.js's Link component
import { useRouter } from 'next/navigation';  

type Item = {
  name: string;
  description: string;
};

const OurSolutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<Item | null>(null); // Store the active item for details
  const router = useRouter();

  const toggleCategory = (categoryIndex: number) => {
    setActiveCategory((prev) => (prev === categoryIndex ? null : categoryIndex));
  };

  const handleItemClick = (item: Item) => {
    setActiveItem(item); // Directly set the clicked item as the active item
  };

  const handleActionClick = () => {
    closeItemDetail();
    router.push('/hire-talent/step2'); // Navigate using Next.js's router
  };

  const closeItemDetail = () => {
    setActiveItem(null); // Close the item detail modal
  };

  return (
    <section className={styles.ourSolutions}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Our Solutions</h1>
        <p className={styles.sectionIntro}>
          Discover the wide range of solutions we offer to empower your business.
        </p>

        {/* Engagement Models */}
        <div className={styles.engagementModels}>
          <h2>Engagement Models</h2>
          <div className={styles.cards}>
            {servicesData.engagementModels.map((model, index) => (
              <div className={styles.card} key={index}>
                <img src={model.icon} alt={model.title} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{model.title}</h3>
                <p className={styles.cardDescription}>{model.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className={styles.categories}>
          {servicesData.categories.map((category, index) => (
            <div
              className={`${styles.categoryCard} ${activeCategory === index ? styles.active : ""}`}
              key={index}
            >
              <div className={styles.categoryHeader} onClick={() => toggleCategory(index)}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <span className={styles.toggleIcon}>
                  {activeCategory === index ? "-" : "+"}
                </span>
              </div>
              {activeCategory === index && (
                <div className={styles.subcategoryList}>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className={styles.subcategory} key={subIndex}>
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
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show Item Detail if activeItem is not null */}
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

        {/* Footer CTA */}
        <div className={styles.cta}>
          <h2>{servicesData.footer.title}</h2>
          <p>{servicesData.footer.description}</p>
          <Link href="/contact">
            <a className={styles.primaryBtn}>{servicesData.footer.buttonLabel}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;

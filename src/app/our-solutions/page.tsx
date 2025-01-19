'use client';

import React, { useState, useEffect } from "react";
import "@/styles/pages/our-solutions.module.scss";
import { servicesData as initialServicesData, Item  } from "@/lib/models/services-model";
import ItemDetail from "../modal-pages/item-details";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const OurSolutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<Item | null>(null);
  const [servicesData, setServicesData] = useState(initialServicesData);
  const router = useRouter();

  useEffect(() => {
    // Ensure consistent data for hydration
    setServicesData(initialServicesData);
  }, []);

  const toggleCategory = (categoryIndex: number) => {
    setActiveCategory((prev) => (prev === categoryIndex ? null : categoryIndex));
  };

  const handleItemClick = (item: Item) => {
    setActiveItem(item);
  };

  const handleActionClick = () => {
    closeItemDetail();
    router.push('/hire-talent/step2');
  };

  const closeItemDetail = () => {
    setActiveItem(null);
  };

  return (
    <section className="our-solutions">
      <div className="container">
        <h1 className="section-title">Our Solutions</h1>
        <p className="section-intro">
          Discover the wide range of solutions we offer to empower your business.
        </p>

        <div className="engagement-models">
          <h2>Engagement Models</h2>
          <div className="cards">
            {servicesData.engagementModels.map((model, index) => (
              <div className="card" key={index}>
                <Image
                  src={model.icon || "/placeholder-icon.png"}
                  alt={model.title || "Default Title"}
                  className="card-icon"
                  width={100}
                  height={100}
                />
                <h3 className="card-title">{model.title}</h3>
                <p className="card-description">{model.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="categories">
          {servicesData.categories.map((category, index) => (
            <div
              className={`category-card ${activeCategory === index ? "active" : ""}`}
              key={index}
            >
              <div className="category-header" onClick={() => toggleCategory(index)}>
                <h2 className="category-title">{category.title}</h2>
                <span className="toggle-icon">
                  {activeCategory === index ? "-" : "+"}
                </span>
              </div>
              {activeCategory === index && (
                <div className="subcategory-list">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className="subcategory" key={subIndex}>
                      <h3 className="subcategory-title">{subcategory.title}</h3>
                      <ul className="subcategory-items">
                        {subcategory.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="subcategory-item"
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

        {activeItem && (
          <div className="item-detail-modal">
            <ItemDetail
              title={activeItem.name}
              description={activeItem.description}
              actionLabel="Hire Talent"
              onActionClick={handleActionClick}
            />
          </div>
        )}

        <div className="cta">
          <h2>{servicesData.footer.title}</h2>
          <p>{servicesData.footer.description}</p>
          <a className="primary-btn" href="/contact">{servicesData.footer.buttonLabel}</a>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;

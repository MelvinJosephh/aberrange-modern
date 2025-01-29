'use client';
import React, { useState } from 'react';
import { servicesData } from '../lib/models/services-model';

const ServicesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof servicesData.categories | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-wrapper">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Services {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="service-categories">
            {servicesData.categories.map((category, index) => (
              <li key={index} onClick={() => setSelectedCategory(category.title)}>
                {category.title}
              </li>
            ))}
          </ul>
          {selectedCategory && (
            <div className="subcategories">
              {servicesData.categories.find(cat => cat.title === selectedCategory)?.subcategories.map((subcat, index) => (
                <div key={index} onClick={() => setSelectedSubcategory(subcat.title)}>
                  <h4>{subcat.title}</h4>
                  <ul>
                    {subcat.items.map((item, i) => (
                      <li key={i}>
                        <strong>{item.name}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
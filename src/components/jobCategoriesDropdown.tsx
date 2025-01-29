'use client';
import React, { useState } from 'react';
import { data, descriptions } from '../lib/models/hire-talent-model';
import styles from '../styles/styles.module.scss'; 

const JobCategoriesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-wrapper">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Hire Talent {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="categories">
            {Object.keys(data).map(category => (
              <li key={category} onClick={() => setActiveCategory(category)}>
                {category}
              </li>
            ))}
          </ul>
          {activeCategory && (
            <div className="category-details">
              <h3>{activeCategory}</h3>
              <p>{descriptions[activeCategory]}</p>
              <ul className="job-roles">
                {data[activeCategory].map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobCategoriesDropdown;
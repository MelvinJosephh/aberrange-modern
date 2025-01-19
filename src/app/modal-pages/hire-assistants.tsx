'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '@/styles/modal-pages/hire-assistants.module.scss';
import categories from '@/lib/data/skills/assistantsData';
import { useRouter } from 'next/navigation';  

const HireAssistants: React.FC = () => {
  const [showPage, setShowPage] = useState(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);  // Store the selected item for modal details
  const router = useRouter();  // Hook for navigation

  const closePage = () => {
    setShowPage(false);
  };

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);  // Set the selected item for the modal
  };

  const closeItemDetail = () => {
    setActiveItem(null);  // Close the modal
  };

  const handleActionClick = () => {
    closeItemDetail();  // Close the item detail modal
    router.push('/hire-talent/step2');  // Navigate to the hire assistant process
  };

  if (!showPage) return null;

  return (
    <div className="hire-assistants-page">
      <div className="header-section">
        <h1>Hire Assistants</h1>
        <CloseIcon className="close-icon" onClick={closePage} />
      </div>

      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div
              className="category-header"
              onClick={() => toggleCategory(index)}
            >
              <h2>{category.title}</h2>
              <span>{activeCategory === index ? '-' : '+'}</span>
            </div>
            {activeCategory === index && (
              <ul className="category-items">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleItemClick(item)}  // Open modal with clicked item
                  >
                    <a href={`#${item.replace(/ /g, '-').toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Show Item Detail Modal if activeItem is selected */}
      {activeItem && (
        <div className="item-detail-modal">
          <div className="modal-content">
            <CloseIcon className="close-icon" onClick={closeItemDetail} />
            <h4>{activeItem}</h4>
            <p>Details about the selected assistant role will be shown here.</p>
            <button className="primary-btn" onClick={handleActionClick}>
              Hire Assistant
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HireAssistants;

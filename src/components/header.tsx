import React from 'react';
import IndustriesDropdown from './industriesDropdown';
import ServicesDropdown from './servicesDropdown';
import JobCategoriesDropdown from './jobCategoriesDropdown';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div>Your Company Name</div>
        <div>
          <JobCategoriesDropdown />
          <ServicesDropdown />
          <IndustriesDropdown /> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
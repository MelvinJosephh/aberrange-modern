'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import IndustriesDropdown from './industriesDropdown';
import ServicesDropdown from './servicesDropdown';
import JobCategoriesDropdown from './jobCategoriesDropdown';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-primary mb-4 md:mb-0">
          <Link href="/">Aberrange</Link>
        </div>

        {/* Desktop Dropdowns */}
        <div className="w-full md:w-auto md:flex-grow flex justify-center md:justify-start">
          <div className="flex-grow hidden md:flex space-x-4">
            <JobCategoriesDropdown />
            <ServicesDropdown />
            <IndustriesDropdown />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdowns */}
        {isOpen && (
          <div className="md:hidden w-full flex flex-col items-center space-y-3 pt-4">
            <JobCategoriesDropdown />
            <ServicesDropdown />
            <IndustriesDropdown />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
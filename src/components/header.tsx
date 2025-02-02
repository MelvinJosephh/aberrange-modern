'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu
import IndustriesDropdown from './industriesDropdown';
import ServicesDropdown from './servicesDropdown';
import JobCategoriesDropdown from './jobCategoriesDropdown';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          <Link href="/">Aberrange</Link>
        </div>

        {/* Desktop Dropdowns (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          <JobCategoriesDropdown />
          <ServicesDropdown />
          <IndustriesDropdown />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdowns */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-6 pb-4">
          <JobCategoriesDropdown />
          <ServicesDropdown />
          <IndustriesDropdown />
        </div>
      )}
    </header>
  );
};

export default Header;

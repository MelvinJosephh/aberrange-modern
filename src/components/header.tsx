// src/components/Header.tsx
import React from 'react';
import { Dropdown } from '../components/dropdown';
import { JobCategory, JobDescription } from '../lib/models/services-model';

interface HeaderProps {
  data?: JobCategory;
  descriptions?: JobDescription;
}

export const Header: React.FC<HeaderProps> = ({ data, descriptions }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Your Brand</div>
        <Dropdown data={data} descriptions={descriptions} />
      </nav>
    </header>
  );
};
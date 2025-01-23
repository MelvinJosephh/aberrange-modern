// src/types/DropdownData.ts
export interface DropdownItem {
    name: string;
    description: string;
  }
  
  export interface DropdownSubcategory {
    title: string;
    items: DropdownItem[];
  }
  
  export interface DropdownCategory {
    title: string;
    subcategories: DropdownSubcategory[];
  }
  
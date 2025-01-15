"use client";

import { useState } from 'react';

// Custom hook for managing sidebar state
export const useSidebar = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);  // Type the state as a boolean

  const toggleSidebar = (state?: boolean) => {
    setSidebar(state !== undefined ? state : !sidebar); // Toggle or set explicitly
  };

  return { sidebar, toggleSidebar };
};

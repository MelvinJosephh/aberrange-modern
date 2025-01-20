'use client';

import { HireTalentProvider } from './context/hire-talent-context';

export default function HireTalentLayout({ children }: { children: React.ReactNode }) {
  return <HireTalentProvider>{children}</HireTalentProvider>;
}

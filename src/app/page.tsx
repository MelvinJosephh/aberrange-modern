// src/app/page.tsx
import Branding from '@/components/branding';
import ValueProposition from '@/components/value-proposotion';
import HowItWorks from '@/components/howItWorks';
import UseCases from '@/components/useCases';
import Testimonials from '@/components/testimonials';
import CtaBanner from '@/components/CtaBanner';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <div>
      <Hero />             
      <Branding/>
      <ValueProposition />        
      <HowItWorks />           
     <UseCases/>
     <Testimonials/>
     <CtaBanner/>
    </div>
  );
}

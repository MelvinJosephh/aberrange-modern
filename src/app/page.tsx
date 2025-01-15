// src/app/page.tsx
import Homes from '@/components/homes';
import Wrapper from '@/components/wrapper';
import WrapperOne from '@/components/wrapper-one';
import IndustriesBrief from '@/components/industries-brief';
import Modal from '@/components/modal';

export default function HomePage() {
  return (
    <div>
      <Homes />             {/* Hero Section or Intro */}
      <Wrapper />           {/* Some informative content */}
      <WrapperOne />        {/* Secondary informative content */}
      <IndustriesBrief />   {/* Showcase industries served */}
      <Modal />             {/* Call-to-action or newsletter modal */}
    </div>
  );
}

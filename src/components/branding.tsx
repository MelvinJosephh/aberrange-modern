// src/components/Branding.tsx
'use client';

import React, { useRef, useState } from 'react';
import styles from '@/styles/components/branding.module.scss';
import { motion, useDragControls } from 'framer-motion';

// Material Icons
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'; // For AI Automation
import ComputerIcon from '@mui/icons-material/Computer'; // For Tech/IT
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'; // For Admin
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // For Finance
import BarChartIcon from '@mui/icons-material/BarChart'; // For Research

const Branding: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [showDragHandle, setShowDragHandle] = useState(false);
  const dragControls = useDragControls();
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
  };

  // Function to handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Service data
  const services = [
    {
      title: 'AI-Powered Business Automation',
      description: 'Automate workflows with cutting-edge AI and RPA to boost efficiency.',
      icon: <AutoFixHighIcon className={styles.serviceIcon} />,
    },
    {
      title: 'Tech & IT Virtual Assistance',
      description: 'Expert support for your tech stack and infrastructure.',
      icon: <ComputerIcon className={styles.serviceIcon} />,
    },
    {
      title: 'Admin & Executive Assistance',
      description: 'Seamless solutions to free up your time for strategic focus.',
      icon: <AssignmentIndIcon className={styles.serviceIcon} />,
    },
    {
      title: 'Finance & Bookkeeping',
      description: 'Precision financial management for your business.',
      icon: <AccountBalanceIcon className={styles.serviceIcon} />,
    },
    {
      title: 'Research & Analysis',
      description: 'Data-driven insights and expert writing for smarter decisions.',
      icon: <BarChartIcon className={styles.serviceIcon} />,
    },
  ];

  return (
    <section
      className={styles.services}
      onMouseEnter={() => setShowDragHandle(true)}
      onMouseLeave={() => setShowDragHandle(false)}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Core Services</h2>
        <p className={styles.sectionSubtitle}>
          Discover how Aberrange empowers your business with innovative solutions.
        </p>

        {/* Drag Handle (Visible on Hover) */}
        {showDragHandle && (
          <motion.div
            className={styles.dragHandle}
            onPointerDown={(e) => dragControls.start(e)}
            whileHover={{ scale: 1.1 }}
            style={{ opacity: isDragging ? 1 : 0.8 }}
          >
            Drag Me
          </motion.div>
        )}

        {/* Carousel */}
        <motion.div
          className={styles.carousel}
          ref={carouselRef}
          drag="x"
          dragControls={dragControls}
          dragConstraints={{ left: -1000, right: 1000 }} // Adjust based on content width
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: 'grabbing' }}
        >
          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <a href="/services" className={styles.exploreLink}>
          Explore All Services →
        </a>
      </div>
    </section>
  );
};

export default Branding;
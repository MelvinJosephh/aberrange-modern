"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/components/modal.module.scss";

// SkillCard Component to display individual skills
const SkillCard: React.FC<{ skill: { title: string; description: string } }> = ({ skill }) => {
  return (
    <div className={styles["skill-card"]}>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <Link href="/hire-talent/step1" className={styles["primary-btn"]}>
        Hire Talent
      </Link>
    </div>
  );
};

// SkillCategory Component to group skills under a category
const SkillCategory: React.FC<{ category: string; skills: { title: string; description: string }[] }> = ({
  category,
  skills,
}) => {
  return (
    <div className={styles["skill-category"]}>
      <h2>{category}</h2>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
};

// Modal Component showcasing skills and categories
const Modal: React.FC = () => {
  // Skills categorized by frontend, backend, and full-stack
  const frontendSkills = [
    { title: "React JS", description: "Build responsive UIs with modern frontend technologies." },
    { title: "Next JS", description: "Fast server-side rendering with React-based framework." },
    { title: "HTML", description: "Create semantically structured and accessible web pages." },
    { title: "CSS", description: "Design beautiful and responsive layouts using CSS." },
  ];

  const backendSkills = [
    { title: "Node.js", description: "Build scalable backend systems with JavaScript." },
    { title: "Express.js", description: "Create RESTful APIs quickly and efficiently." },
  ];

  const fullStackSkills = [
    { title: "Full-Stack Development", description: "Complete end-to-end solutions using both frontend and backend technologies." },
  ];

  return (
    <section className={styles.skill}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Transform Your Vision with Our Expertise</h3>
          <h1>Skills that Empower Your Business</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Our Expertise</h2>
            <SkillCategory category="Frontend Development" skills={frontendSkills} />
            <SkillCategory category="Backend Development" skills={backendSkills} />
            <SkillCategory category="Full-Stack Development" skills={fullStackSkills} />
          </div>
          <div className={styles.right}>
            {/* This can be adjusted if you need to add extra information */}
            <div className={styles["additional-info"]}>
              <h1>Ready to Start?</h1>
              <p>Partner with us to create impactful and innovative solutions for your business.</p>
              <Link href="/hire-talent/step1" className={styles["primary-btn"]}>
                Hire Talent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;

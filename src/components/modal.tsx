"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/components/modal.module.scss";
import { skillsData } from "@/lib/data/skills/skillsData";

interface ProgressProps {
  done: number;
  title: string;
}

const Progress: React.FC<ProgressProps> = ({ done, title }) => {
  return (
    <div className={styles.progress}>
      <div className={styles["progress-done"]} style={{ opacity: 1, width: `${done}%` }}>
        <h4>{title}</h4>
        <h4>{done} %</h4>
      </div>
    </div>
  );
};

const Modal: React.FC = () => {
  return (
    <section className={styles.skill}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Why Choose Us</h3>
          <h1>Some of our best selling skills</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <Progress done={70} title="HTML" />
            <Progress done={80} title="PHP" />
            <Progress done={90} title="CSS" />
            <Progress done={90} title="JAVASCRIPT" />
            <Progress done={70} title="REACT JS" />
          </div>
          <div className={styles.right}>
            {skillsData.map((val, index) => (
              <div key={index}>
                <h1>{val.title}</h1>
                <p>{val.para}</p>
                <p>{val.para1}</p>
                <Link href="/hire-talent/step1" className={styles["primary-btn"]}>
                  Hire Talent
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;

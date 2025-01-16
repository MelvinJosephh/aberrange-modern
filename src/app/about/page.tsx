import React from "react";
import styles from "@/styles/pages/about.module.scss";
import whatWeDoData from "@/lib/data/AboutData"; // Adjust path based on your project structure

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1>{whatWeDoData.title}</h1>
        <p>{whatWeDoData.missionStatement}</p>
      </section>

      <section className={styles.section}>
        <h2>{whatWeDoData.solutionsSection.title}</h2>
        <p>{whatWeDoData.solutionsSection.description}</p>
      </section>

      <section className={styles.section}>
        <h2>{whatWeDoData.innovationSection.title}</h2>
        <p>{whatWeDoData.innovationSection.description}</p>
      </section>

      <section className={styles.section}>
        <h2>{whatWeDoData.sustainabilitySection.title}</h2>
        <p>{whatWeDoData.sustainabilitySection.description}</p>
      </section>

      <section className={styles.section}>
        <h2>{whatWeDoData.relationshipsSection.title}</h2>
        <p>{whatWeDoData.relationshipsSection.description}</p>
      </section>

      <section className={styles.difference}>
        <h2>{whatWeDoData.differenceSection.title}</h2>
        <ul>
          {whatWeDoData.differenceSection.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{whatWeDoData.transformationSection.title}</h2>
        <p>{whatWeDoData.transformationSection.description}</p>
      </section>

      <section className={styles.section}>
        <h2>{whatWeDoData.whyChooseUs.title}</h2>
        <ul>
          {whatWeDoData.whyChooseUs.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      <section className={styles.callToAction}>
        <h2>{whatWeDoData.callToAction.title}</h2>
        <p>{whatWeDoData.callToAction.description}</p>
        <button className={styles.button}>Get Started</button>
      </section>
    </div>
  );
};

export default AboutPage;

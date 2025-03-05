'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/pages/about.module.scss';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import whatWeDoData from '@/lib/data/AboutData';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/get-quote');
  };

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <h1 className={styles.title}>{whatWeDoData.title}</h1>
        <p className={styles.description}>{whatWeDoData.missionStatement.trim()}</p>
        <Button className={styles.ctaButton} onClick={handleGetStarted}>
          Get Started
        </Button>
      </header>

      {/* Solutions & Mission */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.subtitle}>{whatWeDoData.solutionsSection.title}</h2>
          <p className={styles.text}>{whatWeDoData.solutionsSection.description.trim()}</p>
        </div>
        <Separator className={styles.separator} />
      </section>

      {/* Innovation & Sustainability */}
      <section className={styles.sectionAlternate}>
        <div className={styles.contentGrid}>
          <div className={styles.gridItem}>
            <h3 className={styles.itemTitle}>{whatWeDoData.innovationSection.title}</h3>
            <p className={styles.text}>{whatWeDoData.innovationSection.description.trim()}</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.itemTitle}>{whatWeDoData.sustainabilitySection.title}</h3>
            <p className={styles.text}>{whatWeDoData.sustainabilitySection.description.trim()}</p>
          </div>
        </div>
        <Separator className={styles.separator} />
      </section>

      {/* Relationships & Transformation */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.subtitle}>{whatWeDoData.relationshipsSection.title}</h2>
          <p className={styles.text}>{whatWeDoData.relationshipsSection.description.trim()}</p>
        </div>
        <div className={styles.contentBlock}>
          <h2 className={styles.subtitle}>{whatWeDoData.transformationSection.title}</h2>
          <p className={styles.text}>{whatWeDoData.transformationSection.description.trim()}</p>
        </div>
        <Separator className={styles.separator} />
      </section>

      {/* The Aberrange Difference */}
      <section className={styles.differenceSection}>
        <h2 className={styles.subtitle}>{whatWeDoData.differenceSection.title}</h2>
        <div className={styles.differenceGrid}>
          {whatWeDoData.differenceSection.bulletPoints.map((point, index) => (
            <Card key={index} className={styles.differenceCard}>
              <CardContent className={styles.differenceContent}>
                <p className={styles.text}>{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className={styles.separator} />
      </section>

      {/* Why Choose Us */}
      <section className={styles.sectionAlternate}>
        <h2 className={styles.subtitle}>{whatWeDoData.whyChooseUs.title}</h2>
        <div className={styles.whyGrid}>
          {whatWeDoData.whyChooseUs.bulletPoints.map((point, index) => (
            <div key={index} className={styles.whyItem}>
              <p className={styles.text}>{point}</p>
            </div>
          ))}
        </div>
        <Separator className={styles.separator} />
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{whatWeDoData.callToAction.title}</h2>
        <p className={styles.ctaDescription}>{whatWeDoData.callToAction.description}</p>
        <Button asChild className={styles.ctaButton}>
          <Link href="/call-us">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
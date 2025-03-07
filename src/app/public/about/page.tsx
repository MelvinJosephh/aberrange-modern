"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import whatWeDoData from "@/lib/data/AboutData";
import Link from "next/link";

const AboutPage: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/get-quote");
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] py-12 px-4 sm:px-6 lg:px-8 pt-20">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-[var(--text-primary)] text-4xl md:text-5xl font-bold mb-4">
          {whatWeDoData.title}
        </h1>
        <p className="text-[var(--neutral-color)] text-lg md:text-xl max-w-2xl mx-auto">
          {whatWeDoData.missionStatement.trim()}
        </p>
        <Button
          onClick={handleGetStarted}
          className="mt-6 bg-[var(--interactive-color)] text-[var(--text-light)] hover:bg-[var(--interactive-hover)] rounded-[var(--border-radius-md)] py-2 px-6 text-lg font-medium"
        >
          Get Started
        </Button>
      </header>

      {/* Solutions & Mission */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="bg-[var(--secondary-color)] p-6 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
          <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-4">
            {whatWeDoData.solutionsSection.title}
          </h2>
          <p className="text-[var(--neutral-color)] text-base">
            {whatWeDoData.solutionsSection.description.trim()}
          </p>
        </div>
        <Separator className="my-8 bg-[var(--border-color-light)]" />
      </section>

      {/* Innovation & Sustainability */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--secondary-color)] p-6 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h3 className="text-[var(--neutral-color)] text-xl font-semibold mb-2">
              {whatWeDoData.innovationSection.title}
            </h3>
            <p className="text-[var(--neutral-color)] text-base">
              {whatWeDoData.innovationSection.description.trim()}
            </p>
          </div>
          <div className="bg-[var(--secondary-color)] p-6 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h3 className="text-[var(--neutral-color)] text-xl font-semibold mb-2">
              {whatWeDoData.sustainabilitySection.title}
            </h3>
            <p className="text-[var(--neutral-color)] text-base">
              {whatWeDoData.sustainabilitySection.description.trim()}
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-[var(--border-color-light)]" />
      </section>

      {/* Relationships & Transformation */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="space-y-8">
          <div className="bg-[var(--secondary-color)] p-6 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-4">
              {whatWeDoData.relationshipsSection.title}
            </h2>
            <p className="text-[var(--neutral-color)] text-base">
              {whatWeDoData.relationshipsSection.description.trim()}
            </p>
          </div>
          <div className="bg-[var(--secondary-color)] p-6 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]">
            <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-4">
              {whatWeDoData.transformationSection.title}
            </h2>
            <p className="text-[var(--neutral-color)] text-base">
              {whatWeDoData.transformationSection.description.trim()}
            </p>
          </div>
        </div>
        <Separator className="my-8 bg-[var(--border-color-light)]" />
      </section>

      {/* The Aberrange Difference */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-6 text-center">
          {whatWeDoData.differenceSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatWeDoData.differenceSection.bulletPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-[var(--secondary-color)] border-[var(--border-color-light)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]"
            >
              <CardContent className="p-4">
                <p className="text-[var(--neutral-color)] text-base">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-8 bg-[var(--border-color-light)]" />
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-6 text-center">
          {whatWeDoData.whyChooseUs.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeDoData.whyChooseUs.bulletPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[var(--secondary-color)] p-4 rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)]"
            >
              <p className="text-[var(--neutral-color)] text-base">{point}</p>
            </div>
          ))}
        </div>
        <Separator className="my-8 bg-[var(--border-color-light)]" />
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-[var(--secondary-color)] rounded-[var(--border-radius-md)] shadow-[var(--shadow-md)] max-w-4xl mx-auto">
        <h2 className="text-[var(--text-primary)] text-2xl md:text-3xl font-semibold mb-4">
          {whatWeDoData.callToAction.title}
        </h2>
        <p className="text-[var(--neutral-color)] text-lg mb-6 max-w-2xl mx-auto">
          {whatWeDoData.callToAction.description}
        </p>
        <Button
          asChild
          className="mt-6 bg-[var(--interactive-color)] text-[var(--text-light)] hover:bg-[var(--interactive-hover)] rounded-[var(--border-radius-md)] py-2 px-6 text-lg font-medium"
        >
          <Link href="/public/call-us">Contact Us Today</Link>
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
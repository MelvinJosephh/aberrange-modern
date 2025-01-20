"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/components/dropdown";
import styles from "@/styles/components/header.module.scss";
import { data, descriptions } from "@/lib/models/hire-talent-model";
import { industriesData } from "@/lib/models/industries-model";
import { servicesData } from "@/lib/models/services-model";
import companiesData from "@/lib/data/companiesData";
import talentData from "@/lib/data/talentData";

const Header = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>("Frontend");
  const [showDevAndButton, setShowDevAndButton] = useState(false);

  const unifiedButton = (label: string, link: string) => (
    <button className={styles.primaryBtn}>
      <Link href={link}>{label}</Link>
    </button>
  );

  const renderCompaniesContent = (items: any) => renderContent(items, "companies");
  const renderTalentContent = (items: any) => renderContent(items, "talent");

  const renderIndustriesContent = (items) => (
    <div className={styles.column}>
      {items.actions.map((action) => (
        <p key={action.name}>
          <Link href={action.link}>{action.name}</Link>
        </p>
      ))}
      {unifiedButton(items.button.label, items.button.link)}
    </div>
  );

  const renderServicesContent = (items) => (
    <div className={styles.column}>
      {items.engagementModels.map((service) => (
        <p key={service.title}>
          <Link href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}>
            {service.title}
          </Link>
        </p>
      ))}
      {unifiedButton("View All Services", "/services")}
    </div>
  );

  const renderContent = (items, type) => (
    <div className={styles.column}>
      {items.map((item) => (
        <p key={item.name || item.title}>
          <Link href={item.link || `/services/${item.title.toLowerCase().replace(/ /g, "-")}`}>
            {item.name || item.title}
          </Link>
        </p>
      ))}
      {type === "industries" && unifiedButton("View All Services", "/services")}
    </div>
  );

  const renderHireContent = () => (
    <div className={styles.column}>
      {!showDevAndButton ? (
        Object.keys(data).map((area) => (
          <p
            key={area}
            className={selectedArea === area ? styles.active : ""}
            onClick={() => {
              setSelectedArea(area);
              setShowDevAndButton(true);
            }}
          >
            {area}
          </p>
        ))
      ) : (
        <>
          <div className={styles.column}>
            {data[selectedArea]?.map((dev) => (
              <p
                key={dev}
                onClick={() => {
                  setSelectedDeveloper(dev);
                  setShowDevAndButton(true);
                }}
                className={selectedDeveloper === dev ? styles.active : ""}
              >
                {dev}
              </p>
            ))}
          </div>
          <div className={styles.column}>
            <h3>{selectedDeveloper || selectedArea} Developer</h3>
            <p>{descriptions[selectedArea]}</p>
            {unifiedButton(`Hire ${selectedDeveloper || selectedArea}`, "/hire-talent/step2")}
          </div>
          <button
            className={styles.resetSelectionBtn}
            onClick={() => {
              setSelectedDeveloper(null);
              setShowDevAndButton(false);
            }}
          >
            Reset Selection
          </button>
        </>
      )}
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/assets/logo/aberrange-logo-themed.png"
              alt="Aberrange Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>
        <nav className={styles.navLinks}>
          <ul>
            <li>
              <Dropdown title="For Companies" items={companiesData} renderContent={renderCompaniesContent} />
            </li>
            <li>
              <Dropdown title="For Talent" items={talentData} renderContent={renderTalentContent} />
            </li>
            <li>
              <Link href="/about">What we do</Link>
            </li>
            <li>
              <Dropdown title="Industries" items={industriesData} renderContent={renderIndustriesContent} />
            </li>
            <li>
              <Dropdown title="Services" items={servicesData} renderContent={renderServicesContent} />
            </li>
            <li>
              <Dropdown title="Hire Talent" items={data} renderContent={renderHireContent} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

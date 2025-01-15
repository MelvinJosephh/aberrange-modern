"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "@/components/use-sidebar";
import Dropdown from "@/components/dropdown";
import styles from "@/styles/components/header.module.scss";
import { data, descriptions } from "@/lib/models/hire-talent-model";
import { industriesData } from "@/lib/models/industries-model";
import { servicesData } from "@/lib/models/services-model";
import companiesData from "@/lib/data/companiesData";
import talentData from "@/lib/data/talentData";

const Header = () => {
  const { sidebar, toggleSidebar } = useSidebar();
  const [selectedDeveloper, setSelectedDeveloper] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string>("Frontend");
  const [showDevAndButton, setShowDevAndButton] = useState(false);

  const unifiedButton = (label: string, link: string) => (
    <button className={styles.primaryBtn}>
      <Link href={link}>{label}</Link>
    </button>
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
              height={50}
              priority
            />
          </Link>
        </div>
        <div className={sidebar ? `${styles.navLinksSidebar} ${styles.active}` : styles.navLinksSidebar}>
          <ul>
            <li>
              <Dropdown title="For Companies" items={companiesData} />
            </li>
            <li>
              <Dropdown title="For Talent" items={talentData} />
            </li>
            <li>
              <Link href="/about">What we do</Link>
            </li>
            <li>
              <Dropdown title="Industries" items={industriesData} />
            </li>
            <li>
              <Dropdown title="Services" items={servicesData} />
            </li>
            <li>
              <Dropdown title="Hire Talent" items={data} renderContent={renderHireContent} />
            </li>
          </ul>
        </div>
        <button className={styles.navbarItemsIcon} onClick={() => toggleSidebar(!sidebar)}>
          {sidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;

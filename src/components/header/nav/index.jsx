'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Doctors",
    href: "/#doctors",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const Index = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link key={index} data={{ ...data, index }} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Index;

'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])
const headerLinks=[
  {
    title:'About',
    href:'/#about',
  },
  {
    title:'Services',
    href:'/#services',
  },
  {
    title:'Doctors',
    href:'/#doctors',
  },
  {
    title:'Book Appointment',
    href:'/#contact',
  },
  {
    title:'Contact Us',
    href:'/#contact',
  },
]
  return (
    <>
    <div className={styles.main}>
      <div className={styles.linkContainer}>
      <h1>TranquilMed</h1>
      <div className={`${styles.headerLinks} xs:hidden sm:hidden md:hidden lg:block xl:block`}>
      {headerLinks.map((link, i) => (
          <a key={`${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
      </div>
      <div className={`${styles.header} xs:block sm:block md:block lg:hidden xl:hidden`}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
  </div>
      </div>
     
   

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}

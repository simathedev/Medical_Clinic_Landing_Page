'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat,FaAmbulance } from "react-icons/fa";
import { FaUserDoctor,FaCalendarDays } from "react-icons/fa6";
import styles from './style.module.scss';


export default function Index() {
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className={styles.main}>
      <div className={`${styles.menuContainer} xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap xs:w-[94%] sm:w-[94%] md:w-[80%] lg:w-[90%] xl:w-[90%]`}>
        <motion.div variants={itemVariants} initial="initial" animate="animate" className={`${styles.itemContainerMain} shadow-xl xs:h-[160px] xs:w-[45%] md:w-[45%]`}>
          <div className={`${styles.itemContainer} `}>
            <FaCalendarDays />
            <h3 className={`xs:text-[14px] sm:text-[14px] md:text-[22px] lg:text-[22px] xl:text-[24px]`}>Consultation</h3>
            <p className="xs:text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} initial="initial" animate="animate" className={`${styles.itemContainerMain} shadow-xl xs:h-[160px] xs:w-[45%] md:w-[45%]`}>
          <div className={`${styles.itemContainer}`}>
            <FaUserDoctor />
            <h3 className={`xs:text-[14px] sm:text-[14px] md:text-[22px] lg:text-[22px] xl:text-[24px]`}>Expert Doctors</h3>
            <p className="xs:text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} initial="initial" animate="animate" className={`${styles.itemContainerMain} shadow-xl xs:h-[160px] xs:w-[45%] md:w-[45%]`}>
          <div className={`${styles.itemContainer} `}>
            <FaHeartbeat />
            <h3 className={`xs:text-[14px] sm:text-[14px] md:text-[22px] lg:text-[22px] xl:text-[24px]`}>Emergency Care</h3>
            <p className="xs:text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} initial="initial" animate="animate" className={`${styles.itemContainerMain} shadow-xl xs:h-[160px] xs:w-[45%] md:w-[45%]`}>
          <div className={`${styles.itemContainer} `}>
            <FaAmbulance />
            <h3 className={`xs:text-[14px] sm:text-[14px] md:text-[22px] lg:text-[22px] xl:text-[24px]`}>Ambulance Service</h3>
            <p className="xs:text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
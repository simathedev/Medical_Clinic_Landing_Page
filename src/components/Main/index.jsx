'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import Menu from './Menu';
import styles from './style.module.scss';
import { TbActivityHeartbeat } from 'react-icons/tb';

function Index() {
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className={styles.main}>
      <div className={styles.backgroundImage} />
      <div className={styles.content}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.favicon}
        >
          <TbActivityHeartbeat />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${styles.title} xs:text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[5rem]`}
        >
          TranquilMed Clinic
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`${styles.description} xs:text-[0.9rem] sm:text-[0.9rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.4rem]`}
        >
          Your Trusted Partner In Health And Wellness
        </motion.p>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          className={`${styles.formButton} shadow-xl xs:text-[17px] sm:text-[17px] md:text-[20px] lg:text-[20px] xl:text-[20px]`}
        >
          Make An Appointment
        </motion.button>
        <Stats />
        <Menu />
      </div>
    </div>
  );
}

export default Index;

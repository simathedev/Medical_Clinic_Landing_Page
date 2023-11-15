import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Index() {
  const statsVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className={styles.main}>
      <div className={`${styles.statsContainer} xs:w-[40%] sm:w-[40%] md:w-[70%] lg:w-[80%] xl:w-[80%]`}>
        <motion.div variants={statsVariants} initial="initial" animate="animate" className={styles.statContainer1}>
          <h3 className='xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem]'>4+</h3>
          <p className='xs:text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]'>Expert Doctors</p>
        </motion.div>
        <motion.div variants={statsVariants} initial="initial" animate="animate" className={styles.statContainer}>
          <h3 className='xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem]'>2k+</h3>
          <p className='xs:text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]'>Happy Patients</p>
        </motion.div>
        <motion.div variants={statsVariants} initial="initial" animate="animate" className={styles.statContainer}>
          <h3 className='xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem]'>50+</h3>
          <p className='xs:text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.4rem]'>Notable Awards</p>
        </motion.div>
      </div>
    </div>
  );
}
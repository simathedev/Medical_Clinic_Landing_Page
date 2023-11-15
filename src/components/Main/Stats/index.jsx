import React from 'react';
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.main}>
        <div className={`${styles.statsContainer} xs:w-[40%] sm:w-[40%] md:w-[70%] lg:w-[80%] xl:w-[80%]`}>
        <div className={styles.statContainer1}>
           <h3 className='xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:[2rem]'>
            4+
           </h3>
           <p className='xs:text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:[1.4rem]'>
            Expert Doctors</p>
           </div>
           <div className={styles.statContainer}>
           <h3 className='xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:[2rem]'>
            2k+
            </h3>
            <p className='xs:text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:[1.4rem]'>
              Happy Patients</p>
           </div>
           <div className={styles.statContainer}>
           <h3 className='xs:text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2rem] xl:[2rem]'>
            50+
            </h3>
            <p className='xs:text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:[1.4rem]'>
              Notable Awards
              </p>
        </div>
        </div>
    </div>
  )
}

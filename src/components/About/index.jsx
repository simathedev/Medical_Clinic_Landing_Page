'use client';
import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import {motion} from 'framer-motion';
import { FaHandHoldingMedical,FaDna,FaHeartbeat } from "react-icons/fa";


function index() {
  return (
    <div className={`${styles.main}`}>
        <div className={`${styles.container}`}>
        <h1 className={`${styles.aboutTitle} xs:text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]`}>About TranquilMed</h1>
        <div className={`${styles.aboutContainer} xs:w-[80%] sm:w-[80%] md:w-full lg:w-[70%] xl:w-[70%] bg-[#012a4a] shadow-xl xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:my-4 sm:my-2 md:my-0 lg:my-0 xl:my-0`}>
        <Image
              src={`/images/about4.jpg`}
              alt={'alt images'}
              width={400} 
              height={100}
              className={styles.productImage}
            />
              <div className='flex flex-col items-center text-center mt-[1.5rem]'>
              <FaHandHoldingMedical />
              <h1 className={`${styles.descriptionTitle} py-4 text-[1.2rem]  `}>Expert Care Tailored</h1>
        <p className={`${styles.aboutDescription}  xs:py-4 sm:py-4 md:py-0 lg:py-0 xl:py-0 px-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas magni repellendus dolorem sint, facere natus fugiat facilis beatae ab vero.</p>
              </div>
          </div>
        <div className={`${styles.aboutContainer} xs:w-[80%] sm:w-[80%] md:w-full lg:w-[70%] xl:w-[70%] bg-[#2a6f97] shadow-xl xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row xs:my-4 sm:my-2 md:my-0 lg:my-0 xl:my-0`}>
       <div className='flex flex-col items-center text-center mt-[1.5rem]'>
       <FaDna />
       <h1 className={`${styles.descriptionTitle} py-4 text-[1.2rem] `}>Advanced Technology Integration</h1>
        <p className={`${styles.aboutDescription} xs:py-4 sm:py-4 md:py-0 lg:py-0 xl:py-0 px-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores provident repudiandae saepe maxime nobis quis sunt perferendis temporibus corrupti.</p>
       </div>
       <Image
              src={`/images/about5.jpg`}
              alt={`alt images`}
              width={400} 
              height={200} 
              className={styles.productImage}
            />
        </div>
        <div className={`${styles.aboutContainer} xs:w-[80%] sm:w-[80%] md:w-full lg:w-[70%] xl:w-[70%] bg-[#012a4a] shadow-xl xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row xs:my-4 sm:my-2 md:my-0 lg:my-0 xl:my-0`}>
        <Image
              src={`/images/about2.jpg`}
              alt={`alt images`}
              width={400} 
              height={200}
              className={styles.productImage}
            />
            <div className='flex flex-col items-center text-center  mt-[1.5rem]'>
            <FaHeartbeat />
            <h1 className={`${styles.descriptionTitle} py-4 text-[1.2rem]`}>Holistic Wellness Care</h1>
        <p className={`${styles.aboutDescription}  xs:py-4 sm:py-4 md:py-0 lg:py-0 xl:py-0 px-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam doloremque cupiditate modi quidem iusto dicta nisi beatae.</p>
            </div>
       </div>
        </div>
    </div>
  )
}

export default index
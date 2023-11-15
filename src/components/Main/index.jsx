import React from 'react';
import Stats from './Stats';
import Menu from './Menu';
import styles from './style.module.scss';
import { TbActivityHeartbeat } from "react-icons/tb";

function Index() {
  return (
    <div className={styles.main}>
      <div className={styles.backgroundImage}/>
      <div className={styles.content}>
        <div className={styles.favicon}>
        <TbActivityHeartbeat />
        </div>
        <h1 className={`${styles.title} xs:text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[5rem] xl:text-[5rem]`}>TranquilMed Clinic</h1>
        <p className={`${styles.description} xs:text-[0.9rem] sm:text-[0.9rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.4rem]`}>Your Trusted Partner In Health And Wellness</p>
        <button className={`${styles.formButton} shadow-xl xs:text-[17px] sm:text-[17px] md:text-[20px] lg:text-[20px] xl:text-[20px]`} >Make An Appointment</button>
        <Stats/>
        <Menu/>
        </div>
    </div>
  );
}

export default Index;
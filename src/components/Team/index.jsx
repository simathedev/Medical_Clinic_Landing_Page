import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import {Doctors} from './data.js';
import { FaEnvelope } from "react-icons/fa";

function index() {
  return (
    <div className={styles.main}>
        <h1 className={`${styles.teamTitle} xs:text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]`}>Meet Our Doctors</h1>
        <p className={`${styles.teamDescription} xs:text-[17px] sm:text-[17px] md:text-[22px] lg:text-[22px] xl:text-[22px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cumque nemo ab</p>
        <div className={ `${styles.container} xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
        {Doctors.map((doctor) => (
        <div key={doctor.id} className={`${styles.doctorContainer} shadow-xl xs:w-[60%] sm:w-[45%] md:w-[35%] lg:w-[20%] xl:w-[20%]`}>
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={200}
            height={200}
            className={styles.doctorImage}
          />
          <div className={styles.doctorInfo}>
            <h3>{doctor.name}</h3>
            <h6>{doctor.specialization}</h6>
            <p>{doctor.years}</p>
            <div className={styles.doctorIcon}>
              <div className={styles.Icon}>
            <FaEnvelope/>
            </div>
            </div>
          </div>
        </div>
      ))}
       
        </div>
    </div>
  )
}

export default index
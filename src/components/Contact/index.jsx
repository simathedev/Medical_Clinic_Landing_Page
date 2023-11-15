import React from 'react';
import styles from './style.module.scss';
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import{FaLocationDot} from "react-icons/fa6";

function index() {
  return (
    <div className={styles.main}>
            <h1 className={`${styles.contactTitle} xs:text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]`}>Book An Appointment</h1>
            <div className={`${styles.contactDetails} xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row`}>
        <div className={`${styles.contactIcon} shadow-xl`}>
            <FaPhoneAlt/>
        <h3>Phone</h3>
        <p>0215678899</p>
        </div>
        <div className={`${styles.contactIcon} shadow-xl`}>
            <FaEnvelope/>
        <h3>Email</h3>
        <p>support@tranquilmed.co.za</p>
        </div>
        <div className={`${styles.contactIcon} shadow-xl`}>
        <FaLocationDot/>
        <h3>Location</h3>
        <p>32 Morning, Sandton, 2194</p>
        </div>
            </div>
            <div className={`${styles.formContainer} w-[60%]`}>
            <form className='w-full'>
                <div className={`${styles.inputFieldContainer} xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-full`}>
                <div className={`${styles.inputContainer} xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-full`}>
                <input type='text' placeholder='Enter Your Name'/>
                <input type='text' placeholder='Enter Your Email'/>
                </div>
                <div className={`${styles.inputContainer} xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row w-full`}>
                <input type='text' placeholder='Enter Your Number'/>
                <input type='text' placeholder='Enter Service'/>
                </div>
                </div>
                <div className={`${styles.inputMessage}`}>
                <input type='text' placeholder='Message'/>
                </div>
                <button className={`${styles.formButton} shadow-xl`}>Submit</button>
            </form>
            </div>
        </div>
   
  )
}

export default index
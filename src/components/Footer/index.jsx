import React from 'react';
import styles from './style.module.scss';
import {menuLinks,contactDetails} from './data';
import { FaSquareFacebook,FaSquareXTwitter,FaSquareInstagram } from "react-icons/fa6";
import { TbActivityHeartbeat } from "react-icons/tb";


export default function index() {
  return (
    <div className={styles.main}>
        <div className={`${styles.footerContainer} xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
        <div className={styles.footerHeading}>
        <TbActivityHeartbeat />
            <h1>TranquilMed</h1>
            <p className='xs:hidden sm:hidden md:hidden lg:block xl:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod hic natus.</p>
        </div>
        <div className={`${styles.footerLinks} xs:hidden sm:hidden md:hidden lg:block xl:block`}>
            <h3>Menu</h3>
        {menuLinks.map((link, i) => (
          <a key={`${i}`} href={link.href}>
            {link.title}
          </a>
        ))}
        </div>
        <div className={styles.footerLinks}>
        <h3>Get in touch</h3>
        {contactDetails.map((link, i) => (
          <a key={`${i}`} href={link.href}>
            {link.data}
          </a>
        ))}
        </div>
        <div className={styles.footerLinks}>
        <h3>Social Media</h3>
        <FaSquareFacebook/>
        <FaSquareInstagram/>
        <FaSquareXTwitter/>
        </div>
       
        </div>
        <div className={styles.copyright}>
        <p>
            TranquilMed 2023. All Rights Reserved
        </p>
        </div>
    </div>
  )
}

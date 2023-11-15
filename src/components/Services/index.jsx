import React from 'react';
import styles from './style.module.scss';
import { FaStethoscope, FaRegEye, FaHeartbeat, FaAmbulance, FaBrain, FaTooth } from "react-icons/fa";

export default function index() {
    const services = [
        {
            title: "General Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci",
            svg:<FaStethoscope/>,
        },
        {
            title: "Cardiologist",
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci",
            svg:<FaHeartbeat/>,
        },
        {
            title: "Eye Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci",
            svg:<FaRegEye/>,
        },
        {
            title: "Dental Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci",
            svg:<FaTooth/>,
        },
        {
            title: "Psychotherapy",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci",
            svg:<FaBrain/>,
        },
        {
            title: "Ambulance & 24/7 Service",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, adipisci",
            svg:<FaAmbulance/>,
        }
    ]
  return (
    <div className={`${styles.main}`}>
        <h1 className={`${styles.servicesHeading} xs:text-[2.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] xl:text-[3rem]`}>Our Services</h1>
        <div className={`${styles.servicesContainer} xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
            {services.map((service, i) => (
          <div className={`${styles.serviceContainer} shadow-xl xs:w-[65%] sm:w-[45%] md:w-[35%] lg:w-[25%]`} key={`${i}`}>
            {service.svg}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

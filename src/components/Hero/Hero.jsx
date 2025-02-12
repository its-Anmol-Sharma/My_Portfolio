import React from 'react'

import styles from "./Hero.module.css"
import AboutImg from "/assets/about/aboutImage.png";
import GetButton from './GetButton';
import Button from './downloadBtn';

export const Hero = () => {
  
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, My name is Anmol Sharma</h1>
        <p className={styles.discription}>Aspiring Software Engineer</p>
        <div className={styles.buttons}>
          <GetButton />
          <Button />
        </div>
        {/* HERE TAILWIND CSS BUTTON TO BE ADDED*/}
    </div> 
    <img className={styles.heroImg} src={AboutImg} alt="Image mine" />
    <div className={styles.topblur} />
    <div className={styles.bottomblur} />  
  </section>;
}


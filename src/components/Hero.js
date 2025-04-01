import React from 'react';
import styles from './Hero.module.css';

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.profileImageContainer}>
        <img
          src="/assets/Profile.png"
          alt="Ibrahim Akanmu"
          className={styles.heroPhoto}
        />
      </div>
      <h1 className={styles.heroTitle}>Ibrahim Akanmu</h1>
      <p className={styles.heroSubtitle}>Full-Stack Software Engineer | DevOps & Backend Specialist</p>
      <a href="#contact" className={styles.heroButton}>Contact Me</a>
    </div>
  </section>
);

export default Hero;

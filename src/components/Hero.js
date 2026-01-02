import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.profileImageContainer}>
          <img
            src="/assets/profile.jpg"
            alt="Ibrahim Akanmu"
            className={styles.heroPhoto}
          />
        </div>
        
        <h1 className={styles.heroTitle}>
          Hey, I'm <span className={styles.nameHighlight}>Ibrahim Akanmu.</span>
        </h1>
        
        <h2 className={styles.heroSubtitle}>Full-Stack Software Engineer</h2>
        
        <p className={styles.heroDescription}>
          Building scalable applications and innovative solutions.<br />
          Backend specialist and DevOps enthusiast passionate about technology.
        </p>
        
        <div className={styles.heroCTA}>
          <a href="#contact" className={styles.hireButton}>Hire Me!</a>
          <span className={styles.availabilityBadge}>
            <span className={styles.statusDot}></span>
            Available for new project
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

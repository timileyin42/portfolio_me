import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev);
    }, showName ? 10000 : 10000); // 20s for name, 30s for about

    return () => clearInterval(interval);
  }, [showName]);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.profileImageContainer}>
          <img
            src="/assets/Profile.png"
            alt="Ibrahim Akanmu"
            className={styles.heroPhoto}
          />
        </div>
        
        <div className={styles.animatedContent}>
          {showName ? (
            <div className={`${styles.contentSection} ${styles.nameSection}`}>
              <h1 className={styles.heroTitle}>Ibrahim Akanmu</h1>
              <p className={styles.heroSubtitle}>Full-Stack Software Engineer | DevOps & Backend Specialist</p>
            </div>
          ) : (
            <div className={`${styles.contentSection} ${styles.aboutSection}`}>
              <h2 className={styles.aboutTitle}>About Me</h2>
              <p className={styles.aboutText}>
                Outcome-driven software engineer with over 2 years of troubleshooting and development expertise.
                Skilled in backend development, DevOps, and building scalable applications.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>2+</span>
                  <span className={styles.highlightText}>Years Experience</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>10+</span>
                  <span className={styles.highlightText}>Projects Completed</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <a href="#contact" className={styles.heroButton}>Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;

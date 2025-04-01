import React from 'react';
import styles from './About.module.css';

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.content}>
        <p className={styles.description}>
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
    </div>
  </section>
);

export default About;

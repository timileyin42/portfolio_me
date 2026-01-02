import React from 'react';
import styles from './About.module.css';

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>About</h2>
      
      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.description}>
            Outcome-driven software engineer with over 3 years of troubleshooting and 
            development expertise, focusing on building scalable and efficient solutions.
          </p>
          
          <p className={styles.bioText}>
            I'm Ibrahim Akanmu, a Full-Stack Software Engineer specializing in backend 
            development and DevOps. With 3+ years of experience, I've worked on diverse 
            projects ranging from smart home automation, rental platforms, professional 
            networking applications, event planning systems, and bill payment APIs for mobile apps.
          </p>
          
          <p className={styles.bioText}>
            My expertise spans across Node.js, Python, FastAPI, React, and cloud technologies. 
            I'm passionate about creating robust, scalable applications that solve real-world 
            problems. Currently focused on backend architecture, API development, and 
            cloud infrastructure optimization.
          </p>
        </div>
        
        <div className={styles.imagesGrid}>
          <div className={styles.imageCard}>
            <img
              src="/assets/photo1.jpg"
              alt="Ibrahim Akanmu - Software Engineer"
              className={styles.aboutImage}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>@timileyin42</span>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img
              src="/assets/photo2.jpg"
              alt="Ibrahim Akanmu - Developer"
              className={styles.aboutImage}
            />
            <div className={styles.imageOverlay}>
              <span className={styles.imageLabel}>@ibrahim_dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

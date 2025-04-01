import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: "Fixit Technology Ltd",
      duration: "Nov 2022 - Mar 2024",
      role: "Backend Developer & DevOps Operator",
      description: "Built backend applications, implemented automation, and managed cloud infrastructure."
    },
    {
      company: "WiseWheel Rental",
      duration: "Jan 2022 - Oct 2022",
      role: "Backend Engineer",
      description: "Developed API endpoints for car rental services and improved application efficiency."
    },
    {
      company: "Capitaa",
      duration: "Apr 2024 - Nov 2024",
      role: "DevOps Engineer",
      description: "Handled server management, deployed applications on Heroku and DigitalOcean, and implemented comprehensive monitoring solutions to ensure high availability and performance."
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div className={styles.experienceItem} key={index}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
            
            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.company}>{exp.company}</h3>
                <span className={styles.duration}>{exp.duration}</span>
              </div>
              <h4 className={styles.role}>{exp.role}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

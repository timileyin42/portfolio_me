import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    "JavaScript", "TypeScript", "ReactJS",
    "NodeJS", "Python", "Git", "GitHub",
    "FastAPI", "Django", "GoLang", "Docker",  "AWS",
    "Cloud Computing", "MongoDB", "ExpressJS", "PostgreSQL", "Flask"
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How Can I Help?</h2>
        <p className={styles.subtitle}>Let's turn your vision into something amazing.</p>
        
        <div className={styles.skillsMarquee}>
          <div className={styles.marqueeContent}>
            {skills.map((skill, index) => (
              <div className={styles.skillPill} key={`skill-1-${index}`}>
                {skill}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {skills.map((skill, index) => (
              <div className={styles.skillPill} key={`skill-2-${index}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

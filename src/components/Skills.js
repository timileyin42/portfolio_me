import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  // Organized skills by category
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C"]
    },
    {
      title: "Frontend",
      skills: ["React", "Vue.js", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "Django", "FASTAPI"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Digital Ocean", "Docker", "Jenkins", "Heroku", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div className={styles.skillCategory} key={index}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <div className={styles.skillCard} key={skillIndex}>
                    <span className={styles.skillName}>{skill}</span>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillLevel}
                        style={{ width: `${Math.min(90, 70 + Math.random() * 30)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

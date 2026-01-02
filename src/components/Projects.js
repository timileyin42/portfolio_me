import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home API",
      description: "Engineered a robust backend API for a Smart Home Automation system using Node.js and MongoDB with DigitalOcean deployment.",
      image: "/assets/SmartHome.png",
      demoLink: "https://youtu.be/h6sfjC_rk4I",
      githubLink: "https://github.com/timileyin42/SmartHome-tech_API"
    },
    {
      title: "Rentify",
      description: "Comprehensive house rental application with property listings, booking management, user reviews, and Mapbox integration.",
      image: "/assets/Rentify.png",
      demoLink: "https://endearing-fox-a5721d.netlify.app/",
      githubLink: "https://github.com/timileyin42/House_rent_APP"
    },
    {
      title: "WiseWheel Rental",
      description: "Car rental platform built with FastAPI featuring authentication, Paystack payment integration, and Google Maps location services.",
      image: "/assets/WiseWheel.png",
      demoLink: "https://youtu.be/pdp5hwpeUNc",
      githubLink: "https://github.com/timileyin42/Wise_Wheel_App"
    },
    {
      title: "Corporate Professionals Platform",
      description: "Backend API for a global networking platform connecting corporate professionals with growth, mentorship, and career opportunities.",
      image: "/assets/CorporateProfessionals.png",
      demoLink: "https://corporatesandprofessionals.com/"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <div className={styles.techIconsContainer}>
          <div className={styles.techIcon}>JS</div>
          <div className={styles.techIcon}>HTML</div>
          <div className={styles.techIcon}>CSS</div>
        </div>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <a 
                href={project.demoLink} 
                className={styles.viewProjectButton}
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.viewAllContainer}>
        <a href="#projects" className={styles.viewAllButton}>
          View All →
        </a>
      </div>
    </section>
  );
};

export default Projects;

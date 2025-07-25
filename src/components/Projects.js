import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home API",
      description: "Engineered a robust backend API for a Smart Home Automation system using Node.js and MongoDB.",
      technologies: [
        ["Node.js", "Express", "MongoDB"],
        ["DigitalOcean", "JWT Auth"]
      ],
      image: "/assets/SmartHome.png",
      demoLink: "https://youtu.be/h6sfjC_rk4I",
      githubLink: "https://github.com/timileyin42/SmartHome-tech_API"
    },
    {
      title: "Rentify",
      description: "Developing a comprehensive house rental application offering property listings, booking management, and user reviews.",
      technologies: [
        ["React", "Node.js", "PostgreSQL"],
        ["Mapbox API", "Stripe"]
      ],
      image: "/assets/Rentify.png",
      demoLink: "https://endearing-fox-a5721d.netlify.app/",
      githubLink: "https://github.com/timileyin42/House_rent_APP"
    },
    {
      title: "WiseWheel Rental",
      description: "A car rental web application built using FASTAPI with authentication, payment processing, and location services.",
      technologies: [
        ["Python", "FastAPI", "PostgreSQL"],
        ["Google Maps API", "Paystack"]
      ],
      image: "/assets/WiseWheel.png",
      demoLink: "https://youtu.be/pdp5hwpeUNc",
      githubLink: "https://github.com/timileyin42/Wise_Wheel_App"
    },
    {
      title: "Corporate Professionals Platform",
      description: "Engineered a robust backend API for a global networking platform connecting corporate professionals with opportunities for growth, mentorship, and career development.",
      technologies: [
        ["Pyton", "FastAPI", "PostgreSQL"],
        ["Professional Networking", "Career Development"]
      ],
      image: "/assets/CorporateProfessionals.png",
      demoLink: "https://corporatesandprofessionals.com/"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>My Projects</h2>

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

              <div className={styles.technologies}>
                {project.technologies.map((techGroup, groupIndex) => (
                  <ul className={styles.techGroup} key={groupIndex}>
                    {techGroup.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                ))}
              </div>

              <div className={styles.projectLinks}>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    className={styles.demoButton}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    className={styles.githubButton}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

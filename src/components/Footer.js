import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.copyright}>&copy; 2025 Ibrahim Akanmu. All rights reserved.</p>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/timileyin42" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <i className="fab fa-github"></i>
          </a>
          <a href="www.linkedin.com/in/ibrahim-akanmu-a3159b266" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/maverick_42251" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:akanmuibro@gmail.com" className={styles.socialLink}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

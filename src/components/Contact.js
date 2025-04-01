import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Get In Touch</h2>
      
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          
          <div className={styles.infoItem}>
            <i className={`fas fa-envelope ${styles.infoIcon}`}></i>
            <div>
              <h4>Email</h4>
              <a href="mailto:akanmuibro@gmail.com">akanmuibro@gmail.com</a>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <i className={`fab fa-github ${styles.infoIcon}`}></i>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/timileyin42" target="_blank" rel="noopener noreferrer">
                github.com/timileyin42
              </a>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <i className={`fab fa-linkedin ${styles.infoIcon}`}></i>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/ibrahim-akanmu-a3159b266" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ibrahim-akanmu
              </a>
            </div>
          </div>
        </div>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Subject" />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;

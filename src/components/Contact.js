import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdkopapb', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
  <section id="contact" className={styles.contact}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Get in touch</h2>
      <p className={styles.subtitle}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        Feel free to reach out if you'd like to connect or discuss potential collaborations.
      </p>
      
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              className={styles.formInput}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              className={styles.formInput}
              required 
            />
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <textarea 
            name="message"
            placeholder="Write your Message" 
            rows="6" 
            className={styles.formTextarea}
            required
          ></textarea>
        </div>
        
        {status === 'success' && (
          <p className={styles.successMessage}>Message sent successfully! I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>
        )}
        
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;

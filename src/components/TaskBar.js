import React, { useState } from 'react';
import styles from './TaskBar.module.css';

const TaskBar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTaskBarOpen, setIsTaskBarOpen] = useState(false);

  const contacts = [
    { label: 'Email', value: 'ibrahimakanmu@gmail.com', type: 'email' },
    { label: 'Phone', value: '+234 123 456 7890', type: 'phone' },
    { label: 'LinkedIn', value: 'https://linkedin.com/in/ibrahim-akanmu', type: 'link' },
    { label: 'GitHub', value: 'https://github.com/timileyin42', type: 'link' }
  ];

  const handleExportPDF = () => {
    window.print();
  };

  const handleContactClick = (contact) => {
    if (contact.type === 'email') {
      window.location.href = `mailto:${contact.value}`;
    } else if (contact.type === 'phone') {
      window.location.href = `tel:${contact.value}`;
    } else if (contact.type === 'link') {
      window.open(contact.value, '_blank');
    }
  };

  return (
    <div className={`${styles.taskBar} ${isTaskBarOpen ? styles.open : ''}`}>
      {/* Toggle Button - Always Visible */}
      <button 
        className={styles.toggleButton}
        onClick={() => setIsTaskBarOpen(!isTaskBarOpen)}
      >
        <div className={styles.hamburgerIcon}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </div>
      </button>

      {/* Collapsible Content */}
      {isTaskBarOpen && (
        <div className={styles.taskBarContent}>
          <div className={styles.contactDropdown}>
            <button 
              className={styles.contactButton}
              onClick={() => setIsContactOpen(!isContactOpen)}
            >
              📞 Contact
            </button>
            {isContactOpen && (
              <div className={styles.contactList}>
                {contacts.map((contact, index) => (
                  <button
                    key={index}
                    className={styles.contactItem}
                    onClick={() => handleContactClick(contact)}
                  >
                    <span className={styles.contactLabel}>{contact.label}:</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button 
            className={styles.exportButton}
            onClick={handleExportPDF}
          >
            📄 Export PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskBar;
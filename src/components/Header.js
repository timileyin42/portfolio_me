import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#hero" className={styles.navLink}>Home</a></li>
        <li className={styles.navItem}><a href="#about" className={styles.navLink}>About</a></li>
        <li className={styles.navItem}><a href="#skills" className={styles.navLink}>Skills</a></li>
        <li className={styles.navItem}><a href="#experience" className={styles.navLink}>Experience</a></li>
        <li className={styles.navItem}><a href="#projects" className={styles.navLink}>Projects</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

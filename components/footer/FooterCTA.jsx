import React from 'react';
import styles from './Footer.module.css';

const FooterCTA = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className={styles.footerCTA}>
      <h2 className={styles.ctaTitle}>{title}</h2>
      <p className={styles.ctaDescription}>{description}</p>
      <a href={buttonLink} className={styles.ctaButton}>
        {buttonText}
      </a>
    </div>
  );
};

export default FooterCTA;

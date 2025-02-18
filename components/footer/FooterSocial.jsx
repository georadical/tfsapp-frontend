import React from 'react';
import styles from './Footer.module.css';

const FooterSocial = ({ socialLinks }) => {
  return (
    <div className={styles.footerSocial}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={`Síguenos en ${social.name}`}
        >
          <i className={`fab fa-${social.icon}`} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;

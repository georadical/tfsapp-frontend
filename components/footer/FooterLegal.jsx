import React from 'react';
import styles from './Footer.module.css';

const FooterLegal = ({ copyright, legalLinks }) => {
  return (
    <div className={styles.footerLegal}>
      <p className={styles.copyright}>{copyright}</p>
      <div className={styles.legalLinks}>
        {legalLinks.map((link, index) => (
          <React.Fragment key={link.url}>
            {index > 0 && <span className={styles.separator}>|</span>}
            <a href={link.url} className={styles.legalLink}>
              {link.text}
            </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FooterLegal;

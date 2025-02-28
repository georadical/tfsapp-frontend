import React from 'react';
import FooterCTA from './FooterCTA';
import FooterOffices from './FooterOffices';
import FooterSocial from './FooterSocial';
import FooterLegal from './FooterLegal';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={`${styles.footer} scroll-mt-[120px]`}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <FooterCTA />
        </div>
        <div className={styles.footerTopRight}>
          <FooterOffices />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <FooterSocial />
        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;

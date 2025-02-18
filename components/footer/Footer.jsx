import React from 'react';
import FooterCTA from './FooterCTA';
import FooterOffices from './FooterOffices';
import FooterSocial from './FooterSocial';
import FooterLegal from './FooterLegal';
import styles from './Footer.module.css';

const mockData = {
  cta: {
    title: "Ready to get started?",
    description: "Join us and discover how we can help you achieve your goals",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  },
  offices: {
    title: "Our Offices",
    mainOffices: [
      {
        name: "Madrid",
        address: "123 Main Street, 28001 Madrid",
        phone: "+34 91 123 45 67"
      },
      {
        name: "Barcelona",
        address: "456 Diagonal Avenue, 08001 Barcelona",
        phone: "+34 93 123 45 67"
      }
    ],
    otherLocations: [
      {
        name: "Valencia",
        address: "789 Sea Street, 46001 Valencia"
      },
      {
        name: "Seville",
        address: "321 Constitution Avenue, 41001 Seville"
      }
    ]
  },
  social: {
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/company/yourcompany",
        icon: "linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/yourcompany",
        icon: "twitter"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/yourcompany",
        icon: "instagram"
      }
    ]
  },
  legal: {
    copyright: " 2025 Your Company. All rights reserved.",
    legalLinks: [
      {
        text: "Privacy Policy",
        url: "/privacy"
      },
      {
        text: "Terms & Conditions",
        url: "/terms"
      }
    ]
  }
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopLeft}>
          <FooterCTA {...mockData.cta} />
        </div>
        <div className={styles.footerTopRight}>
          <FooterOffices {...mockData.offices} />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <FooterSocial {...mockData.social} />
        <FooterLegal {...mockData.legal} />
      </div>
    </footer>
  );
};

export default Footer;

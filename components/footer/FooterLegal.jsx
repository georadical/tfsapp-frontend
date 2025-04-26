'use client';

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import LegalModal from '../legal/LegalModal';
import { useLegalSection } from '@/lib/swr-hooks';

const FooterLegal = () => {
  // Use SWR hook for legal data
  const { legalData, isLoading, isError, error } = useLegalSection();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

  // Log the fetched data when available - moved before conditionals
  useEffect(() => {
    if (legalData) {
      console.log('Legal section data fetched:', legalData);
    }
  }, [legalData]);

  const openPrivacyModal = (e) => {
    e.preventDefault();
    setActiveContent({
      title: legalData.privacy_policy_title,
      body: legalData.privacy_policy_content
    });
    setModalOpen(true);
  };

  const openTermsModal = (e) => {
    e.preventDefault();
    setActiveContent({
      title: legalData.terms_title,
      body: legalData.terms_content
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveContent(null);
  };

  if (isLoading) {
    return (
      <div className={styles.footerLegal}>
        <div className={styles.loadingState}>
          <p>Loading legal information...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.footerLegal}>
        <div className={styles.errorState}>
          <p>{error?.message || "Failed to load legal information"}</p>
        </div>
      </div>
    );
  }

  // Return null if no data is available
  if (!legalData) {
    return null;
  }

  return (
    <div className={styles.footerLegal}>
      <p className={styles.copyright}>{legalData.company_disclaimer}</p>
      <div className={styles.legalLinks}>
        <a 
          href="#"
          onClick={openPrivacyModal} 
          className={styles.legalLink}
        >
          {/* Using dynamic privacy_policy_title from API instead of text property */}
          {legalData.privacy_policy_title || "Privacy Policy"}
        </a>
        <span className={styles.separator}>|</span>
        <a 
          href="#"
          onClick={openTermsModal} 
          className={styles.legalLink}
        >
          {/* Using dynamic terms_title from API instead of text property */}
          {legalData.terms_title || "Terms & Conditions"}
        </a>
      </div>

      {/* Legal Content Modal */}
      <LegalModal 
        isOpen={modalOpen}
        onClose={closeModal}
        content={activeContent}
      />
    </div>
  );
};

export default FooterLegal;

"use client";

import React, { useEffect } from 'react';
import styles from './Footer.module.css';
import { useContactModal } from '@/context/ContactModalContext';
import { useFooterCTA } from '@/lib/swr-hooks';

const FooterCTA = () => {
  // Use SWR hook for footer CTA data
  const { ctaData, isLoading, isError, error } = useFooterCTA();
  const { openModal } = useContactModal();

  // Log the fetched data when available - moved before conditionals
  useEffect(() => {
    if (ctaData) {
      console.log('Footer CTA data fetched:', ctaData);
    }
  }, [ctaData]);

  if (isLoading) {
    return (
      <div className={styles.footerCTA}>
        <div className={styles.loadingState}>
          <p>Loading call-to-action content...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.footerCTA}>
        <div className={styles.errorState}>
          <p>{error?.message || 'Failed to load call-to-action content'}</p>
        </div>
      </div>
    );
  }

  // Return null if no data is available
  if (!ctaData) {
    return null;
  }

  return (
    <div className={styles.footerCTA}>
      <h2 className={styles.ctaTitle}>{ctaData.title}</h2>
      <p className={styles.ctaDescription}>{ctaData.description}</p>
      {ctaData.button_text && (
        <button onClick={openModal} className={styles.ctaButton}>
          {ctaData.button_text}
        </button>
      )}
      
      {ctaData.contact_person && (
        <div className={styles.contactInfo}>
          <strong className={styles.contactName}>{ctaData.contact_person}</strong>
          {ctaData.position && (
            <p className={styles.contactPosition}>{ctaData.position}</p>
          )}
          {ctaData.phone && (
            <p className={styles.contactPhone}>Phone: {ctaData.phone}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FooterCTA;

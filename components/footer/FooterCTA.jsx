"use client";

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { useContactModal } from '@/context/ContactModalContext';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const FooterCTA = () => {
  const [ctaData, setCtaData] = useState({
    title: '',
    description: '',
    button_text: '',
    contact_person: '',
    position: '',
    phone: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { openModal } = useContactModal();

  useEffect(() => {
    const fetchCTAData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/footer-cta/`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setCtaData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching CTA data:', err);
        setError('Failed to load call-to-action content');
      } finally {
        setLoading(false);
      }
    };

    fetchCTAData();
  }, []);

  if (loading) {
    return (
      <div className={styles.footerCTA}>
        <div className={styles.loadingState}>
          <p>Loading call-to-action content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.footerCTA}>
        <div className={styles.errorState}>
          <p>{error}</p>
        </div>
      </div>
    );
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

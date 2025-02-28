'use client';

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const FooterLegal = () => {
  const [legalData, setLegalData] = useState({
    company_disclaimer: '',
    privacy_policy_text: '',
    privacy_policy_url: '',
    terms_text: '',
    terms_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLegalData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/api/legal-section/`, {
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch legal data: ${response.status}`);
        }

        const data = await response.json();
        setLegalData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching legal data:', err);
        setError('Failed to load legal information');
      } finally {
        setLoading(false);
      }
    };

    fetchLegalData();
  }, []);

  if (loading) {
    return (
      <div className={styles.footerLegal}>
        <div className={styles.loadingState}>
          <p>Loading legal information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.footerLegal}>
        <div className={styles.errorState}>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.footerLegal}>
      <p className={styles.copyright}>{legalData.company_disclaimer}</p>
      <div className={styles.legalLinks}>
        <a 
          href={legalData.privacy_policy_url} 
          className={styles.legalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {legalData.privacy_policy_text}
        </a>
        <span className={styles.separator}>|</span>
        <a 
          href={legalData.terms_url} 
          className={styles.legalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {legalData.terms_text}
        </a>
      </div>
    </div>
  );
};

export default FooterLegal;

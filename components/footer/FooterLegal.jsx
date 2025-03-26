'use client';

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import LegalModal from '../legal/LegalModal';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const FooterLegal = () => {
  const [legalData, setLegalData] = useState({
    company_disclaimer: '',
    privacy_policy_title: '',
    privacy_policy_content: '',
    privacy_policy_url: '',
    privacy_policy_text: '',
    terms_title: '',
    terms_content: '',
    terms_url: '',
    terms_text: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);

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
          href="#"
          onClick={openPrivacyModal} 
          className={styles.legalLink}
        >
          {legalData.privacy_policy_text || "Privacy Policy"}
        </a>
        <span className={styles.separator}>|</span>
        <a 
          href="#"
          onClick={openTermsModal} 
          className={styles.legalLink}
        >
          {legalData.terms_text || "Terms & Conditions"}
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

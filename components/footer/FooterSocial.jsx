'use client';

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

const FooterSocial = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/social-media/`, {
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch social media data: ${response.status}`);
        }

        const data = await response.json();
        
        // Map the API data to the format expected by the component
        const formattedLinks = data.filter(item => item.is_active).map(item => ({
          name: item.platform_display_name,
          url: item.profile_url,
          icon: item.platform_name === 'other' ? 'link' : item.platform_name // Default to 'link' icon for custom platforms
        }));
        
        setSocialLinks(formattedLinks);
        setError(null);
      } catch (err) {
        console.error('Error fetching social media:', err);
        setError('Failed to load social media links');
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, []);

  if (loading) {
    return (
      <div className={styles.footerSocial}>
        <div className={styles.loadingState}>
          <p>Loading social links...</p>
        </div>
      </div>
    );
  }

  if (error || socialLinks.length === 0) {
    return null; // Hide the section if there's an error or no social links
  }

  return (
    <div className={styles.footerSocial}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={`Follow us on ${social.name}`}
        >
          <i className={`fab fa-${social.icon}`} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;

'use client';

import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import OtherLocationsButton from './OtherLocationsButton';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const FooterOffices = () => {
  const [officesData, setOfficesData] = useState({
    title: '',
    mainOffices: [],
    otherLocations: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOfficesData = async () => {
      try {
        setLoading(true);
        
        // Fetch the section title
        const sectionResponse = await fetch(`${API_BASE_URL}/api/location-section/`);
        if (!sectionResponse.ok) {
          throw new Error(`Error fetching section data: ${sectionResponse.status}`);
        }
        const sectionData = await sectionResponse.json();
        
        // Fetch all office locations
        const locationsResponse = await fetch(`${API_BASE_URL}/api/locations/`);
        if (!locationsResponse.ok) {
          throw new Error(`Error fetching locations data: ${locationsResponse.status}`);
        }
        const locationsData = await locationsResponse.json();
        
        // Filter locations based on is_office flag
        const mainOffices = locationsData.filter(location => location.is_office).map(office => ({
          name: office.city,
          address: office.address || '',
          phone: office.phone || null
        }));
        
        const otherLocations = locationsData.filter(location => !location.is_office).map(location => ({
          name: location.city,
          address: location.address || ''
        }));
        
        setOfficesData({
          title: sectionData.main_title,
          mainOffices,
          otherLocations
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching offices data:', err);
        setError('Failed to load offices information');
      } finally {
        setLoading(false);
      }
    };

    fetchOfficesData();
  }, []);

  if (loading) {
    return (
      <div className={styles.footerOffices}>
        <div className={styles.loadingState}>
          <p>Loading offices information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.footerOffices}>
        <div className={styles.errorState}>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.footerOffices}>
      <h2 className={styles.officesTitle}>{officesData.title}</h2>
      <div className={styles.mainOffices}>
        {officesData.mainOffices.map((office, index) => (
          <div key={index} className={styles.office}>
            <h3>{office.name}</h3>
            <p>{office.address}</p>
            {office.phone && <p>{office.phone}</p>}
          </div>
        ))}
      </div>
      
      {officesData.otherLocations.length > 0 && (
        <div className={styles.otherLocations}>
          <OtherLocationsButton locations={officesData.otherLocations} />
        </div>
      )}
    </div>
  );
};

export default FooterOffices;

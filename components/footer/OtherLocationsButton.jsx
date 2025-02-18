'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';

const OtherLocationsButton = ({ locations }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button 
        className={styles.expandButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        View More Locations
        <span className={`${styles.arrow} ${isExpanded ? styles.up : ''}`}>▼</span>
      </button>
      
      {isExpanded && (
        <div className={styles.locationsList}>
          {locations.map((location, index) => (
            <div key={index} className={styles.location}>
              <h4>{location.name}</h4>
              <p>{location.address}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default OtherLocationsButton;

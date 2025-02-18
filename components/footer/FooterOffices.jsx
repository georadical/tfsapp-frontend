import React from 'react';
import styles from './Footer.module.css';
import OtherLocationsButton from './OtherLocationsButton';

const FooterOffices = ({ title, mainOffices, otherLocations }) => {
  return (
    <div className={styles.footerOffices}>
      <h2 className={styles.officesTitle}>{title}</h2>
      <div className={styles.mainOffices}>
        {mainOffices.map((office, index) => (
          <div key={index} className={styles.office}>
            <h3>{office.name}</h3>
            <p>{office.address}</p>
            {office.phone && <p>{office.phone}</p>}
          </div>
        ))}
      </div>
      
      {otherLocations.length > 0 && (
        <div className={styles.otherLocations}>
          <OtherLocationsButton locations={otherLocations} />
        </div>
      )}
    </div>
  );
};

export default FooterOffices;

import React from 'react';
import ReactGoogleMapComponent from "./ReactGoogleMapComponent";
import styles from './LocationServices.module.css'; // The CSS module where your styles are defined

const LocationService = () => {
    return (
        <div className={styles.locationContainer}>
            <p>Location (Google or other Maps Service)</p>
            <div className={styles.mapWrapper}>
                <ReactGoogleMapComponent />
            </div>
        </div>
    );
};

export { LocationService };
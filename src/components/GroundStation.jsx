import React from 'react';
import { StatusHeader } from './StatusHeader';
import { CameraFeed } from './CameraFeed';
import { LocationService } from './LocationService';
import { BarometricSensor } from './BarometricSensor';
// Import SensorList when ready
import { SensorList } from './SensorList';
import styles from './GroundStation.module.css';
import GyroSensors from './GyroSensors';

const GroundStation = () => {
    return (
        <div className={styles.groundStation}>
            <div className={styles.header}>
                <h1 className={styles.title}>Flymatics-Ground Station</h1>
                <StatusHeader className={styles.statusHeader} />
            </div>
            <span >
                <div className={styles.leftColumn}>
                    <CameraFeed />
                    <LocationService />
                </div>


            </span>

            <div className={styles.rightColumn}>
                {/* Uncomment and import SensorList when ready */}
                <SensorList  />
                <GyroSensors/>
                <BarometricSensor />
                
            </div>

        </div>

    );
};

export { GroundStation };

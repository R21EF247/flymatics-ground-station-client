import React,{useContext} from 'react';
import NumbersContext from './NumbersContext.js';
const BarometricSensor = ({  elevation, isElevationActive }) => {
    const { receivedNumbers } = useContext(NumbersContext);
    const pressure = receivedNumbers.length > 0 ? receivedNumbers[receivedNumbers.length - 1] : 'N/A';

    const boxShadowStyle = {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.3)', 
        transition: '0.3s', 
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px', ...boxShadowStyle }}>
            <h3>Barometric Sensor</h3>
            <div>
                <strong>Pressure:</strong> {pressure ? `${pressure} bar` : 'N/A'}
            </div>
            <div>
                <strong>Elevation:</strong> {isElevationActive ? `${elevation} m` : 'Not-active'}
            </div>
        </div>
    );
};

export { BarometricSensor };

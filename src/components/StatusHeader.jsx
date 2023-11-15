import React from 'react';

const StatusHeader = ({ status }) => {
    return (
        <div style={
            {
                height: 'max-content',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '10px',
                gap: '10px',

            }}>
            {status ? (
                <div style={{
                    color: 'green',
                    margin: '0 10px',
                    borderRadius: '8px',
                    background: 'rgba(48, 209, 88, 0.109)',
                    display: 'flex',
                    height: '32px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '160px',
                     // Adds margin to the left and right of the "Connected" div
                }}>
                    Connected
                </div>
            ) : (
                <div style={{
                    color: 'red',
                    margin: '0 10px',
                    borderRadius: '8px',
                    background: 'rgba(179, 38, 30, 0.12)',
                    display: 'flex',
                    height: '32px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '160px' // Adds margin to the left and right of the "Not Connected" div
                }}>
                    Not Connected
                </div>
            )}
            <button style={{
                backgroundColor: '#2B2930',
                color: '#D0BCFF',
                font: 'Roboto',
                borderRadius: '16px',
                display: 'flex',
                padding: '16px 20px 16px 16px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                flex: '1 0 0',
            }}>
                Health Check
            </button>
        </div >
    );
};

export { StatusHeader };

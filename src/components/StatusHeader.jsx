import React from 'react';

const StatusHeader = () => {
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
            <div style={{
                color: 'red',
                margin: '0 10px',
                borderRadius: '8px',
                background: 'rgba(179, 38, 30, 0.12)', 
                display: 'flex',
                height: '32px',
                justifyContent: 'center',
                alignItems: 'center',
                width:'160px' // Adds margin to the left and right of the "Not Connected" div
            }}>
                Not Connected
            </div>
            <button style={{
                backgroundColor: '#2B2930',
                color: '#D0BCFF',
                // padding: '5px 10px',
                // borderRadius: '5px',
                // margin: '0 10px',
                font: 'Roboto',
                borderRadius: '16px',
                // width:'165px',
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
// style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}
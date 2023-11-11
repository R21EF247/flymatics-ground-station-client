import React from 'react';
import './SensorList.css';

const SensorList = () => {
    const getStatusClass = (status) => {
        return status === 'Active' ? 'activeStatus' : 'inactiveStatus';
    };

    return (
        <div>
            <fieldset className='shadow'>
                <h3>Ultra Sonic sensor</h3>
                <div>
                    <div className="sensorItem">
                        <div><strong>Ultra Sonic - 1</strong></div>
                        <div className='distance'>0 m</div>
                        <div className={`sensorStatus ${getStatusClass('Not Active')}`}>Not Active</div>
                    </div>
                    <div className="sensorItem">
                        <div><strong>Ultra Sonic - 2</strong></div>
                        <div className='distance'>0 m</div>
                        <div className={`sensorStatus ${getStatusClass('Not Active')}`}>Not Active</div>
                    </div>
                    <div className="sensorItem">
                        <div><strong>Ultra Sonic - 3</strong></div>
                        <div className='distance'>0 m</div>
                        <div className={`sensorStatus ${getStatusClass('Not Active')}`}>Not Active</div>
                    </div>
                    <div className="sensorItem">
                        <div><strong>Ultra Sonic - 4</strong></div>
                        <div className='distance'>0 m</div>
                        <div className={`sensorStatus ${getStatusClass('Not Active')}`}>Not Active</div>
                    </div>
                    <div className="sensorItem">
                        <div><strong>Ultra Sonic - 5</strong></div>
                        <div className='distance'>0 m</div>
                        <div className={`sensorStatus ${getStatusClass('Not Active')}`}>Not Active</div>
                    </div>
                    <div className="sensorItem">
                        <div><strong>Ultra Sonic - 6</strong></div>
                        <div className='distance'>0 m</div>
                        <div className={`sensorStatus ${getStatusClass('Not Active')}`}>Not Active</div>
                    </div>

                </div>
            </fieldset>
        </div >
    );
};

export { SensorList };

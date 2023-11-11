import React from 'react'
import styles from './GyroSenors.module.css'
function GyroSensors() {
    return (
        <div>
            <fieldset className={styles.shadow}>
                <h3>GyroSensors</h3>
                <div className={styles.sensorData}>
                    <span>
                        <div>
                            <u>Acclerometer</u>
                            <br/>
                            <div>
                                X : 0.1234
                            </div>
                            <div>
                                Y : 0.8989
                            </div>
                            <div>
                                Z : 0.4545
                            </div>
                        </div>
                    </span>
                    <span>
                        <div>
                            <u>Gyroscope</u>
                            <br/>
                            <div>
                                X : 0.1234
                            </div>
                            <div>
                                Y : 0.8989
                            </div>
                            <div>
                                Z : 0.4545
                            </div>
                        </div>
                    </span>
                    <span>
                        <div>
                            <u>Magnetometer</u>
                            <br/>
                            <div>
                                X : 0.1234
                            </div>
                            <div>
                                Y : 0.8989
                            </div>
                            <div>
                                Z : 0.4545
                            </div>
                        </div>
                    </span>
                </div>
            </fieldset>

        </div>
    )
}

export default GyroSensors
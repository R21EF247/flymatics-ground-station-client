
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import styles from './CameraFeed.module.css';

const CameraFeed = () => {
    const [feed, setFeed] = useState(false);
    const videoRef = useRef(null);
    const socket = useRef(null);

    useEffect(() => {
        if (feed) {
            // Connect to the cloud server
            socket.current = io('https://flymatics-cloud-server.onrender.com/');
            socket.current.on('connect', () => {
                console.log('Connected to cloud server');
                socket.current.emit('control-station-connected');
            });

            socket.current.on('video-stream', (base64Data) => {
                // Convert base64 to a blob and set as video source
                if (videoRef.current) {
                    const byteCharacters = atob(base64Data);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'video/mp4' });
                    videoRef.current.src = URL.createObjectURL(blob);
                }
            });
        } else {
            // Disconnect the socket and stop the video
            if (socket.current) {
                socket.current.disconnect();
            }
            if (videoRef.current) {
                videoRef.current.src = '';
            }
        }

        return () => {
            // Cleanup
            if (socket.current) {
                socket.current.disconnect();
            }
        };
    }, [feed]);

    const handleRender = () => {
        setFeed(!feed);
    };

    return (
        <div className={styles.cameraContainer}>
            <p>Camera Feed (Raspberry Pi camera)</p>
            <div className={styles.videoContainer}>
                {feed && (
                    <video ref={videoRef} autoPlay playsInline className={styles.videoElement} />
                )}
            </div>
            <button className={styles.button} onClick={handleRender}>
                {feed ? 'Stop video' : 'Start video'}
            </button>
        </div>
    );
};

export { CameraFeed };

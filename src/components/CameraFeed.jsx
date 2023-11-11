import React, { useEffect, useRef, useState } from 'react';
import styles from './CameraFeed.module.css'; // Assuming you have a CSS module for CameraFeed

const CameraFeed = () => {
    const [feed, setFeed] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        let videoStream;

        const getVideo = async () => {
            try {
                videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = videoStream;
                }
            } catch (err) {
                console.error("Error accessing the camera: ", err);
            }
        };

        if (feed) {
            getVideo();
        } else {
            // Stop the video stream and clear the video source when feed is false
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
        }

        // Cleanup function to stop the video stream when the component unmounts or feed changes
        return () => {
            if (videoStream) {
                const tracks = videoStream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [feed]); // Dependency array now includes feed

    // Toggles the feed state
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
                {feed ? 'Stop video' : 'Render video Now'}
            </button>
        </div>
    );
};

export { CameraFeed };

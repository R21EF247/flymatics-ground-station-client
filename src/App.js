// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { GroundStation } from './components/GroundStation';
// import io from 'socket-io-client';
// const CONNECTED = 'CONNECTED';
// const DISCONNECTED = 'DISCONNECTED';
// let socket;
// function App() {
//     const [connectionStatus, setConnectionStatus] = useState(DISCONNECTED);
//     const [receivedNumbers, setReceivedNumbers] = useState([]);

//     useEffect(() => {
//         // Initialize the socket connection inside useEffect to ensure it's client-side only
//         socket = io('https://flymatics-cloud-server.onrender.com', {
//             transports: ['websocket'], // force WebSocket
//             upgrade: false, // prevent attempts to other transport mechanisms
//         });
//         socket.on('connect', () => {
//             setConnectionStatus(CONNECTED);
//             console.log('Control station connected to cloud server with socket ID:', socket.id);
//             // Emit an event right after connection to identify this client as the control station
//             socket.emit('control-station-connected');
//         });
//         // Set up listeners for socket events
//         socket.on('forwarded-number', (number) => {
//             setReceivedNumbers([...receivedNumbers, number]);
//             console.log('Number received:', number);
//         });
//         socket.on('disconnect', () => {
//             setConnectionStatus(DISCONNECTED);
//             console.log('Control station disconnected from cloud server');
//         });
//         // Define the cleanup function
//         return () => {
//             if (socket) {
//                 socket.off('connect');
//                 socket.off('forwarded-number');
//                 socket.off('disconnect');
//                 socket.disconnect();
//             }
//         };
//         // Empty dependency array ensures this effect runs only once on mount and not on every re-render
//     }, []);
//     // Listen for successful connection
// return (

//     <GroundStation />
// );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { GroundStation } from './components/GroundStation';
import NumbersContext from './components/NumbersContext.js';
const CONNECTED = 'CONNECTED';
const DISCONNECTED = 'DISCONNECTED';

// Define the socket outside of the hook to prevent re-creation on every render
let socket;

function App() {
    const [status, setStatus] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState(DISCONNECTED);
    const [receivedNumbers, setReceivedNumbers] = useState([]);
    const [nanoData, setNanoData] = useState([]);
    const [picoData, setPicoData] = useState([]);
    useEffect(() => {
        // Initialize the socket connection inside useEffect to ensure it's client-side only
        socket = io('https://flymatics-cloud-server.onrender.com', {
            transports: ['websocket'], // force WebSocket
            upgrade: false, // prevent attempts to other transport mechanisms
        });

        // Listen for successful connection
        socket.on('connect', () => {
            setConnectionStatus(CONNECTED);
            console.log('Control station connected to cloud server with socket ID:', socket.id);
            // Emit an event right after connection to identify this client as the control station
            socket.emit('control-station-connected');
            setStatus(true)
        });

        // Set up listeners for socket events
        socket.on('forwarded-number', (number) => {
            setReceivedNumbers([...receivedNumbers, number]);
            console.log('Number received:', number);
        });
        socket.on('forwarded-nano-data', (data) => {
            setNanoData([...nanoData, data]);
            console.log('Nano data received:', data);
        });
        socket.on('forwarded-pico-data', (data) => {
            setPicoData([...picoData, data]);
            console.log('Pico data received:', data);
        });

        socket.on('disconnect', () => {
            setConnectionStatus(DISCONNECTED);
            console.log('Disconnected from socket server');
            setStatus(false)
        });

        // Define the cleanup function
        return () => {
            if (socket) {
                socket.off('connect');
                socket.off('forwarded-number');
                socket.off('disconnect');
                socket.off('forwarded-nano-data');
                socket.off('forwarded-pico-data');
                socket.disconnect();
            }
        };
        // Empty dependency array ensures this effect runs only once on mount and not on every re-render
    }, [receivedNumbers, nanoData, picoData]);

    return (
        <NumbersContext.Provider value={{ receivedNumbers, nanoData, picoData }}>
            <GroundStation status={status} picoData={picoData}/>
        </NumbersContext.Provider>
    );
}
export default App;
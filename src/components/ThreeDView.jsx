import React from 'react';
import { Canvas,useLoader } from '@react-three/fiber';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

function ScrapeWrapper() {
    const model = useLoader(GLTFLoader, '/mpu6050_teapot.glb');
    console.log(model);

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
            <primitive object={model.scene} scale={0.8}/>
        </>
    );
}

export default function ThreeDView() {
    return (
        <Canvas>
            <ScrapeWrapper />
        </Canvas>
    );
}

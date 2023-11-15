// eslint-disable-next-line`
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export default function ThreeJSViewport() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 5);

        if (progress >= 100) {
            setLoading(false);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {loading && <Loader progress={progress} />}
            {!loading && (
                <Canvas
                    camera={{
                        type: "orthographic",
                        zoom: 2,
                        position: [-1, 2, 2.5],
                    }}
                >
                    <OrbitControls />
                    <Environment
                        files={"/mpu6050_teapot.obj"}
                    />
                </Canvas>
            )}
        </div>
    );
}

function Loader({ progress }) {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <div className="relative w-64">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                    <div
                        style={{ width: `${progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 transition-all duration-150"
                    ></div>
                </div>
            </div>
        </div>
    );
}

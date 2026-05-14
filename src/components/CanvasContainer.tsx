import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Premium 3D shape mimicking modern Framer assets
const FloatingShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={[2, 0, 0]} scale={1.5}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#ffffff"
                    envMapIntensity={1}
                    clearcoat={0.8}
                    clearcoatRoughness={0}
                    roughness={0.1}
                    metalness={0.8}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
};

const CanvasContainer: React.FC = () => {
    return (
        <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} gl={{ powerPreference: "high-performance", antialias: false }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#444" />

                {/* Environment reflection map for glass/metal look */}
                <Environment preset="city" />

                {/* Core floating geometry */}
                <FloatingShape />
            </Canvas>
        </div>
    );
};

export default CanvasContainer;

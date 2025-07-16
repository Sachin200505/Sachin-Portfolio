import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// ThreeDStar component
export const ThreeDStar: React.FC<{ filled: boolean }> = ({ filled }) => (
  <Canvas style={{ width: 40, height: 40 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[0, 0, 5]} />
    <mesh>
      <torusKnotBufferGeometry args={[0.5, 0.2, 100, 16]} />
      <meshStandardMaterial color={filled ? 'gold' : 'gray'} />
    </mesh>
  </Canvas>
);

// ThreeDPin component
export const ThreeDPin: React.FC = () => (
  <Canvas style={{ width: 40, height: 40 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[2, 2, 5]} />
    <mesh rotation={[Math.PI / 4, 0, 0]}>
      <cylinderGeometry args={[0.1, 0.3, 1, 32]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default { ThreeDStar, ThreeDPin };

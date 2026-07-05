import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function DumbbellShape() {
  return (
    <Float speed={2.4} rotationIntensity={1.1} floatIntensity={1.4}>
      <group rotation={[0.35, 0.55, -0.2]}>
        <mesh position={[-1.15, 0, 0]}>
          <boxGeometry args={[0.35, 1.45, 1.45]} />
          <MeshTransmissionMaterial thickness={0.25} roughness={0.24} transmission={0.5} />
        </mesh>
        <mesh position={[1.15, 0, 0]}>
          <boxGeometry args={[0.35, 1.45, 1.45]} />
          <MeshTransmissionMaterial thickness={0.25} roughness={0.24} transmission={0.5} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.12, 0.12, 2.5, 32]} />
          <meshStandardMaterial metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export function FitnessScene() {
  return (
    <div className="fitness-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.7]}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[3, 3, 4]} intensity={2.4} />
        <pointLight position={[-3, -2, 3]} intensity={3} />
        <Suspense fallback={null}>
          <DumbbellShape />
        </Suspense>
      </Canvas>
    </div>
  );
}

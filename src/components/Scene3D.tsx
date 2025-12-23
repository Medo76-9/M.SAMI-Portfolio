import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ 
  position, 
  color, 
  size = 1, 
  shape = 'sphere',
  speed = 1,
  distort = 0.3 
}: { 
  position: [number, number, number];
  color: string;
  size?: number;
  shape?: 'sphere' | 'torus' | 'box' | 'octahedron' | 'dodecahedron';
  speed?: number;
  distort?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[size, size * 0.4, 16, 32]} />;
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[size]} />;
      default:
        return <sphereGeometry args={[size, 32, 32]} />;
    }
  }, [shape, size]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const WobblySphere = ({ position, color, size = 1 }: { 
  position: [number, number, number];
  color: string;
  size?: number;
}) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshWobbleMaterial
          color={color}
          factor={0.6}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ff0080" intensity={0.5} />
        <pointLight position={[10, -10, 5]} color="#00ff80" intensity={0.5} />
        
        {/* Main shapes */}
        <FloatingShape position={[-3.5, 2, -2]} color="#ff0080" size={1.2} shape="sphere" distort={0.4} />
        <FloatingShape position={[4, -1, -1]} color="#80ff00" size={0.8} shape="torus" speed={0.8} />
        <FloatingShape position={[-2, -2.5, 0]} color="#00a8ff" size={0.9} shape="dodecahedron" distort={0.2} />
        <FloatingShape position={[3, 2.5, -3]} color="#ff8000" size={0.7} shape="octahedron" speed={1.2} />
        <WobblySphere position={[0, -0.5, -4]} color="#ff0080" size={2} />
        
        {/* Background shapes */}
        <FloatingShape position={[-5, 0, -6]} color="#ff0080" size={0.5} shape="sphere" distort={0.5} />
        <FloatingShape position={[5, 3, -5]} color="#80ff00" size={0.4} shape="box" />
        <FloatingShape position={[0, 4, -4]} color="#00a8ff" size={0.6} shape="torus" />
      </Canvas>
    </div>
  );
};

export default Scene3D;

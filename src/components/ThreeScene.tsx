
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { Mesh } from "three";

const FloatingIcon = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
};

const ThreeScene = () => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        <FloatingIcon position={[-3, 2, 0]} color="#8B5CF6" />
        <FloatingIcon position={[3, -1, 0]} color="#06B6D4" />
        <FloatingIcon position={[0, 1, -2]} color="#F59E0B" />
        <FloatingIcon position={[-2, -2, 1]} color="#EF4444" />
        
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.8}
            height={0.1}
            position={[0, 0, 0]}
          >
            Welcome
            <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.3} />
          </Text3D>
        </Center>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

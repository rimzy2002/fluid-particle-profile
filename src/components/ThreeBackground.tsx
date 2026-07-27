import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Starfield = () => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x += delta * 0.008;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
};

const FloatingShape = ({
  position,
  color,
  speed,
  scale,
  kind,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  kind: "ico" | "torus" | "octa";
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * speed * 0.4;
    ref.current.rotation.y = t * speed * 0.6;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.6;
  });

  const material = (
    <meshStandardMaterial
      color={color}
      wireframe
      transparent
      opacity={0.35}
      metalness={0.6}
      roughness={0.25}
    />
  );

  const geometry =
    kind === "torus" ? (
      <torusGeometry args={[1, 0.32, 16, 60]} />
    ) : kind === "octa" ? (
      <octahedronGeometry args={[1, 0]} />
    ) : (
      <icosahedronGeometry args={[1, 0]} />
    );

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {geometry}
      {material}
    </mesh>
  );
};

const Rig = () => {
  useFrame((state) => {
    const { camera, pointer } = state;
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.8 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#8B5CF6" />
        <pointLight position={[-8, -6, 4]} intensity={0.9} color="#06B6D4" />

        <Starfield />

        <FloatingShape position={[-4.5, 1.5, -2]} color="#8B5CF6" speed={0.5} scale={1.1} kind="ico" />
        <FloatingShape position={[4.6, -1.2, -3]} color="#06B6D4" speed={0.35} scale={1.3} kind="torus" />
        <FloatingShape position={[2.6, 2.6, -4]} color="#F472B6" speed={0.45} scale={0.9} kind="octa" />
        <FloatingShape position={[-3.2, -2.4, -3.5]} color="#22D3EE" speed={0.3} scale={1.0} kind="ico" />
        <FloatingShape position={[0, -3.4, -5]} color="#A855F7" speed={0.4} scale={1.2} kind="octa" />

        <fog attach="fog" args={["#0b1020", 8, 22]} />
        <Rig />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900/70" />
    </div>
  );
};

export default ThreeBackground;

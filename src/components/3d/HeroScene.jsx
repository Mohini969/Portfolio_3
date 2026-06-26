import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Trail } from "@react-three/drei";
import * as THREE from "three";

/* ─── Geometric Robot Core ─────────────────────────────── */

const RobotHead = ({ mouseRef }) => {
  const groupRef = useRef();
  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Gentle float
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    groupRef.current.rotation.y += delta * 0.1;

    // Eyes follow mouse
    const mx = mouseRef.current.x * 0.3;
    const my = mouseRef.current.y * 0.15;
    if (eyeLeftRef.current) {
      eyeLeftRef.current.position.x = -0.25 + mx * 0.08;
      eyeLeftRef.current.position.y = 0.1 + my * 0.05;
    }
    if (eyeRightRef.current) {
      eyeRightRef.current.position.x = 0.25 + mx * 0.08;
      eyeRightRef.current.position.y = 0.1 + my * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.8, 0]}>
      {/* Head — rounded cube */}
      <mesh>
        <boxGeometry args={[1.1, 1, 0.9, 4, 4, 4]} />
        <MeshDistortMaterial
          color="#0e2a47"
          transparent
          opacity={0.85}
          distort={0.05}
          speed={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Visor / face plate */}
      <mesh position={[0, 0.05, 0.46]}>
        <planeGeometry args={[0.85, 0.5]} />
        <meshStandardMaterial
          color="#22d3ee"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Left eye */}
      <mesh ref={eyeLeftRef} position={[-0.25, 0.1, 0.48]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
      </mesh>

      {/* Right eye */}
      <mesh ref={eyeRightRef} position={[0.25, 0.1, 0.48]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
        <meshStandardMaterial color="#34d399" />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={3} />
      </mesh>

      {/* Ear panels */}
      <mesh position={[-0.62, 0, 0]}>
        <boxGeometry args={[0.1, 0.4, 0.3]} />
        <meshStandardMaterial color="#0891b2" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.62, 0, 0]}>
        <boxGeometry args={[0.1, 0.4, 0.3]} />
        <meshStandardMaterial color="#0891b2" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

const RobotBody = () => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group ref={ref} position={[0, -0.6, 0]}>
      {/* Torso */}
      <mesh>
        <boxGeometry args={[1.3, 1.2, 0.8, 4, 4, 4]} />
        <MeshDistortMaterial
          color="#0e2a47"
          transparent
          opacity={0.8}
          distort={0.03}
          speed={1}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Core light */}
      <mesh position={[0, 0.15, 0.42]}>
        <circleGeometry args={[0.18, 6]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* Chest panel lines */}
      {[-0.2, 0, 0.2].map((y, i) => (
        <mesh key={i} position={[0, y - 0.15, 0.41]}>
          <planeGeometry args={[0.7, 0.02]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1}
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Left arm */}
      <group position={[-0.9, 0.1, 0]}>
        <mesh>
          <boxGeometry args={[0.25, 0.8, 0.25]} />
          <meshStandardMaterial color="#0d1f36" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshStandardMaterial color="#0891b2" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Right arm */}
      <group position={[0.9, 0.1, 0]}>
        <mesh>
          <boxGeometry args={[0.25, 0.8, 0.25]} />
          <meshStandardMaterial color="#0d1f36" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshStandardMaterial color="#0891b2" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </group>
  );
};

/* ─── Orbiting Rings ───────────────────────────────────── */

const OrbitRing = ({ radius, speed, color, thickness = 0.015, tiltX = 0, tiltZ = 0 }) => {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, thickness, 16, 64]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

/* ─── Orbiting Node (floating dot on orbit path) ─────── */

const OrbitNode = ({ radius, speed, color, size = 0.06, tiltX = 0, tiltZ = 0 }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <Trail width={0.3} length={6} color={color} attenuation={(w) => w * w}>
        <mesh ref={ref}>
          <sphereGeometry args={[size, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={3}
          />
        </mesh>
      </Trail>
    </group>
  );
};

/* ─── Floating Tech Particles ──────────────────────────── */

const Particles = ({ count = 100 }) => {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 3 + Math.random() * 6;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#22d3ee"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

/* ─── Floating Code Brackets ───────────────────────────── */

const FloatingShape = ({ position, scale, color, speed = 1, geometry = "octahedron" }) => {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2 * speed;
      ref.current.rotation.z += delta * 0.15 * speed;
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "torus":
        return <torusGeometry args={[1, 0.35, 12, 24]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[1, 0]} />;
      default:
        return <octahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        {geo}
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.12}
          factor={0.15}
          speed={1.5}
          wireframe
        />
      </mesh>
    </Float>
  );
};

/* ─── Camera Controller ────────────────────────────────── */

const CameraRig = ({ mouseRef }) => {
  const { camera } = useThree();

  useFrame(() => {
    const targetX = mouseRef.current.x * 0.5;
    const targetY = mouseRef.current.y * 0.3 + 0.5;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

/* ─── Main Scene ───────────────────────────────────────── */

const HeroScene = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.5, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-5, -2, 3]} intensity={0.4} color="#34d399" />
        <pointLight position={[0, 3, -3]} intensity={0.3} color="#a78bfa" />
        <spotLight
          position={[0, 8, 4]}
          angle={0.4}
          penumbra={0.8}
          intensity={0.6}
          color="#22d3ee"
        />

        {/* Robot */}
        <group scale={1.1}>
          <RobotHead mouseRef={mouseRef} />
          <RobotBody />
        </group>

        {/* Orbiting rings */}
        <OrbitRing radius={2.2} speed={0.4} color="#22d3ee" tiltX={0.3} tiltZ={0.1} />
        <OrbitRing radius={2.8} speed={-0.25} color="#34d399" thickness={0.01} tiltX={-0.5} tiltZ={0.3} />
        <OrbitRing radius={3.4} speed={0.15} color="#a78bfa" thickness={0.008} tiltX={0.8} tiltZ={-0.2} />

        {/* Orbiting nodes with trails */}
        <OrbitNode radius={2.2} speed={0.6} color="#22d3ee" tiltX={0.3} tiltZ={0.1} />
        <OrbitNode radius={2.8} speed={-0.4} color="#34d399" size={0.05} tiltX={-0.5} tiltZ={0.3} />
        <OrbitNode radius={3.4} speed={0.3} color="#fbbf24" size={0.04} tiltX={0.8} tiltZ={-0.2} />

        {/* Floating shapes */}
        <FloatingShape position={[-4, 2, -3]} scale={0.4} color="#22d3ee" geometry="octahedron" />
        <FloatingShape position={[4.5, -1.5, -4]} scale={0.5} color="#34d399" geometry="dodecahedron" speed={0.7} />
        <FloatingShape position={[-3, -2.5, -2]} scale={0.35} color="#fbbf24" geometry="tetrahedron" speed={1.3} />
        <FloatingShape position={[3, 3, -5]} scale={0.3} color="#a78bfa" geometry="torus" speed={0.5} />

        {/* Particles */}
        <Particles count={120} />

        {/* Camera follow mouse */}
        <CameraRig mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};

export default HeroScene;

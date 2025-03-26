import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Ring } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingBrain() {
  const sphereRef = useRef<any>();
  const torusRef = useRef<any>();
  const ring1Ref = useRef<any>();
  const ring2Ref = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    // Floating brain animation
    sphereRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    sphereRef.current.rotation.x = t * 0.2;
    sphereRef.current.rotation.y = t * 0.3;

    // Torus animation
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.rotation.z = t * 0.1;
    }

    // Rings animation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.3;
      ring1Ref.current.rotation.x = Math.sin(t * 0.5) * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.4;
      ring2Ref.current.rotation.y = Math.cos(t * 0.5) * 0.3;
    }
  });

  return (
    <group>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#0066ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[2.5, 0.1, 128, 32]} />
        <meshPhongMaterial 
          color="#0066ff" 
          opacity={0.1} 
          transparent={true}
          emissive="#0066ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      <Ring
        ref={ring1Ref}
        args={[3, 3.3, 64]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial
          color="#00ff99"
          opacity={0.1}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring2Ref}
        args={[3.5, 3.8, 64]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, Math.PI / 4, 0]}
      >
        <meshPhongMaterial
          color="#0066ff"
          opacity={0.1}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  );
}
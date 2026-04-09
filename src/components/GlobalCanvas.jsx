import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

function Scene() {
  const starsRef = useRef()
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Slow cinematic rotation
    if (starsRef.current) {
        starsRef.current.rotation.y = t * 0.05
        starsRef.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }

    if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.02
        // Subtle mouse follow
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.mouse.x * 2, 0.05)
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.mouse.y * 2, 0.05)
    }
  })

  return (
    <>
        <group ref={groupRef}>
            <Stars 
                ref={starsRef}
                radius={100} 
                depth={50} 
                count={7000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={2}
            />
            
            {/* Ambient Nebula Clouds */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[15, 10, -20]}>
                    <sphereGeometry args={[10, 32, 32]} />
                    <meshBasicMaterial color="#5c4033" transparent opacity={0.05} />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[-20, -10, -15]}>
                    <sphereGeometry args={[12, 32, 32]} />
                    <meshBasicMaterial color="#bf9b6a" transparent opacity={0.03} />
                </mesh>
            </Float>
        </group>
        
        <ambientLight intensity={0.5} />
    </>
  )
}

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#050505']} />
        <Scene />
      </Canvas>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 pointer-events-none" />
    </div>
  )
}

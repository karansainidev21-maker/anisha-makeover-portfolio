import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function OptimizedAura() {
  const meshRef = useRef()
  const mousePos = useRef({ x: 0, y: 0 })

  // Smooth mouse move
  useFrame((state) => {
    if (!meshRef.current) return

    // Lerp mouse for smoothness
    mousePos.current.x = THREE.MathUtils.lerp(mousePos.current.x, state.mouse.x * 1.5, 0.05)
    mousePos.current.y = THREE.MathUtils.lerp(mousePos.current.y, state.mouse.y * 1.5, 0.05)

    meshRef.current.position.x = mousePos.current.x
    meshRef.current.position.y = mousePos.current.y
    meshRef.current.rotation.z += 0.005
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#c5a059"
          roughness={0.2}
          metalness={1}
          distort={0.4}
          speed={2}
          wireframe
          opacity={0.3}
          transparent
        />
      </Sphere>
    </Float>
  )
}

export default function ContactCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      <Canvas dpr={1} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#c5a059" />
        <OptimizedAura />
      </Canvas>
    </div>
  )
}

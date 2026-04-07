import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'

function AnimatedBlob() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 100, 100]} scale={2.5}>
            <MeshDistortMaterial
                color="#fdf2f2"
                speed={3}
                distort={0.4}
                radius={1}
            />
        </Sphere>
    </Float>
  )
}

export default function AboutCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#c5a059" intensity={1} />
        <AnimatedBlob />
      </Canvas>
    </div>
  )
}

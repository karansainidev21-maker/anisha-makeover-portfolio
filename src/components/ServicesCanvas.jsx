import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron } from '@react-three/drei'

function FloatingGems() {
  const groupRef = useRef()
  
  const gems = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.2
    }))
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {gems.map((gem, i) => (
        <Float key={i} speed={gem.speed} rotationIntensity={2} floatIntensity={2} position={gem.position}>
          <Icosahedron args={[1, 0]} scale={gem.scale}>
            <meshStandardMaterial
              color="#fdf2f2"
              roughness={0.1}
              metalness={0.8}
              transparent
              opacity={0.3}
            />
          </Icosahedron>
        </Float>
      ))}
    </group>
  )
}

export default function ServicesCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#c5a059" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <FloatingGems />
      </Canvas>
    </div>
  )
}

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const LiquidFloor = () => {
  const meshRef = useRef()
  
  const count = 15 // Reduced for performance
  const [positions, setPositions] = useMemo(() => {
    const pos = []
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        pos.push([x - count / 2, 0, z - count / 2])
      }
    }
    return [pos]
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
        meshRef.current.children.forEach((child, i) => {
            const x = child.position.x
            const z = child.position.z
            child.position.y = Math.sin(x * 0.3 + time) * Math.cos(z * 0.3 + time) * 0.3
        })
    }
  })

  return (
    <group ref={meshRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#c5a059" opacity={0.1} transparent metalness={1} roughness={0} />
        </mesh>
      ))}
    </group>
  )
}

export default function FooterCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      <Canvas dpr={[1, 1.5]} camera={{ position: [10, 10, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#c5a059" />
        <LiquidFloor />
      </Canvas>
    </div>
  )
}

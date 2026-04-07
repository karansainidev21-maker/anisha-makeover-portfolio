import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleWave() {
  const meshRef = useRef()
  const mouse = useRef([0, 0])

  const [particles, positions] = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 15
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return [count, positions]
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
        meshRef.current.rotation.y += 0.001
        meshRef.current.rotation.x += 0.0005
        
        // Follow mouse subtly
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.mouse.x * 2, 0.05)
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.mouse.y * 2, 0.05)
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c5a059"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

export default function PortfolioCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white/50 backdrop-blur-[2px]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
        <ParticleWave />
      </Canvas>
    </div>
  )
}

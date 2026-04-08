import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Sparkles() {
  const ref = useRef()
  const [positions] = useMemo(() => {
    const count = 400
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return [pos]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.y += delta / 20
        ref.current.rotation.x += delta / 30
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#c5a059"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

export default function ContactCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
      <Canvas dpr={1} camera={{ position: [0, 0, 1] }} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <Sparkles />
      </Canvas>
    </div>
  )
}

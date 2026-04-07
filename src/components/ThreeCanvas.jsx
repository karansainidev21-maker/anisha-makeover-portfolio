import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingSparkles(props) {
  const ref = useRef()
  const [positions] = useMemo(() => {
    const positions = new Float32Array(500 * 3)
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return [positions]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x += delta / 10
        ref.current.rotation.y += delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#c5a059"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <FloatingSparkles />
      </Canvas>
    </div>
  )
}

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, TorusKnot } from '@react-three/drei'

function InteractiveKnot() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
        meshRef.current.position.x = state.mouse.x * 2
        meshRef.current.position.y = state.mouse.y * 2
    }
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
            <meshStandardMaterial
                color="#c5a059"
                roughness={0.1}
                metalness={1}
                wireframe
            />
        </TorusKnot>
    </Float>
  )
}

export default function ContactCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#c5a059" />
        <InteractiveKnot />
      </Canvas>
    </div>
  )
}

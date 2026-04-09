import { Canvas } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'

export default function PortfolioCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0A]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10] }}>
        <color attach="background" args={['#0A0A0A']} />
        
        <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
        />
        
        {/* Subtle Ambient Glows */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[10, 5, -10]}>
                <sphereGeometry args={[5, 32, 32]} />
                <meshBasicMaterial color="#5c4033" transparent opacity={0.03} />
            </mesh>
        </Float>
      </Canvas>
    </div>
  )
}

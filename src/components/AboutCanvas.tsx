import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingShapes() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = t * 0.18
    group.current.rotation.x = Math.sin(t * 0.3) * 0.15
  })

  return (
    <group ref={group}>
      {/* Central wireframe icosahedron */}
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#00e5ff" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Inner solid */}
      <mesh>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>

      {/* Orbiting spheres */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(angle) * 1.6, Math.sin(angle) * 0.5, Math.sin(angle) * 1.2]}>
            <sphereGeometry args={[0.1, 12, 12]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#00e5ff' : '#f97316'} emissive={i % 2 === 0 ? '#00e5ff' : '#f97316'} emissiveIntensity={2} />
          </mesh>
        )
      })}
    </group>
  )
}

export function AboutCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00e5ff" />
      <pointLight position={[-3, -3, -3]} intensity={1.5} color="#a855f7" />
      <FloatingShapes />
    </Canvas>
  )
}

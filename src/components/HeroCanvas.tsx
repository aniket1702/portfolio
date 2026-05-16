import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const ref = useRef<THREE.Points>(null)
  const count = 800

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 28
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.015
    ref.current.rotation.x = state.clock.elapsedTime * 0.006
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00e5ff" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function OrbitRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const angle = useRef(Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (!groupRef.current) return
    angle.current += speed * 0.013
    groupRef.current.children.forEach((child) => {
      child.position.x = Math.cos(angle.current) * radius
      child.position.y = Math.sin(angle.current * 1.2) * radius * 0.35
      child.position.z = Math.sin(angle.current) * radius * 0.6
    })
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.07
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[0.12]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>
    </group>
  )
}

function HeroCharacter({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useMemo(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY.current = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    const p = scrollProgress.current

    // Camera zoom
    const camStart = 3.8, camEnd = 10.5
    const ease = (v: number) => v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2
    ;(camera as THREE.PerspectiveCamera).position.z = camStart + (camEnd - camStart) * ease(p)

    // Character animation
    const charScrollY = p * -2.2
    groupRef.current.rotation.y = mouseX.current * 0.12 + Math.sin(t * 0.35) * 0.03
    groupRef.current.rotation.x = mouseY.current * 0.05
    groupRef.current.position.y = charScrollY + Math.sin(t * 0.7) * 0.07
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.55, 0.72, 0.28]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Chest detail */}
      <mesh position={[0, 0.05, 0.145]}>
        <boxGeometry args={[0.38, 0.42, 0.02]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} transparent opacity={0.15} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[0.44, 0.44, 0.38]} />
        <meshStandardMaterial color="#0d0d20" metalness={0.85} roughness={0.12} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 0.67, 0.195]}>
        <boxGeometry args={[0.32, 0.14, 0.02]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} transparent opacity={0.9} />
      </mesh>
      {/* Shoulder L */}
      <mesh position={[-0.42, 0.12, 0]}>
        <sphereGeometry args={[0.16, 8, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Shoulder R */}
      <mesh position={[0.42, 0.12, 0]}>
        <sphereGeometry args={[0.16, 8, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Arm L */}
      <mesh position={[-0.42, -0.22, 0]}>
        <cylinderGeometry args={[0.1, 0.09, 0.55, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Arm R */}
      <mesh position={[0.42, -0.22, 0]}>
        <cylinderGeometry args={[0.1, 0.09, 0.55, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.16, -0.7, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 0.55, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.16, -0.7, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 0.55, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Glow ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.006, 8, 64]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} />
      </mesh>
    </group>
  )
}

function SceneContent({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 5, 3]} intensity={2} color="#00e5ff" />
      <pointLight position={[-3, -2, -3]} intensity={1.5} color="#a855f7" />
      <pointLight position={[0, 2, 4]} intensity={1} color="#ffffff" />

      <HeroCharacter scrollProgress={scrollProgress} />
      <Particles />

      <OrbitRing radius={1.8} speed={1.2} color="#00e5ff" />
      <OrbitRing radius={2.2} speed={0.8} color="#a855f7" />
      <OrbitRing radius={1.5} speed={1.5} color="#f97316" />
    </>
  )
}

interface HeroCanvasProps {
  scrollProgress: React.MutableRefObject<number>
  opacity: number
}

export function HeroCanvas({ scrollProgress, opacity }: HeroCanvasProps) {
  return (
    <div className="absolute inset-0" style={{ opacity }}>
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}

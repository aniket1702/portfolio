import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const ROBOT_STAGES = [
  { armL: 0,    armR: 0,    headY: 0,    bodyZ: 0,     scl: 1,    label: '' },
  { armL: -1.1, armR: 0.2,  headY: 0.3,  bodyZ: 0.05,  scl: 1.02, label: 'Hello! 👋' },
  { armL: -0.8, armR: 0.8,  headY: 0,    bodyZ: 0,     scl: 1.05, label: '⚡ Powered Up' },
  { armL: -0.4, armR: -1.2, headY: -0.2, bodyZ: -0.04, scl: 1,    label: '🤔 Building...' },
  { armL: -1.3, armR: -1.3, headY: 0.1,  bodyZ: 0.08,  scl: 1.08, label: '🎉 Shipped!' },
  { armL: -0.7, armR: 0.7,  headY: 0,    bodyZ: 0,     scl: 1.03, label: '🚀 Delivering' },
  { armL: -1.2, armR: 0.15, headY: 0.25, bodyZ: 0.05,  scl: 1,    label: '📬 Connect' },
]

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function MiniRobot({ globalScrollProgress }: { globalScrollProgress: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null)
  const armLRef = useRef<THREE.Group>(null)
  const armRRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Group>(null)
  const legLRef = useRef<THREE.Group>(null)
  const legRRef = useRef<THREE.Group>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cur = useRef({ armL: 0, armR: 0, headY: 0, bodyZ: 0, scl: 1 })

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
    const gp = globalScrollProgress.current

    const stageCount = ROBOT_STAGES.length - 1
    const rawStage = gp * stageCount
    const si = Math.min(Math.floor(rawStage), stageCount - 1)
    const sf = rawStage - si
    const sA = ROBOT_STAGES[si]
    const sB = ROBOT_STAGES[Math.min(si + 1, stageCount)]

    const sp = 0.07
    cur.current.armL  = lerp(cur.current.armL,  lerp(sA.armL,  sB.armL,  sf), sp)
    cur.current.armR  = lerp(cur.current.armR,  lerp(sA.armR,  sB.armR,  sf), sp)
    cur.current.headY = lerp(cur.current.headY, lerp(sA.headY, sB.headY, sf), sp)
    cur.current.bodyZ = lerp(cur.current.bodyZ, lerp(sA.bodyZ, sB.bodyZ, sf), sp)
    cur.current.scl   = lerp(cur.current.scl,   lerp(sA.scl,   sB.scl,   sf), sp)

    groupRef.current.rotation.y = mouseX.current * 0.18 + Math.sin(t * 0.35) * 0.04
    groupRef.current.rotation.x = mouseY.current * 0.06
    groupRef.current.rotation.z = cur.current.bodyZ
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.06
    groupRef.current.scale.setScalar(cur.current.scl)

    if (armLRef.current) armLRef.current.rotation.z = cur.current.armL + Math.sin(t * 1.1) * 0.05
    if (armRRef.current) armRRef.current.rotation.z = cur.current.armR + Math.sin(t * 1.1 + 1) * 0.05
    if (headRef.current) {
      headRef.current.rotation.y = cur.current.headY + mouseX.current * 0.1
      headRef.current.rotation.x = mouseY.current * 0.07
    }
    if (legLRef.current && legRRef.current) {
      const walkAmt = si === 4 ? Math.sin(t * 3) * 0.18 : Math.sin(t * 0.5) * 0.02
      legLRef.current.rotation.x = walkAmt
      legRRef.current.rotation.x = -walkAmt
    }
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.55, 0.72, 0.28]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.05, 0.145]}>
        <boxGeometry args={[0.38, 0.42, 0.02]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 0.07, 0.15]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={4} transparent opacity={0.8} />
      </mesh>
      {/* Head */}
      <group ref={headRef} position={[0, 0.65, 0]}>
        <mesh>
          <boxGeometry args={[0.44, 0.44, 0.38]} />
          <meshStandardMaterial color="#0d0d20" metalness={0.85} roughness={0.12} />
        </mesh>
        <mesh position={[0, 0.02, 0.195]}>
          <boxGeometry args={[0.32, 0.14, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} transparent opacity={0.9} />
        </mesh>
        <mesh position={[-0.08, 0.02, 0.2]}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={5} />
        </mesh>
        <mesh position={[0.08, 0.02, 0.2]}>
          <sphereGeometry args={[0.028, 8, 8]} />
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={5} />
        </mesh>
        <mesh position={[0, 0.28, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.18, 6]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, 0.38, 0]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={4} />
        </mesh>
      </group>
      {/* Shoulders */}
      <mesh position={[-0.42, 0.12, 0]}>
        <sphereGeometry args={[0.16, 8, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.42, 0.12, 0]}>
        <sphereGeometry args={[0.16, 8, 8]} />
        <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Arms */}
      <group ref={armLRef} position={[-0.42, 0.12, 0]}>
        <mesh position={[0, -0.31, 0]}>
          <cylinderGeometry args={[0.1, 0.09, 0.55, 8]} />
          <meshStandardMaterial color="#0a0a1a" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[0, -0.62, 0]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#0d0d20" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
      <group ref={armRRef} position={[0.42, 0.12, 0]}>
        <mesh position={[0, -0.31, 0]}>
          <cylinderGeometry args={[0.1, 0.09, 0.55, 8]} />
          <meshStandardMaterial color="#0a0a1a" metalness={0.85} roughness={0.15} />
        </mesh>
        <mesh position={[0, -0.62, 0]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <meshStandardMaterial color="#0d0d20" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
      {/* Hips */}
      <mesh position={[0, -0.43, 0]}>
        <boxGeometry args={[0.48, 0.14, 0.26]} />
        <meshStandardMaterial color="#080818" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Legs */}
      <group ref={legLRef} position={[-0.16, -0.5, 0]}>
        <mesh position={[0, -0.27, 0]}>
          <cylinderGeometry args={[0.12, 0.1, 0.55, 8]} />
          <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.57, 0.04]}>
          <boxGeometry args={[0.16, 0.1, 0.24]} />
          <meshStandardMaterial color="#080818" metalness={0.85} roughness={0.1} />
        </mesh>
      </group>
      <group ref={legRRef} position={[0.16, -0.5, 0]}>
        <mesh position={[0, -0.27, 0]}>
          <cylinderGeometry args={[0.12, 0.1, 0.55, 8]} />
          <meshStandardMaterial color="#0a0a1a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.57, 0.04]}>
          <boxGeometry args={[0.16, 0.1, 0.24]} />
          <meshStandardMaterial color="#080818" metalness={0.85} roughness={0.1} />
        </mesh>
      </group>
      {/* Glow ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.9, 0.006, 8, 64]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} />
      </mesh>
    </group>
  )
}

export function RobotCompanion({ opacity }: { opacity: number }) {
  const globalScrollProgress = useRef(0)
  const [stageLabel, setStageLabel] = useState('')
  const [labelVisible, setLabelVisible] = useState(false)
  const labelTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastStage = useRef(-1)

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const gp = Math.min(Math.max(window.scrollY / totalHeight, 0), 1)
      globalScrollProgress.current = gp
      const stageCount = ROBOT_STAGES.length - 1
      const rawStage = gp * stageCount
      const si = Math.min(Math.floor(rawStage), stageCount - 1)
      if (si !== lastStage.current && si > 0) {
        lastStage.current = si
        setStageLabel(ROBOT_STAGES[si].label)
        setLabelVisible(true)
        if (labelTimer.current) clearTimeout(labelTimer.current)
        labelTimer.current = setTimeout(() => setLabelVisible(false), 2500)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (labelTimer.current) clearTimeout(labelTimer.current)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '140px',
        height: '180px',
        zIndex: 50,
        opacity,
        transition: 'opacity 0.6s ease',
        pointerEvents: opacity > 0.1 ? 'auto' : 'none',
      }}
    >
      {/* Speech bubble */}
      <div
        style={{
          position: 'absolute',
          bottom: '185px',
          right: '0',
          background: 'rgba(6,6,16,0.85)',
          border: '1px solid rgba(0,229,255,0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '8px 8px 0 8px',
          padding: '7px 12px',
          fontFamily: 'monospace',
          fontSize: '0.65rem',
          letterSpacing: '1.5px',
          color: 'var(--accent)',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          opacity: labelVisible ? 1 : 0,
          transform: labelVisible ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.96)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
          boxShadow: '0 0 20px rgba(0,229,255,0.1)',
        }}
      >
        {stageLabel}
      </div>

      {/* Subtle glow backing */}
      <div
        style={{
          position: 'absolute',
          inset: '-10px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[3, 5, 3]} intensity={2.5} color="#00e5ff" />
        <pointLight position={[-3, -2, -3]} intensity={2} color="#a855f7" />
        <pointLight position={[0, 2, 4]} intensity={1.2} color="#ffffff" />
        <MiniRobot globalScrollProgress={globalScrollProgress} />
      </Canvas>
    </div>
  )
}

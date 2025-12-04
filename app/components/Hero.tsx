'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'

function RedEye() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0,0,0]} intensity={3} color="#ef4444" />
      <Sphere args={[1.5, 64, 64]}><meshStandardMaterial emissive="#ef4444" emissiveIntensity={4} /></Sphere>
      <Sphere args={[0.7, 64, 64]} position={[0,0,1.2]}><meshStandardMaterial emissive="#dc2626" emissiveIntensity={6} /></Sphere>
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Canvas className="absolute inset-0">
        <Stars radius={300} depth={50} count={5000} factor={7} saturation={0} fade />
        <RedEye />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-display bg-gradient-to-r from-primary-500 to-red-600 bg-clip-text text-transparent">Red Oak Digital</h1>
        <p className="text-2xl md:text-4xl mt-6 text-gray-300">Accelerating Tomorrow’s Tech Today</p>
        <p className="text-lg mt-4 text-gray-500">Since 2023</p>
      </motion.div>
    </section>
  )
}

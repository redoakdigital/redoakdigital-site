'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <motion.h1 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl md:text-8xl font-display bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4"
        >
          Red Oak Digital
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-3xl text-gray-300 mb-4"
        >
          Accelerating Tomorrow’s Tech Today
        </motion.p>
        <motion.p className="text-lg text-gray-500">Since 2023</motion.p>
      </motion.div>
    </section>
  )
}

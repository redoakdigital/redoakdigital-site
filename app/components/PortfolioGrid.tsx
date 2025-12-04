'use client'
import { motion } from 'framer-motion'

const holdings = [
  { title: "Bitcoin", cat: "Store of Value" },
  { title: "Solana", cat: "Layer 1" },
  { title: "Helium", cat: "DePIN" },
  { title: "Render", cat: "GPU Cloud" }
]

export default function PortfolioGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-10 py-20">
      {holdings.map((h,i)=>(
        <motion.div key={i} whileHover={{ y: -12 }} className="bg-dark/60 border border-primary-900/40 rounded-xl p-8 hover:border-primary-500 transition cursor-pointer">
          <h3 className="text-3xl font-display text-primary-500">{h.title}</h3>
          <p className="text-gray-400 mt-2">{h.cat}</p>
        </motion.div>
      ))}
    </div>
  )
}

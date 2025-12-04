'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur border-b border-primary-900/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Red Oak Digital" className="h-10" />
          <span className="font-display text-2xl text-primary-500">Red Oak Digital</span>
        </Link>
        <div className="hidden md:flex space-x-10 text-lg">
          {['About','Portfolio','Insights','Validators','Contact'].map(i=>(
            <Link key={i} href={`/${i.toLowerCase()}`} className="hover:text-primary-500 transition">{i}</Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

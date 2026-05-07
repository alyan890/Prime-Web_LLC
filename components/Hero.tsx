'use client'

import React from 'react'
import { motion } from 'framer-motion'

const typedWords = ['WordPress Sites.', 'Next.js Apps.', 'Custom Code.', 'Node.js APIs.']

export default function Hero() {
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % typedWords.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block glass-card px-4 py-2 mb-6">
          <span className="text-sm">⚡ Available for Projects</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-5xl md:text-7xl font-extrabold leading-tight">
          <div>We Build</div>
          <div className="mt-2 gradient-text">{typedWords[index]}</div>
          <div className="mt-2">That Actually Perform.</div>
        </motion.h1>

        <motion.p className="mt-6 text-[color:var(--muted)] max-w-xl mx-auto">From pixel-perfect WordPress themes to scalable Node.js backends — we craft fast, modern web experiences tailored to your business.</motion.p>

        <motion.div className="mt-8 flex items-center justify-center gap-4">
          <motion.button className="btn-primary" whileHover={{ scale: 1.03 }}>
            Start a Project
          </motion.button>
          <motion.button className="btn-ghost" whileHover={{ scale: 1.03 }}>
            View Our Work
          </motion.button>
        </motion.div>

        <motion.div className="mt-6 flex items-center justify-center gap-6 text-sm text-[color:var(--muted)]">
          <span>✓ 50+ Projects Delivered</span>
          <span>✓ 5-Star Rated</span>
          <span>✓ On-Time Delivery</span>
        </motion.div>

        <div className="mt-12 animate-bounce text-[color:var(--muted)]">↓</div>
      </div>
    </section>
  )
}

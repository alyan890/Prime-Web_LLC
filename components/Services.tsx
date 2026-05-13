'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LayoutGrid, Zap, Server, Code2, ShoppingCart, TrendingUp } from 'lucide-react'
import { services } from '../lib/constants'

export default function Services() {
  return (
    <section id="services">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold gradient-text">What We Build</h3>
        <p className="text-[color:var(--muted)] mt-2">Full-spectrum web development — from CMS to custom code.</p>
      </div>

      <motion.div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.article key={s.title} className="glass-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">
                {s.icon}
              </div>
              <div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-[color:var(--muted)] mt-2 text-sm">{s.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

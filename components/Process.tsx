'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '../lib/constants'

export default function Process() {
  return (
    <>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold gradient-text">Our Process</h3>
        <p className="text-(--muted) mt-2">Transparent, structured, no surprises.</p>
      </div>

      <div className="hidden md:block">
        <motion.div className="relative flex items-center justify-between px-8">
          <div className="absolute inset-x-8 top-8 border-t border-dashed border-(--border)" />
          {processSteps.map((s, i) => (
            <motion.div key={s.title} className="w-1/4 text-center p-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className="mx-auto w-12 h-12 rounded-full gradient-text flex items-center justify-center font-semibold">{i + 1}</div>
              <h4 className="mt-4 font-semibold">{s.title}</h4>
              <p className="text-(--muted) mt-2 text-sm">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="md:hidden flex flex-col gap-6">
        {processSteps.map((s, i) => (
          <div key={s.title} className="glass-card">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full gradient-text flex items-center justify-center">{i + 1}</div>
              <div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-(--muted) mt-2 text-sm">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

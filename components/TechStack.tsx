import React from 'react'
import { techLogos } from '../lib/constants'

export default function TechStack() {
  return (
    <section id="tech" className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold gradient-text">Technologies We Use</h3>
          <p className="text-[color:var(--muted)] mt-2">Modern tools — no bloated, legacy tech.</p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            {techLogos.row1.map((t) => (
              <div key={t} className="glass-card min-w-[180px] flex items-center gap-3">
                <div className="w-8 h-8 bg-[rgba(255,255,255,0.02)] rounded-full" />
                <div className="font-semibold">{t}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 animate-marquee-reverse mt-4">
            {techLogos.row2.map((t) => (
              <div key={t} className="glass-card min-w-[180px] flex items-center gap-3">
                <div className="w-8 h-8 bg-[rgba(255,255,255,0.02)] rounded-full" />
                <div className="font-semibold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

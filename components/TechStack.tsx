import React from 'react'
import { techLogos } from '../lib/constants'

export default function TechStack() {
  return (
    <>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold gradient-text">Technologies We Use</h3>
        <p className="text-(--muted) mt-2">Modern tools — no bloated, legacy tech.</p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max min-w-full gap-4 animate-marquee">
          {techLogos.row1.map((t) => (
            <div key={t} className="glass-card min-w-45 shrink-0 flex items-center gap-3">
              <div className="w-8 h-8 bg-[rgba(255,255,255,0.02)] rounded-full" />
              <div className="font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex w-max min-w-full gap-4 animate-marquee-reverse">
          {techLogos.row2.map((t) => (
            <div key={t} className="glass-card min-w-45 shrink-0 flex items-center gap-3">
              <div className="w-8 h-8 bg-[rgba(255,255,255,0.02)] rounded-full" />
              <div className="font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

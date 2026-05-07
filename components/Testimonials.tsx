import React from 'react'
import { testimonials } from '../lib/constants'

export default function Testimonials() {
  return (
    <section>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold gradient-text">What Clients Say</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.name} className="glass-card border-l-4 border-[color:var(--primary)]/40">
            <div className="mb-4">“{t.quote}”</div>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.04)]" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-[color:var(--muted)]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

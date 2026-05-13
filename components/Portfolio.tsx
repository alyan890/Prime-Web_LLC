import React from 'react'
import { projects } from '../lib/constants'

export default function Portfolio() {
  return (
    <section id="work">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold gradient-text">Recent Work</h3>
        <p className="text-[color:var(--muted)] mt-2">A few projects we're proud of.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.name} className="glass-card overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-[rgba(108,99,255,0.08)] to-[rgba(0,212,255,0.06)] flex items-end p-4">
              <div className="font-semibold">{p.name}</div>
            </div>
            <div className="p-4">
              <p className="text-[color:var(--muted)]">{p.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-[color:var(--muted)]">
                {p.tags.map(t => <span key={t} className="px-2 py-1 border rounded text-xs">{t}</span>)}
              </div>
              <div className="mt-4">
                <a className="text-[color:var(--primary)]">View Case Study →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

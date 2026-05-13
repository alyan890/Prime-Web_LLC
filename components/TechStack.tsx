'use client'

import React from 'react'
import StackIcon from 'tech-stack-icons'
import { techLogos } from '../lib/constants'

// Map your display names to tech-stack-icons slugs
const techIconSlug: Record<string, string> = {
  'Next.js':      'nextjs2',
  'React':        'reactjs',
  'Node.js':      'nodejs',
  'TypeScript':   'typescript',
  'WordPress':    'wordpress',
  'WooCommerce':  'woocommerce',
  'Tailwind CSS': 'tailwindcss',
  'PostgreSQL':   'postgresql',
  'MongoDB':      'mongodb',
  'REST APIs':    'restapi',
  'GraphQL':      'graphql',
  'Vercel':       'vercel',
  'Docker':       'docker',
}

function TechIcon({ label }: { label: string }) {
  const slug = techIconSlug[label]
  if (!slug) return null
  return <StackIcon name={slug} className="h-9 w-9 shrink-0" />
}

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
              <div key={t} className="glass-card min-w-[180px] flex items-center gap-3 px-4 py-3">
                <TechIcon label={t} />
                <span className="font-semibold whitespace-nowrap">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 animate-marquee-reverse mt-4">
            {techLogos.row2.map((t) => (
              <div key={t} className="glass-card min-w-[180px] flex items-center gap-3 px-4 py-3">
                <TechIcon label={t} />
                <span className="font-semibold whitespace-nowrap">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
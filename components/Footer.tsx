import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--border)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold gradient-text">DevStudio</div>
          <div className="text-[color:var(--muted)] text-sm">Building the web, one project at a time.</div>
        </div>

        <div className="flex gap-6">
          <a>Services</a>
          <a>Process</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <Github />
          <Linkedin />
          <Twitter />
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-[color:var(--muted)]">© 2025 DevStudio. All rights reserved. Made with Next.js & ☕</div>
    </footer>
  )
}

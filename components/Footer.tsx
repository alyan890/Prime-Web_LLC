import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-(--border) py-8">
      <div className="site-container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <div className="font-semibold gradient-text">DevStudio</div>
          <div className="text-(--muted) text-sm">Building the web, one project at a time.</div>
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

      <div className="mt-6 text-center text-sm text-(--muted)">© 2025 DevStudio. All rights reserved. Made with Next.js & ☕</div>
    </footer>
  )
}

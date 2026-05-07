'use client'

import React from 'react'
import { Menu, X, Code } from 'lucide-react'
import { motion, useScroll } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const { scrollY } = useScroll()

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="backdrop-blur-md bg-[rgba(10,10,10,0.4)] border-b border-[color:var(--border)]">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code className="text-[color:var(--primary)]" />
            <span className="font-semibold text-lg gradient-text">Prime LLC</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-[color:var(--muted)] hover:text-[color:var(--text)]">Services</a>
            <a href="#process" className="text-[color:var(--muted)] hover:text-[color:var(--text)]">Process</a>
            <a href="#tech" className="text-[color:var(--muted)] hover:text-[color:var(--text)]">Tech Stack</a>
            <a href="#work" className="text-[color:var(--muted)] hover:text-[color:var(--text)]">Portfolio</a>
            <a href="#contact" className="text-[color:var(--muted)] hover:text-[color:var(--text)]">Contact</a>
            <button className="btn-primary">Start a Project</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(v => !v)} aria-label="menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden px-6 pb-6">
            <div className="flex flex-col gap-3 glass-card">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#tech">Tech Stack</a>
              <a href="#work">Portfolio</a>
              <a href="#contact">Contact</a>
              <button className="btn-primary mt-2">Start a Project</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

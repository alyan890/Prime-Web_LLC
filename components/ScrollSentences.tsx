"use client"

import React, { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type LineConfig = {
  text: string
  align: 'left' | 'right'
  range: [number, number]
}

function ParallaxLine({ text, align, range, progress }: LineConfig & { progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const [start, end] = range
  const mid = start + (end - start) * 0.5
  const y = useTransform(progress, [start, end], [28, -28])
  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0])
  const alignmentClasses = align === 'right' ? 'md:text-right md:self-end' : 'md:text-left md:self-start'

  return (
    <motion.p style={{ y, opacity }} className={`text-lg md:text-2xl text-[color:var(--text)] ${alignmentClasses} max-w-2xl`}>
      {text}
    </motion.p>
  )
}

export default function ScrollSentences() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.9', 'end 0.1'],
  })

  const lines: LineConfig[] = useMemo(
    () => [
      {
        text: 'We craft delightful digital experiences that convert — from landing pages to full-scale products.',
        align: 'right',
        range: [0.0, 0.28],
      },
      {
        text: 'Our process turns ideas into production-ready products, shipped fast and iterated with real users.',
        align: 'left',
        range: [0.24, 0.52],
      },
      {
        text: 'Design and engineering move together, so your brand feels cohesive on every screen size.',
        align: 'right',
        range: [0.48, 0.76],
      },
      {
        text: 'Launch is just the beginning — we optimize, measure, and improve after go-live.',
        align: 'left',
        range: [0.72, 1.0],
      },
    ],
    []
  )

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-24">
        <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12">
          {lines.map((line) => (
            <ParallaxLine key={line.text} text={line.text} align={line.align} range={line.range} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  tx: number
  ty: number
  radius: number
  color: string
}

type CodeStream = {
  x: number
  chars: string[]
  speed: number
  offset: number
  opacity: number
}

const GLYPHS = ['<', '>', '/', '{', '}', ';', '=', '0', '1', '→']
const TECH_NAMES = ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind', 'Framer', 'GraphQL', 'PostgreSQL', 'Docker', 'APIs', 'WebSocket', 'Vercel', 'Git', 'WebGL', 'Canvas']
const VERTICES = [
  [-1, 1.618, 0],
  [1, 1.618, 0],
  [-1, -1.618, 0],
  [1, -1.618, 0],
  [0, -1, 1.618],
  [0, 1, 1.618],
  [0, -1, -1.618],
  [0, 1, -1.618],
  [1.618, 0, -1],
  [1.618, 0, 1],
  [-1.618, 0, -1],
  [-1.618, 0, 1]
]

const EDGES: Array<[number, number]> = [
  [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
  [1, 5], [1, 7], [1, 8], [1, 9],
  [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
  [3, 4], [3, 6], [3, 8], [3, 9],
  [4, 5], [4, 9], [4, 11],
  [5, 9], [5, 11],
  [6, 7], [6, 8], [6, 10],
  [7, 8], [7, 10],
  [8, 9],
  [10, 11]
]

function mulberry32(seed: number) {
  let t = seed
  return function random() {
    t += 0x6D2B79F5
    let r = Math.imul(t ^ (t >>> 15), t | 1)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

function easeInOut(value: number) {
  const x = clamp01(value)
  return x * x * (3 - 2 * x)
}

function resizeCanvas(canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.max(1, Math.floor(rect.width * dpr))
  canvas.height = Math.max(1, Math.floor(rect.height * dpr))
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
}

function createParticles(width: number, height: number, count: number) {
  const random = mulberry32(42)
  const particles: Particle[] = []
  for (let index = 0; index < count; index += 1) {
    particles.push({
      x: random() * width,
      y: random() * height,
      vx: 0,
      vy: 0,
      tx: 0,
      ty: 0,
      radius: 0.8 + random() * 1.2,
      color: random() > 0.5 ? '#6C63FF' : '#00D4FF'
    })
  }
  return particles
}

function createCodeStreams(width: number, height: number, reduced: boolean) {
  const columns = reduced ? 5 : 7
  const random = mulberry32(reduced ? 7 : 17)
  const streams: CodeStream[] = []
  for (let index = 0; index < columns; index += 1) {
    const charCount = Math.max(6, Math.floor(height / 32))
    const chars = Array.from({ length: charCount }, () => GLYPHS[Math.floor(random() * GLYPHS.length)])
    streams.push({
      x: (index / columns) * width,
      chars,
      speed: 0.8 + random() * 0.9,
      offset: random() * height,
      opacity: 0.32 + random() * 0.22
    })
  }
  return streams
}

function projectVertex(vertex: number[], rotation: { x: number; y: number; z: number }, scale: number, cx: number, cy: number) {
  const [baseX, baseY, baseZ] = vertex
  const cosX = Math.cos(rotation.x)
  const sinX = Math.sin(rotation.x)
  const cosY = Math.cos(rotation.y)
  const sinY = Math.sin(rotation.y)
  const cosZ = Math.cos(rotation.z)
  const sinZ = Math.sin(rotation.z)

  let x = baseX
  let y = baseY
  let z = baseZ

  const y1 = y * cosX - z * sinX
  const z1 = y * sinX + z * cosX
  y = y1
  z = z1

  const x2 = x * cosY + z * sinY
  const z2 = -x * sinY + z * cosY
  x = x2
  z = z2

  const x3 = x * cosZ - y * sinZ
  const y3 = x * sinZ + y * cosZ
  x = x3
  y = y3

  const perspective = 2.6 / (2.6 + z)
  return {
    x: cx + x * scale * perspective,
    y: cy + y * scale * perspective,
    scale: perspective
  }
}

function drawScene(
  canvas: HTMLCanvasElement,
  progress: number,
  particles: Particle[],
  codeStreams: CodeStream[],
  reducedParticles: boolean
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.clientWidth
  const height = canvas.clientHeight
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  ctx.save()
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  const centerX = width / 2
  const centerY = height / 2

  // Simple backdrop
  ctx.fillStyle = '#0A0A0A'
  ctx.fillRect(0, 0, width, height)

  // Subtle grid background (0.0-0.3)
  if (progress < 0.6) {
    const gridAlpha = Math.min(0.15, progress * 0.25)
    ctx.globalCompositeOperation = 'screen'
    ctx.strokeStyle = `rgba(108,99,255,${gridAlpha})`
    ctx.lineWidth = 0.5
    const gridSpacing = 70
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  // Rotating octahedron (full scroll range)
  const rotation = {
    x: progress * Math.PI * 2 + 0.4,
    y: progress * Math.PI * 1.5 + 0.6,
    z: progress * Math.PI * 0.8
  }
  const scale = 80 + progress * 20
  const projected = VERTICES.map((vertex) => projectVertex(vertex, rotation, scale, centerX, centerY))

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  ctx.lineWidth = 1.4
  const shapeAlpha = 0.35 + progress * 0.3
  ctx.strokeStyle = `rgba(108,99,255,${shapeAlpha})`

  // Draw edges
  for (const [startIndex, endIndex] of EDGES) {
    const start = projected[startIndex]
    const end = projected[endIndex]
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
  }

  // Draw tech names along edges
  ctx.font = '9px monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const textAlpha = 0.4 + progress * 0.2
  ctx.fillStyle = `rgba(0,212,255,${textAlpha})`
  for (let i = 0; i < EDGES.length; i++) {
    const [startIndex, endIndex] = EDGES[i]
    const start = projected[startIndex]
    const end = projected[endIndex]
    const midX = (start.x + end.x) / 2
    const midY = (start.y + end.y) / 2
    const techName = TECH_NAMES[i % TECH_NAMES.length]
    ctx.fillText(techName, midX, midY)
  }

  // Draw vertices with glow
  const vertexAlpha = 0.6 + progress * 0.4
  ctx.fillStyle = `rgba(0,212,255,${vertexAlpha})`
  for (const point of projected) {
    ctx.beginPath()
    ctx.arc(point.x, point.y, 2.2, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()

  ctx.restore()
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const codeStreamsRef = useRef<CodeStream[]>([])
  const frameRef = useRef<number | null>(null)
  const latestProgressRef = useRef(0)
  const initializedRef = useRef(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, -40, -40])

  const heroText = useMemo(
    () => ({
      badge: '⚡ Available for Projects',
      headingTop: 'We Build',
      headingMid: 'Experiences.',
      headingBottom: 'That Actually Perform.',
      subheading:
        'From pixel-perfect WordPress themes to scalable Node.js backends — we craft fast, modern web experiences tailored to your business.'
    }),
    []
  )

  const scheduleDraw = () => {
    if (frameRef.current !== null) return
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null
      const canvas = canvasRef.current
      if (!canvas) return
      drawScene(
        canvas,
        latestProgressRef.current,
        particlesRef.current,
        codeStreamsRef.current,
        window.innerWidth < 768
      )
    })
  }

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    latestProgressRef.current = progress
    scheduleDraw()
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const initialize = () => {
      const reducedParticles = window.innerWidth < 768
      resizeCanvas(canvas)
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      particlesRef.current = createParticles(width, height, reducedParticles ? 30 : 50)
      codeStreamsRef.current = createCodeStreams(width, height, reducedParticles)
      initializedRef.current = true
      drawScene(canvas, latestProgressRef.current, particlesRef.current, codeStreamsRef.current, reducedParticles)
    }

    initialize()

    const handleResize = () => {
      initialize()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.08),transparent_35%),linear-gradient(180deg,rgba(10,10,10,0.0)_0%,rgba(10,10,10,0.2)_60%,rgba(10,10,10,0.72)_100%)]" />

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-10 flex items-center justify-center px-6"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card mb-6 inline-flex items-center rounded-full px-4 py-2"
            >
              <span className="text-sm tracking-wide text-[color:var(--text)]">{heroText.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl"
            >
              <span className="block text-[color:var(--text)]">{heroText.headingTop}</span>
              <span className="gradient-text mt-2 block">{heroText.headingMid}</span>
              <span className="mt-2 block text-[color:var(--text)]">{heroText.headingBottom}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg"
            >
              {heroText.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
            >
              <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="btn-primary shadow-[0_0_40px_rgba(108,99,255,0.18)]">
                Start a Project
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[color:var(--muted)]"
            >
              <span>✓ 50+ Projects Delivered</span>
              <span>✓ 5-Star Rated</span>
              <span>✓ On-Time Delivery</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[color:var(--muted)]">
          <div className="animate-bounce text-sm tracking-[0.28em] uppercase">Scroll</div>
          <div className="mt-1 text-center text-xl">↓</div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { LayoutGrid, Zap, Server, Code2, ShoppingCart, TrendingUp } from 'lucide-react'

export const services = [
  {
    title: 'WordPress Development',
    icon: <LayoutGrid />,
    description: 'Custom themes, plugin development, WooCommerce stores, speed optimization, and migrations. We go far beyond page builders.'
  },
  {
    title: 'Next.js Development',
    icon: <Zap />,
    description: 'SSR, SSG, ISR — we build Next.js apps that are blazing fast, SEO-optimized, and production-ready from day one.'
  },
  {
    title: 'Node.js & APIs',
    icon: <Server />,
    description: 'RESTful APIs, GraphQL, WebSockets, authentication systems, and third-party integrations built to scale.'
  },
  {
    title: 'Custom Web Apps',
    icon: <Code2 />,
    description: "Bespoke web applications built from scratch when off-the-shelf solutions just won't cut it."
  },
  {
    title: 'E-Commerce Solutions',
    icon: <ShoppingCart />,
    description: 'WooCommerce, custom checkout flows, payment gateway integration, and inventory management systems.'
  },
  {
    title: 'Performance & SEO',
    icon: <TrendingUp />,
    description: 'Core Web Vitals optimization, technical SEO audits, caching strategies, and Lighthouse score improvements.'
  }
]

export const processSteps = [
  { title: 'Discovery', description: 'We map your goals, users, and technical requirements in a structured kickoff session.' },
  { title: 'Design & Architecture', description: 'Wireframes, component planning, tech stack decisions — approved by you before we write a line of code.' },
  { title: 'Build & Review', description: 'Iterative development with regular demos. You see progress, not just a final reveal.' },
  { title: 'Launch & Support', description: 'Deployment, DNS, post-launch monitoring, and optional retainer for ongoing maintenance.' }
]

export const techLogos = {
  row1: ['Next.js', 'React', 'Node.js', 'TypeScript', 'WordPress', 'WooCommerce'],
  row2: ['Tailwind CSS', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Vercel', 'Docker']
}

export const projects = [
  { name: 'StoreFront Pro', description: 'WooCommerce store with custom checkout', tags: ['WooCommerce', 'WordPress'] },
  { name: 'Launchpad SaaS', description: 'Next.js SaaS dashboard with Auth & billing', tags: ['Next.js', 'Stripe'] },
  { name: 'AgencyFlow CMS', description: 'Headless WordPress + Next.js frontend', tags: ['WordPress', 'Headless'] }
]

export const testimonials = [
  { quote: 'They rebuilt our WordPress site in 3 weeks and cut load time in half. Incredible attention to detail.', name: 'Sarah K.', role: 'E-Commerce Founder' },
  { quote: "The Next.js app they built handles 10k daily users without breaking a sweat.", name: 'James R.', role: 'SaaS Founder' },
  { quote: 'Professional, fast, and the code quality is genuinely impressive.', name: 'Aisha M.', role: 'Marketing Director' }
]

export default {}

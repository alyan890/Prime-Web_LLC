import React from 'react'
import dynamic from 'next/dynamic'
import Services from '../components/Services'
import Process from '../components/Process'
import TechStack from '../components/TechStack'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const HeroCanvas = dynamic(() => import('../components/HeroCanvas'), { ssr: false })

export default function Page() {
  return (
    <>
      <HeroCanvas />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Services />
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Process />
      </section>
      <section className="py-12 border-t border-[color:var(--border)]">
        <TechStack />
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Portfolio />
      </section>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Testimonials />
      </section>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <Contact />
      </section>
    </>
  )
}

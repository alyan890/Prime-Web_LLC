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
    <div className="overflow-x-hidden">
      <HeroCanvas />
      
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Services />
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Process />
        </div>
      </section>

      <section id="tech" className="py-12 border-t border-(--border)">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <TechStack />
        </div>
      </section>

      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Portfolio />
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Testimonials />
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Contact />
        </div>
      </section>
    </div>
  )
}

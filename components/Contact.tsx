import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="glass-card site-container--form">
      <div className="mb-6 text-center">
        <h3 className="text-3xl font-bold gradient-text">Ready to Build Something?</h3>
        <p className="mt-2 text-(--muted)">Tell us about your project — we'll get back within 24 hours.</p>
      </div>

      <form className="grid gap-4 md:grid-cols-2">
        <input className="rounded border border-(--border) bg-transparent p-3 md:col-span-1" placeholder="Name" />
        <input className="rounded border border-(--border) bg-transparent p-3 md:col-span-1" placeholder="Email" />
        <select className="rounded border border-(--border) bg-transparent p-3 md:col-span-2">
          <option>WordPress</option>
          <option>Next.js</option>
          <option>Node.js API</option>
          <option>Custom App</option>
          <option>Other</option>
        </select>
        <textarea className="rounded border border-(--border) bg-transparent p-3 md:col-span-2" placeholder="Message" rows={6} />
        <button className="btn-primary w-full md:col-span-2">Send Message</button>
      </form>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-(--muted)">
        <div className="px-4 py-2 glass-card">📧 hello@devstudio.com</div>
        <div className="px-4 py-2 glass-card">💬 WhatsApp</div>
        <div className="px-4 py-2 glass-card">📅 Book a Call</div>
      </div>
    </section>
  )
}

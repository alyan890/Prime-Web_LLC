import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="glass-card">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold gradient-text">Ready to Build Something?</h3>
        <p className="text-[color:var(--muted)] mt-2">Tell us about your project — we'll get back within 24 hours.</p>
      </div>

      <form className="grid gap-4">
        <input className="p-3 bg-transparent border border-[color:var(--border)] rounded" placeholder="Name" />
        <input className="p-3 bg-transparent border border-[color:var(--border)] rounded" placeholder="Email" />
        <select className="p-3 bg-transparent border border-[color:var(--border)] rounded">
          <option>WordPress</option>
          <option>Next.js</option>
          <option>Node.js API</option>
          <option>Custom App</option>
          <option>Other</option>
        </select>
        <textarea className="p-3 bg-transparent border border-[color:var(--border)] rounded" placeholder="Message" rows={6} />
        <button className="btn-primary w-full">Send Message</button>
      </form>

      <div className="mt-6 flex gap-4 items-center justify-center text-[color:var(--muted)]">
        <div className="px-4 py-2 glass-card">📧 hello@devstudio.com</div>
        <div className="px-4 py-2 glass-card">💬 WhatsApp</div>
        <div className="px-4 py-2 glass-card">📅 Book a Call</div>
      </div>
    </section>
  )
}

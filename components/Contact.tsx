import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="glass-card">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold gradient-text">Ready to Build Something?</h3>
        <p className="text-[color:var(--muted)] mt-2">Tell us about your project — we'll get back within 24 hours.</p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <input className="w-full p-3 bg-transparent border border-[color:var(--border)] rounded focus:outline-none" placeholder="Name" />
        <input className="w-full p-3 bg-transparent border border-[color:var(--border)] rounded focus:outline-none" placeholder="Email" />

        <select className="w-full p-3 bg-[color:var(--bg)] text-[color:var(--text)] border border-[color:var(--border)] rounded focus:outline-none">
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">WordPress</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Next.js</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Node.js API</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Custom App</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Other</option>
        </select>

        <div className="md:col-span-2">
          <textarea className="w-full p-3 bg-transparent border border-[color:var(--border)] rounded focus:outline-none" placeholder="Message" rows={6} />
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <button className="btn-primary w-full">Send Message</button>
        </div>
      </form>

      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center text-[color:var(--muted)]">
        <div className="px-4 py-2 glass-card">📧 hello@devstudio.com</div>
        <div className="px-4 py-2 glass-card">💬 WhatsApp</div>
        <div className="px-4 py-2 glass-card">📅 Book a Call</div>
      </div>
    </section>
  )
}

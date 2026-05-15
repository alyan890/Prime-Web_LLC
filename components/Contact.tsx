'use client'
import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('WordPress')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<null | 'sending' | 'sent' | 'error'>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbzCoOVSMXpoE7xQyKSD1C67e0oB7j_hAlpp1IIF4x5AS9v8ncTtRnWYziDHvy5UL3w/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, service, message }),
        }
      )
      // With no-cors, request succeeds if sent (can't verify response)
      // Email will be sent to your Gmail inbox
      setStatus('sent')
      setName('')
      setEmail('')
      setService('WordPress')
      setMessage('')
      setTimeout(() => setStatus(null), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <section id="contact" className="glass-card">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold gradient-text">Ready to Build Something?</h3>
        <p className="text-[color:var(--muted)] mt-2">Tell us about your project — we'll get back within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 bg-transparent border border-[color:var(--border)] rounded focus:outline-none"
          placeholder="Name"
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          className="w-full p-3 bg-transparent border border-[color:var(--border)] rounded focus:outline-none"
          placeholder="Email"
          required
        />

        <select
          value={service}
          onChange={e => setService(e.target.value)}
          className="w-full p-3 bg-[color:var(--bg)] text-[color:var(--text)] border border-[color:var(--border)] rounded focus:outline-none"
        >
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">WordPress</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Next.js</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Node.js API</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Custom App</option>
          <option className="bg-[color:var(--bg)] text-[color:var(--text)]">Other</option>
        </select>

        <div className="md:col-span-2">
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full p-3 bg-transparent border border-[color:var(--border)] rounded focus:outline-none"
            placeholder="Message"
            rows={6}
            required
          />
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end">
          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {status === 'sent' && (
          <div className="md:col-span-2 text-center text-green-400">
            ✓ Message sent! We'll get back to you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="md:col-span-2 text-center text-red-400">
            ✗ Failed to send. Please try again.
          </div>
        )}
      </form>

      <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center text-[color:var(--muted)]">
        <div className="px-4 py-2 glass-card">📧 primewebsitesllc@gmail.com</div>
        <div className="px-2 py-2 glass-card">💬<br />+1(321)357-2020</div>
        <div className="px-4 py-2 glass-card">📅 Book a Call</div>
      </div>
    </section>
  )
}

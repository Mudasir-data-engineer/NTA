// src/components/Contact.jsx
import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section style={{ padding: '40px 20px', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gap: 12,
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'start',
        }}
      >
        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #d1d5db' }}
            />
            {errors.name && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.name}</div>}
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #d1d5db' }}
            />
            {errors.email && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.email}</div>}
          </div>
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={6}
            style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #d1d5db' }}
          />
          {errors.message && <div style={{ color: '#dc2626', marginTop: 6 }}>{errors.message}</div>}
        </div>

        <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#4f46e5',
              color: '#fff',
              fontWeight: 600,
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <div style={{ color: '#16a34a' }}>Message sent — thank you!</div>}
          {status === 'error' && <div style={{ color: '#dc2626' }}>Something went wrong. Try again later.</div>}
        </div>
      </form>
    </section>
  )
}

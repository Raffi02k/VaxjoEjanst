import { FormEvent, useState } from 'react'

const API = import.meta.env.VITE_API_BASE_URL || ''

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    const payload = Object.fromEntries(form.entries())
    try {
      const response = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      formElement.reset()
    } catch {
      setStatus('error')
    }
  }

  return <form className="contact-form" onSubmit={submit}>
    <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="form-grid">
      <label><span>Namn *</span><input required name="name" maxLength={100} placeholder="Ditt namn" /></label>
      <label><span>Företag</span><input name="company" maxLength={120} placeholder="Företag / BRF" /></label>
      <label><span>E-post *</span><input required type="email" name="email" maxLength={180} placeholder="namn@epost.se" /></label>
      <label><span>Telefon *</span><input required name="phone" maxLength={40} placeholder="070-000 00 00" /></label>
      <label><span>Jag är</span><select name="customer_type" defaultValue="Privatperson"><option>Privatperson</option><option>Företag</option><option>Fastighetsägare / BRF</option><option>Annat</option></select></label>
      <label><span>Ärende</span><select name="service" defaultValue="Elinstallation"><option>Elinstallation</option><option>Service / felsökning</option><option>Belysning</option><option>Laddbox</option><option>Företag / entreprenad</option><option>Annat</option></select></label>
    </div>
    <label><span>Berätta kort om projektet *</span><textarea required name="message" maxLength={2000} rows={6} placeholder="Vad behöver du hjälp med, var finns projektet och när vill du komma igång?" /></label>
    <div className="form-submit-row">
      <button className="button button-red" disabled={status === 'sending'}>{status === 'sending' ? 'Skickar...' : 'Skicka förfrågan'} <span>↗</span></button>
      {status === 'success' && <p className="form-success">Tack! Förfrågan är mottagen.</p>}
      {status === 'error' && <p className="form-error">Kunde inte skicka just nu. Ring eller mejla oss istället.</p>}
    </div>
  </form>
}

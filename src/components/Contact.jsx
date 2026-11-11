import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { profile } from '../data/portfolio'
import Section from './Section'
import SocialLinks from './SocialLinks'

// FormSubmit (formsubmit.co) mengirim langsung ke inbox tanpa backend.
// Kunjungan pertama: klik tautan konfirmasi yang dikirim FormSubmit ke email Anda.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Pesan dari ${form.name} via portofolio`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="kontak" label="05 — Kontak" title="Mari Berkolaborasi">
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Tertarik bekerja sama atau punya pertanyaan? Kirim pesan melalui
            formulir, atau hubungi saya langsung lewat email dan media sosial.
          </p>

          <a className="contact-item" href={`mailto:${profile.email}`}>
            <Mail size={19} />
            <span>
              <small>Email</small>
              {profile.email}
            </span>
          </a>
          <a className="contact-item" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
            <Phone size={19} />
            <span>
              <small>Telepon</small>
              {profile.phone}
            </span>
          </a>
          <div className="contact-item">
            <MapPin size={19} />
            <span>
              <small>Lokasi</small>
              {profile.location}
            </span>
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <SocialLinks socials={profile.socials} email={profile.email} />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Nama</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nama Anda"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="nama@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Ceritakan proyek atau pertanyaan Anda..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {status === 'success' && (
            <div className="form-success" role="status">
              <CheckCircle2 size={16} style={{ verticalAlign: '-3px' }} /> Pesan terkirim! Saya akan membalas secepatnya.
            </div>
          )}
          {status === 'error' && (
            <div className="form-error" role="alert">
              <AlertCircle size={16} style={{ verticalAlign: '-3px' }} /> Gagal mengirim. Coba lagi, atau email langsung ke{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending'}>
            {status === 'sending' ? <Loader2 size={17} className="spin" /> : <Send size={17} />}
            {status === 'sending' ? ' Mengirim…' : ' Kirim Pesan'}
          </button>
          <p className="form-note">
            Pesan dikirim langsung ke inbox melalui FormSubmit. Pengiriman pertama mungkin
            meminta konfirmasi sekali lewat email.
          </p>
        </form>
      </div>
    </Section>
  )
}

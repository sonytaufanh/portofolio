import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react'
import { profile } from '../data/portfolio'
import Section from './Section'
import SocialLinks from './SocialLinks'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (status !== 'idle') setStatus('idle')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* abaikan */
    }
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
    <Section
      id="kontak"
      index="06"
      label="Kontak"
      title="Mari Berkolaborasi"
      desc="Punya proyek, kebutuhan ERP, atau peluang kerja? Kirim pesan — saya balas secepatnya."
    >
      <div className="contact-grid">
        <div>
          <p className="contact-lead">
            Terbuka untuk diskusi seputar implementasi ERP, analisis proses bisnis,
            pengembangan sistem internal, hingga dukungan operasional IT.
          </p>

          <div className="contact-list">
            <div className="contact-link">
              <span className="contact-icon"><Mail size={18} /></span>
              <div>
                <small>Email</small>
                <span className="val">{profile.email}</span>
              </div>
              <button
                className={`copy-inline${copied ? ' copied' : ''}`}
                onClick={copyEmail}
                aria-label="Salin email"
                title="Salin email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <a className="contact-link" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              <span className="contact-icon"><Phone size={18} /></span>
              <div>
                <small>Telepon</small>
                <span className="val">{profile.phone}</span>
              </div>
            </a>

            <div className="contact-link">
              <span className="contact-icon"><MapPin size={18} /></span>
              <div>
                <small>Lokasi</small>
                <span className="val">{profile.location}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.4rem' }}>
            <SocialLinks socials={profile.socials} email={profile.email} />
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          {status === 'success' && (
            <div className="form-alert ok" role="status">
              <CheckCircle2 size={16} /> Pesan terkirim! Saya akan membalas secepatnya.
            </div>
          )}
          {status === 'error' && (
            <div className="form-alert err" role="alert">
              <AlertCircle size={16} /> Gagal mengirim. Coba lagi atau email langsung.
            </div>
          )}

          <div className="form-row">
            <div className="field">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder=" "
                value={form.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Nama</label>
            </div>
            <div className="field">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                value={form.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="field">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder=" "
              value={form.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Pesan</label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {status === 'sending' ? <Loader2 size={17} className="spin" /> : <Send size={17} />}
            {status === 'sending' ? 'Mengirim…' : 'Kirim Pesan'}
          </button>

          <p className="form-note">
            Dikirim langsung ke inbox via FormSubmit. Pengiriman pertama mungkin meminta
            konfirmasi sekali lewat email.
          </p>
        </form>
      </div>
    </Section>
  )
}

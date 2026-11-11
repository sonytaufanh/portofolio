import { ArrowDown, Download, MapPin, Mail, Database, Rocket, Code2 } from 'lucide-react'
import { profile } from '../data/portfolio'
import useTypewriter from '../hooks/useTypewriter'
import SocialLinks from './SocialLinks'

function initials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal visible">
          {profile.available && (
            <span className="eyebrow">
              <span className="dot" /> Tersedia untuk peluang &amp; proyek baru
            </span>
          )}

          <h1 className="hero-title">
            <span className="line soft">Halo, saya</span>
            <span className="line grad-text">{profile.name}</span>
          </h1>

          <p className="hero-typed" aria-label={profile.role}>
            <span className="prefix">&gt;_</span>
            <span>{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-desc">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#proyek">
              Jelajahi Proyek
            </a>
            <a
              className="btn btn-ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> Unduh CV
            </a>
          </div>

          <div className="hero-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <span><Mail size={14} /> {profile.email}</span>
            <SocialLinks socials={profile.socials} email={profile.email} />
          </div>
        </div>

        <div className="hero-visual reveal visible" aria-hidden={profile.photo ? undefined : 'true'}>
          <div className="orb">
            <span className="orb-ring" />
            <span className="orb-ring-2" />

            <div className="orb-avatar">
              {profile.photo ? (
                <img src={profile.photo} alt={`Foto ${profile.name}`} />
              ) : (
                <span className="orb-initials">{initials(profile.name)}</span>
              )}
            </div>

            <span className="orb-chip c1"><Database size={13} /> 5+ thn ERP</span>
            <span className="orb-chip c2"><Rocket size={13} /> UAT → Go-Live</span>
            <span className="orb-chip c3"><Code2 size={13} /> React · TS</span>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#tentang" aria-hidden="true">
        SCROLL
        <ArrowDown size={15} />
      </a>
    </section>
  )
}

import { MapPin, Mail, Phone, Briefcase } from 'lucide-react'
import { about, profile } from '../data/portfolio'
import Section from './Section'

export default function About() {
  return (
    <Section id="tentang" label="01 — Profil" title={about.heading}>
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about-stats">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-card" aria-label="Informasi singkat">
          <h3>Informasi Singkat</h3>
          <div className="about-row">
            <Briefcase size={17} />
            <div>
              {profile.role}
              <br />
              <span>{profile.location}</span>
            </div>
          </div>
          <div className="about-row">
            <MapPin size={17} />
            <span>{profile.location}</span>
          </div>
          <div className="about-row">
            <Mail size={17} />
            <a href={`mailto:${profile.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {profile.email}
            </a>
          </div>
          <div className="about-row">
            <Phone size={17} />
            <span>{profile.phone}</span>
          </div>
        </aside>
      </div>
    </Section>
  )
}

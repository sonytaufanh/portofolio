import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import SocialLinks from './SocialLinks'
import Avatar from './Avatar'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid reveal visible">
        <div className="hero-text">
          {profile.available && (
            <span className="badge">
              <span className="dot" /> Tersedia untuk proyek &amp; peluang kerja
            </span>
          )}

          <h1>
            Halo, saya<br />
            <span className="accent">{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#proyek">
              Lihat Proyek Saya
            </a>
            <a className="btn btn-outline" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download size={17} /> Unduh CV
            </a>
          </div>

          <SocialLinks socials={profile.socials} email={profile.email} />
        </div>

        <div className="hero-visual" aria-hidden={profile.photo ? undefined : 'true'}>
          <div className="avatar-ring">
            <Avatar size={230} />
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#tentang" aria-hidden="true">
        Gulir
        <ArrowDown size={16} />
      </a>
    </section>
  )
}

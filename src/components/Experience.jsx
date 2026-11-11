import { GraduationCap, Award } from 'lucide-react'
import { experience, education, certifications } from '../data/portfolio'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="pengalaman" label="04 — Rekam Jejak" title="Pengalaman & Sertifikasi">
      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={`${item.role}-${item.period}`}>
            <div className="timeline-card">
              <div className="timeline-head">
                <h3>{item.role}</h3>
                <span className="period">{item.period}</span>
              </div>
              <div className="company">{item.company}</div>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {certifications?.length > 0 && (
        <div className="education">
          <h3>
            <Award size={20} /> Sertifikasi &amp; Pelatihan
          </h3>
          <div className="timeline">
            {certifications.map((item) => (
              <div className="timeline-item" key={item.title}>
                <div className="timeline-card">
                  <div className="timeline-head">
                    <h3>{item.title}</h3>
                    <span className="period">{item.year}</span>
                  </div>
                  <div className="company">{item.issuer}</div>
                  {item.description && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {education.length > 0 && (
        <div className="education">
          <h3>
            <GraduationCap size={20} /> Pendidikan
          </h3>
          <div className="timeline">
            {education.map((item) => (
              <div className="timeline-item" key={`${item.degree}-${item.period}`}>
                <div className="timeline-card">
                  <div className="timeline-head">
                    <h3>{item.degree}</h3>
                    {item.period && <span className="period">{item.period}</span>}
                  </div>
                  <div className="company">{item.school}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}

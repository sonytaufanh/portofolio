import { useState } from 'react'
import { Award, GraduationCap, ChevronDown } from 'lucide-react'
import { experience, certifications, education } from '../data/portfolio'
import Section from './Section'

export default function Experience() {
  const [active, setActive] = useState(0)
  const [openAcc, setOpenAcc] = useState(0)
  const item = experience[active]

  return (
    <Section
      id="pengalaman"
      index="05"
      label="Rekam Jejak"
      title="Pengalaman & Sertifikasi"
      desc="Pilih peran di samping untuk melihat tanggung jawab utama; sertifikasi bisa dibuka satu per satu."
    >
      <div className="exp-grid">
        <div className="exp-tabs" role="tablist" aria-label="Pengalaman kerja">
          {experience.map((exp, i) => (
            <button
              key={exp.period}
              role="tab"
              aria-selected={i === active}
              className={`exp-tab${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="exp-role">{exp.role}</span>
              <span className="exp-company">{exp.company}</span>
              <span className="exp-period">{exp.period}</span>
            </button>
          ))}
        </div>

        <div className="exp-panel" role="tabpanel" key={item.period}>
          <h3>{item.role}</h3>
          <div className="exp-sub">
            {item.company} <span>·</span> {item.period}
            {item.badge && <span className="exp-badge">{item.badge}</span>}
          </div>

          <ul className="exp-points">
            {item.points.map((p, i) => (
              <li key={i}>
                <span className="marker" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="subhead">
        <Award size={19} /> Sertifikasi &amp; Pelatihan
      </h3>

      <div className="accordion">
        {certifications.map((cert, i) => {
          const open = openAcc === i
          return (
            <div className={`acc-item${open ? ' open' : ''}`} key={cert.title}>
              <button
                className="acc-trigger"
                aria-expanded={open}
                onClick={() => setOpenAcc(open ? -1 : i)}
              >
                <div>
                  <span className="acc-title">{cert.title}</span>
                  <span className="acc-issuer">{cert.issuer}</span>
                </div>
                <span className="acc-year">{cert.year}</span>
                <ChevronDown size={17} className="acc-chevron" />
              </button>
              <div className="acc-panel">
                <div className="acc-panel-inner">{cert.description}</div>
              </div>
            </div>
          )
        })}
      </div>

      {education.length > 0 && (
        <>
          <h3 className="subhead">
            <GraduationCap size={19} /> Pendidikan
          </h3>
          <div className="accordion">
            {education.map((ed) => (
              <div className="acc-item" key={ed.degree}>
                <div className="acc-trigger" style={{ cursor: 'default' }}>
                  <div>
                    <span className="acc-title">{ed.degree}</span>
                    <span className="acc-issuer">{ed.school}</span>
                  </div>
                  <span className="acc-year">{ed.period}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  )
}

import { useState } from 'react'
import { skills } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  const [active, setActive] = useState(0)
  const group = skills[active]

  return (
    <Section
      id="keahlian"
      index="02"
      label="Keahlian"
      title="Toolkit & Kompetensi"
      desc="Pilih kategori untuk melihat detail kemampuan yang saya gunakan sehari-hari."
    >
      <div className="tabs" role="tablist" aria-label="Kategori keahlian">
        {skills.map((s, i) => (
          <button
            key={s.category}
            role="tab"
            aria-selected={i === active}
            className={`tab${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {s.category}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel" key={group.category}>
        <div className="tab-panel-head">
          <h3>{group.category}</h3>
          <span>{String(group.items.length).padStart(2, '0')} kompetensi</span>
        </div>
        <div className="chip-grid">
          {group.items.map((item, i) => (
            <div className="chip" key={item} style={{ animationDelay: `${i * 45}ms` }}>
              <span className="bullet" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

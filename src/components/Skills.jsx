import { skills } from '../data/portfolio'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="keahlian" label="02 — Keahlian" title="Yang Saya Kuasai">
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

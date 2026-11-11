import { useState } from 'react'
import { Search, Workflow, Code2, Bug, CheckCircle2, Rocket } from 'lucide-react'
import { process as steps } from '../data/portfolio'
import Section from './Section'

const ICONS = {
  search: Search,
  workflow: Workflow,
  code: Code2,
  bug: Bug,
  check: CheckCircle2,
  rocket: Rocket,
}

export default function Process() {
  const [active, setActive] = useState(0)
  const step = steps[active]
  const Icon = ICONS[step.icon] ?? Search

  return (
    <Section
      id="proses"
      index="03"
      label="Cara Kerja"
      title="Dari BRD sampai Go-Live"
      desc="Alur kerja yang saya pakai untuk memastikan sistem selaras dengan bisnis — klik setiap tahap untuk detailnya."
    >
      <div className="process-track" role="tablist" aria-label="Tahapan proyek">
        {steps.map((s, i) => (
          <button
            key={s.title}
            role="tab"
            aria-selected={i === active}
            className={`step${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="step-num">0{i + 1}</span>
            <span className="step-title">{s.title}</span>
          </button>
        ))}
      </div>

      <div className="process-panel" role="tabpanel" key={step.title}>
        <div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <div className="process-meta">
            {step.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="process-visual" aria-hidden="true">
          <div className="process-icon">
            <Icon size={30} strokeWidth={1.6} />
          </div>
        </div>
      </div>
    </Section>
  )
}

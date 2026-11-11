import { useEffect, useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { about, profile } from '../data/portfolio'
import Section from './Section'

function useCountUp(value, active) {
  const target = parseInt(value, 10)
  const suffix = value.replace(/[0-9]/g, '')
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!active) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || Number.isNaN(target)) {
      setN(target || 0)
      return
    }
    let raf
    const started = performance.now()
    const duration = 1100
    const tick = (now) => {
      const p = Math.min((now - started) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return Number.isNaN(target) ? value : `${n}${suffix}`
}

function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let io
    const fallback = setTimeout(() => setActive(true), 2500)

    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(true)
            io.disconnect()
          }
        },
        { threshold: 0.25 }
      )
      io.observe(el)
    } else {
      setActive(true)
    }

    return () => {
      clearTimeout(fallback)
      io?.disconnect()
    }
  }, [])

  return (
    <div className="stats" ref={ref}>
      {about.stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-num">
            <CountValue value={s.value} active={active} />
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function CountValue({ value, active }) {
  const text = useCountUp(value, active)
  return <>{text}</>
}

const CODE_LINES = [
  [{ t: 'punc', v: '{' }],
  [{ t: 'key', v: '  "name"' }, { t: 'punc', v: ': ' }, { t: 'str', v: '"Sony Taufan Hambali"' }, { t: 'punc', v: ',' }],
  [{ t: 'key', v: '  "role"' }, { t: 'punc', v: ': ' }, { t: 'str', v: '"IT Business Analyst"' }, { t: 'punc', v: ',' }],
  [{ t: 'key', v: '  "company"' }, { t: 'punc', v: ': ' }, { t: 'str', v: '"PT Modernland Realty Tbk"' }, { t: 'punc', v: ',' }],
  [{ t: 'key', v: '  "experience"' }, { t: 'punc', v: ': ' }, { t: 'num', v: '5' }, { t: 'punc', v: ', // years' }],
  [{ t: 'key', v: '  "focus"' }, { t: 'punc', v: ': [' }],
  [{ t: 'str', v: '    "ERP Support"' }, { t: 'punc', v: ', ' }, { t: 'str', v: '"Business Analysis"' }, { t: 'punc', v: ',' }],
  [{ t: 'str', v: '    "IT Operations"' }, { t: 'punc', v: ', ' }, { t: 'str', v: '"System Development"' }],
  [{ t: 'punc', v: '  ]' }],
  [{ t: 'punc', v: '}' }],
]

const CODE_TEXT = `{
  "name": "Sony Taufan Hambali",
  "role": "IT Business Analyst",
  "company": "PT Modernland Realty Tbk",
  "experience": 5,
  "focus": [
    "ERP Support", "Business Analysis",
    "IT Operations", "System Development"
  ]
}`

export default function About() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE_TEXT)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard tidak tersedia */
    }
  }

  return (
    <Section
      id="tentang"
      index="01"
      label="Tentang"
      title={about.heading}
      desc="Profil singkat, fokus kerja, dan angka yang merangkum perjalanan profesional saya."
    >
      <div className="about-grid">
        <div className="about-copy">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="focus-row">
            {about.focus.map((f) => (
              <span className="focus" key={f}>{f}</span>
            ))}
          </div>

          <Stats />
        </div>

        <div className="code-card">
          <div className="code-head">
            <div className="code-dots"><span /><span /><span /></div>
            <span className="code-name">profile.json</span>
            <button
              className={`copy-btn${copied ? ' copied' : ''}`}
              onClick={copy}
              aria-label="Salin data profil"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Tersalin' : 'Salin'}
            </button>
          </div>
          <pre className="code-body" aria-label="Data profil dalam format JSON">
            {CODE_LINES.map((line, i) => (
              <div key={i}>
                {line.map((tok, j) => (
                  <span key={j} className={`tok-${tok.t}`}>{tok.v}</span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </Section>
  )
}

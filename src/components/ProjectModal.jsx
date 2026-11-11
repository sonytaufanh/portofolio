import { useEffect, useRef } from 'react'
import { X, ArrowUpRight } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const prev = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // sederhana: jaga fokus di dalam dialog
        const focusables = closeRef.current?.parentElement?.querySelectorAll(
          'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="project-title">
        <div className="modal-head">
          <div>
            <span className="modal-kicker">
              {project.context} · {project.year}
            </span>
            <h3 id="project-title">{project.title}</h3>
          </div>
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Tutup detail proyek">
            <X size={18} />
          </button>
        </div>

        <p>{project.description}</p>

        <ul className="modal-highlights">
          {project.highlights?.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="tags modal-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        {project.demo && (
          <p style={{ marginTop: '1.2rem' }}>
            <a className="btn btn-ghost" href={project.demo} target="_blank" rel="noopener noreferrer">
              Buka demo <ArrowUpRight size={15} />
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

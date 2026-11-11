import { useState } from 'react'
import { FolderKanban, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import Section from './Section'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  const tilt = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)

    if (window.matchMedia?.('(hover: hover)').matches) {
      const rx = ((y / rect.height) - 0.5) * -5
      const ry = ((x / rect.width) - 0.5) * 5
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    }
  }

  const reset = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <Section
      id="proyek"
      index="04"
      label="Karya"
      title="Proyek & Sistem"
      desc="Sistem internal yang saya bangun atau kembangkan — klik kartu untuk melihat detail dan kontribusi."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => setSelected(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelected(project)
              }
            }}
            onMouseMove={tilt}
            onMouseLeave={reset}
          >
            {project.image && (
              <img className="project-image" src={project.image} alt={`Tampilan ${project.title}`} loading="lazy" />
            )}

            <div className="project-top">
              <span className="project-icon">
                <FolderKanban size={20} strokeWidth={1.7} />
              </span>
              <span className="project-year">{project.context}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>

            <span className="project-foot">
              Lihat detail <ArrowUpRight size={15} />
            </span>
          </article>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}

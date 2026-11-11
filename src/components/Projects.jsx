import { FolderGit2, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="proyek" label="03 — Karya" title="Proyek Pilihan">
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image && (
              <img
                className="project-image"
                src={project.image}
                alt={`Tampilan ${project.title}`}
                loading="lazy"
              />
            )}
            <div className="project-top">
              <FolderGit2 size={26} strokeWidth={1.6} aria-hidden="true" />
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kode sumber ${project.title} di GitHub`}
                    title="Kode sumber"
                  >
                    <Github size={19} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Demo langsung ${project.title}`}
                    title="Demo langsung"
                  >
                    <ExternalLink size={19} />
                  </a>
                )}
              </div>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

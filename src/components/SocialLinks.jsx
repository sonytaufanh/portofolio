import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
}

export default function SocialLinks({ socials, email }) {
  return (
    <div className="socials">
      {socials.map(({ label, href, icon }) => {
        const Icon = ICONS[icon] ?? Mail
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <Icon size={19} strokeWidth={1.8} />
          </a>
        )
      })}
      {email && (
        <a href={`mailto:${email}`} aria-label="Email" title="Email">
          <Mail size={19} strokeWidth={1.8} />
        </a>
      )}
    </div>
  )
}

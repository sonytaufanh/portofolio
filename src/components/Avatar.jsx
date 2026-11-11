import { profile } from '../data/portfolio'

function initials(name) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

/**
 * Foto profil bila profile.photo diisi, jika tidak: monogram inisial.
 */
export default function Avatar({ size = 220 }) {
  if (profile.photo) {
    return (
      <img
        className="avatar"
        src={profile.photo}
        alt={`Foto profil ${profile.name}`}
        style={{ width: size, height: size }}
      />
    )
  }
  return (
    <div
      className="avatar avatar-mono"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      role="img"
      aria-label={`Monogram ${profile.name}`}
    >
      {initials(profile.name)}
    </div>
  )
}

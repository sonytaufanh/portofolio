import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Search,
  Hash,
  Sun,
  Moon,
  Copy,
  Download,
  Linkedin,
  CornerDownLeft,
  Command,
} from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function CommandPalette({ open, onClose, onToggleTheme, theme }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)
  const timerRef = useRef(null)

  const actions = useMemo(() => {
    const nav = navLinks.map((l) => ({
      id: l.href,
      group: 'Navigasi',
      label: l.label,
      icon: Hash,
      run: () => {
        const el = document.querySelector(l.href)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      },
    }))

    const tools = [
      {
        id: 'theme',
        group: 'Aksi',
        label: theme === 'dark' ? 'Mode terang' : 'Mode gelap',
        icon: theme === 'dark' ? Sun : Moon,
        hint: 'T',
        run: onToggleTheme,
      },
      {
        id: 'copy',
        group: 'Aksi',
        label: 'Salin alamat email',
        icon: Copy,
        hint: profile.email,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email)
            setCopied(true)
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => setCopied(false), 1500)
          } catch {
            window.location.href = `mailto:${profile.email}`
          }
        },
      },
      {
        id: 'cv',
        group: 'Aksi',
        label: 'Unduh CV (PDF)',
        icon: Download,
        run: () => window.open(profile.resumeUrl, '_blank', 'noopener'),
      },
      ...profile.socials.map((s) => ({
        id: `social-${s.label}`,
        group: 'Aksi',
        label: `Buka ${s.label}`,
        icon: Linkedin,
        run: () => window.open(s.href, '_blank', 'noopener'),
      })),
    ]

    return [...nav, ...tools]
  }, [onToggleTheme, theme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return actions
    return actions.filter((a) => a.label.toLowerCase().includes(q))
  }, [actions, query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setCopied(false)
      setTimeout(() => inputRef.current?.focus(), 30)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setActive(0), [query])
  useEffect(() => () => clearTimeout(timerRef.current), [])

  if (!open) return null

  const choose = (action) => {
    action?.run?.()
    if (action?.id !== 'copy' && action?.id !== 'theme') onClose()
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') return onClose()
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % Math.max(filtered.length, 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1))
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      choose(filtered[active])
    }
  }

  let lastGroup = ''

  return (
    <div className="cmdk-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onKeyDown={onKeyDown}
      >
        <div className="cmdk-search">
          <Search size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari halaman, aksi, atau kontak…"
            aria-label="Pencarian perintah"
          />
          <kbd>ESC</kbd>
        </div>

        <div className="cmdk-list" role="listbox">
          {filtered.length === 0 && (
            <div className="cmdk-empty">Tidak ada hasil untuk “{query}”.</div>
          )}
          {copied && <div className="cmdk-empty">✓ Email disalin ke clipboard.</div>}
          {filtered.map((action, i) => {
            const Icon = action.icon
            const showGroup = action.group !== lastGroup
            lastGroup = action.group
            return (
              <div key={action.id}>
                {showGroup && <div className="cmdk-group">{action.group}</div>}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  className={`cmdk-item${i === active ? ' active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(action)}
                >
                  <Icon size={16} />
                  {action.label}
                  {action.hint && <span className="hint">{action.hint}</span>}
                </button>
              </div>
            )
          })}
        </div>

        <div className="cmdk-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigasi</span>
          <span><CornerDownLeft size={11} /> pilih</span>
          <span><Command size={11} /> K buka</span>
        </div>
      </div>
    </div>
  )
}

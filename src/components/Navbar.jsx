import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Search } from 'lucide-react'
import { profile, navLinks } from '../data/portfolio'

export default function Navbar({ theme, onToggleTheme, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight section aktif
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand-mark">ST</span>
            <span>
              {profile.name.split(/\s+/).slice(0, 2).join(' ')}
              <small>PORTFOLIO / 2026</small>
            </span>
          </a>

          <nav aria-label="Navigasi utama">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={active === link.href ? 'active' : ''}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="kbd-btn" onClick={onOpenPalette} aria-label="Buka command palette">
              <Search size={14} />
              <span className="label">Cari</span>
              <kbd>Ctrl K</kbd>
            </button>

            <button
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
              title={theme === 'dark' ? 'Mode terang' : 'Mode gelap'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              className="icon-btn burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${open ? ' open' : ''}`} aria-label="Navigasi mobile">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}

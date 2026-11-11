import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} {profile.name}. Hak cipta dilindungi.</span>
        <span className="mono">React · Vite · Console UI</span>
        <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUp size={14} /> Ke atas
        </button>
      </div>
    </footer>
  )
}

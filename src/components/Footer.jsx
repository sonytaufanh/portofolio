import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}. Seluruh hak cipta dilindungi.
        </span>
        <span>
          Dibangun dengan <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> &amp; Vite
        </span>
      </div>
    </footer>
  )
}

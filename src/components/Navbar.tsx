import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: '首页', end: true },
  { to: '/projects', label: '项目' },
  { to: '/blog', label: '博客' },
  { to: '/about', label: '关于我' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="logo">
          <span className="logo-heart">♡</span>
          <span className="logo-text">Lujia Man</span>
        </NavLink>
        <nav className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end as boolean | undefined}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

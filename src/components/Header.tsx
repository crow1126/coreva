import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from './Logo'
import { company } from '../data'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Our Work' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Software, websites &amp; mobile systems · {company.location}</span>
          <span className="hide-sm">
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </div>
      </div>
      <header className="site">
        <div className="wrap">
          <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Coreva Ltd">
            <Logo height={36} />
            <span className="brand-suffix">Ltd</span>
          </Link>
          <nav className="primary" aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
            <Link className="btn btn-primary" to="/contact">
              Talk to us
            </Link>
          </nav>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
        {open ? (
          <nav className="mobile-nav wrap open">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Link className="btn btn-primary" to="/contact" onClick={() => setOpen(false)}>
              Talk to us
            </Link>
          </nav>
        ) : null}
      </header>
    </>
  )
}

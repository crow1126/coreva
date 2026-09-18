import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
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
  const location = useLocation()

  // Close menu on route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="topbar-tagline">Software, websites &amp; mobile systems · {company.location}</span>
          <span className="hide-sm">
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </div>
      </div>
      <header className="site">
        <div className="wrap header-main">
          <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Coreva Ltd">
            <Logo height={34} />
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
            className={`menu-toggle ${open ? 'active' : ''}`}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="mobile-nav-inner">
              <div className="mobile-nav-links">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.label}</span>
                    <svg className="mobile-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </NavLink>
                ))}
              </div>
              <div className="mobile-nav-footer">
                <Link className="btn btn-primary btn-block" to="/contact" onClick={() => setOpen(false)}>
                  Talk to us
                </Link>
                <div className="mobile-contact-info">
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

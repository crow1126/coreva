import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { company, services, projects } from '../data'

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap top">
        <div className="footer-brand">
          <Link to="/" className="brand" style={{ color: '#fff', marginBottom: 12 }} aria-label="Coreva Ltd">
            <Logo theme="dark" height={36} />
            <span className="brand-suffix">Ltd</span>
          </Link>
          <p style={{ marginTop: 12, maxWidth: 340 }}>
            We design and engineer websites, mobile apps, and operational software for organisations
            that need systems they can run every day.
          </p>
        </div>
        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/work">Our work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Capabilities</h4>
            <ul>
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col footer-contact-col">
            <h4>Contact</h4>
            <ul>
              <li>{company.location}</li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a href={projects[0].url} target="_blank" rel="noreferrer">
                  apextrackgh.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} Coreva Ltd. All rights reserved.</span>
        <span>Accra, Ghana</span>
      </div>
    </footer>
  )
}

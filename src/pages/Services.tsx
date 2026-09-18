import { Link } from 'react-router-dom'
import { services } from '../data'

export function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Services</span>
          <h1>Websites, mobile apps, and the systems that run the organisation.</h1>
          <p>
            We provide IT product services with a studio standard: design, engineering, launch, and
            support. Engagements stay on timeline and within the agreed budget.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <div className="meta">Capability</div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul style={{ marginTop: 16, paddingLeft: 18, display: 'grid', gap: 6 }}>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2 style={{ fontSize: '2rem' }}>Need a scoped proposal?</h2>
            <p style={{ marginTop: 8, color: 'rgba(255,255,255,0.8)' }}>
              Share the problem. We will come back with approach, timeline, and investment.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Request a briefing
          </Link>
        </div>
      </section>
    </>
  )
}

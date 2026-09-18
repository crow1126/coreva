import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company, projects, services } from '../data'

const pillars = [
  {
    key: 'Mission',
    text: 'To build reliable digital products — websites, apps, and operational systems — that help Ghanaian organisations work with more clarity and less paperwork.',
  },
  {
    key: 'Vision',
    text: 'To be the product partner clubs, businesses, and institutions trust when they need software that looks professional and performs in the real world.',
  },
  {
    key: 'Purpose',
    text: 'To turn complex operations into simple tools: player history, medical records, performance, schedules, and communication in one place.',
  },
]

export function HomePage() {
  const [pillar, setPillar] = useState(pillars[0])

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="kicker">Coreva Ltd · Ghana</span>
          <h1>Design and engineering for web, mobile, and the systems behind them.</h1>
          <p className="lead">{company.tagline}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Talk to us
            </Link>
            <Link className="btn btn-ghost" to="/work">
              See our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="kicker">What we do</span>
            <h2 className="serif" style={{ fontSize: '2.2rem', color: 'var(--navy)', letterSpacing: '-0.03em' }}>
              A product studio for websites, apps, and operational software.
            </h2>
            <p style={{ marginTop: 16, color: 'var(--muted)' }}>
              Coreva Ltd designs and delivers digital products with the same care we expect from a
              long-term partner. We build public-facing websites, mobile applications, and the
              internal systems that keep teams coordinated — including SMS notifications for
              schedules and reviews.
            </p>
            <p style={{ marginTop: 12, color: 'var(--muted)' }}>
              Our flagship product, ApexTrack, is an athlete management platform used by football
              organisations in Ghana. We also built the official website for Young Apostles FC as
              part of our club partnership.
            </p>
            <div className="hero-actions" style={{ marginTop: 24 }}>
              <Link className="btn btn-navy" to="/services">
                Explore services
              </Link>
            </div>
          </div>
          <div className="card navy" style={{ background: 'var(--navy)' }}>
            <h3>Why organisations work with us</h3>
            <p style={{ margin: '10px 0 18px' }}>
              We place the client’s operation first. Technology is the means; a dependable workflow
              is the outcome.
            </p>
            <div className="tabs">
              {pillars.map((item) => (
                <button
                  key={item.key}
                  className={pillar.key === item.key ? 'active' : ''}
                  onClick={() => setPillar(item)}
                  type="button"
                >
                  Our {item.key}
                </button>
              ))}
            </div>
            <p>{pillar.text}</p>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Services</span>
            <h2>Capabilities across design, product, and delivery</h2>
            <p>From a club website to a full athlete operations platform — we cover the stack.</p>
          </div>
          <div className="grid-3">
            {services.map((service, index) => (
              <article className="card" key={service.slug}>
                <div className="icon-pill">{String(index + 1).padStart(2, '0')}</div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Selected work</span>
            <h2>Products and partnerships in market</h2>
            <p>Live platforms we designed, engineered, and continue to support.</p>
          </div>
          <div className="grid-2">
            {projects.map((project) => (
              <article className="card project" key={project.slug}>
                <img src={project.image} alt="" />
                <div className="body">
                  <div className="meta">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="chips">
                    {project.highlights.slice(0, 4).map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="hero-actions" style={{ marginTop: 20 }}>
                    <a className="btn btn-navy" href={project.url} target="_blank" rel="noreferrer">
                      Visit site
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <h2>A partner who stays with the product</h2>
            <p>
              We bring the same discipline to a marketing site as we do to medical logs, match
              performance, and schedule alerts. If you want a team that cares about how the system
              is used on Monday morning, choose Coreva.
            </p>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>2</strong>
              Live platforms
            </div>
            <div className="stat">
              <strong>60+</strong>
              Clubs onboarded on ApexTrack
            </div>
            <div className="stat">
              <strong>3,500+</strong>
              Athletes tracked
            </div>
            <div className="stat">
              <strong>SMS</strong>
              Schedule notifications
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2 style={{ fontSize: '2rem', letterSpacing: '-0.03em' }}>
              Ready to brief a website, app, or operations system?
            </h2>
            <p style={{ marginTop: 8, color: 'rgba(255,255,255,0.8)' }}>
              Speak with Coreva Ltd. We will respond with a clear next step.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}

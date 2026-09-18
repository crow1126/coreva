import { shareholders } from '../data'

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">About Coreva</span>
          <h1>A Ghanaian software company built around delivery.</h1>
          <p>
            Coreva Ltd designs websites, mobile applications, and custom systems. We are the team
            behind ApexTrack and the official Young Apostles FC website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="serif split-title">
              Professional products, owned end to end.
            </h2>
            <p style={{ marginTop: 16, color: 'var(--muted)' }}>
              We were formed to give organisations a single partner for design and engineering —
              not a chain of freelancers. That means visual design, frontend, backend, mobile, and
              support sit in one company.
            </p>
            <p style={{ marginTop: 12, color: 'var(--muted)' }}>
              Football operations taught us to treat data with care: player history, medical notes,
              performance, and schedules cannot live in scattered spreadsheets. ApexTrack is our
              answer, and the same discipline shows up in every website we ship.
            </p>
          </div>
          <div className="card">
            <h3>How we work</h3>
            <ul style={{ marginTop: 12, paddingLeft: 18, display: 'grid', gap: 10 }}>
              <li>Discover the operation before we draw screens.</li>
              <li>Design for clarity — boards, coaches, and staff should understand it immediately.</li>
              <li>Build to production standards: access control, reporting, and notifications.</li>
              <li>Stay on after launch for training, iteration, and support.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="grid-3">
            <article className="card">
              <div className="meta">Mission</div>
              <h3>Reliable digital operations</h3>
              <p>
                Deliver websites, apps, and internal systems that reduce paper, missed schedules,
                and fragmented records.
              </p>
            </article>
            <article className="card">
              <div className="meta">Vision</div>
              <h3>The partner organisations keep</h3>
              <p>
                Be the studio Ghanaian clubs and businesses return to when they need software that
                looks considered and holds up in daily use.
              </p>
            </article>
            <article className="card">
              <div className="meta">Purpose</div>
              <h3>Impact through products</h3>
              <p>
                Put history, medical, performance, and communication in one place so teams can
                focus on the work, not the admin.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Leadership</span>
            <h2>Shareholders</h2>
            <p>Coreva Ltd is owned by four shareholders who set the direction of the company.</p>
          </div>
          <div className="people">
            {shareholders.map((person) => (
              <article className="card person" key={person.name}>
                <div className="avatar">
                  {person.name
                    .split(' ')
                    .filter((part) => part.length > 2)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

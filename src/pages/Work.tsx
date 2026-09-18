import { projects } from '../data'

export function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Our work</span>
          <h1>Live products, not mockups.</h1>
          <p>
            ApexTrack is our athlete management system. Young Apostles FC is a club partnership
            where we designed and shipped the official website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: 'grid', gap: 36 }}>
          {projects.map((project) => (
            <article className="card split" key={project.slug} style={{ padding: 0, overflow: 'hidden' }}>
              <img src={project.image} alt="" style={{ height: '100%', minHeight: 280, objectFit: 'cover' }} />
              <div style={{ padding: 32, paddingBottom: 36 }}>
                <div className="meta">{project.category}</div>
                <h2 style={{ margin: '8px 0 12px', color: 'var(--navy)' }}>{project.name}</h2>
                <p style={{ color: 'var(--muted)' }}>{project.summary}</p>
                <div className="chips">
                  {project.highlights.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="btn btn-navy"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: 22 }}
                >
                  Open {project.url.replace('https://', '')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

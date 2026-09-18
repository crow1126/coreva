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
        <div className="wrap work-list">
          {projects.map((project) => (
            <article className="card split work-card" key={project.slug}>
              <img src={project.image} alt={project.name} className="work-img" />
              <div className="work-body">
                <div className="meta">{project.category}</div>
                <h2 className="work-title">{project.name}</h2>
                <p>{project.summary}</p>
                <div className="chips">
                  {project.highlights.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="work-action">
                  <a
                    className="btn btn-navy"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open {project.url.replace('https://', '')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

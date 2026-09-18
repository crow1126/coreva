import { useState, type FormEvent } from 'react'
import { company } from '../data'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Coreva enquiry — ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nOrganisation: ${data.get('org')}\nInterest: ${data.get('interest')}\n\n${data.get('message')}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Contact</span>
          <h1>Make contact with the Coreva team.</h1>
          <p>Tell us about the website, app, or operations system you want to build.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <form className="contact" onSubmit={onSubmit}>
            <label>
              Full name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Organisation
              <input name="org" placeholder="Club, company, or institution" />
            </label>
            <label>
              What do you need?
              <select name="interest" defaultValue="Website">
                <option>Website</option>
                <option>Mobile app</option>
                <option>ApexTrack / athlete management</option>
                <option>Custom software</option>
                <option>Partnership</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" required placeholder="Share context, timeline, and any links." />
            </label>
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
            {sent && (
              <p style={{ color: 'var(--teal-dark)' }}>
                Your email client should open with the message. If it does not, write to {company.email}.
              </p>
            )}
          </form>
          <aside className="contact-aside">
            <h3>Contact info</h3>
            <p style={{ margin: '12px 0' }}>{company.location}</p>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p style={{ marginTop: 18 }}>
              For ApexTrack onboarding and club support, you can also reach the product team via
              the live platform at apextrackgh.com.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}

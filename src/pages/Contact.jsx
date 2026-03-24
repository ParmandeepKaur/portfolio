import { motion } from 'framer-motion'
import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageTransition from '../components/PageTransition'
import './Contact.css'

const contactLinks = [
  {
    icon: <Mail size={18}/>,
    label: 'Email',
    value: 'parmandeepkaur44@gmail.com',
    href: 'mailto:parmandeepkaur44@gmail.com',
    color: 'blue',
  },
  {
    icon: <Linkedin size={18}/>,
    label: 'LinkedIn',
    value: 'linkedin.com/in/parmandeep-kaur',
    href: 'https://www.linkedin.com/in/parmandeep-kaur/',
    color: 'blue',
  },
  {
    icon: <Github size={18}/>,
    label: 'GitHub',
    value: 'github.com/ParmandeepKaur',
    href: 'https://github.com/ParmandeepKaur',
    color: 'violet',
  },
  {
    icon: <Phone size={18}/>,
    label: 'Phone',
    value: '+91 8968413173',
    href: 'tel:+8968413173',
    color: 'amber',
  },
  {
    icon: <MapPin size={18}/>,
    label: 'Location',
    value: 'Punjab, India',
    href: null,
    color: 'amber',
  },
]
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  emailjs.send(
    "service_ntsr3zt",
    "template_oudvjzp",
    {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    },
    "WJsDs1D2yMpSr6sgY"
  )
  .then(() => {
    alert("Message sent successfully! ✅")
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setLoading(false)
    setTimeout(() => setSent(false), 4000)
  })
  .catch((error) => {
    console.error(error)
    alert("Failed to send message ❌")
    setLoading(false)
  })
}

  return (
    <PageTransition>
      <div className="section contact-page">
        <div className="container">

          <div className="section-header">
            <div className="section-eyebrow">Let’s connect & collaborate</div>
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-sub">
              Open to SDE internships, interesting projects, and tech conversations. Drop me a message.
            </p>
          </div>

          <div className="contact-grid">

            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="contact-info"
            >
              <div className="contact-intro-card card">
                <div className="contact-intro-top">
                  <div className="contact-avatar">PK</div>
                  <div>
                    <div className="contact-intro-name">Parmandeep Kaur</div>
                    <div className="contact-intro-role">Aspiring Software Engineer · ML Enthusiast</div>
                  </div>
                </div>
                <p className="contact-intro-text">
                    I’m a third-year CSE student at LPU, actively looking for SDE internships and opportunities to build impactful systems.                </p>
                <div className="contact-status">
                  <span className="live-dot-sm" />
                  Available for opportunities
                </div>
              </div>

              <div className="contact-links-list">
                {contactLinks.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06 }}
                  >
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`contact-link-row cl-${c.color}`}>
                        <span className={`cl-icon cl-icon-${c.color}`}>{c.icon}</span>
                        <div>
                          <div className="cl-label">{c.label}</div>
                          <div className="cl-value">{c.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className={`contact-link-row cl-${c.color}`}>
                        <span className={`cl-icon cl-icon-${c.color}`}>{c.icon}</span>
                        <div>
                          <div className="cl-label">{c.label}</div>
                          <div className="cl-value">{c.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <form className="contact-form card" onSubmit={handleSubmit}>
                <div className="form-title">Send a Message</div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Internship opportunity / Project collab / Just saying hi"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    required
                    className="form-textarea"
                    placeholder="Tell me what you're working on or how I can help..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
  type="submit"
  disabled={loading}
  className={`form-submit btn btn-primary ${sent ? 'sent' : ''}`}
>
  {loading
    ? "Sending..."
    : sent
    ? <><CheckCircle size={15}/> Message Sent!</>
    : <><Send size={15}/> Send Message</>
  }
</button>

                <p className="form-note">
  I’ll get back to you as soon as possible.
</p>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}

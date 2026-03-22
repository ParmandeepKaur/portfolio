import { motion } from 'framer-motion'
import { CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import './Contact.css'

const contactLinks = [
  {
    icon: <Mail size={18}/>,
    label: 'Email',
    value: 'gurleennn5@gmail.com',
    href: 'mailto:gurleennn5@gmail.com',
    color: 'blue',
  },
  {
    icon: <Linkedin size={18}/>,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gurleen-kaur5',
    href: 'https://linkedin.com/in/gurleen-kaur5',
    color: 'blue',
  },
  {
    icon: <Github size={18}/>,
    label: 'GitHub',
    value: 'github.com/gurleen-kaur5',
    href: 'https://github.com/gurleen-kaur5',
    color: 'violet',
  },
  {
    icon: <Phone size={18}/>,
    label: 'Phone',
    value: '+91 7986306971',
    href: 'tel:+917986306971',
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

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Wire to a backend POST /api/contact or use EmailJS / Formspree
    const mailto = `mailto:gurleennn5@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
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
                  <div className="contact-avatar">GK</div>
                  <div>
                    <div className="contact-intro-name">Gurleen Kaur</div>
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

                <button type="submit" className={`form-submit btn btn-primary ${sent ? 'sent' : ''}`}>
                  {sent
                    ? <><CheckCircle size={15}/> Message Sent!</>
                    : <><Send size={15}/> Send Message</>
                  }
                </button>

                <p className="form-note">
                  This opens your mail client. Alternatively email me directly at{' '}
                  <a href="mailto:gurleennn5@gmail.com">gurleennn5@gmail.com</a>
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </PageTransition>
  )
}

import { motion } from 'framer-motion'
import { Award, Briefcase, Code2, Download, GraduationCap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './Resume.css'

// ── Data ──────────────────────────────────────────────────────────────────────

const education = [
  {
    period: '2023 – 2027',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Lovely Professional University, Phagwara',
    detail: 'CGPA: 8.94',
    current: true,
  },
  {
    period: '2022 – 2023',
    degree: '12th Grade',
    institution: 'Woodland Overseas School, Hoshiarpur',
    detail: '95.8%',
    current: false,
  },
  {
    period: '2020 – 2021',
    degree: '10th Grade',
    institution: 'Woodland Overseas School, Hoshiarpur',
    detail: '95%',
    current: false,
  },
]

const experience = [
  {
    period: 'June – July 2025',
    role: 'Competitive Programming Training',
    org: 'AlgoTutor · LPU',
    detail: 'Completed intensive training covering DP, Graphs, Greedy, and advanced problem-solving.',
    current: false,
  },
  // Add internships / work experience here as you get them
  // {
  //   period: 'May – Jul 2026',
  //   role: 'Software Engineer Intern',
  //   org: 'Company Name',
  //   detail: '1-line impact statement',
  //   current: false,
  // },
]

const projects = [
  {
    period: '2025',
    name: 'MeetUp Live',
    stack: 'React · Node.js · WebRTC · Socket.IO · MongoDB',
    detail: 'Real-time P2P video conferencing with live chat and screen sharing.',
  },
  {
    period: '2025',
    name: 'Osteoporosis Risk Predictor',
    stack: 'Python · CatBoost · SHAP · Flask',
    detail: 'ML pipeline on 1,954 records — AUC 0.923, Precision 1.0.',
  },
  {
    period: '2024',
    name: 'WanderLust',
    stack: 'Node.js · Express · MongoDB · Cloudinary',
    detail: 'Full-stack hotel booking with role-based auth and REST APIs.',
  },
  {
    period: '2025',
    name: 'Dynamic Route Optimiser',
    stack: 'JavaScript · Node.js · Graph Algorithms',
    detail: 'Graph-based route optimization minimizing multi-node travel distance.',
  },
]

const certs = [
  { name: 'Delta — Full Stack Web Development', issuer: 'Apna College', year: '2025' },
  { name: 'TCP/IP and Advanced Topics',         issuer: 'Coursera · University of Colorado', year: '2024' },
  { name: 'Competitive Programming Training',   issuer: 'AlgoTutor', year: '2025' },
]

const profiles = [
  { label: 'LeetCode', val: 'Rating 1806 · Top 8%',        link: 'https://leetcode.com/u/gurleen-kaur5/' },
  { label: 'CodeChef', val: 'Rating 1495',                  link: 'https://www.codechef.com/users/gurleen_kaur5' },
  { label: 'GitHub',   val: 'github.com/gurleen-kaur5',     link: 'https://github.com/gurleen-kaur5' },
  { label: 'LinkedIn', val: 'linkedin.com/in/gurleen-kaur5', link: 'https://linkedin.com/in/gurleen-kaur5' },
]

// ── Reusable timeline section ─────────────────────────────────────────────────

function TimelineSection({ icon, title, items, renderItem }) {
  return (
    <div className="resume-section">
      <div className="rs-title">
        <span className="rs-icon">{icon}</span>
        {title}
      </div>
      <div className="timeline">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="tl-item"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <div className="tl-dot-col">
              <div className={`tl-dot ${item.current ? 'tl-dot-live' : ''}`} />
              <div className="tl-line" />
            </div>
            <div className="tl-content">{renderItem(item)}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Resume() {
  return (
    <PageTransition>
      <div className="section resume-page">
        <div className="container">

          <div className="resume-header-row section-header">
            <div>
              <div className="section-eyebrow">Background</div>
              <h1 className="section-title">Resume</h1>
              <p className="section-sub">
                Education, experience, projects, and profiles — at a glance.
              </p>
            </div>
           <a
              href="/gurleenkaurrcv.pdf"
              download="Gurleen_Kaur_Resume.pdf"
              className="btn btn-primary resume-download-btn"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>

          <div className="resume-grid">

            {/* ── LEFT COLUMN ── */}
            <div className="resume-col">

              <TimelineSection
                icon={<GraduationCap size={16} />}
                title="Education"
                items={education}
                renderItem={item => (
                  <>
                    <div className="tl-period">{item.period}</div>
                    <div className="tl-title">{item.degree}</div>
                    <div className="tl-org">{item.institution}</div>
                    <div className="tl-detail">{item.detail}</div>
                  </>
                )}
              />

              <TimelineSection
                icon={<Briefcase size={16} />}
                title="Experience & Training"
                items={experience}
                renderItem={item => (
                  <>
                    <div className="tl-period">{item.period}</div>
                    <div className="tl-title">{item.role}</div>
                    <div className="tl-org">{item.org}</div>
                    <div className="tl-detail">{item.detail}</div>
                  </>
                )}
              />

              {/* Coding Profiles */}
              <div className="resume-section">
                <div className="rs-title">
                  <span className="rs-icon">⌨</span>
                  Coding Profiles
                </div>
                <div className="profiles-list">
                  {profiles.map(p => (
                    <a
                      key={p.label}
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="profile-row"
                    >
                      <span className="profile-label">{p.label}</span>
                      <span className="profile-val">{p.val}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="resume-col">

              <TimelineSection
                icon={<Code2 size={16} />}
                title="Projects"
                items={projects}
                renderItem={item => (
                  <>
                    <div className="tl-period">{item.period}</div>
                    <div className="tl-title">{item.name}</div>
                    <div className="tl-org">{item.stack}</div>
                    <div className="tl-detail">{item.detail}</div>
                  </>
                )}
              />

              {/* Top 3 Certifications */}
              <div className="resume-section">
                <div className="rs-title">
                  <span className="rs-icon"><Award size={16} /></span>
                  Certifications
                  <span className="rs-sub-note">Top 3 · <a href="/certifications" className="rs-view-all">View all →</a></span>
                </div>
                <div className="certs-list">
                  {certs.map((c, i) => (
                    <motion.div
                      key={c.name}
                      className="rc-item"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="rc-name">{c.name}</div>
                      <div className="rc-meta">{c.issuer} · {c.year}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}
import { motion } from 'framer-motion'
import { Briefcase, Download, GraduationCap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './Resume.css'

// ── Data ─────────────────────────────────────────

// Education
const education = [
  {
    period: '2023 – 2027',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Lovely Professional University, Phagwara',
    detail: 'CGPA: 8.27',
    current: true,
  },
  {
    period: '2021 – 2022',
    degree: '12th Grade',
    institution: 'Cambridge International School, Phagwara',
    detail: '90.4%',
    current: false,
  },
  {
    period: '2019 – 2020',
    degree: '10th Grade',
    institution: 'Shri Guru Ram Rai Public School, Phagwara',
    detail: '84.8%',
    current: false,
  },
]

// Experience
const experience = [
  {
    period: 'Jun 2023 – Aug 2025',
    role: 'Freelance Translator',
    org: 'The Translation Masters Inc.',
    detail:
      'Translated content between English, Hindi, and Punjabi with focus on accuracy and contextual meaning. Assisted in multilingual communication.',
    current: true,
  },
  {
    period: 'June – July 2025',
    role: 'MERN Full Stack Development Programme',
    org: 'GokBoru Tech Pvt Ltd',
    detail:
      'Completed intensive training building projects using MERN Stack & APIs.',
    current: false,
  },
]

// Languages
const languages = [
  {
    name: 'English',
    level: 'Fluent',
    detail: 'Professional working proficiency.',
  },
  {
    name: 'Hindi',
    level: 'Fluent',
    detail: 'Native proficiency.',
  },
  {
    name: 'Punjabi',
    level: 'Fluent',
    detail: 'Native proficiency.',
  },
  {
    name: 'Spanish (Duolingo)',
    level: 'Basic',
    detail: 'Duolingo Spanish score 19.',
  },
];

// ── Timeline Component ─────────────────────────

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
            transition={{ delay: i * 0.08 }}
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

// ── Page ───────────────────────────────────────

export default function Resume() {
  return (
    <PageTransition>
      <div className="section resume-page">
        <div className="container">

          {/* Header */}
          <div className="resume-header-row section-header">
            <div>
              <div className="section-eyebrow">Background</div>
              <h1 className="section-title">Resume</h1>
              <p className="section-sub">
                Education, experience, and language skills at a glance.
              </p>
            </div>

            <a
              href="/ParmandeepKaurCV.pdf"
              download="Parmandeep_Kaur_Resume.pdf"
              className="btn btn-primary resume-download-btn"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>

          <div className="resume-grid">

            {/* LEFT COLUMN */}
            <div className="resume-col">

              {/* Education */}
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
            </div>
{/* RIGHT COLUMN */}
<div className="resume-col">

  {/* Experience */}
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

  {/* Languages */}
  <div className="resume-section">
    <div className="rs-title">🌍 Languages</div>

    {languages.map((l, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 16 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.1 }}
    style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}
  >
    {/* Dot */}
    <div
      style={{
        width: '8px',
        height: '8px',
        backgroundColor: '#4da3ff',
        borderRadius: '50%',
        marginTop: '6px',
      }}
    />

    {/* Content */}
    <div className="tl-detail">
      <strong>{l.name}</strong> — {l.level}
      <br />
      <span>{l.detail}</span>
    </div>
  </motion.div>
))}
  </div>

</div>

          </div>

        </div>
      </div>
    </PageTransition>
  )
}
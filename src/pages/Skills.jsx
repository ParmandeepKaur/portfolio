import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import './Skills.css'

const skillGroups = [
  {
    icon: '💻',
    title: 'Programming Languages',
    color: 'blue',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'C'],
  },
  {
    icon: '🧠',
    title: 'Core Computer Science',
    color: 'violet',
    skills: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Networks'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    color: 'blue',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'WebRTC', 'Socket.IO', 'HTML5', 'CSS3'],
  },
  {
    icon: '🤖',
    title: 'Machine Learning',
    color: 'violet',
    skills: ['Regression', 'Classification', 'SHAP', 'Pandas', 'NumPy', 'CLustering', 'Ensemble Learning'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    color: 'amber',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    icon: '⚙️',
    title: 'Tools & DevOps',
    color: 'amber',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Vercel', 'JWT', 'bcrypt', 'Cloudinary'],
  },
]

export default function Skills() {
  return (
    <PageTransition>
      <div className="section skills-page">
        <div className="container">

          <div className="section-header">
            <div className="section-eyebrow">What I work with</div>
            <h1 className="section-title">Technical Arsenal</h1>
            <p className="section-sub">
              Technologies I use to build full-stack applications and ML systems.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                className={`skill-group card sk-${group.color}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="sg-header">
                  <span className="sg-icon">{group.icon}</span>
                  <span className="sg-title">{group.title}</span>
                </div>
                <div className="sg-pills">
                  {group.skills.map(s => (
                    <span key={s} className={`sg-pill sg-pill-${group.color}`}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  )
}
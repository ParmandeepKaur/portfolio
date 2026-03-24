import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './Achievements.css';

// ✅ Import badge images
import badge1 from '../assets/badge1.png';
import badge2 from '../assets/badge2.png';
import badge3 from '../assets/badge3.png';
import badge4 from '../assets/badge4.png';

// ✅ CP Stats
const cpStats = [
  {
    platform: 'LeetCode',
    stat: '200+',
    label: 'Problems Solved',
    sub: 'DSA Practice',
    color: 'blue',
  },
  {
    platform: 'CodeChef',
    stat: '500+',
    label: 'Problems solved',
    sub: 'SQL | Web Dev | C++ | Java',
    color: 'amber',
  },
];

// ✅ Badge array
const badges = [badge1, badge2, badge3, badge4];

export default function Achievements() {
  return (
    <PageTransition>
      <div className="section ach-page">
        <div className="container">

          {/* Header */}
          <div className="section-header">
            <div className="section-eyebrow">Recognition</div>
            <h1 className="section-title">Milestones</h1>
            <p className="section-sub">
              Achievements across coding, hackathons, and skill development.
            </p>
          </div>

          {/* CP Stats */}
          <div className="cp-stats-row">
            {cpStats.map((s, i) => (
              <motion.div
                key={s.platform}
                className={`cp-stat-card card cp-${s.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="cp-platform">{s.platform}</div>
                <div className={`cp-num cp-num-${s.color}`}>{s.stat}</div>
                <div className="cp-label">{s.label}</div>
                <div className="cp-sub">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* 🏅 Badges Section */}
          <div className="badges-section">
            <h2 className="badges-title">Badges & Cards</h2>

            <div className="badges-grid">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  className="badge-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <img src={b} alt={`badge-${i}`} className="badge-img" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
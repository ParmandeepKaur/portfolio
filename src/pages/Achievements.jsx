import { motion } from 'framer-motion';
import { Code2, Dumbbell, Flame, GraduationCap, Star, Trophy } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Achievements.css';


const timeline = [
  {
    year: '2026',
    period: 'Ongoing · 2024–26',
    icon: <Code2 size={18} />,
    title: 'LeetCode — Peak Rating 1806',
    org: 'Top 8% Globally',
    desc: '788 problems solved across easy, medium, and hard. Active for 339 days with a max streak of 271 consecutive days.',
    tag: 'Top 8%',
    tagColor: 'blue',
    color: 'blue',
    metrics: ['788 Problems', '271-day Streak', 'Rating 1806'],
  },
  {
    year: '2026',
    period: 'Ongoing · 2024–26',
    icon: <Flame size={18} />,
    title: 'CodeChef — Peak Rating 1495',
    org: 'Global Rank 1495',
    desc: 'Competed in 3 rated contests. Current global rating: 1495.',
    tag: 'Rating 1495',
    tagColor: 'amber',
    color: 'amber',
    metrics: ['3 Rated Contests', 'Global Rank 1495'],
  },
  {
    year: '2025',
    period: 'Summer 2025',
    icon: <Dumbbell size={18} />,
    title: 'Competitive Programming Training',
    org: 'AlgoTutor · LPU',
    desc: 'Selected for focused summer training. Strengthened problem-solving under timed conditions — advanced DP, graphs, greedy, and recursion.',
    tag: 'Training',
    tagColor: 'violet',
    color: 'violet',
  },
  {
    year: '2023',
    period: 'SIH 2023',
    icon: <Trophy size={18} />,
    title: 'Smart India Hackathon — Top 30',
    org: '480+ Teams Nationwide',
    desc: 'Ranked in the Top 30 out of 480+ competing teams. Built real-world solutions under pressure with a cross-functional team.',
    tag: 'Top 30 / 480+',
    tagColor: 'amber',
    color: 'amber',
  },
  {
    year: '2023',
    period: '12th Boards · 2023',
    icon: <GraduationCap size={18} />,
    title: '12th Board Examination — 95.8%',
    org: 'Woodland Overseas School, Hoshiarpur',
    desc: 'Scored 95.8% in the CBSE 12th grade board examinations.',
    tag: '95.8%',
    tagColor: 'blue',
    color: 'blue',
  },
  {
    year: '2021',
    period: '10th Boards · 2021',
    icon: <Star size={18} />,
    title: '10th Board Examination — 95%',
    org: 'Woodland Overseas School, Hoshiarpur',
    desc: 'Scored 95% in the CBSE 10th grade board examinations.',
    tag: '95%',
    tagColor: 'violet',
    color: 'violet',
  },
];

const cpStats = [
  {
    platform: 'LeetCode',
    stat: '1806',
    label: 'Peak Rating',
    sub: 'Top 8% · 788 Problems · 271-day streak',
    color: 'blue',
  },
  {
    platform: 'CodeChef',
    stat: '1495',
    label: 'Global Rating',
    sub: '3 Rated Contests · Global Rank 1495',
    color: 'amber',
  },
  {
    platform: 'Problems',
    stat: '788+',
    label: 'DSA Solved',
    sub: 'Arrays · DP · Graphs · Greedy · Recursion',
    color: 'violet',
  },
];

// const timeline = [
//   {
//     year: '2025',
//     period: 'Summer 2025',
//     icon: <Dumbbell size={18} />,
//     title: 'Competitive Programming Training',
//     org: 'AlgoTutor · LPU',
//     desc: 'Selected for focused summer training. Strengthened problem-solving under timed conditions — advanced DP, graphs, greedy, and recursion.',
//     tag: 'Training',
//     tagColor: 'violet',
//     color: 'violet',
//   },
//   {
//     year: '2025',
//     period: 'Ongoing · 2024–25',
//     icon: <Code2 size={18} />,
//     title: 'LeetCode — Peak Rating 1806',
//     org: 'Top 8% Globally',
//     desc: '788 problems solved across easy, medium, and hard. Active for 339 days with a max streak of 271 consecutive days.',
//     tag: 'Top 8%',
//     tagColor: 'blue',
//     color: 'blue',
//     metrics: ['788 Problems', '271-day Streak', 'Rating 1806'],
//   },
//   {
//     year: '2024',
//     period: '2024',
//     icon: <Flame size={18} />,
//     title: 'CodeChef — Peak Rating 1495',
//     org: 'Starters 228 · Rank 1267',
//     desc: 'Competed in 3 rated contests. Achieved a global rank of 1267 in Starters 228.',
//     tag: 'Rating 1495',
//     tagColor: 'amber',
//     color: 'amber',
//     metrics: ['3 Rated Contests', 'Rank 1267'],
//   },
//   {
//     year: '2023',
//     period: 'SIH 2023',
//     icon: <Trophy size={18} />,
//     title: 'Smart India Hackathon — Top 30',
//     org: '480+ Teams Nationwide',
//     desc: 'Ranked in the Top 30 out of 480+ competing teams. Built real-world solutions under pressure with a cross-functional team.',
//     tag: 'Top 30 / 480+',
//     tagColor: 'amber',
//     color: 'amber',
//   },
//   {
//     year: '2023',
//     period: '12th Boards · 2023',
//     icon: <GraduationCap size={18} />,
//     title: '12th Board Examination — 95.8%',
//     org: 'Woodland Overseas School, Hoshiarpur',
//     desc: 'Scored 95.8% in the CBSE 12th grade board examinations.',
//     tag: '95.8%',
//     tagColor: 'blue',
//     color: 'blue',
//   },
//   {
//     year: '2021',
//     period: '10th Boards · 2021',
//     icon: <Star size={18} />,
//     title: '10th Board Examination — 95%',
//     org: 'Woodland Overseas School, Hoshiarpur',
//     desc: 'Scored 95% in the CBSE 10th grade board examinations.',
//     tag: '95%',
//     tagColor: 'violet',
//     color: 'violet',
//   },
// ]

// const cpStats = [
//   {
//     platform: 'LeetCode',
//     stat: '1806',
//     label: 'Peak Rating',
//     sub: 'Top 8% · 788 Problems · 271-day streak',
//     color: 'blue',
//   },
//   {
//     platform: 'CodeChef',
//     stat: '1495',
//     label: 'Peak Rating',
//     sub: '3 Rated Contests · Rank 1267 globally',
//     color: 'amber',
//   },
//   {
//     platform: 'Problems',
//     stat: '788+',
//     label: 'DSA Solved',
//     sub: 'Arrays · DP · Graphs · Greedy · Recursion',
//     color: 'violet',
//   },
// ]

export default function Achievements() {
  return (
    <PageTransition>
      <div className="section ach-page">
        <div className="container">

          <div className="section-header">
            <div className="section-eyebrow">Recognition</div>
            <h1 className="section-title">Milestones</h1>
            <p className="section-sub">
              A timeline of growth — from academics to competitive programming, hackathons, and beyond.
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div className="cp-platform">{s.platform}</div>
                <div className={`cp-num cp-num-${s.color}`}>{s.stat}</div>
                <div className="cp-label">{s.label}</div>
                <div className="cp-sub">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Vertical Timeline */}
          <div className="timeline-wrapper">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                className="tl-row"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Year stamp */}
                <div className="tl-year-col">
                  <span className="tl-year">{item.year}</span>
                </div>

                {/* Spine */}
                <div className="tl-spine">
                  <div className={`tl-node tl-node-${item.color}`}>
                    <span className={`tl-node-icon tl-node-icon-${item.color}`}>{item.icon}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="tl-line" />}
                </div>

                {/* Card */}
                <div className={`tl-card card tl-card-${item.color}`}>
                  <div className="tl-card-header">
                    <div>
                      <span className="tl-period">{item.period}</span>
                      <h3 className="tl-title">{item.title}</h3>
                      <div className={`tl-org tl-org-${item.color}`}>{item.org}</div>
                    </div>
                    <span className={`tl-tag tl-tag-${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <p className="tl-desc">{item.desc}</p>
                  {item.metrics && (
                    <div className="tl-metrics">
                      {item.metrics.map(m => (
                        <span key={m} className={`tl-metric tl-metric-${item.color}`}>{m}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  )
}
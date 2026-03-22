import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';
import hospitalDashboardImg from '../assets/dash.png';
import routeOptimiserImg from '../assets/dro.png';
import meetupImg from '../assets/meetup.png';
import osteoporosisImg from '../assets/osteo.png';
import wanderlustImg from '../assets/wanderlust.png';
import PageTransition from '../components/PageTransition';
import './Projects.css';

const projects = [
  {
    id: '01',
    year: '2025',
    name: 'MeetUp Live',
    sub: 'Full-Stack Video Conferencing Platform',
    desc: 'Browser-based video conferencing with real-time multi-user audio & video over WebRTC. Built the complete signaling layer — SDP negotiation, ICE exchange — using Socket.IO, with JWT auth, live chat, and screen sharing.',
    impact: 'Handled real-time multi-user communication with sub-second latency.',
    image: meetupImg,
    imgAlt: 'MeetUp Live Screenshot',
    metrics: [
      { label: 'P2P · No Media Server', color: 'blue' },
      { label: 'Real-time Signaling',   color: 'blue' },
      { label: 'Screen Sharing',        color: 'violet' },
      { label: 'JWT Auth',              color: 'violet' },
    ],
    stack: ['React', 'Node.js', 'Express', 'WebRTC', 'Socket.IO', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/gurleen-kaur5/MeetUpLive',
    demo: null,
    featured: true,
  },
  {
    id: '02',
    year: '2025',
    name: 'Osteoporosis Risk Predictor',
    sub: 'Clinical ML Pipeline · CatBoost · Flask',
    desc: 'End-to-end risk prediction system trained on 1,954 patient records across 14 clinical features. Threshold-tuned CatBoost model deployed via Flask with SHAP-powered feature explanations.',
    impact: 'Achieved 0.923 AUC-ROC and 100% precision — zero false positives on the positive class.',
    image: osteoporosisImg,
    imgAlt: 'Osteoporosis Predictor Dashboard',
    metrics: [
      { label: 'AUC-ROC 0.923',      color: 'blue'   },
      { label: 'Precision 1.0 ✦',   color: 'amber'  },
      { label: 'SHAP Explainability', color: 'violet' },
      { label: '5-Fold CV',           color: 'blue'   },
    ],
    stack: ['Python', 'CatBoost', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'NumPy'],
    github: 'https://github.com/gurleen-kaur5/OsteoporosisRiskPrediction',
    demo: null,
    featured: false,
  },
  {
    id: '03',
    year: '2024',
    name: 'WanderLust',
    sub: 'Hotel Booking Web Application',
    desc: 'Full-stack travel platform with CRUD listings, user reviews, and role-based authorization. Passport.js + bcrypt authentication, Cloudinary image uploads, and a clean responsive UI.',
    impact: 'Production-ready MVC architecture with secure session management and cloud media delivery.',
    image: wanderlustImg,
    imgAlt: 'WanderLust App Screenshot',
    metrics: [
      { label: 'CRUD + Reviews',   color: 'blue'   },
      { label: 'Role-based Auth',  color: 'violet' },
      { label: 'Cloudinary CDN',   color: 'amber'  },
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'bcrypt', 'Cloudinary', 'Bootstrap'],
    github: 'https://github.com/gurleen-kaur5/Wanderlust',
    demo: null,
    featured: false,
  },
  {
    id: '04',
    year: '2025',
    name: 'Dynamic Route Optimiser',
    sub: 'Graph Algorithms · Route Planning',
    desc: 'Computes optimal delivery and travel routes across multiple nodes in real-time using graph-based algorithms, minimizing total distance and time dynamically.',
    impact: 'Demonstrates applied DSA — translating algorithmic knowledge into a working real-world system.',
    image: routeOptimiserImg,
    imgAlt: 'Dynamic Route Optimiser Screenshot',
    metrics: [
      { label: 'Graph Algorithms',  color: 'blue'   },
      { label: 'Real-time Updates', color: 'violet' },
      { label: 'Multi-node Paths',  color: 'amber'  },
    ],
    stack: ['JavaScript', 'Node.js', 'Graph Algorithms'],
    github: 'https://github.com/gurleen-kaur5/DynamicRouteOptimiser',
    demo: null,
    featured: false,
  },
  {
    id: '05',
    year: '2025',
    name: 'Hospital Operations Dashboard',
    sub: 'Power BI · Healthcare Analytics',
    desc: 'Interactive Power BI dashboard tracking hospital capacity, staffing levels, and financial KPIs. Transforms raw operational data into actionable insights with drill-through visuals.',
    impact: 'Enabled real-time monitoring of hospital KPIs, improving operational decision-making.',
    image: hospitalDashboardImg,
    imgAlt: 'Hospital Dashboard Screenshot',
    metrics: [
      { label: 'Interactive KPIs',     color: 'blue'   },
      { label: 'Multi-dept Analytics', color: 'violet' },
      { label: 'Drill-through Views',  color: 'amber'  },
    ],
    stack: ['Power BI', 'DAX', 'Data Modelling', 'Excel'],
    github: 'https://www.linkedin.com/posts/gurleen-kaur5_powerbi-dataanalytics-healthcareanalytics-activity-7406254172230025216-gwbs',
    demo: null,
    featured: true,
  },
];

function ProjectImage({ image, imgAlt }) {
  if (image) {
    return <img src={image} alt={imgAlt} className="project-img" />;
  }
  return (
    <div className="project-img-placeholder" aria-label={imgAlt}>
      <div className="browser-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <div className="chrome-bar" />
      </div>
      <div className="placeholder-inner">
        <Monitor size={28} strokeWidth={1.2} />
        <span>Desktop Preview</span>
      </div>
    </div>
  );
}

function MetricBadge({ label, color }) {
  return <span className={`metric-badge metric-${color}`}>{label}</span>;
}

export default function Projects() {
  return (
    <PageTransition>
      <div className="section projects-page">
        <div className="container">

          <div className="section-header">
            <div className="section-eyebrow">Selected work</div>
            <h1 className="section-title">Projects</h1>
            <p className="section-sub">
              Full-stack, ML, and analytics — built end-to-end.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                className={`project-card card ${p.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="project-image-area">
                  <ProjectImage image={p.image} imgAlt={p.imgAlt} />
                </div>

                {/* Content */}
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-num">{p.id}</span>
                    <span className="project-year">{p.year}</span>
                    {p.featured && <span className="featured-badge">Featured</span>}
                  </div>

                  <h2 className="project-name">{p.name}</h2>
                  <div className="project-sub">{p.sub}</div>
                  <p className="project-desc">{p.desc}</p>

                  {/* Impact line */}
                  <div className="project-impact">
                    <span className="impact-arrow">→</span> {p.impact}
                  </div>

                  <div className="project-metrics">
                    {p.metrics.map(m => (
                      <MetricBadge key={m.label} label={m.label} color={m.color} />
                    ))}
                  </div>

                  <div className="project-stack">
                    {p.stack.map(s => (
                      <span key={s} className="stack-tag">{s}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                      <Github size={14} />
                      {p.id === '05' ? 'View on LinkedIn' : 'View Code'}
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="projects-github-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/gurleen-kaur5"
              target="_blank" rel="noreferrer"
              className="btn btn-outline"
            >
              <Github size={16} /> See all projects on GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
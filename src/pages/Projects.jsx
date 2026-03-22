import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';
import hospitalDashboardImg from '../assets/dash.png';
import routeOptimiserImg from '../assets/dro.png';
import meetupImg from '../assets/meetup.png';
import osteoporosisImg from '../assets/osteo.png';
import wanderlustImg from '../assets/wanderlust.png';
import PageTransition from '../components/PageTransition';
import './Projects.css';
// const projects = [
//   {
//     id: '01',
//     year: '2025',
//     name: 'MeetUp Live',
//     sub: 'Full-Stack Video Conferencing Platform',
//     desc: 'Real-time video conferencing supporting multi-user audio & video via peer-to-peer WebRTC streams. Built complete signaling infrastructure with Socket.IO — SDP negotiation and ICE candidate exchange. Includes JWT authentication, live chat, screen sharing, and session history.',
//     image: null, // replace with: import img from '../assets/meetup.png'
//     imgAlt: 'MeetUp Live Screenshot',
//     metrics: [
//       { label: 'Multi-user P2P', color: 'blue' },
//       { label: 'Real-time Signaling', color: 'blue' },
//       { label: 'Screen Sharing', color: 'violet' },
//       { label: 'JWT Auth', color: 'violet' },
//     ],
//     stack: ['React', 'Node.js', 'Express', 'WebRTC', 'Socket.IO', 'MongoDB', 'JWT', 'bcrypt'],
//     github: 'https://github.com/gurleen-kaur5',
//     demo: null,
//     featured: true,
//   },
//   {
//     id: '02',
//     year: '2025',
//     name: 'Osteoporosis Risk Predictor',
//     sub: 'ML · Clinical Prediction · Flask',
//     desc: 'End-to-end ML pipeline on 1,954 records with 14 clinical features. Benchmarked multiple models and selected CatBoost (0.923 AUC-ROC via 5-fold CV). Threshold tuning achieved 100% precision — zero false positives. SHAP explainability highlights age and prior fractures as key risk drivers.',
//     image: null,
//     imgAlt: 'Osteoporosis Predictor Dashboard',
//     metrics: [
//       { label: 'AUC-ROC 0.923', color: 'blue' },
//       { label: 'Precision 1.0 ✦', color: 'amber' },
//       { label: 'SHAP Explainability', color: 'violet' },
//       { label: '5-Fold CV', color: 'blue' },
//     ],
//     stack: ['Python', 'CatBoost', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'NumPy'],
//     github: 'https://github.com/gurleen-kaur5',
//     demo: null,
//     featured: false,
//   },
//   {
//     id: '03',
//     year: '2024',
//     name: 'WanderLust',
//     sub: 'Hotel Booking Web Application',
//     desc: 'Full-stack travel web app with complete CRUD functionality for listings and reviews using RESTful APIs. Secure authentication and session management via Passport.js, bcrypt, and cookies. Scalable MVC backend with MongoDB, role-based authorization, Cloudinary image uploads, and responsive Bootstrap UI.',
//     image: null,
//     imgAlt: 'WanderLust App Screenshot',
//     metrics: [
//       { label: 'CRUD + Reviews', color: 'blue' },
//       { label: 'Role-based Auth', color: 'violet' },
//       { label: 'Cloudinary CDN', color: 'amber' },
//     ],
//     stack: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'bcrypt', 'Cloudinary', 'Bootstrap'],
//     github: 'https://github.com/gurleen-kaur5',
//     demo: null,
//     featured: false,
//   },
// ]
const projects = [
  {
    id: '01',
    year: '2025',
    name: 'MeetUp Live',
    sub: 'Full-Stack Video Conferencing Platform',
    desc: 'Real-time video conferencing with multi-user audio & video via WebRTC. Includes signaling with Socket.IO, JWT authentication, live chat, and screen sharing.',
    image: meetupImg,
    imgAlt: 'MeetUp Live Screenshot',
    metrics: [
      { label: 'Multi-user P2P', color: 'blue' },
      { label: 'Real-time Signaling', color: 'blue' },
      { label: 'Screen Sharing', color: 'violet' },
      { label: 'JWT Auth', color: 'violet' },
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
    sub: 'ML · Clinical Prediction · Flask',
    desc: 'End-to-end ML pipeline on 1,954 records. CatBoost model (AUC 0.923) with threshold tuning for 100% precision. SHAP highlights age and prior fractures as key risk factors.',
    image: osteoporosisImg,
    imgAlt: 'Osteoporosis Predictor Dashboard',
    metrics: [
      { label: 'AUC-ROC 0.923', color: 'blue' },
      { label: 'Precision 1.0 ✦', color: 'amber' },
      { label: 'SHAP Explainability', color: 'violet' },
      { label: '5-Fold CV', color: 'blue' },
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
    desc: 'Full-stack travel app with CRUD listings and reviews using REST APIs. Secure authentication with Passport.js and bcrypt, Cloudinary image uploads, and responsive UI.',
    image: wanderlustImg,
    imgAlt: 'WanderLust App Screenshot',
    metrics: [
      { label: 'CRUD + Reviews', color: 'blue' },
      { label: 'Role-based Auth', color: 'violet' },
      { label: 'Cloudinary CDN', color: 'amber' },
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
    sub: 'Algorithmic Route Optimization',
    desc: 'Optimizes travel and delivery routes dynamically to minimize distance and time across multiple nodes in real-time.',
    image: routeOptimiserImg,
    imgAlt: 'Dynamic Route Optimiser Screenshot',
    metrics: [
      { label: 'Route Efficiency', color: 'blue' },
      { label: 'Real-time Update', color: 'violet' },
    ],
    stack: ['JavaScript', 'Algorithms', 'Node.js'],
    github: 'https://github.com/gurleen-kaur5/DynamicRouteOptimiser',
    demo: null,
    featured: false,
  },
  {
    id: '05',
    year: '2025',
    name: 'Hospital Operations Dashboard',
    sub: 'Power BI Healthcare Analytics',
    desc: 'Interactive Power BI dashboard analyzing hospital operations, capacity, staffing, and financial performance with KPIs and visual insights.',
    image: hospitalDashboardImg,
    imgAlt: 'Hospital Dashboard Screenshot',
    metrics: [
      { label: 'Power BI', color: 'blue' },
      { label: 'Healthcare Insights', color: 'violet' },
      { label: 'Interactive KPIs', color: 'amber' },
    ],
    stack: ['Power BI', 'Data Analytics', 'Visualization', 'Excel'],
    github: 'https://www.linkedin.com/posts/gurleen-kaur5_powerbi-dataanalytics-healthcareanalytics-activity-7406254172230025216-gwbs',
    demo: null,
    featured: true,
  },
];
function ProjectImage({ image, imgAlt }) {
  if (image) {
    return <img src={image} alt={imgAlt} className="project-img" />
  }
  return (
    <div className="project-img-placeholder" aria-label={imgAlt}>
      <div className="placeholder-inner">
        <Monitor size={32} strokeWidth={1.2} />
        <span>Desktop Preview</span>
        <span className="placeholder-hint">Replace with screenshot</span>
      </div>
      {/* Fake browser chrome */}
      <div className="browser-chrome">
        <div className="chrome-dots">
          <span /><span /><span />
        </div>
        <div className="chrome-bar" />
      </div>
    </div>
  )
}

function MetricBadge({ label, color }) {
  return <span className={`metric-badge metric-${color}`}>{label}</span>
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
              Full-stack, ML, and Analytics built end-to-end.
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
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image area — desktop width */}
                <div className="project-image-area">
                  <ProjectImage image={p.image} imgAlt={p.imgAlt} />
                </div>

                {/* Content area */}
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-num">{p.id}</span>
                    <span className="project-year">{p.year}</span>
                    {p.featured && <span className="featured-badge">Featured</span>}
                  </div>

                  <h2 className="project-name">{p.name}</h2>
                  <div className="project-sub">{p.sub}</div>
                  <p className="project-desc">{p.desc}</p>

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
                      <Github size={14}/> View Code
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                        <ExternalLink size={14}/> Live Demo
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
            <a href="https://github.com/gurleen-kaur5" target="_blank" rel="noreferrer" className="btn btn-outline">
              <Github size={16}/> See all projects on GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  )
}

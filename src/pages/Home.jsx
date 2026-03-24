import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Brain, Code2, ExternalLink,
  Github, Linkedin, Mail, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import LiveStats from '../components/LiveStats/LiveStats'
import PageTransition from '../components/PageTransition'
import './Home.css'

// ── Data ──────────────────────────────────────────────────────────────────────

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  },
}

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: 'Full-Stack Dev',
    desc: 'MERN · WebRTC · Socket.IO · REST APIs',
    color: 'blue',
  },
  {
    icon: <Brain size={20} />,
    title: 'Machine Learning',
    desc: 'Regression · Classification · Clustering · Ensemble Learning',
    color: 'violet',
  },
  {
    icon: <Trophy size={20} />,
    title: 'Devops',
    desc: 'Git · Docker · Maven',
    color: 'amber',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <PageTransition>
      <div className="home">

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-glow"    aria-hidden="true" />

          <div className="container hero-content">
            <motion.div
              variants={stagger.container}
              initial="initial"
              animate="animate"
              className="hero-left"
            >
              <motion.div variants={stagger.item} className="hero-badge">
                <span className="badge-dot" />
                Open to SDE Internships &amp; Roles
              </motion.div>

              <motion.h1 variants={stagger.item} className="hero-name">
                Parmandeep<br />
                <span className="hero-name-outline">Kaur</span>
              </motion.h1>

              <motion.p variants={stagger.item} className="hero-tagline">
                Building <strong>scalable systems</strong>,{' '}
                <strong>real-time apps</strong>, and{' '}
                <strong>ML-driven solutions</strong>.
              </motion.p>

              <motion.div variants={stagger.item} className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View Projects <ArrowRight size={15} />
                </Link>
                <a
                  href="https://github.com/ParmandeepKaur"
                  target="_blank" rel="noreferrer"
                  className="btn btn-outline"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/parmandeep-kaur/"
                  target="_blank" rel="noreferrer"
                  className="btn btn-outline"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </motion.div>

              <motion.div variants={stagger.item} className="hero-social-row">
                <a href="mailto:parmandeepkaur44@gmail.com" className="social-chip">
                  <Mail size={13} /> parmandeepkaur44@gmail.com
                </a>
                <a href="tel:+918968413173" className="social-chip">
                  +91 8968413173
                </a>
              </motion.div>
            </motion.div>

            {/* ── Info card ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="hero-right"
            >
              <div className="hero-card">
                <div className="hero-card-top">
                  <div className="hero-avatar">PK</div>
                  <div>
                    <div className="hero-card-name">Parmandeep Kaur</div>
                    <div className="hero-card-role">Aspiring SDE · ML Enthusiast</div>
                  </div>
                </div>

                <div className="hero-info-rows">
                  <div className="info-row">
                    <span className="info-key">University</span>
                    <span className="info-val">LPU, Phagwara</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Degree</span>
                    <span className="info-val">B.Tech CSE · 2027</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">CGPA</span>
                    <span className="info-val">8.27</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">DSA Solved</span>
                    <span className="info-val">250+ Problems</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Focus</span>
                    <span className="info-val">SDE Roles (primary)</span>
                  </div>
                  <div className="info-row">
                    <span className="info-key">Status</span>
                    <span className="info-val available">
                      <span className="live-dot" />Available
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <section className="section home-highlights">
          <div className="container">
            <div className="grid-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className={`highlight-card card hl-${h.color}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                >
                  <div className={`hl-icon hl-icon-${h.color}`}>{h.icon}</div>
                  <div className="hl-title">{h.title}</div>
                  <div className="hl-desc">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        {/* <section className="section about-section">
          <div className="container about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="section-eyebrow">About Me</div>
              <h2 className="about-heading">
                Building at the intersection of<br />
                <span className="about-heading-accent">web &amp; intelligence.</span>
              </h2>

              <p className="about-para">
                I'm a third-year CSE student at{' '}
                <strong>Lovely Professional University</strong>, with a focus on
                software engineering and applied machine learning. My foundation
                in competitive programming sharpened my ability to write efficient,
                correct code under pressure.
              </p>
              <p className="about-para">
                I build full-stack applications with the <strong>MERN stack</strong>,
                specialising in real-time systems — WebRTC, signaling, concurrent
                backends. On the ML side, I treat models as products: my osteoporosis
                predictor delivers <strong>zero false positives</strong> using
                CatBoost and SHAP explainability.
              </p>
              <p className="about-para">
                I'm actively looking for <strong>SDE internships</strong> where I
                can contribute to production systems and ship real features.
              </p>

              <div className="about-actions">
                <Link to="/projects" className="btn btn-primary">
                  See My Work <ArrowRight size={14} />
                </Link>
                <Link to="/skills" className="btn btn-outline">
                  My Skills
                </Link>
              </div>
            </motion.div>
          </div>
        </section> */}
       <section className="section about-section">
  <div className="container about-grid">

    {/* ── Left: Text ── */}
    <motion.div
      className="about-text"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-eyebrow">About Me</div>
      <h2 className="about-heading">
        Building at the intersection of<br />
        <span className="about-heading-accent">web &amp; intelligence.</span>
      </h2>

      <p className="about-para">
        I'm a third-year CSE student at <strong>Lovely Professional University</strong>, with a focus on software engineering and applied machine learning.
      </p>
      <p className="about-para">
        I build full-stack applications with the <strong>MERN stack</strong>, specialising in real-time systems — WebRTC, signaling, concurrent backends. On the ML side, I treat models as products: my depression detector delivers <strong>zero false positives</strong> using <strong>Random Forest</strong> and <strong>XGBoost</strong>.
      </p>
      <p className="about-para">
        I'm actively looking for <strong>SDE internships</strong> where I can contribute to production systems and ship real features.
      </p>

     <div className="about-actions">
  <Link to="/projects" className="btn btn-primary">
    See My Work <ArrowRight size={14} />
  </Link>

  <Link to="/contact" className="btn btn-outline">
    Get In Touch
  </Link>

  <a
    href="/ParmandeepKaurCV.pdf"
    download="Parmandeep_Kaur_Resume.pdf"
    className="btn btn-primary"
  >
    Download Resume <ArrowDown size={14} />
  </a>
</div>
    </motion.div>

    {/* ── Right: Image ── */}
    <motion.div
      className="about-image-wrapper"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src="/Profile.png"
        alt="Parmandeep Kaur"
        className="about-image"
      />
    </motion.div>

  </div>
</section>

        {/* ── LIVE CODING STATS ── */}
        <LiveStats />

        {/* ── CTA STRIP ── */}
        <section className="section home-cta-strip">
          <div className="container">
            <motion.div
              className="cta-strip card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <div className="cta-strip-title">Let’s build something impactful together</div>
                <div className="cta-strip-sub">
                  Currently seeking SDE internships and open to interesting projects.
                </div>
              </div>
              <div className="cta-strip-actions">
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch <ArrowRight size={14} />
                </Link>
                <Link to="/resume" className="btn btn-outline">
                  View Resume <ExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
// import { motion } from 'framer-motion'
// import { ArrowRight, Brain, Code2, Coffee, Cpu, ExternalLink, Github, Layers, Linkedin, Mail, Trophy } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import LiveStats from '../components/LiveStats/LiveStats'
// import PageTransition from '../components/PageTransition'
// import './Home.css'

// // ── Data ─────────────────────────────────────────────────────────────────────

// const stagger = {
//   container: { animate: { transition: { staggerChildren: 0.1 } } },
//   item: {
//     initial: { opacity: 0, y: 24 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
//   },
// }

// const highlights = [
//   {
//     icon: <Code2 size={18}/>,
//     title: 'Full-Stack Development',
//     desc: 'React · Node.js · MongoDB · Express · WebRTC · Socket.IO',
//     color: 'blue',
//   },
//   {
//     icon: <Brain size={18}/>,
//     title: 'Machine Learning',
//     desc: 'CatBoost · SHAP · Scikit-learn · Ensemble Models · Flask',
//     color: 'violet',
//   },
//   {
//     icon: <Trophy size={18}/>,
//     title: 'Competitive Programming',
//     desc: '788+ Problems · LC Rating 1806 · 271-day Streak',
//     color: 'amber',
//   },
// ]

// const aboutCards = [
//   {
//     icon: <Layers size={16}/>,
//     label: 'What I Build',
//     value: 'Scalable web apps & ML pipelines',
//     color: 'blue',
//   },
//   {
//     icon: <Cpu size={16}/>,
//     label: 'Current Stack',
//     value: 'MERN · Python · Docker · WebRTC',
//     color: 'violet',
//   },
//   {
//     icon: <Code2 size={16}/>,
//     label: 'DSA Streak',
//     value: '271 days · 788+ solved',
//     color: 'amber',
//   },
//   {
//     icon: <Coffee size={16}/>,
//     label: 'When not coding',
//     value: 'Reading · Competitive Prog.',
//     color: 'blue',
//   },
// ]

// const techStack = [
//   { name: 'React',      type: 'Frontend'  },
//   { name: 'Node.js',    type: 'Backend'   },
//   { name: 'MongoDB',    type: 'Database'  },
//   { name: 'Express',    type: 'Backend'   },
//   { name: 'Python',     type: 'Language'  },
//   { name: 'CatBoost',   type: 'ML'        },
//   { name: 'WebRTC',     type: 'Realtime'  },
//   { name: 'Socket.IO',  type: 'Realtime'  },
//   { name: 'Docker',     type: 'DevOps'    },
//   { name: 'SHAP',       type: 'ML'        },
//   { name: 'Flask',      type: 'Backend'   },
//   { name: 'Java / C++', type: 'Language'  },
// ]

// // ── Component ─────────────────────────────────────────────────────────────────

// export default function Home() {
//   return (
//     <PageTransition>
//       <div className="home">

//         {/* ── HERO ── */}
//         <section className="hero">
//           <div className="hero-bg-grid" aria-hidden="true" />
//           <div className="hero-glow"    aria-hidden="true" />

//           <div className="container hero-content">
//             <motion.div
//               variants={stagger.container}
//               initial="initial"
//               animate="animate"
//               className="hero-left"
//             >
//               <motion.div variants={stagger.item} className="hero-badge">
//                 <span className="badge-dot" />
//                 Open to SDE Internships &amp; Roles
//               </motion.div>

//               <motion.h1 variants={stagger.item} className="hero-name">
//                 Parmandeep Kaur<br />
//                 <span className="hero-name-outline">Kaur</span>
//               </motion.h1>

//               <motion.p variants={stagger.item} className="hero-tagline">
//                 Computer Science undergraduate passionate about building
//                 <strong> scalable systems</strong>,{' '}
//                 <strong>modern web applications</strong>, and{' '}
//                 <strong>machine learning solutions</strong>.
//                 Based in Punjab, India.
//               </motion.p>

//               <motion.div variants={stagger.item} className="hero-actions">
//                 <Link to="/projects" className="btn btn-primary">
//                   View Projects <ArrowRight size={15}/>
//                 </Link>
//                 <a href="https://github.com/gurleen-kaur5" target="_blank" rel="noreferrer" className="btn btn-outline">
//                   <Github size={15}/> GitHub
//                 </a>
//                 <a href="https://linkedin.com/in/gurleen-kaur5" target="_blank" rel="noreferrer" className="btn btn-outline">
//                   <Linkedin size={15}/> LinkedIn
//                 </a>
//               </motion.div>

//               <motion.div variants={stagger.item} className="hero-social-row">
//                 <a href="mailto:gurleennn5@gmail.com" className="social-chip">
//                   <Mail size={13}/> gurleennn5@gmail.com
//                 </a>
//                 <a href="tel:+917986306971" className="social-chip">
//                   +91 7986306971
//                 </a>
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//               className="hero-right"
//             >
//               <div className="hero-card">
//                 <div className="hero-card-top">
//                   <div className="hero-avatar">GK</div>
//                   <div>
//                     <div className="hero-card-name">Gurleen Kaur</div>
//                     <div className="hero-card-role">Aspiring SDE · ML Enthusiast</div>
//                   </div>
//                 </div>

//                 <div className="hero-info-rows">
//                   <div className="info-row">
//                     <span className="info-key">University</span>
//                     <span className="info-val">LPU, Phagwara</span>
//                   </div>
//                   <div className="info-row">
//                     <span className="info-key">Degree</span>
//                     <span className="info-val">B.Tech CSE · 2027</span>
//                   </div>
//                   <div className="info-row">
//                     <span className="info-key">LeetCode</span>
//                     <span className="info-val lc-val">Rating 1806 · Top 8%</span>
//                   </div>
//                   <div className="info-row">
//                     <span className="info-key">DSA Solved</span>
//                     <span className="info-val">788+ Problems</span>
//                   </div>
//                   <div className="info-row">
//                     <span className="info-key">SIH 2023</span>
//                     <span className="info-val">Top 30 / 480+ Teams</span>
//                   </div>
//                   <div className="info-row">
//                     <span className="info-key">Focus</span>
//                     <span className="info-val">SDE Roles (primary)</span>
//                   </div>
//                   <div className="info-row">
//                     <span className="info-key">Status</span>
//                     <span className="info-val available">
//                       <span className="live-dot" />Available
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ── ABOUT ME ── */}
//         <section className="section about-section">
//           <div className="container">
//             <div className="about-grid">

//               <motion.div
//                 className="about-text"
//                 initial={{ opacity: 0, x: -24 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <div className="section-eyebrow">About Me</div>
//                 <h2 className="about-heading">
//                   Building at the intersection of<br />
//                   <span className="about-heading-accent">web &amp; intelligence.</span>
//                 </h2>

//                 <p className="about-para">
//                   I'm a third-year Computer Science student at{' '}
//                   <strong>Lovely Professional University</strong>, deeply interested in
//                   software engineering and applied machine learning. My journey started
//                   with competitive programming — grinding LeetCode problems built a
//                   strong instinct for writing efficient, correct code under pressure.
//                 </p>
//                 <p className="about-para">
//                   On the engineering side, I build full-stack applications using the
//                   <strong> MERN stack</strong> with a focus on real-time systems.
//                   My <em>MeetUp Live</em> project pushed me deep into WebRTC,
//                   peer-to-peer signaling, and concurrent backend design. On the ML side,
//                   I treat models as products — interpretability and reliability matter as
//                   much as accuracy, which is why my osteoporosis predictor achieves{' '}
//                   <strong>zero false positives</strong> using CatBoost and SHAP
//                   explainability.
//                 </p>
//                 <p className="about-para">
//                   I'm actively looking for <strong>SDE internships</strong> where I can
//                   contribute to production systems, learn from senior engineers, and ship
//                   real features.
//                 </p>

//                 <div className="about-actions">
//                   <Link to="/projects" className="btn btn-primary">
//                     See My Work <ArrowRight size={14}/>
//                   </Link>
//                   <Link to="/contact" className="btn btn-outline">
//                     Get In Touch
//                   </Link>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="about-right"
//                 initial={{ opacity: 0, x: 24 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 <div className="about-cards">
//                   {aboutCards.map((c, i) => (
//                     <motion.div
//                       key={c.label}
//                       className={`about-card card ac-${c.color}`}
//                       initial={{ opacity: 0, y: 16 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
//                     >
//                       <div className={`ac-icon ac-icon-${c.color}`}>{c.icon}</div>
//                       <div>
//                         <div className="ac-label">{c.label}</div>
//                         <div className="ac-value">{c.value}</div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <div className="tech-stack-wrap card">
//                   <div className="tech-stack-title">Current Tech Stack</div>
//                   <div className="tech-pills">
//                     {techStack.map(t => (
//                       <span key={t.name} className="tech-pill">
//                         <span className="tech-pill-name">{t.name}</span>
//                         <span className="tech-pill-type">{t.type}</span>
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>

//             </div>
//           </div>
//         </section>

//         {/* ── HIGHLIGHTS ── */}
//         <section className="section home-highlights">
//           <div className="container">
//             <div className="grid-3">
//               {highlights.map((h, i) => (
//                 <motion.div
//                   key={h.title}
//                   className={`highlight-card card hl-${h.color}`}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1, duration: 0.45 }}
//                 >
//                   <div className={`hl-icon hl-icon-${h.color}`}>{h.icon}</div>
//                   <div className="hl-title">{h.title}</div>
//                   <div className="hl-desc">{h.desc}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── LIVE CODING STATS ── */}
//         <LiveStats />

//         {/* ── CTA STRIP ── */}
//         <section className="section home-cta-strip">
//           <div className="container">
//             <motion.div
//               className="cta-strip card"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div>
//                 <div className="cta-strip-title">Let's work together</div>
//                 <div className="cta-strip-sub">
//                   Currently seeking SDE internships and open to interesting projects.
//                 </div>
//               </div>
//               <div className="cta-strip-actions">
//                 <Link to="/contact" className="btn btn-primary">
//                   Get In Touch <ArrowRight size={14}/>
//                 </Link>
//                 <Link to="/resume" className="btn btn-outline">
//                   View Resume <ExternalLink size={14}/>
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//       </div>
//     </PageTransition>
//   )
// }
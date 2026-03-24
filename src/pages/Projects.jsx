import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';
import dashImg from '../assets/depression.png';
import powerBiImg from '../assets/powerBi.png';
import gymImg from '../assets/gym.png';
import excelImg from '../assets/excel.png';
import restaurantImg from '../assets/restaurant.png';
import PageTransition from '../components/PageTransition';
import './Projects.css';

const projects = [
  {
    id: '01',
    year: '2025',
    name: 'Depression Detection System',
    sub: 'Machine Learning · Model Comparison',
    desc: 'Built a machine learning system to detect depression patterns using user data. Compared multiple models including Random Forest, Decision Tree, XGBoost, SVM, KNN, and Logistic Regression.',
    impact: 'Performed model comparison and deployed using Docker.',
    image: dashImg,
    imgAlt: 'Depression Detection Project',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Docker'],
    github: 'https://github.com/ParmandeepKaur/Depression_detection',
  },

  {
    id: '02',
    year: '2025',
    name: 'Mental Health Dashboard',
    sub: 'Power BI · Data Visualization',
    desc: 'Created an interactive dashboard using Power BI with radar charts, heatmaps, key influencer visuals, and distribution plots.',
    impact: 'Enabled insights into mental health trends.',
    image: powerBiImg,
    imgAlt: 'Mental Health Dashboard',
    stack: ['Power BI', 'Data Analysis'],
    github: 'https://www.linkedin.com/posts/parmandeep-kaur_powerbi-dataanalytics-businessintelligence-activity-7404338451208462336-0DrF',
  },

  {
    id: '03',
    year: '2025',
    name: 'Forge Fitness Gym Website',
    sub: 'MERN Stack · Fitness Web App',
    desc: 'Built a fitness app with exercise timer, water tracker, BMI calculator, and responsive UI.',
    impact: 'Promotes fitness tracking with user-friendly features.',
    image: gymImg,
    imgAlt: 'Gym Website',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ParmandeepKaur/forge-fitness',
  },

  {
    id: '04',
    year: '2024',
    name: 'Biodiversity Dashboard',
    sub: 'Excel · Data Visualization',
    desc: 'Built dashboard to analyze biodiversity including species, plants, and animals.',
    impact: 'Visual insights into biodiversity data.',
    image: excelImg,
    imgAlt: 'Biodiversity Dashboard',
    stack: ['Excel', 'Charts'],
    github: 'https://www.linkedin.com/posts/parmandeep-kaur_exceldashboard-datavisualization-dataanalysis-activity-7316517929552945156-FacC',
  },

  {
    id: '05',
    year: '2025',
    name: 'Restaurant Website',
    sub: 'MERN Stack · Web Application',
    desc: 'Developed a full-stack restaurant website with responsive design and user interaction.',
    impact: 'Demonstrates full-stack development skills.',
    image: restaurantImg,
    imgAlt: 'Restaurant Website',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ParmandeepKaur/forge-fitness',
  },
];

function ProjectImage({ image, imgAlt }) {
  if (image) {
    return <img src={image} alt={imgAlt} className="project-img" />;
  }
  return (
    <div className="project-img-placeholder">
      <Monitor size={28} />
      <span>Preview</span>
    </div>
  );
}

export default function Projects() {
  return (
    <PageTransition>
      <div className="section projects-page">
        <div className="container">

          <div className="section-header">
            <h1 className="section-title">Projects</h1>
            <p className="section-sub">
              Full-stack, ML, and data projects
            </p>
          </div>

          <div className="projects-list">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className="project-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >

                {/* Image */}
                <div className="project-image-area">
                  <ProjectImage image={p.image} imgAlt={p.imgAlt} />
                </div>

                {/* Content */}
                <div className="project-body">

                  <h2 className="project-name">{p.name}</h2>
                  <div className="project-sub">{p.sub}</div>
                  <p className="project-desc">{p.desc}</p>

                  <div className="project-impact">
                    → {p.impact}
                  </div>

                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="stack-tag">{s}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                        <Github size={14} /> View Project
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
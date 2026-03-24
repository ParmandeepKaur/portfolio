import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import './Certifications.css'

// ── Import cert images here as you add them to src/assets/certs/ ─────────────
import aiml1Img from '../assets/certs/aiml1.png'
import aiml2Img from '../assets/certs/aiml2.png'
import aiml3Img from '../assets/certs/aiml3.png'
import aiml4Img from '../assets/certs/aiml4.png'
import mernImg from '../assets/certs/mern.png'
import nptelImg from '../assets/certs/nptel.png'
import net1Img from '../assets/certs/net1.png'
import net2Img from '../assets/certs/net2.png'
import net3Img from '../assets/certs/net3.png'
import net4Img from '../assets/certs/net4.png'
import net5Img from '../assets/certs/net5.png'
import net6Img from '../assets/certs/net6.png'
import net7Img from '../assets/certs/net7.png'
import net8Img from '../assets/certs/net8.png'

const groups = [
  {
    label: 'Web Development',
    color: 'blue',
    certs: [
      {
        icon: '🌐',
        name: 'MERN Full Stack Development Certification',
        issuer: 'GokBoru Tech Pvt Ltd',
        year: 'Jul 2025',
        image: mernImg,
      },
    ],
  },
  {
    label: 'Security / NPTEL',
    color: 'blue',
    certs: [
      {
        icon: '🔐',
        name: 'Privacy and Security in Online Social Media',
        issuer: 'NPTEL',
        year: 'April 2025',
        image: nptelImg,
      },
    ],
  },
  {
    label: 'AI / Machine Learning',
    color: 'violet',
    certs: [
      {
        icon: '🤖',
        name: 'Build Generative AI apps and solutions with No-code tools',
        issuer: 'Infosys Springboard',
        year: 'Aug 2025',
        image: aiml1Img,
      },
      {
        icon: '🤖',
        name: 'Computational Theory',
        issuer: 'Infosys Springboard',
        year: 'Aug 2025',
        image: aiml2Img,
      },
      {
        icon: '🤖',
        name: 'ChatGPT - 4 Prompt Engineering',
        issuer: 'Infosys Springboard',
        year: 'Aug 2025',
        image: aiml3Img,
      },
      {
        icon: '🤖',
        name: 'Master Generative AI & Generative AI tools',
        issuer: 'Udemy',
        year: 'Aug 2025',
        image: aiml4Img,
      },
    ],
  },

  {
    label: 'Computer Networks & System Architecture',
    color: 'amber',
    certs: [
      {
        icon: '🌐',
        name: 'Introductiont to Hardware & Operating Systems',
        issuer: 'IBM (Coursera)',
        year: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/C8H1IK6PJ2T1',
        image: net1Img,
      },
      {
        icon: '🌐',
        name: 'The Bits & Bytes of Computer Networking',
        issuer: 'Google (Coursera)',
        year: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/S70ZMBZ3MKAK',
        image: net2Img,
      },
      {
        icon: '🌐',
        name: 'Peer-to-Peer protocols & LANs',
        issuer: 'University of Colorado (Coursera)',
        year: 'Oct 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/Z3ILWXK06932',
        image: net3Img,
      },
      {
        icon: '🌐',
        name: 'Fundamentals of Network Communication',
        issuer: 'University of Colorado (Coursera)',
        year: 'Nov 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/VL6FI3KAGGAM',
        image: net4Img,
      },
      {
        icon: '🌐',
        name: 'Packet Switching Neetworks & Algorithms',
        issuer: 'University of Colorado (Coursera)',
        year: 'Nov 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/VYBDJ8QI47VF',
        image: net5Img,
      },
      {
        icon: '🌐',
        name: 'TCP/IP & Advanced Topics',
        issuer: 'University of Colorado (Coursera)',
        year: 'Nov 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/0AAEQ8VH14KS',
        image: net6Img,
      },
      {
        icon: '🌐',
        name: 'Digital Systems: From Logic gates to Processors',
        issuer: 'UAB (Coursera)',
        year: 'Dec 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/4FVPI89UA7DH',
        image: net7Img,
      },
      {
        icon: '🌐',
        name: 'Computer Communications',
        issuer: 'University of Colorado (Coursera)',
        year: 'Nov 2024',
        link: 'https://www.coursera.org/account/accomplishments/specialization/XHKULNCUIOCU',
        image: net8Img,
      },
    ],
  },
];

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ image, name, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
        >
          <button className="lightbox-close" onClick={onClose}>
            <X size={18} />
          </button>
          <img src={image} alt={name} className="lightbox-img" />
          <div className="lightbox-name">{name}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Cert Card ─────────────────────────────────────────────────────────────────
function CertCard({ cert, color, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <motion.div
        className={`cert-card card cert-${color}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Cert image area */}
        <div
          className={`cert-img-area ${cert.image ? 'has-image' : 'no-image'}`}
          onClick={() => cert.image && setLightboxOpen(true)}
          title={cert.image ? 'Click to view certificate' : ''}
        >
          {cert.image ? (
            <>
              <img src={cert.image} alt={cert.name} className="cert-thumb" />
              <div className="cert-img-overlay">
                <ZoomIn size={20} />
              </div>
            </>
          ) : (
            <div className="cert-img-empty">
              <span className="cert-icon-lg">{cert.icon}</span>
              <span className="cert-img-hint">Add image to assets/certs/</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="cert-info">
          <div className="cert-header-row">
            <div className="cert-name">{cert.name}</div>
            <span className={`cert-year-tag cert-year-${color}`}>{cert.year}</span>
          </div>
          <div className="cert-issuer">{cert.issuer}</div>

          <div className="cert-actions">
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                <ExternalLink size={12} /> View Certificate
              </a>
            )}
            {cert.image && (
              <button className="cert-preview-btn" onClick={() => setLightboxOpen(true)}>
                <ZoomIn size={12} /> Preview
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {lightboxOpen && cert.image && (
        <Lightbox
          image={cert.image}
          name={cert.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Certifications() {
  return (
    <PageTransition>
      <div className="section certs-page">
        <div className="container">

          <div className="section-header">
            <div className="section-eyebrow">Credentials</div>
            <h1 className="section-title">Certifications</h1>
            <p className="section-sub">
              Verified credentials across full-stack, AI/ML, cloud, and systems.
            </p>
          </div>

          <div className="cert-groups">
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                className="cert-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08, duration: 0.4 }}
              >
                <div className="cert-group-label">
                  <span className={`cert-group-dot dot-${group.color}`} />
                  {group.label}
                  <span className="cert-group-count">{group.certs.length}</span>
                </div>

                <div className="cert-cards-row">
                  {group.certs.map((cert, ci) => (
                    <CertCard
                      key={cert.name}
                      cert={cert}
                      color={group.color}
                      index={ci}
                    />
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
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import './Certifications.css'

// ── Import cert images here as you add them to src/assets/certs/ ─────────────
import algoImg from '../assets/certs/algo.png'
import googleNetImg from '../assets/certs/bbcn.png'
import cloud from '../assets/certs/cld.png'
import digitalImg from '../assets/certs/dslgp.png'
import netFundImg from '../assets/certs/fnc.png'
import fcc from '../assets/certs/freecc.png'
import gcpImg from '../assets/certs/gcp.png'
import genai1Img from '../assets/certs/genai1.png'
import genai2Img from '../assets/certs/genai2.png'
import ibmAiImg from '../assets/certs/ibm-ai.png'
import hwOsImg from '../assets/certs/ihos.png'
import mernImg from '../assets/certs/mernImg.png'
import p2pImg from '../assets/certs/p2plan.png'
import promptImg from '../assets/certs/prompt.png'
import psnImg from '../assets/certs/psna.png'
import tcpipImg from '../assets/certs/tcpip.png'
const groups = [
  {
    label: 'Web Development / Full Stack',
    color: 'blue',
    certs: [
      {
        icon: '⚡',
        name: 'Delta — Full Stack Web Development',
        issuer: 'Apna College',
        year: 'May 2025',
        link: 'https://drive.google.com/file/d/1hAjGzTNskkeQ9_A_MwLDn1hn1BjdZMIp/view?usp=sharing',
        image: mernImg,
      },
      {
        icon: '🌐',
        name: 'Legacy Responsive Web Design',
        issuer: 'freeCodeCamp',
        year: 'Nov 2023',
        link: 'https://www.freecodecamp.org/certification/fccee773b87-601a-4a8c-a68d-31d2571d7414/responsive-web-design',
        image: fcc, // You can add an image later if you have a screenshot of the cert
      }
    ],
  },
  {
    label: 'Programming / Algorithms',
    color: 'blue',
    certs: [
      {
        icon: '🏋️',
        name: 'Competitive Programming Training',
        issuer: 'AlgoTutor',
        year: 'June – July 2025',
        link: 'https://drive.google.com/file/d/1Gj-DIEpFKfFp9Y1UcAfSOv37sJLC6Lrr/view?usp=sharing',
        image: algoImg,
      },
      {
        icon: '🏕️',
        name: 'Graphs Camp',
        issuer: 'AlgoUniversity',
        year: 'Oct 2025',
        link: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/gurleen-kaur.png',
        image: gcpImg,
      },
    ],
  },
  {
    label: 'AI / ML',
    color: 'violet',
    certs: [
      {
        icon: '🤖',
        name: 'Master Generative AI & Tools',
        issuer: 'Udemy',
        year: 'Sep 2025',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4872e303-8f5b-4455-a1e1-9c4b01802643.pdf',
        image: genai1Img, // replace with: genai1Img
      },
      {
        icon: '🤖',
        name: 'Build Generative AI Apps with No-Code Tools',
        issuer: 'Udemy',
        year: 'Sep 2025',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-24faf0cb-5d0d-4c46-b4fb-0e98a8e4fa28.pdf',
        image: genai2Img, // replace with: genai2Img
      },
      {
        icon: '🤖',
        name: 'ChatGPT-4 Prompt Engineering',
        issuer: 'Infosys Springboard',
        year: 'Aug 2025',
        link: null,
        image: promptImg, // replace with: promptImg
      },
      {
        icon: '🤖',
        name: 'Introduction to Artificial Intelligence',
        issuer: 'IBM · Coursera',
        year: 'Aug 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/SDC43QS131WY',
        image: ibmAiImg, // replace with: ibmAiImg
      },
    ],
  },
  {
    label: 'Cloud',
    color: 'blue',
    certs: [
      {
        icon: '☁️',
        name: 'Cloud Technical Series: Gemini at Work',
        issuer: 'Google Cloud Skills Boost',
        year: 'Nov 2025',
        link: 'https://www.credential.net/1a9506f8-e489-4321-b9b1-91f946d3e75b',
        image: cloud, // replace with: gcpImg
      },
    ],
  },
  {
    label: 'Networking / Systems',
    color: 'amber',
    certs: [
      {
        icon: '🌐',
        name: 'TCP/IP and Advanced Topics',
        issuer: 'Coursera · University of Colorado',
        year: 'Oct 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/58Q649INGJFK',
        image: tcpipImg, // replace with: tcpipImg
      },
      {
        icon: '🌐',
        name: 'Packet Switching Networks & Algorithms',
        issuer: 'Coursera · University of Colorado',
        year: 'Oct 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/32IQCXX4FFX4',
        image: psnImg, // replace with: psnImg
      },
      {
        icon: '🌐',
        name: 'Peer-to-Peer Protocols & LAN',
        issuer: 'Coursera · University of Colorado',
        year: 'Oct 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/VQYFZX3YVCG9',
        image: p2pImg, // replace with: p2pImg
      },
      {
        icon: '🌐',
        name: 'Fundamentals of Network Communication',
        issuer: 'Coursera · University of Colorado',
        year: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/GNTY8I0HPKW1',
        image: netFundImg, // replace with: netFundImg
      },
      {
        icon: '🌐',
        name: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google · Coursera',
        year: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/TAMN3D2EYWGW',
        image: googleNetImg, // replace with: googleNetImg
      },
      {
        icon: '💻',
        name: 'Introduction to Hardware & Operating Systems',
        issuer: 'IBM · Coursera',
        year: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/A0MBB0YM4OXE',
        image: hwOsImg, // replace with: hwOsImg
      },
      {
        icon: '💻',
        name: 'Digital Systems: From Logic Gates to Processors',
        issuer: 'Universitat Autònoma de Barcelona',
        year: 'Sep 2024',
        link: 'https://www.coursera.org/account/accomplishments/verify/QTB57ZPT64T9',
        image: digitalImg, // replace with: digitalImg
      },
    ],
  },
]

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
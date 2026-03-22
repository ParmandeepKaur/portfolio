import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import './Certifications.css'

// const certs = [
//   {
//     icon: '⚡',
//     name: 'Delta — MERN Stack Development',
//     issuer: 'Apna College',
//     year: '2025',
//     color: 'blue',
//     desc: 'Comprehensive full-stack development covering MongoDB, Express, React, and Node.js with real-world project implementation.',
//     link: null,
//   },
//   {
//     icon: '🌐',
//     name: 'TCP/IP and Advanced Topics',
//     issuer: 'Coursera · University of Colorado',
//     year: '2024',
//     color: 'violet',
//     desc: 'Deep dive into networking fundamentals, TCP/IP protocol stack, routing, and advanced networking concepts.',
//     link: null,
//   },
//   {
//     icon: '🏋️',
//     name: 'Competitive Programming Training',
//     issuer: 'AlgoTutor',
//     year: 'June – July 2025',
//     color: 'amber',
//     desc: '28-day intensive program (140+ hours). Solved 150+ problems across arrays, recursion, DP, greedy algorithms, and graphs.',
//     link: null,
//   },
// ]

const certs = [
  // ── Full-Stack & Web Development ──
  {
    icon: '⚡',
    name: 'Delta (Full Stack Web Development)',
    issuer: 'Apna College',
    year: 'May 2025',
    color: 'blue',
    desc: 'Comprehensive full-stack development covering MongoDB, Express, React, and Node.js with real-world project implementation.',
    link: 'https://drive.google.com/file/d/1hAjGzTNskkeQ9_A_MwLDn1hn1BjdZMIp/view?usp=sharing',
  },
    {
    icon: '🏋️',
    name: 'Competitive Programming Training',
    issuer: 'AlgoTutor',
    year: 'June – July 2025',
    color: 'amber',
    desc: '28-day intensive program (140+ hours). Solved 150+ problems across arrays, recursion, DP, greedy algorithms, and graphs.',
    link: 'https://drive.google.com/file/d/1Gj-DIEpFKfFp9Y1UcAfSOv37sJLC6Lrr/view?usp=sharing',
  },

  // ── Cloud & AI/ML ──
  {
    icon: '☁️',
    name: 'Cloud Technical Series: Gemini at Work Edition',
    issuer: 'Google Cloud Skills Boost',
    year: 'Nov 2025',
    color: 'blue',
    desc: 'Cloud computing fundamentals and hands-on experience with Google Cloud technologies.',
    link: 'https://www.credential.net/1a9506f8-e489-4321-b9b1-91f946d3e75b',
  },
  {
    icon: '🤖',
    name: 'Master Generative AI & Tools (ChatGPT, etc.)',
    issuer: 'Udemy',
    year: 'Sep 2025',
    color: 'blue',
    desc: 'Learned generative AI concepts and tools, including ChatGPT, with practical applications.',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4872e303-8f5b-4455-a1e1-9c4b01802643.pdf',
  },
  {
    icon: '🤖',
    name: 'Build Generative AI Apps with No-Code Tools',
    issuer: 'Udemy',
    year: 'Sep 2025',
    color: 'blue',
    desc: 'Created AI-powered applications using no-code platforms and tools.',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-24faf0cb-5d0d-4c46-b4fb-0e98a8e4fa28.pdf',
  },
  {
    icon: '🤖',
    name: 'ChatGPT-4 Prompt Engineering',
    issuer: 'Infosys Springboard',
    year: 'Aug 2025',
    color: 'blue',
    desc: 'Learned prompt engineering and practical applications of GPT-4 in real-world scenarios.',
    link: null,
  },
  {
    icon: '🤖',
    name: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    year: 'Aug 2024',
    color: 'blue',
    desc: 'Fundamentals of AI, machine learning concepts, and applications.',
    link: 'https://www.coursera.org/account/accomplishments/verify/SDC43QS131WY',
  },

  // ── Data Structures & Competitive Programming ──
  {
    icon: '🏋️',
    name: 'Graphs Camp Participation',
    issuer: 'AlgoUniversity',
    year: 'Oct 2025',
    color: 'amber',
    desc: 'Participated in a graph-focused competitive programming camp; strengthened problem-solving skills.',
    link: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/graph_camp/gurleen-kaur.png',
  },


  // ── Networking & Systems ──
  {
    icon: '🌐',
    name: 'Packet Switching Networks & Algorithms',
    issuer: 'Coursera · University of Colorado',
    year: 'Oct 2024',
    color: 'violet',
    desc: 'Networking fundamentals, algorithms, and routing concepts.',
    link: 'https://www.coursera.org/account/accomplishments/verify/32IQCXX4FFX4',
  },
  {
    icon: '🌐',
    name: 'TCP/IP and Advanced Topics',
    issuer: 'Coursera · University of Colorado',
    year: 'Oct 2024',
    color: 'violet',
    desc: 'Deep dive into networking fundamentals, TCP/IP protocol stack, routing, and advanced networking concepts.',
    link: 'https://www.coursera.org/account/accomplishments/verify/58Q649INGJFK',
  },
  {
    icon: '🌐',
    name: 'Peer-to-Peer Protocols & LAN',
    issuer: 'Coursera · University of Colorado',
    year: 'Oct 2024',
    color: 'violet',
    desc: 'Understanding of P2P networking, LAN configurations, and communication protocols.',
    link: 'https://www.coursera.org/account/accomplishments/verify/VQYFZX3YVCG9',
  },
  {
    icon: '🌐',
    name: 'Fundamentals of Network Communication',
    issuer: 'Coursera · University of Colorado',
    year: 'Sep 2024',
    color: 'violet',
    desc: 'Networking basics, protocols, and communication models.',
    link: 'https://www.coursera.org/account/accomplishments/verify/GNTY8I0HPKW1',
  },
  {
    icon: '🌐',
    name: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google',
    year: 'Sep 2024',
    color: 'violet',
    desc: 'Fundamentals of networking, TCP/IP, and computer communication.',
    link: 'https://www.coursera.org/account/accomplishments/verify/TAMN3D2EYWGW',
  },
  {
    icon: '💻',
    name: 'Introduction to Hardware & Operating Systems',
    issuer: 'IBM',
    year: 'Sep 2024',
    color: 'violet',
    desc: 'Core concepts of hardware, operating systems, and computer architecture.',
    link: 'https://www.coursera.org/account/accomplishments/verify/A0MBB0YM4OXE',
  },
  {
    icon: '💻',
    name: 'Digital Systems: From Logic Gates to Processors',
    issuer: 'Universitat Autònoma de Barcelona',
    year: 'Sep 2024',
    color: 'violet',
    desc: 'Understanding digital logic, circuits, and processor design.',
    link: 'https://www.coursera.org/account/accomplishments/verify/QTB57ZPT64T9',
  },
]



export default function Certifications() {
  return (
    <PageTransition>
      <div className="section certs-page">
        <div className="container">

          <div className="section-header">
            <div className="section-eyebrow">Credentials</div>
            <h1 className="section-title">Certifications</h1>
            <p className="section-sub">
              Proof of expertise and dedication to advancing technical knowledge.
            </p>
          </div>

          <div className="certs-grid">
            {certs.map((c, i) => (
              <motion.div
                key={c.name}
                className={`cert-card card cert-${c.color}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="cert-top">
                  <div className={`cert-icon-box cert-icon-${c.color}`}>
                    <span>{c.icon}</span>
                  </div>
                  <div className={`cert-year-tag cert-year-${c.color}`}>{c.year}</div>
                </div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <p className="cert-desc">{c.desc}</p>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noreferrer" className="cert-link">
                    <ExternalLink size={13}/> View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

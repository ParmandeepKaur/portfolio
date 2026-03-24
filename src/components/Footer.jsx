import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-left">
          <span className="footer-logo">PK</span>
          <p className="footer-tagline">Building scalable apps & intelligent systems.</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="https://github.com/ParmandeepKaur" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
          <a href="https://www.linkedin.com/in/parmandeep-kaur/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="mailto:parmandeepkaur44@gmail.com" aria-label="Email"><Mail size={18}/></a>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Parmandeep Kaur · Designed & Built from scratch</span>
        <span>Lovely Professional University · B.Tech CSE</span>
      </div>
    </footer>
  )
}

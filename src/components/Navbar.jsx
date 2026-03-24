import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',               label: 'Home' },
  { to: '/skills',         label: 'Skills' },
  { to: '/projects',       label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/achievements',   label: 'Achievements' },
  { to: '/resume',         label: 'Resume' },
  { to: '/contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <NavLink to="/" className="nav-logo">
          <span className="logo-bracket"></span>PK<span className="logo-bracket"></span>
        </NavLink>

        <nav className="nav-links-desktop">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `nav-mobile-link ${isActive ? 'active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

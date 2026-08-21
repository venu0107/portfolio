import React, { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react'

export default function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['hero', 'about', 'skills', 'experience', 'featured-project', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Case Study', href: '#featured-project', id: 'featured-project' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <Terminal size={22} className="logo-icon" />
          <span>Venu Gopal</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle dark/light theme"
            id="theme-toggle-btn"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          <ul className="nav-mobile-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-mobile-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .header.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--shadow-md);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }
        .logo-icon {
          color: var(--primary);
        }
        .nav-desktop {
          display: none;
        }
        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.25s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .nav-link.active::after, .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .theme-toggle, .mobile-menu-btn {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .theme-toggle:hover, .mobile-menu-btn:hover {
          border-color: var(--border-color-hover);
          color: var(--primary);
          background: var(--bg-secondary);
        }
        .nav-mobile {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          z-index: 999;
          animation: slideDown 0.3s ease forwards;
        }
        .nav-mobile-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .nav-mobile-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
        }
        .nav-mobile-link.active, .nav-mobile-link:hover {
          color: var(--primary);
          padding-left: 4px;
          border-left: 3px solid var(--primary);
        }
        @keyframes slideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (min-width: 768px) {
          .nav-desktop {
            display: block;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

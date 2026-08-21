import React, { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import FeaturedProject from './components/FeaturedProject.jsx'
import OtherProject from './components/OtherProject.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app-layout">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <OtherProject />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Yeduvaka Venkata Venu Gopal. All rights reserved.</p>
          <div className="footer-credits">
            <span>Designed for Web Product Design / Web Design Intern applications</span>
          </div>
        </div>
      </footer>

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex-grow: 1;
        }
        .footer {
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
          padding: 2rem 0;
          color: var(--text-tertiary);
          font-size: 0.875rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-credits {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }
        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}

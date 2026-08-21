import React from 'react'
import { GraduationCap, MapPin, Award, Calendar } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-info">
            <p className="about-lead">
              I am a Computer Science Engineering student with a deep interest in crafting intuitive, responsive, and aesthetically polished web interfaces.
            </p>
            <p className="about-text">
              My engineering background at GITAM University provides me with solid foundations in software engineering, OOP, and data structures. I channel this technical perspective directly into front-end and web design, seeking to bridge the gap between robust system engineering and user-friendly product aesthetics.
            </p>
            <p className="about-text">
              I focus on visual hierarchy, clean spacing, and mobile responsiveness. My goal is to build digital tools that are not only functional but feel natural to navigate and interact with.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card card">
              <GraduationCap className="about-card-icon" size={24} />
              <div className="about-card-content">
                <span className="about-card-label">Degree</span>
                <span className="about-card-val">B.Tech Computer Science & Engineering</span>
              </div>
            </div>

            <div className="about-card card">
              <Award className="about-card-icon" size={24} />
              <div className="about-card-content">
                <span className="about-card-label">Academic Standing</span>
                <span className="about-card-val">CGPA: 7.09 / 10</span>
              </div>
            </div>

            <div className="about-card card">
              <MapPin className="about-card-icon" size={24} />
              <div className="about-card-content">
                <span className="about-card-label">Location</span>
                <span className="about-card-val">Visakhapatnam, AP, India</span>
              </div>
            </div>

            <div className="about-card card">
              <Calendar className="about-card-icon" size={24} />
              <div className="about-card-content">
                <span className="about-card-label">Graduating Year</span>
                <span className="about-card-val">Class of 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-secondary);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: start;
        }
        .about-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .about-lead {
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--text-primary);
        }
        .about-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
        }
        .about-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 500px) {
          .about-cards {
            grid-template-columns: 1fr 1fr;
          }
        }
        .about-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem !important;
        }
        .about-card-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .about-card-content {
          display: flex;
          flex-direction: column;
        }
        .about-card-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .about-card-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}

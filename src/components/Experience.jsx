import React from 'react'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'Schemax IT Solutions',
      role: 'Website Development Intern',
      duration: 'May 2026 - June 2026',
      points: [
        'Developed responsive web pages using HTML, CSS, and JavaScript, aligning layout structures with designer mockups.',
        'Collaborated closely with backend developers to implement interface features and resolve UI/layout rendering issues.',
        'Performed thorough cross-browser and cross-device testing to ensure consistent functionality, color accuracy, and user experience.'
      ]
    },
    {
      company: 'Infosys Springboard',
      role: 'Java Programming Intern',
      duration: 'Ongoing / Training Course',
      points: [
        'Completed comprehensive Java Programming Fundamentals training modules under standard industry curricula.',
        'Applied core OOP concepts (inheritance, polymorphism, encapsulation, abstraction), arrays, functions, and structured problem-solving paradigms.',
        'Developed algorithmic problem-solving skills through hands-on programming challenges and feedback-driven grading.'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-card card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company text-gradient">{exp.company}</h4>
                  </div>
                  <span className="timeline-date">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="timeline-point">
                      <CheckCircle2 size={16} className="timeline-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: var(--bg-secondary);
        }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
          border-left: 2px solid var(--border-color);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -2.7rem;
          top: 0.5rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--primary);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .timeline-card {
          padding: 2rem !important;
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .timeline-role {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .timeline-company {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .timeline-date {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-tertiary);
          background: var(--bg-primary);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }
        .timeline-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .timeline-point {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1rem;
          color: var(--text-secondary);
        }
        .timeline-check {
          color: var(--primary-light);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        @media (max-width: 768px) {
          .timeline {
            padding-left: 1.5rem;
          }
          .timeline-dot {
            left: -2.1rem;
            width: 28px;
            height: 28px;
          }
          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

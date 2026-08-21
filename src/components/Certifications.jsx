import React from 'react'
import { Award, ShieldCheck, ExternalLink } from 'lucide-react'

export default function Certifications() {
  const certifications = [
    { title: 'Java Programming Fundamentals', issuer: 'Infosys Springboard', date: '2026', code: 'INF-JV-2026' },
    { title: 'Google Gen AI Study Jam', issuer: 'Google Developer Groups', date: '2025', code: 'GG-GENAI-25' },
    { title: 'GATE Set Go', issuer: 'GeeksforGeeks', date: '2025', code: 'GFG-GATE-25' },
    { title: 'Career Edge – Young Professional', issuer: 'TCS iON', date: '2025', code: 'TCS-CE-2025' }
  ]

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card card">
              <div className="cert-icon-wrapper">
                <Award size={26} className="cert-icon" />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer text-gradient">{cert.issuer}</span>
                <div className="cert-meta">
                  <span className="cert-date">Issued: {cert.date}</span>
                  <span className="cert-divider">•</span>
                  <span className="cert-code">ID: {cert.code}</span>
                </div>
              </div>
              <div className="cert-verify">
                <ShieldCheck size={18} /> Verified
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-section {
          background: var(--bg-primary);
        }
        .certs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .cert-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem !important;
          position: relative;
        }
        .cert-icon-wrapper {
          width: 52px;
          height: 52px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cert-content {
          flex-grow: 1;
        }
        .cert-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .cert-issuer {
          font-size: 0.9rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }
        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }
        .cert-divider {
          color: var(--border-color);
        }
        .cert-verify {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.15);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          align-self: flex-start;
        }
      `}</style>
    </section>
  )
}

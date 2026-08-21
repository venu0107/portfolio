import React, { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          {/* Info cards */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I am actively seeking internship and junior opportunities in Web Design, Web Product Design, and Front-End Development. Feel free to reach out via email or connect with me on professional networks.
            </p>

            <div className="contact-channels">
              <a href="mailto:venuvenkat532@gmail.com" className="contact-card card">
                <div className="channel-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="channel-label">Email Me</span>
                  <span className="channel-value">venuvenkat532@gmail.com</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/venu-venkat-717231293" target="_blank" rel="noopener noreferrer" className="contact-card card">
                <div className="channel-icon-wrapper linkedin">
                  <Linkedin size={22} />
                </div>
                <div>
                  <span className="channel-label">LinkedIn Connection</span>
                  <span className="channel-value">venu-venkat-717231293</span>
                </div>
              </a>

              <a href="https://github.com/venu0107" target="_blank" rel="noopener noreferrer" className="contact-card card">
                <div className="channel-icon-wrapper github">
                  <Github size={22} />
                </div>
                <div>
                  <span className="channel-label">GitHub Repository</span>
                  <span className="channel-value">github.com/venu0107</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-container card">
            <h3 className="form-card-title">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="submit-success">
                <CheckCircle size={44} className="success-icon" />
                <h4>Thank you!</h4>
                <p>Your message has been simulated successfully. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input 
                    type="text" 
                    id="contact-name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input 
                    type="email" 
                    id="contact-email"
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea 
                    id="contact-message"
                    rows="4" 
                    placeholder="Describe your internship opportunity or question..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn" id="contact-submit-btn">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-secondary);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .contact-info {
          display: flex;
          flex-direction: column;
        }
        .contact-info-title, .form-card-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .contact-info-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .contact-channels {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem !important;
        }
        .channel-icon-wrapper {
          width: 44px;
          height: 44px;
          background: rgba(99, 102, 241, 0.08);
          color: var(--primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .channel-icon-wrapper.linkedin {
          background: rgba(6, 182, 212, 0.08);
          color: var(--secondary);
        }
        .channel-icon-wrapper.github {
          background: rgba(244, 63, 94, 0.08);
          color: var(--accent);
        }
        .channel-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .channel-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .contact-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .contact-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .contact-form input, .contact-form textarea {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
        }
        .form-submit-btn {
          width: 100%;
          margin-top: 0.5rem;
        }
        .submit-success {
          text-align: center;
          padding: 3rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon {
          color: #22c55e;
        }
        .submit-success h4 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .submit-success p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  )
}

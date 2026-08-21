import React from 'react'
import { ArrowRight, Code, Download, Compass } from 'lucide-react'

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const handleDownloadResume = () => {
    // Generate an clean recruiter-friendly mock plain text resume for ATS
    const resumeText = `
YEDUVAKA VENKATA VENU GOPAL
Visakhapatnam, Andhra Pradesh, India | venuvenkat532@gmail.com
LinkedIn: linkedin.com/in/venu-venkat-717231293 | GitHub: github.com/venu0107

OBJECTIVE
B.Tech Computer Science and Engineering student graduating in 2027 with a B.Tech CGPA of 7.09. Aspiring Web Product Design / Web Design Intern with strong foundations in responsive web design, interactive frontends, and core full-stack technologies (HTML5, CSS3, JavaScript, React.js, Node.js).

EDUCATION
- GITAM University, Visakhapatnam
  B.Tech in Computer Science and Engineering (Graduation: 2027)
  CGPA: 7.09 / 10

SKILLS
- Web Development: HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, SQL
- Design Skills: Responsive Web Design, Basic UI Design, Visual Hierarchy
- Programming: Java, Python
- Tools: Git, GitHub, VS Code

EXPERIENCE
- Website Development Intern | Schemax IT Solutions (May 2026 - June 2026)
  * Developed responsive web pages using HTML, CSS, and JavaScript.
  * Collaborated with developers to implement website features and resolve UI/layout issues.
  * Performed cross-browser testing to ensure consistent functionality and look.
- Java Programming Intern | Infosys Springboard
  * Completed Java Programming Fundamentals training. Applied OOP, arrays, and problem-solving techniques.

PROJECTS
- Inventory Management Dashboard (React.js, Node.js, SQL)
  * Designed and built a responsive dashboard for managing products, stock levels, suppliers, and inventory transactions. Features 7 distinct UI screens.
- Employee Management System (React.js, Node.js, Express.js)
  * Developed dashboard for attendance, leave, payroll, and role-based navigation.

CERTIFICATIONS
- Infosys Springboard – Java Programming Fundamentals
- Google Gen AI Study Jam
- GeeksforGeeks – GATE Set Go
- TCS iON Career Edge – Young Professional
`
    const blob = new Blob([resumeText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = "Yeduvaka_Venkata_Venu_Gopal_Resume.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            <Compass size={14} /> Available for Summer/Fall Internships
          </span>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Yeduvaka Venkata Venu Gopal</span>
          </h1>
          <p className="hero-subtitle">
            Computer Science Student | Web Developer | UI-Focused Developer
          </p>
          <p className="hero-desc">
            Computer Science Engineering student with hands-on experience in web development using HTML, CSS, JavaScript, and React.js. Interested in creating responsive, intuitive, and user-friendly digital experiences.
          </p>
          <div className="hero-actions">
            <button 
              onClick={() => handleScrollTo('featured-project')} 
              className="btn btn-primary"
              id="hero-view-projects-btn"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn btn-secondary"
              id="hero-contact-btn"
            >
              Contact Me
            </button>
            <button 
              onClick={handleDownloadResume} 
              className="btn btn-secondary resume-btn"
              id="hero-resume-btn"
            >
              <Download size={16} /> ATS Resume
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="cube-wrapper">
            <div className="tech-box">
              <div className="tech-tag tag-react">React.js</div>
              <div className="tech-tag tag-js">JavaScript</div>
              <div className="tech-tag tag-css">CSS3</div>
              <div className="tech-tag tag-html">HTML5</div>
              <div className="tech-tag tag-node">Node.js</div>
              <div className="tech-tag tag-design">UI/UX Design</div>
              <div className="inner-card">
                <Code size={40} className="inner-card-icon" />
                <span className="inner-card-title">Responsive Design</span>
                <span className="inner-card-text">Building layouts that scale flawlessly.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
          background: var(--bg-primary);
        }
        .hero-glow {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--glow-color) 0%, rgba(99, 102, 241, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-light);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.15;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
        }
        .hero-subtitle {
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .hero-desc {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .resume-btn {
          background: rgba(99, 102, 241, 0.05);
          border-color: rgba(99, 102, 241, 0.2);
        }
        .resume-btn:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: var(--primary);
        }
        .hero-visual {
          display: none;
          justify-content: center;
          align-items: center;
        }
        .cube-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
        }
        .tech-box {
          position: relative;
          width: 100%;
          height: 100%;
          background: radial-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 6s ease-in-out infinite;
        }
        .inner-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.5rem;
          width: 80%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-lg);
        }
        .inner-card-icon {
          color: var(--primary);
          margin-bottom: 0.75rem;
        }
        .inner-card-title {
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .inner-card-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .tech-tag {
          position: absolute;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          padding: 0.35rem 0.75rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: var(--shadow-sm);
        }
        .tag-react { top: 10%; left: -10%; border-color: rgba(6, 182, 212, 0.3); color: #22d3ee; }
        .tag-js { top: 75%; left: -5%; border-color: rgba(234, 179, 8, 0.3); color: #facc15; }
        .tag-css { top: 20%; right: -15%; border-color: rgba(99, 102, 241, 0.3); color: #818cf8; }
        .tag-html { top: 80%; right: -5%; border-color: rgba(244, 63, 94, 0.3); color: #fb7185; }
        .tag-node { top: -10%; right: 25%; border-color: rgba(34, 197, 94, 0.3); color: #4ade80; }
        .tag-design { bottom: -10%; left: 25%; border-color: rgba(6, 182, 212, 0.3); color: #22d3ee; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }

        @media (min-width: 1024px) {
          .hero-visual {
            display: flex;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding-bottom: 4rem;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-badge, .hero-content {
            align-items: center;
            align-self: center;
          }
          .hero-actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

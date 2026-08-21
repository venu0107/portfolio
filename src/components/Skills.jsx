import React from 'react'
import { Code2, Palette, Database, Cpu, Settings, Monitor } from 'lucide-react'

export default function Skills() {
  const categories = [
    {
      title: 'Frontend & UI Frameworks',
      icon: <Monitor size={20} />,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend & Databases',
      icon: <Database size={20} />,
      skills: ['Node.js', 'Express.js', 'SQL']
    },
    {
      title: 'Programming Languages',
      icon: <Code2 size={20} />,
      skills: ['Java', 'Python']
    },
    {
      title: 'Web & Product Design',
      icon: <Palette size={20} />,
      skills: ['Responsive Web Design', 'Basic UI Design']
    },
    {
      title: 'Tools & Development',
      icon: <Settings size={20} />,
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Competence</span>
          <h2 className="section-title">Skills & Toolkit</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="skills-card card">
              <div className="skills-card-header">
                <span className="skills-icon-bg">{cat.icon}</span>
                <h3 className="skills-card-title">{cat.title}</h3>
              </div>
              <ul className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skills-item">
                    <span className="skills-dot"></span>
                    <span className="skills-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--bg-primary);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .skills-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .skills-icon-bg {
          width: 44px;
          height: 44px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(99, 102, 241, 0.15);
        }
        .skills-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .skills-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skills-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .skills-item:hover {
          border-color: var(--primary-light);
          background: rgba(99, 102, 241, 0.03);
          transform: translateY(-2px);
        }
        .skills-dot {
          width: 6px;
          height: 6px;
          background: var(--secondary);
          border-radius: 50%;
        }
        .skills-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        [data-theme="light"] .skills-item:hover {
          background: rgba(99, 102, 241, 0.05);
        }
      `}</style>
    </section>
  )
}

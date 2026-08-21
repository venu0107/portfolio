import React from 'react'
import { Layers, Calendar, CheckSquare, ShieldCheck, TrendingUp, Users } from 'lucide-react'

export default function OtherProject() {
  const modules = [
    { title: 'Responsive Dashboard', desc: 'Real-time overview of headcounts, departmental distributions, and daily check-in ratios.', icon: <Layers size={18} /> },
    { title: 'Employee Management', desc: 'Secure CRUD systems to handle student and staff profiles, roles, and structural logs.', icon: <Users size={18} /> },
    { title: 'Attendance Tracking', desc: 'Daily punch logs, holiday planners, and auto-generated monthly presence metrics.', icon: <Calendar size={18} /> },
    { title: 'Leave Operations', desc: 'Role-based request lines, multi-level approvals, and balance logs.', icon: <CheckSquare size={18} /> },
    { title: 'Payroll Processing', desc: 'Salary structures, tax deductions, and automated payslip generation modules.', icon: <ShieldCheck size={18} /> },
    { title: 'Performance Reviews', desc: 'KPI tracking, appraisal forms, and feedback channels.', icon: <TrendingUp size={18} /> }
  ]

  return (
    <section className="section other-project-section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-subtitle">Supporting Project</span>
          <h2 className="section-title">Employee Management System</h2>
        </div>

        <div className="op-card card">
          <div className="op-info">
            <h3 className="op-title text-gradient">System Architecture & Core Modules</h3>
            <p className="op-desc">
              Developed as a full-stack CRUD application using <strong>React.js, Node.js, Express.js, and JavaScript</strong>. The system provides secure role-based navigation and manages standard operational workflows for organizational human resources.
            </p>
            <div className="op-badge-list">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>Role-Based RBAC</span>
            </div>
          </div>

          <div className="op-modules-grid">
            {modules.map((mod, idx) => (
              <div key={idx} className="op-module-card">
                <span className="op-mod-icon">{mod.icon}</span>
                <div>
                  <h4 className="op-mod-title">{mod.title}</h4>
                  <p className="op-mod-desc">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .other-project-section {
          background: var(--bg-secondary);
        }
        .op-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          padding: 2.5rem !important;
        }
        @media (min-width: 900px) {
          .op-card {
            grid-template-columns: 0.8fr 1.2fr;
          }
        }
        .op-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .op-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .op-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .op-badge-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .op-badge-list span {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .op-modules-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .op-modules-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .op-module-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1.25rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: all 0.2s ease;
        }
        .op-module-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .op-mod-icon {
          background: rgba(99, 102, 241, 0.08);
          color: var(--primary);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .op-mod-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .op-mod-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
      `}</style>
    </section>
  )
}

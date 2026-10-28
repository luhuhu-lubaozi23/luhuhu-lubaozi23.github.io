import { projects } from '../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <div>
      <h1 className="page-title">我的项目 ♡</h1>
      <p className="page-subtitle">
        一些课程作业、竞赛、社团和个人折腾出来的小东西，还在持续更新。
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="card project-card">
            <div className="project-head">
              <span className="project-emoji">{p.emoji}</span>
              <span className="project-year">{p.year}</span>
            </div>
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t.label} className={`pill pill-${t.color}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

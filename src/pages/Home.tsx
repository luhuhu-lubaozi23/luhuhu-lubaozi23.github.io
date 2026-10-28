import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">♡ 你好呀，欢迎来到我的小站</div>
        <h1 className="hero-title">
          我是 <span className="gradient">陆家曼</span>
        </h1>
        <p className="hero-sub">
          汕头大学 · 计算机科学与技术（大二）
          <br />
          STB 英语报社主席 / 学业导生 / 团支书
          <br />
          喜欢代码、篮球（23 号！）和一切马卡龙色的东西
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn btn-pink">看看我的项目 →</Link>
          <Link to="/about" className="btn btn-ghost">了解更多</Link>
        </div>
      </section>

      {/* 快速标签 */}
      <section className="quick-tags">
        <span className="pill pill-pink">Python</span>
        <span className="pill pill-blue">Java</span>
        <span className="pill pill-purple">MATLAB</span>
        <span className="pill pill-yellow">React</span>
        <span className="pill pill-green">PyTorch</span>
      </section>

      {/* 精选项目预览 */}
      <section className="section">
        <h2 className="section-title">最近在做什么</h2>
        <div className="preview-grid">
          {projects.slice(0, 3).map((p) => (
            <div key={p.title} className="card preview-card">
              <div className="preview-emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.description.slice(0, 60)}…</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/projects" className="link-more">查看全部项目 →</Link>
        </div>
      </section>
    </div>
  )
}

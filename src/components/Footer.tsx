import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Lujia Man · 用 ♡ 和 React 搭建
        </p>
        <p className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a href="mailto:hello@example.com">Email</a>
          <span>·</span>
          <a href="https://www.cs.stu.edu.cn/" target="_blank" rel="noreferrer">STU 计科</a>
        </p>
      </div>
    </footer>
  )
}

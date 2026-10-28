import { posts } from '../data/posts'
import './Blog.css'

export default function Blog() {
  return (
    <div>
      <h1 className="page-title">博客小记 ♡</h1>
      <p className="page-subtitle">
        学习笔记、社团复盘、踩坑记录——写给以后的自己看。
      </p>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.title} className="card post-card">
            <div className="post-date">{post.date}</div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="post-tags">
              {post.tags.map((t) => (
                <span key={t} className="pill pill-purple">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

import './About.css'

export default function About() {
  return (
    <div>
      <h1 className="page-title">关于我 ♡</h1>
      <p className="page-subtitle">
        一个在代码和篮球之间反复横跳的潮汕女生。
      </p>

      <div className="card about-card">
        <h2>👋 基本信息</h2>
        <ul>
          <li><strong>名字：</strong>陆家曼（Lujia Man）</li>
          <li><strong>学校：</strong>汕头大学 · 东海岸校区</li>
          <li><strong>专业：</strong>计算机科学与技术（大二）</li>
          <li><strong>家乡：</strong>广东潮汕</li>
        </ul>
      </div>

      <div className="card about-card">
        <h2>💼 正在做的事</h2>
        <ul>
          <li>STB 英语报社主席 —— 负责报纸内容、视觉改版和 Reading Club 运营</li>
          <li>2025 级计科团支书 / 学业导生 / 院团务助理</li>
          <li>备赛 2026 数学建模国赛（MATLAB 主力）</li>
          <li>自学 PyTorch、WebGL、Blender 3D 建模</li>
        </ul>
      </div>

      <div className="card about-card">
        <h2>🏀 关于我</h2>
        <p>
          高中打过篮球，最喜欢韦德和乔丹（23 号永远的神）。
          现在每天早上六点泡健身房，在减脂和暴食之间反复拉扯。
          喜欢一切粉粉蓝蓝紫紫的东西，审美是马卡龙本龙。
        </p>
      </div>

      <div className="card about-card">
        <h2>📮 找我玩</h2>
        <p>
          GitHub：<a href="https://github.com/" target="_blank" rel="noreferrer">@你的用户名</a>
          <br />
          Email：<a href="mailto:hello@example.com">hello@example.com</a>
        </p>
      </div>
    </div>
  )
}

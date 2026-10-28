# Lujia Man · 个人小站 ♡

基于 **Vite + React 19 + TypeScript + React Router 7** 的马卡龙少女风个人网站，
支持 GitHub Pages 一键部署。

## 本地开发

```bash
npm install
npm run dev      # 启动 http://localhost:5173
npm run build    # 打包到 dist/
npm run preview  # 本地预览打包结果
```

## 改内容在哪里

| 想改什么 | 去哪个文件 |
|---|---|
| 首页自我介绍、slogan | `src/pages/Home.tsx` |
| 项目卡片（标题/描述/标签） | `src/data/projects.ts` |
| 博客文章列表 | `src/data/posts.ts` |
| 关于我页面的详细介绍 | `src/pages/About.tsx` |
| 社交链接（GitHub / Email） | `src/components/Footer.tsx`、`src/pages/About.tsx` |
| 配色（粉/蓝/紫/黄/绿） | `src/index.css` 顶部的 `:root` 变量 |
| 浏览器标题 | `index.html` |

## 部署到 GitHub Pages

### 第 1 步：在 GitHub 上建一个仓库

在你已经打开的 GitHub 页面上：

- 如果你想访问地址是 `https://你的用户名.github.io/`（用户主页站）
  → 仓库名必须叫 **`你的用户名.github.io`**（比如 `lujia-man.github.io`）
- 如果你想放在子路径 `https://你的用户名.github.io/repo名/`
  → 仓库名随便起，比如 `personal-website`

### 第 2 步：把本地代码推上去

在 `personal-website` 目录里执行：

```bash
git init
git add .
git commit -m "init: macaron personal website"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 第 3 步：发布

```bash
npm run deploy
```

这条命令会自动 `build` 然后把 `dist/` 推到 `gh-pages` 分支。

### 第 4 步：在 GitHub 仓库设置里开 Pages

仓库 → **Settings** → **Pages** → **Source** 选 `gh-pages` 分支 → 保存。

等 1–2 分钟就能访问了。

## 技术说明

- 路由用的是 **HashRouter**（地址里会带 `#/`），因为 GitHub Pages 不支持 SPA
  的 history 模式刷新，这样免服务器配置，刷新不会 404。
- `vite.config.ts` 里 `base: './'` 是相对路径，无论仓库在根目录还是子路径都能跑。

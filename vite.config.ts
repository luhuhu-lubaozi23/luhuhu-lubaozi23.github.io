import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 部署时，仓库名会作为子路径（如 https://username.github.io/repo-name/）
// 先把 base 设为 './' 相对路径，这样无论部署到哪个子路径都能跑
export default defineConfig({
  plugins: [react()],
  base: './',
})

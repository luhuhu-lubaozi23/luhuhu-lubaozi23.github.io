export interface Post {
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export const posts: Post[] = [
  {
    title: '从 0 到 1 跑通 MNIST：一个计科女生的 PyTorch 入门笔记',
    date: '2026-10-20',
    excerpt:
      '记录第一次用 PyTorch 写 CNN 的全过程：环境踩坑、DataLoader 怎么用、为什么我的 loss 一直不下降……附可运行代码。',
    tags: ['PyTorch', '深度学习', '入门'],
  },
  {
    title: '三重积分球坐标替换，我终于搞懂了',
    date: '2026-10-12',
    excerpt:
      '高数课上最懵的一节。用一道例题把变量替换、雅可比行列式、积分限怎么定一步步拆开，写给和我一样跳步就看不懂的人。',
    tags: ['高等数学', '学习笔记'],
  },
  {
    title: '我为什么把社团报纸改成 Sixth Tone 那种风格',
    date: '2026-09-28',
    excerpt:
      '从排版、配色、标题层级三个维度复盘 STB 改版的思路，以及作为主席如何和记者、美编同学对齐审美。',
    tags: ['排版', '社团', '英语'],
  },
  {
    title: 'Blender 建模初体验：把汕大东海岸塞进浏览器',
    date: '2026-09-15',
    excerpt:
      '一个周末的实验记录：从导出 glTF 到在网页里用 three.js 渲染，遇到的坑和意外的小惊喜。',
    tags: ['Blender', 'WebGL', '3D'],
  },
]

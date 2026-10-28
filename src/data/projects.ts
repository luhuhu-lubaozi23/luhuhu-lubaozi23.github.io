export interface Project {
  title: string
  emoji: string
  description: string
  tags: { label: string; color: 'pink' | 'blue' | 'purple' | 'yellow' | 'green' }[]
  link?: string
  year: string
}

export const projects: Project[] = [
  {
    title: 'MNIST 手写数字识别系统',
    emoji: '🔢',
    description:
      '基于 PyTorch 搭建的卷积神经网络，在 MNIST 测试集上达到 98%+ 准确率，附带完整的数据加载、训练、可视化和 PPT 演示。',
    tags: [
      { label: 'PyTorch', color: 'blue' },
      { label: 'CNN', color: 'purple' },
      { label: '深度学习', color: 'pink' },
    ],
    year: '2026',
  },
  {
    title: '汕大东海岸 3D 校园导航',
    emoji: '🏫',
    description:
      '用 Blender 建模 + Web 渲染的校园 3D 导航游戏，支持自由漫游、地点标记和路线指引，正在持续探索 WebGL 与前端 3D。',
    tags: [
      { label: 'Blender', color: 'green' },
      { label: 'WebGL', color: 'blue' },
      { label: '游戏开发', color: 'yellow' },
    ],
    year: '2026',
  },
  {
    title: '数学建模国赛 C 题备赛',
    emoji: '📊',
    description:
      '以 MATLAB 为主力工具，练习数据分析、优化模型和论文写作，覆盖多元统计、时间序列与评价模型。',
    tags: [
      { label: 'MATLAB', color: 'purple' },
      { label: '建模', color: 'pink' },
      { label: '竞赛', color: 'yellow' },
    ],
    year: '2026',
  },
  {
    title: 'STB 英语报纸改版与 Reading Club',
    emoji: '📰',
    description:
      '担任汕头大学英语报社主席，主导报纸视觉改版（参考 Sixth Tone 风格），并设计全英文招新面试流程与 Reading Club 运营方案。',
    tags: [
      { label: '内容运营', color: 'pink' },
      { label: '英文', color: 'blue' },
      { label: '团队管理', color: 'green' },
    ],
    year: '2025–2026',
  },
]

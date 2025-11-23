import { 
  Code, 
  Cpu, 
  Layers, 
  Zap, 
  Gamepad2, 
  Box, 
  Network, 
  Wrench, 
  Trophy,
  Users,
  BookOpen
} from 'lucide-react';
import { ProjectShowcaseData, GalleryItem } from './types';

// =========================================================================
// ASSETS CONFIGURATION
// Please ensure you create a folder named 'assets' in your public root
// and structure it as follows:
// /assets/images/avatar.png
// /assets/videos/life-shell-pv.mp4
// /assets/images/ls-screen-1.jpg  etc.
// =========================================================================

export const HERO_DATA = {
  title: "高级 Unity 2D 工程师",
  subtitle: "UI/UX 交互专家 | 系统架构 | 性能优化",
  summary: "拥有丰富的2D游戏制作经验与问题解决能力。在闲鱼平台解决过3800+ Unity疑难杂症，好评率100%。擅长构建高可维护性的游戏系统、复杂的UI交互逻辑及高性能代码优化。",
  tags: ["Unity 2D/3D", "C#", "UI架构", "性能优化", "设计模式"],
  avatarUrl: "/assets/images/avatar.png" // Replace with your actual avatar
};

export const STATS_DATA = [
  { label: "Unity 问题解决", value: "3,800+", icon: Wrench, color: "text-game-accent" },
  { label: "参与项目", value: "10+", icon: Gamepad2, color: "text-game-secondary" },
  { label: "性能提升最高", value: "1000%", icon: Zap, color: "text-game-warn" },
  { label: "代码协作项目", value: "10+", icon: Users, color: "text-game-success" },
];

export const SKILLS_RADAR_DATA = [
  { subject: '系统架构', A: 90, fullMark: 100 },
  { subject: 'UI/UX 开发', A: 95, fullMark: 100 },
  { subject: '性能优化', A: 85, fullMark: 100 },
  { subject: '工具/插件', A: 90, fullMark: 100 },
  { subject: '3D/物理', A: 75, fullMark: 100 },
  { subject: '网络/联机', A: 70, fullMark: 100 },
];

export const TECH_STACK = {
  core: ["C#", "Unity 2021+", "UGUI", "New Input System", "UIToolKit"],
  plugins: ["Odin Inspector", "DoTween", "PrimeTween", "Cinemachine", "Spine", "MemoryPack", "UniTask"],
  systems: ["有限状态机 (FSM)", "行为树 (Behavior Tree)", "对话系统", "任务系统", "背包系统", "存档系统", "Socket/Mirror"],
  patterns: ["Singleton", "Object Pool", "Factory", "Strategy", "Chain of Responsibility", "Observer"]
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "深圳聚光灯网络有限公司",
    period: "2023.12 - 至今",
    role: "《命骸》项目总程序",
    highlight: "编写超过8万行代码，负责核心架构与全系统开发",
    details: [
      "负责二次元废土剧情战斗 3D RPG 的全流程开发。",
      "实现了角色控制（FSM）、复杂的连击战斗系统、打击感调校。",
      "基于 MemoryPack 实现高性能存档系统（自动/多槽）。",
      "构建了高度可配置的技能系统、任务系统（类MMO）和对话系统。",
      "开发了基于 AssetsBundle + AES 的资源加密系统。"
    ]
  },
  {
    id: 2,
    company: "成都凯瑞游科技有限公司",
    period: "2023.03 - 2023.12",
    role: "Unity 客户端开发",
    highlight: "PC/主机平台动作游戏开发",
    details: [
      "使用 Unity Spine 插件实现横版 2D 游戏逻辑。",
      "负责 PC 项目《命骸》外包开发，实现手柄支持、3D平台跳跃手感调优。",
      "实现了物品交易、商店UI、Buff系统等核心模块。"
    ]
  },
  {
    id: 3,
    company: "自由职业 / 闲鱼专家",
    period: "2024.01 - 至今",
    role: "Unity 技术顾问",
    highlight: "累计完成 3,800+ 次技术服务，100% 好评",
    details: [
      "涉猎极广：横版、种田、3D钓鱼、无人机仿真、大模型对接、AR/VR等。",
      "具备极强的代码阅读与 Debug 能力，快速定位疑难杂症。",
      "交付多个跨领域项目：手势识别、车企UI交互、数据可视化图表等。"
    ]
  }
];

export const PROJECT_SHOWCASE: ProjectShowcaseData = {
  id: "life-shell",
  title: "命骸 (Life Shell)",
  subtitle: "二次元废土剧情战斗 RPG",
  description: "担任项目总程序，编写超过8万行代码。负责从底层架构到上层玩法的全方位实现。核心包括复杂的连击战斗系统（状态机驱动）、高性能存档方案（MemoryPack）以及高度模块化的任务与对话系统。",
  steamLink: "https://store.steampowered.com/app/3007510/_/",
  tags: ["Unity 3D", "Combat RPG", "System Architecture", "Spine"],
  // Point to local video file in /assets/videos/
  videoUrl: "/assets/videos/life-shell-pv.mp4", 
  images: [
    "/assets/images/ls-cover.jpg", 
    "/assets/images/ls-screen-1.jpg",
    "/assets/images/ls-screen-2.jpg",
    "/assets/images/ls-screen-3.jpg",
  ],
  stats: [
    { label: "Code Lines", value: "80k+" },
    { label: "Systems", value: "15+" },
    { label: "Optimized", value: "1000%" },
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, type: 'image', title: 'Unity 2D 动画状态机', category: 'Animation', url: '/assets/images/gallery-1.jpg' },
  { id: 2, type: 'image', title: 'RPG 背包系统 UI', category: 'UI/UX', url: '/assets/images/gallery-2.jpg' },
  { id: 3, type: 'image', title: '数据图表可视化', category: 'Tools', url: '/assets/images/gallery-3.jpg' },
  { id: 4, type: 'image', title: '3D 平台跳跃原型', category: 'Prototype', url: '/assets/images/gallery-4.jpg' },
  { id: 5, type: 'image', title: '对话编辑器扩展', category: 'Editor', url: '/assets/images/gallery-5.jpg' },
  { id: 6, type: 'image', title: '横版动作打击感测试', category: 'Combat', url: '/assets/images/gallery-6.jpg' },
];

export const PERSONAL_INTERESTS = [
  "命运石之门", "叛逆的鲁路修", "游戏人生", "独立游戏开发", "二次元文化"
];
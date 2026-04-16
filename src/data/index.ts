export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "visualization" | "backend" | "tools";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const profile = {
  name: "Fullsize",
  alias: "无涯",
  title: "Frontend Developer & Data Visualization Expert",
  location: "Beijing, China",
  email: "contact@fullsize.online",
  website: "https://fullsize.online",
  avatar: "https://avatars.githubusercontent.com/u/30223113?v=4",
  bio: [
    "🎯 Focusing on creating exceptional user experiences",
    "💻 Clean code first, cleverness second",
    "📈 Turning complex data into intuitive visualizations",
  ],
  stats: {
    repos: 42,
    stars: 185,
    followers: 19,
  },
};

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Vue.js", level: 85, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "TailwindCSS", level: 92, category: "frontend" },
  { name: "D3.js", level: 92, category: "visualization" },
  { name: "ECharts", level: 95, category: "visualization" },
  { name: "Highcharts", level: 90, category: "visualization" },
  { name: "Three.js", level: 75, category: "visualization" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git", level: 88, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "fl-utils",
    title: "fl-utils",
    description: "JavaScript 工具函数库，提供常用工具函数的轻量级实现",
    techStack: ["TypeScript", "JavaScript"],
    github: "https://github.com/Fullsize/fl-utils",
    featured: true,
  },
  {
    id: "react-framework",
    title: "React Framework",
    description: "企业级 React 项目脚手架，集成最佳实践和完整架构",
    techStack: ["React", "TypeScript", "Webpack", "Babel"],
    github: "https://github.com/Fullsize/react-framework",
    featured: true,
  },
  {
    id: "fl-hooks",
    title: "fl-hooks",
    description: "React Hooks 工具库，包含常用自定义 Hooks",
    techStack: ["React", "TypeScript"],
    github: "https://github.com/Fullsize/fl-hooks",
    featured: true,
  },
  {
    id: "macro-economic-platform",
    title: "宏观经济数据平台",
    description: "数据可视化平台，展示宏观经济指标和趋势分析",
    techStack: ["React", "D3.js", "ECharts", "Node.js"],
    featured: true,
  },
  {
    id: "restaurant-system",
    title: "餐厅点餐系统",
    description: "全栈餐厅管理系统，支持扫码点餐、订单管理",
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    id: "interview-questions",
    title: "Interview Questions",
    description: "前端面试知识库，整理常见面试题和解答",
    techStack: ["Markdown", "JavaScript"],
    github: "https://github.com/Fullsize/interview-question",
    featured: false,
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Fullsize", icon: "github" },
  { name: "Email", url: "mailto:zhouyutao1683@163.com", icon: "mail" },
  { name: "Website", url: "https://fullsize.cn", icon: "globe" },
];

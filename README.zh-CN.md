# Fullsize — 终端风格开发者个人作品集

[English](./README.md) | **简体中文**

基于 **Next.js 16、React 19、TypeScript 和 Tailwind CSS 4** 构建的终端风格个人网站与开发者作品集。通过代码式个人介绍、项目卡片和动态技能进度条，展示 Fullsize 的前端开发与数据可视化作品。

深色界面、霓虹色点缀与等宽字体，将开发者工作环境的视觉语言融入响应式静态网站。

[访问网站](https://fullsize.online) · [浏览源码](https://github.com/Fullsize/personal-site) · [反馈问题](https://github.com/Fullsize/personal-site/issues)

![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## 目录

- [项目介绍](#项目介绍)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [常用命令](#常用命令)
- [目录结构](#目录结构)
- [个性化配置](#个性化配置)
- [部署指南](#部署指南)
- [参与贡献](#参与贡献)
- [许可证](#许可证)

## 项目介绍

本仓库是 Fullsize 个人作品集网站的源码，用于介绍开发者、展示精选项目、呈现技能与工作经历。当前页面无需 CMS、数据库或后端 API 即可运行。

| 路由 | 页面内容 |
| --- | --- |
| `/` | 终端式个人介绍、个人统计、技能展示与精选项目 |
| `/projects` | 项目列表、技术标签，以及可选的源码和演示链接 |
| `/about` | 个人资料、工作经历、兴趣方向、技能与联系方式 |

作品集内容涉及 React、Vue、D3.js、ECharts、Three.js 等技术。这些是**个人技能和项目条目**，并不代表网站本身安装了所有这些依赖。

## 功能特性

- **终端风格界面**：命令行提示符、语法着色文本、终端窗口，以及霓虹绿和青色点缀。
- **响应式布局**：自适应项目网格与可折叠的移动端导航菜单。
- **项目展示**：复用项目卡片，展示描述、技术标签及可选的 GitHub、演示链接；精选项目会出现在首页。
- **技能可视化**：按前端、数据可视化、后端、开发工具分组的动态进度条。
- **类型化内容数据**：个人资料、项目、技能和社交链接定义在 `src/data/index.ts` 中。
- **页面元信息**：全局 metadata、Open Graph 字段，以及项目页和关于页独立的标题与描述。
- **静态导出**：生产构建在 `out/` 中生成 HTML、CSS 和 JavaScript，方便静态托管。
- **可复用组件**：共享导航栏、页脚、终端内容块、项目卡片与技能图表。

> 网站目前包含中英文混合内容。顶部语言链接仅用于切换 README 文档，不是网站语言切换功能。个人统计数据由手动维护，并非实时从 GitHub 获取。

## 技术栈

| 技术 | 用途 |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router、路由、页面元信息与静态导出 |
| [React 19](https://react.dev/) | UI 组件与移动端导航状态管理 |
| [TypeScript 5](https://www.typescriptlang.org/) | 组件和内容模型的类型定义 |
| [Tailwind CSS 4](https://tailwindcss.com/) | 响应式样式与工具类 |
| [Inter 和 JetBrains Mono](https://fonts.google.com/) | 通过 `next/font/google` 加载的字体 |
| [ESLint 9](https://eslint.org/) | 代码检查 |
| [OpenNext for Cloudflare](https://opennext.js.org/cloudflare) + [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | 仓库内包含的 Cloudflare Workers 部署工具 |

## 快速开始

### 环境要求

- Next.js 16 要求 **Node.js 20.9 或更高版本**；考虑到仓库内的部署工具，推荐使用 Node.js 22 LTS。
- **npm**，随 Node.js 一起安装。
- 安装依赖和构建时获取 Google Fonts 需要网络连接。

### 本地运行

```bash
git clone https://github.com/Fullsize/personal-site.git
cd personal-site
npm ci
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。修改源码后，开发服务器会更新页面。

当前作品集页面无需配置环境变量。部署到 Cloudflare 时，需要单独完成账号认证。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地 Next.js 开发服务器 |
| `npm run lint` | 运行 ESLint 检查 |
| `npm run build` | 构建生产静态站点，输出到 `out/` |
| `npm run start` | 执行 `next start`；**不适用于当前静态导出配置** |
| `npm run preview` | 使用 OpenNext 构建并在 Cloudflare 运行时预览；使用前请阅读下方部署说明 |
| `npm run deploy` | 使用 OpenNext 构建并部署至 Cloudflare Workers；使用前请阅读下方部署说明 |
| `npm run cf-typegen` | 生成 Cloudflare 绑定类型文件 `cloudflare-env.d.ts` |

生产构建前应单独运行代码检查；Next.js 16 的 `next build` 不再自动执行 ESLint。

## 目录结构

```text
personal-site/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 首页
│   │   ├── projects/page.tsx     # 项目列表
│   │   ├── about/page.tsx        # 个人资料与经历
│   │   ├── layout.tsx           # 共享布局、字体与页面元信息
│   │   └── globals.css          # 主题变量与动画
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── TerminalBlock.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillChart.tsx
│   └── data/index.ts            # 个人资料、技能、项目与社交链接
├── public/                     # 静态资源
├── next.config.ts              # 静态导出与图片配置
├── open-next.config.ts         # OpenNext 适配器配置
├── wrangler.jsonc              # Cloudflare Worker 配置
├── README.md                   # 默认英文文档
└── README.zh-CN.md              # 简体中文文档
```

## 个性化配置

### 个人资料与项目

在 `src/data/index.ts` 中修改个人信息、头像、简介、统计数据、技能和项目列表。项目条目示例：

```ts
{
  id: "my-project",
  title: "My Project",
  description: "用一句话说明项目的用途。",
  techStack: ["React", "TypeScript"],
  github: "https://github.com/your-name/my-project",
  demo: "https://example.com",
  featured: true,
}
```

设置 `featured: true` 即可在首页展示该项目。`github` 和 `demo` 字段为可选项。

### 数据文件之外的内容

部分内容直接定义在页面和组件中：

- `src/app/about/page.tsx`：工作经历与兴趣方向。
- `src/app/page.tsx`：首页社交链接、联系方式与代码理念。
- `src/components/Navbar.tsx`：导航文案与 GitHub 链接。
- `src/components/SkillChart.tsx`：技能分类名称与配色。
- `src/components/Footer.tsx`：页脚文案。

修改个人信息时，除了数据文件中的 `socialLinks`，也应检查这些文件；并非所有可见链接都由该数组驱动。

### 主题与页面元信息

- 在 `src/app/globals.css` 中调整主题变量、终端样式与动画；部分颜色也直接写在组件工具类中。
- 在 `src/app/layout.tsx` 中修改站点标题、描述、Open Graph URL、字体与 HTML 语言。
- 在 `src/app/projects/page.tsx` 和 `src/app/about/page.tsx` 中修改对应页面的元信息。
- 自定义图片等静态资源放入 `public/`，站点图标在 `src/app/favicon.ico` 中替换。

## 部署指南

### 静态托管：当前默认方式

`next.config.ts` 已设置 `output: "export"`，并关闭 Next.js 图片优化。执行：

```bash
npm run lint
npm run build
```

将生成的 **`out/` 目录**部署到 Cloudflare Pages、Netlify 或能够提供 HTML 静态文件的 Web 服务器。使用 Git 集成的静态部署时，配置如下：

| 设置 | 值 |
| --- | --- |
| 构建命令 | `npm run build` |
| 输出目录 | `out` |

确保托管平台能将 `/about`、`/projects` 等无扩展名路径映射到生成的 HTML 文件。本地检查构建产物时，应使用支持干净 URL 的静态服务器托管 `out/`，不要在当前输出模式下使用 `npm run start`。

### Cloudflare Workers：仓库内包含的工具

仓库还包含 OpenNext 配置和 Workers 脚本。这与直接上传静态 `out/` 目录是**两种不同的部署方式**。

使用 `npm run preview` 或 `npm run deploy` 前，需要先在 `next.config.ts` 中取消 `output: "export"` 模式，并根据最新的 [OpenNext Cloudflare 配置指南](https://opennext.js.org/cloudflare/get-started)检查其余设置。确认 `wrangler.jsonc` 中的 Worker 名称、兼容日期与绑定后，完成认证：

```bash
npx wrangler login
npm run preview
# 确认预览正常后：
npm run deploy
```

Workers 配置引用 `.open-next/worker.js` 和 `.open-next/assets`，这些文件由 OpenNext 构建产生，而不是静态导出产生。仓库包含部署脚本，不代表当前静态导出配置无需修改即可部署到 Workers。

## 参与贡献

欢迎通过 [Issues](https://github.com/Fullsize/personal-site/issues) 和 Pull Requests 提交问题反馈、文档改进与有针对性的 UI 修复。

提交前请：

1. 说明问题及建议的改进方案。
2. 保持改动集中，避免无关的个人内容修改。
3. 运行 `npm run lint` 和 `npm run build`。
4. 涉及 UI 改动时，检查移动端与桌面端布局，必要时附上截图。

## 许可证

仓库目前未包含许可证文件。源码公开不等于授予开源许可；如需复用或再分发代码，请先联系作者。

---

作者：[Fullsize（无涯）](https://github.com/Fullsize) · [个人网站](https://fullsize.online)

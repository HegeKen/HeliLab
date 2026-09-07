# HeliLab — 合理实验室

独立开发者 [HegeKen](https://github.com/HegeKen) 的技术作品集网站。每一行代码、每一个架构决策都经得起推敲，在复杂度与简洁之间找到合理的平衡点。

**[www.helilab.cn](https://www.helilab.cn)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat-square&logo=githubpages)

## 项目概览

HeliLab 是一个纯静态 SPA 作品集网站，用原生 HTML / CSS / JavaScript 构建，无任何框架依赖。展示了 9 个技术项目：小米 ROM 追踪站点、数据仓库、本地文件搜索工具、AI 工具、macOS 原生应用等。

整个网站仅由 **3 个核心文件** 构成（[index.html](index.html)、[main.js](main.js)、[style.css](style.css)），用 `hashchange` 做前端路由，配合滚动动画、页面过渡、响应式布局和无障碍设计。

## 展示项目

| # | 项目 | 描述 | 技术栈 | 链接 |
|---|------|------|--------|------|
| 01 | **HyperOS.fans** | 小米 HyperOS 非官方爱好者网站，追踪 180+ 设备 ROM 更新 | Nuxt 4, Vue 3, Vuetify 4, Python | [hyperos.fans](https://hyperos.fans) |
| 02 | **HyperData** | HyperOS 核心数据层，自动化采集管道与静态 JSON 数据仓库 | Python, AES Crypto, MySQL, Selenium | [data.hyperos.fans](https://data.hyperos.fans) |
| 03 | **NuxtMR** | MIUI 官方 ROM 下载聚合平台，数据驱动的静态内容架构 | Nuxt 4, Vue 3, TypeScript, Python | [roms.miuier.com](https://roms.miuier.com) |
| 04 | **MRData** | MIUI ROM 数据仓库，200+ 设备数据与 20+ 爬虫脚本 | Python, AES Crypto, Cloudflare Pages | [data.miuier.com](https://data.miuier.com) |
| 05 | **MiROMs HUB** | 小米 ROM 数据平台 monorepo，前端浏览 + 后台直连 MySQL + 数据子模块 | Nuxt 4, Vue 3, TypeScript, Tailwind CSS, MySQL | [hub.miuier.com](https://hub.miuier.com) |
| 06 | **miroms** | MiROMs HUB 数据引擎，326 台设备全量 ROM 数据与零依赖采集管道 | Python 3, AES Crypto, MySQL, JSON API, GitHub Pages | [api.miuier.com](https://api.miuier.com) |
| 07 | **novel-proofreader** | AI 小说校对桌面/移动应用，百万字级文本处理 | Tauri 2, React 19, TypeScript, Zustand | [proofreader.helilab.cn](https://proofreader.helilab.cn) |
| 08 | **QuarantineRemover** | macOS 隔离属性移除工具，Liquid Glass 视觉效果 | Swift, SwiftUI, macOS | [GitHub](https://github.com/HegeKen/QuarantineRemover) |
| 09 | **DocSniffer** | 基于 Tauri 2 + Rust + Tantivy 的本地文件全文搜索桌面应用 | Tauri 2, Rust, Tantivy, React 18, TypeScript | [GitHub](https://github.com/HegeKen/DocSniffer) |

## 项目数据

以下为各子项目在 GitHub 上的社区数据（截至 2026 年 8 月）：

| 项目 | Stars | Forks | Commits | 语言 |
|------|-------|-------|---------|------|
| [HyperOS.fans](https://github.com/HegeKen/HyperOS.fans) | ![](https://img.shields.io/github/stars/HegeKen/HyperOS.fans?style=social) | ![](https://img.shields.io/github/forks/HegeKen/HyperOS.fans?style=social) | 373+ | Vue |
| [HyperData](https://github.com/HegeKen/HyperData) | ![](https://img.shields.io/github/stars/HegeKen/HyperData?style=social) | ![](https://img.shields.io/github/forks/HegeKen/HyperData?style=social) | 180+ | Python |
| [NuxtMR](https://github.com/HegeKen/NuxtMR) | ![](https://img.shields.io/github/stars/HegeKen/NuxtMR?style=social) | ![](https://img.shields.io/github/forks/HegeKen/NuxtMR?style=social) | 120+ | HTML |
| [MRData](https://github.com/HegeKen/MRData) | ![](https://img.shields.io/github/stars/HegeKen/MRData?style=social) | ![](https://img.shields.io/github/forks/HegeKen/MRData?style=social) | 90+ | Python |
| [hub.miuier.com](https://github.com/HegeKen/hub.miuier.com) | ![](https://img.shields.io/github/stars/HegeKen/hub.miuier.com?style=social) | ![](https://img.shields.io/github/forks/HegeKen/hub.miuier.com?style=social) | — | Vue |
| [miroms](https://github.com/HegeKen/miroms) | ![](https://img.shields.io/github/stars/HegeKen/miroms?style=social) | ![](https://img.shields.io/github/forks/HegeKen/miroms?style=social) | — | Python |
| [novel-proofreader](https://github.com/HegeKen/novel-proofreader) | ![](https://img.shields.io/github/stars/HegeKen/novel-proofreader?style=social) | ![](https://img.shields.io/github/forks/HegeKen/novel-proofreader?style=social) | 200+ | TypeScript |
| [QuarantineRemover](https://github.com/HegeKen/QuarantineRemover) | ![](https://img.shields.io/github/stars/HegeKen/QuarantineRemover?style=social) | ![](https://img.shields.io/github/forks/HegeKen/QuarantineRemover?style=social) | 40+ | Swift |
| [DocSniffer](https://github.com/HegeKen/DocSniffer) | ![](https://img.shields.io/github/stars/HegeKen/DocSniffer?style=social) | ![](https://img.shields.io/github/forks/HegeKen/DocSniffer?style=social) | — | Rust |

### 相关项目

小米 ROM 追踪方面，[XiaomiFirmwareUpdater](https://github.com/XiaomiFirmwareUpdater) 是该领域最知名的开源项目（332 followers，[mi-firmware-updater](https://github.com/XiaomiFirmwareUpdater/mi-firmware-updater) 445 stars，[miui-updates-tracker](https://github.com/XiaomiFirmwareUpdater/miui-updates-tracker) 215 stars），主要提供 RSS/Telegram 推送。HyperOS.fans / NuxtMR 做的是同一方向，但侧重点在 Web 界面和设备浏览。

macOS 隔离移除方面，同类工具有 [Sentinel](https://github.com/alienator88/Sentinel)（1.7k stars）、[GreenLight](https://github.com/Neonbe/GreenLight)（195 stars）和 [GatePass](https://github.com/nercone-dev/gatepass)。QuarantineRemover 没有外部依赖，纯 SwiftUI 实现。

AI 小说校对方面，[novel-proofer](https://github.com/makoMakoGo/novel-proofer) 走的是 Web + Python 路线。novel-proofreader 用了 Tauri 2 做跨平台，把长文本切片后分批送给模型处理，能跑百万字级别的小说。

## 技术架构

```
HeliLab/
├── index.html      # 语义化 HTML5，SPA 入口
├── main.js         # 路由系统、页面渲染、滚动动画
├── style.css       # CSS 变量体系、响应式布局、动效
├── images/         # 项目截图
├── CNAME           # GitHub Pages 自定义域名
└── .github/
    └── dependabot.yml
```

### 设计特点

- **零依赖** — 没有框架、构建工具或包管理器，3 个文件就是一个 SPA
- **暗色主题** — 用 CSS 变量管理主题，暗色科技风
- **三档响应式** — 桌面侧边栏 / 平板自适应 / 移动端底部 Tab
- **滚动动画** — 用 `IntersectionObserver` 做元素渐入
- **无障碍** — 支持 `prefers-reduced-motion`、ARIA 标签、语义化 HTML

### 字体

| 用途 | 字体 |
|------|------|
| 标题 | [Syne](https://fonts.google.com/specimen/Syne) |
| 正文 / 等宽 | [DM Mono](https://fonts.google.com/specimen/DM+Mono) |
| 中文 | [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC) |

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/HegeKen/HeliLab.git
cd HeliLab

# 启动本地服务器（任选一种）
python3 -m http.server 8000
# 或
npx serve .
```

打开 `http://localhost:8000` 即可预览。

## 部署

网站通过 GitHub Pages 部署，推送到 `master` 分支后自动上线。自定义域名 `www.helilab.cn` 通过 [CNAME](CNAME) 文件配置。

## License

MIT

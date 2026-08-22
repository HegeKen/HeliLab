/* ============================================
   HELILAB — 合理实验室
   Main JavaScript — Routing & Interactions
   ============================================ */

// --- Project Data ---
const projects = [
  {
    id: 'hyperos',
    num: '01',
    name: 'HyperOS.fans',
    nameZh: 'HyperOS 爱好者站',
    tagline: '为小米 HyperOS（澎湃 OS）打造的非官方爱好者网站，追踪 ROM 更新与设备动态。',
    description: '一个专注于 HyperOS 生态的信息聚合站点。采用三层架构设计：Nuxt 前端负责渲染和交互，Python 数据管道从小米 API 逆向采集数据，静态 JSON 数据层通过独立 CDN 分发。覆盖 180+ 款小米/Redmi/POCO 设备。',
    features: [
      'ROM 更新追踪，覆盖十余个区域的稳定版与开发版',
      '逆向小米 OTA API 加密协议，实现自动化数据采集',
      '三层架构：前端 + 数据管道 + 静态数据层完全解耦',
      'Vuetify 4 构建的 Material Design 界面，暗色主题',
      '完整的 i18n 支持（160+ 翻译键），无障碍设计'
    ],
    tech: ['Nuxt 4', 'Vue 3', 'Vuetify 4', 'TypeScript', 'Python', 'Selenium', 'Crypto'],
    highlights: '小米 API 逆向与三层解耦架构',
    url: 'https://hyperos.fans',
    github: 'https://github.com/HegeKen/HyperOS.fans',
    image: 'images/hyperos.png',
    placeholder: 'card-placeholder-hyperos'
  },
  {
    id: 'hyperdata',
    num: '02',
    name: 'HyperData',
    nameZh: 'HyperOS 数据仓库',
    tagline: 'HyperOS.fans 的核心数据层——180+ 设备的 ROM 版本数据与自动化采集管道。',
    description: 'HyperOS.fans 网站的数据引擎。独立的 Git 仓库通过 Cloudflare Pages 托管，存储全部设备 JSON 数据和 Python 爬虫脚本。前端与数据完全解耦，数据更新后自动触发网站重新部署，无需改动任何前端代码。',
    features: [
      '180+ 设备独立 JSON 文件，涵盖 Xiaomi / Redmi / POCO 全线',
      '20+ 区域版本追踪：中国大陆、国际版、欧洲、印度等',
      'Python 爬虫管道：AES 加密通信、数据库集成、Selenium 自动化',
      'Cloudflare Pages 自动部署，Webhook 触发即时更新',
      '完整的 HyperOS 版本跨度：OS1.0 至 OS4.0，Android 13-17'
    ],
    tech: ['Python', 'AES Crypto', 'MySQL', 'Selenium', 'Cloudflare Pages', 'JSON'],
    highlights: '独立数据仓库 + 自动化采集部署管道',
    url: 'https://data.hyperos.fans',
    github: 'https://github.com/HegeKen/HyperData',
    image: 'images/hyperdata.png',
    placeholder: 'card-placeholder-hyperdata'
  },
  {
    id: 'nuxtmr',
    num: '03',
    name: 'NuxtMR',
    nameZh: 'MIUI ROM 仓库',
    tagline: '基于 Nuxt 4 构建的 MIUI 官方 ROM 下载聚合平台，覆盖数百款设备。',
    description: '一个非官方的 MIUI/HyperOS ROM 下载聚合平台。整个网站的内容完全由 JSON 数据驱动——每个设备一个独立文件，通过动态路由按需加载。数据更新与代码部署完全解耦，只需更新数据子模块即可刷新全部内容。',
    features: [
      '设备 ROM 按代号浏览，覆盖稳定版、开发版等多个分支',
      'Python 自动化爬虫从小米 OTA 服务器采集 ROM 数据',
      '完善的无障碍设计：自定义 Vue 指令同步 ARIA 状态',
      '移动端与桌面端差异化布局，响应式全适配',
      'Git Submodule 数据分离架构，前后端数据独立管理'
    ],
    tech: ['Nuxt 4', 'Vue 3', 'TypeScript', 'MDUI', 'i18n', 'Python', 'Git Submodule'],
    highlights: '数据驱动的静态内容架构',
    url: 'https://roms.miuier.com',
    github: 'https://github.com/HegeKen/NuxtMR',
    image: 'images/nuxtmr.png',
    placeholder: 'card-placeholder-nuxtmr'
  },
  {
    id: 'mrdata',
    num: '04',
    name: 'MRData',
    nameZh: 'MIUI ROM 数据仓库',
    tagline: 'NuxtMR 的数据底座——200+ 设备 ROM 数据、爬虫脚本与 CDN 资源的集合。',
    description: 'MIUI ROM 仓库网站的独立数据仓库。包含 200+ 款设备的完整 ROM 数据 JSON、Python 爬虫脚本集合以及前端静态资源。通过 data.miuier.com CDN 独立分发，支持 Cloudflare Pages 自动部署，实现了数据与前端代码的完全分离。',
    features: [
      '200+ 设备 JSON 数据文件，从小米1到最新旗舰全覆盖',
      '20+ Python 爬虫脚本：OTA、Fastboot、Recovery 全类型采集',
      'AES 加密与小米 OTA 服务器通信，逆向 API 协议',
      'Cloudflare Pages 托管 + Webhook 自动部署',
      '双语数据（中/英文），支持 MIUI 12 至 HyperOS 全版本'
    ],
    tech: ['Python', 'AES Crypto', 'Cloudflare Pages', 'JSON', 'REST API'],
    highlights: '数据与前端完全分离的静态内容架构',
    url: 'https://data.miuier.com',
    github: 'https://github.com/HegeKen/MRData',
    image: 'images/mrdata.png',
    placeholder: 'card-placeholder-mrdata'
  },
  {
    id: 'novel',
    num: '05',
    name: 'novel-proofreader',
    nameZh: 'AI 小说校对器',
    tagline: '基于 Tauri 2 的 AI 小说排版与查错桌面/移动应用，专为百万字级网络小说设计。',
    description: '一个为网络小说量身打造的 AI 辅助工具。核心挑战在于处理数百万字的超长文本——通过碎片化处理策略突破大模型上下文限制，逐段逐章分批处理。同时集成了 TTS 流式朗读、角色关系图谱可视化、AI 角色扮演等前沿功能。',
    features: [
      '碎片化处理：信号量队列控制，突破大模型上下文限制',
      'TTS 流式播放：边生成边播放，集成敏感词替换层',
      'OpenAI 兼容接口适配：DeepSeek、通义、Ollama 等',
      '跨平台 UI：React 代码同时适配桌面三栏与移动 Tab',
      '角色关系图谱：可交互网络可视化，节点拖拽与位置持久化'
    ],
    tech: ['Tauri 2', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vitest'],
    highlights: '百万字级文本处理与 TTS 流式架构',
    url: 'https://proofreader.helilab.cn',
    github: 'https://github.com/HegeKen/novel-proofreader',
    image: 'images/novel.png',
    placeholder: 'card-placeholder-novel'
  },
  {
    id: 'quarantine',
    num: '06',
    name: 'QuarantineRemover',
    nameZh: 'macOS 隔离移除',
    tagline: '一款 macOS 原生工具，一键移除应用隔离属性，解决"无法验证开发者"的困扰。',
    description: '一个精致的 macOS 小工具。通过调用系统 xattr 命令移除应用的隔离标记，让非 App Store 下载的应用正常运行。设计上的亮点是自定义的 Liquid Glass 视觉效果——三层动态模糊光晕模拟半透明玻璃态，零外部依赖，纯 SwiftUI 实现。',
    features: [
      '一键移除 com.apple.quarantine 隔离属性',
      '自动扫描三个系统应用目录，拖放支持',
      'Liquid Glass 视觉效果：动态模糊光晕、玻璃态卡片',
      '完整 CI/CD：GitHub Actions 自动构建 DMG 并发布',
      '零外部依赖，纯 SwiftUI + AppKit 原生实现'
    ],
    tech: ['Swift', 'SwiftUI', 'macOS', 'Xcode', 'GitHub Actions'],
    highlights: 'Liquid Glass 视觉与零依赖原生实现',
    github: 'https://github.com/HegeKen/QuarantineRemover',
    image: 'images/quarantine.png',
    placeholder: 'card-placeholder-quarantine'
  }
];

// --- DOM References ---
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link');
const navMobileLinks = document.querySelectorAll('.nav-mobile-link');

// --- Router ---
function getRoute() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1);
  return path;
}

function navigate() {
  const path = getRoute();
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update active nav
  updateActiveNav(path);

  // Route
  if (path === '/' || path === '') {
    renderHome();
  } else if (path === '/projects') {
    renderProjects();
  } else if (path === '/about') {
    renderAbout();
  } else if (path.startsWith('/project/')) {
    const id = path.split('/project/')[1];
    renderDetail(id);
  } else {
    renderHome();
  }

  // Setup scroll animations after render
  requestAnimationFrame(() => {
    setupScrollReveal();
  });
}

function updateActiveNav(path) {
  let activePage = 'home';
  if (path.startsWith('/projects')) activePage = 'projects';
  else if (path.startsWith('/about')) activePage = 'about';
  else if (path.startsWith('/project/')) activePage = 'projects';

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === activePage);
  });
  navMobileLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === activePage);
  });
}

// --- Page Renderers ---

function renderHome() {
  const featured = projects.slice(0, 3);

  app.innerHTML = `
    <div class="page home">
      <section class="hero">
        <div class="hero-left">
          <div class="hero-label reveal">独立开发 · 技术实验</div>
          <h1 class="hero-title reveal reveal-delay-1">
            HELIL<span class="accent">AB</span>
          </h1>
          <p class="hero-desc reveal reveal-delay-2">
            <strong>合理实验室</strong> — 一个独立开发者的技术探索空间。
            在这里，精密的代码与克制的设计相遇，每一个项目都是一次对「合理性」的追问。
          </p>
          <div class="hero-cta reveal reveal-delay-3">
            <a href="#/projects" class="btn-primary">
              查看项目
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#/about" class="btn-ghost">关于实验室</a>
          </div>
        </div>
        <div class="hero-right reveal reveal-delay-2">
          <div class="hero-grid-bg" aria-hidden="true"></div>
          <div class="hero-stat">
            <span class="hero-stat-num">${projects.length}</span>
            <span class="hero-stat-label">实验项目</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num">6</span>
            <span class="hero-stat-label">核心技术栈</span>
          </div>
          <div class="hero-coords">
            <span>STATUS</span> &nbsp; ACTIVE<br>
            <span>FOCUS</span> &nbsp;&nbsp; Full-stack · Desktop · Mobile<br>
            <span>STACK</span> &nbsp;&nbsp; Vue · React · Swift · Rust · Python
          </div>
        </div>
      </section>

      <section class="featured">
        <div class="section-header reveal">
          <span class="section-label">精选项目</span>
          <a href="#/projects" class="section-link">
            全部项目
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="featured-grid">
          ${featured.map((p, i) => renderProjectCard(p, i)).join('')}
        </div>
      </section>

      <footer class="site-footer">
        <span class="footer-text">&copy; 2026 <span class="accent">Helilab</span> 合理实验室</span>
        <span class="footer-text">Built with precision & restraint</span>
      </footer>
    </div>
  `;
}

function renderProjects() {
  app.innerHTML = `
    <div class="page projects-page">
      <div class="page-header reveal">
        <h1 class="page-title">Projects</h1>
        <p class="page-subtitle">每一个项目都是一次实验。探索合理实验室的技术实践与成果。</p>
      </div>
      <div class="projects-list-grid">
        ${projects.map((p, i) => renderProjectCard(p, i)).join('')}
      </div>
      <footer class="site-footer" style="margin-top: 48px;">
        <span class="footer-text">&copy; 2026 <span class="accent">Helilab</span> 合理实验室</span>
        <span class="footer-text">Built with precision & restraint</span>
      </footer>
    </div>
  `;
}

function renderDetail(id) {
  const project = projects.find(p => p.id === id);
  if (!project) {
    renderHome();
    return;
  }

  // Determine placeholder gradient for detail visual
  const gradients = {
    hyperos: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',
    hyperdata: 'linear-gradient(135deg, #0d1117 0%, #0d1a2e 50%, #0d1117 100%)',
    nuxtmr: 'linear-gradient(135deg, #0d1117 0%, #1a1a2e 50%, #0a2540 100%)',
    mrdata: 'linear-gradient(135deg, #0d1117 0%, #1a1520 50%, #0d1117 100%)',
    novel: 'linear-gradient(135deg, #0d1117 0%, #1a1025 50%, #0d1117 100%)',
    quarantine: 'linear-gradient(135deg, #0d1117 0%, #0d1f2d 50%, #0d1117 100%)'
  };

  app.innerHTML = `
    <div class="page detail-page">
      <a href="#/projects" class="detail-back reveal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        返回项目列表
      </a>

      <div class="detail-header">
        <div class="detail-num reveal">${project.num}</div>
        <h1 class="detail-title reveal reveal-delay-1">${project.name}</h1>
        <p class="detail-tagline reveal reveal-delay-2">${project.tagline}</p>
        <div class="detail-meta reveal reveal-delay-3">
          ${project.tech.map(t => `<span class="detail-tag">${t}</span>`).join('')}
        </div>
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="detail-github-link reveal reveal-delay-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            <span class="detail-github-repo">${project.github.replace('https://github.com/', '')}</span>
          </a>
        ` : ''}
      </div>

      <div class="detail-visual reveal">
        ${project.image
          ? `<div class="detail-visual-placeholder"><img src="${project.image}" alt="${project.name}"></div>`
          : `<div class="detail-visual-placeholder" style="background: ${gradients[project.id]}"><span class="detail-visual-label">DEMO / SCREENSHOT</span></div>`
        }
      </div>

      <div class="detail-grid">
        <div class="reveal">
          <h3 class="detail-section-title">项目介绍</h3>
          <div class="detail-text">
            <p>${project.description}</p>
          </div>
        </div>
        <div class="reveal reveal-delay-1">
          <h3 class="detail-section-title">核心亮点</h3>
          <ul class="detail-list">
            ${project.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="reveal">
        <h3 class="detail-section-title">技术栈</h3>
        <div class="detail-meta" style="margin-top: 0;">
          ${project.tech.map(t => `<span class="detail-tag">${t}</span>`).join('')}
        </div>
        <div class="detail-text" style="margin-top: 16px;">
          <p><strong style="color: var(--accent);">关键突破：</strong>${project.highlights}</p>
        </div>
      </div>

      ${(project.url || project.github) ? `
        <div class="detail-links reveal">
          ${project.url ? `
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn-primary">
              访问线上版本
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          ` : ''}
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              GitHub
            </a>
          ` : ''}
        </div>
      ` : ''}

      <footer class="site-footer" style="margin-top: 48px;">
        <span class="footer-text">&copy; 2026 <span class="accent">Helilab</span> 合理实验室</span>
        <span class="footer-text">Built with precision & restraint</span>
      </footer>
    </div>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <div class="page about-page">
      <div class="page-header reveal">
        <h1 class="page-title">About</h1>
        <p class="page-subtitle">合理实验室的由来、方向与联系。</p>
      </div>

      <div class="about-grid">
        <div class="reveal">
          <p class="about-intro">
            <span class="highlight">Helilab</span>，<span class="highlight">合理实验室</span>，
            是一个独立开发者的技术探索空间。「合理」二字取自对工程实践的信仰——
            每一行代码、每一个架构决策，都应经得起推敲，找到复杂度与简洁之间的合理平衡点。
            <br><br>
            这里没有炫技式的堆砌，只有对问题的认真分析和对解决方案的克制表达。
            从 ROM 分发平台到 AI 辅助工具，从 Web 全栈到 macOS 原生应用，
            每个项目都是一次对「合理性」的实验验证。
          </p>
        </div>

        <div class="reveal reveal-delay-1">
          <div class="about-section">
            <h3 class="about-section-title">技术方向</h3>
            <div class="about-tech-grid">
              <div class="about-tech-card">
                <h4>Web 全栈</h4>
                <p>Nuxt / Vue / TypeScript 生态，SSR/SSG 混合渲染，数据驱动架构</p>
              </div>
              <div class="about-tech-card">
                <h4>桌面 & 移动</h4>
                <p>Tauri (Rust + React) 跨平台应用，SwiftUI macOS 原生开发</p>
              </div>
              <div class="about-tech-card">
                <h4>AI 应用</h4>
                <p>大模型集成、碎片化长文本处理、TTS 流式播放、Prompt 工程</p>
              </div>
              <div class="about-tech-card">
                <h4>数据工程</h4>
                <p>Python 爬虫管道、API 逆向、自动化数据采集与分发</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-contact reveal">
        <h3 class="about-section-title">联系方式</h3>
        <div class="contact-links">
          <a href="mailto:hegeken@foxmail.com" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span class="label">Email</span>
            <span>hegeken@foxmail.com</span>
          </a>
          <a href="https://github.com/HegeKen" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            <span class="label">GitHub</span>
            <span>github.com/HegeKen</span>
          </a>
          <a href="https://gitlab.com/HegeKen" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 12l10 10 10-10L12 2z"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>
            <span class="label">GitLab</span>
            <span>gitlab.com/HegeKen</span>
          </a>
          <a href="https://weibo.com/Heliljan" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 118 0c0 2-1.5 3-3 4"/><circle cx="17" cy="7" r="1.5" fill="currentColor"/></svg>
            <span class="label">微博</span>
            <span>weibo.com/Heliljan</span>
          </a>
          <a href="https://web.vip.miui.com/page/info/mio/mio/homePage?uid=311975809" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
            <span class="label">小米社区</span>
            <span>小米社区</span>
          </a>
          <a href="https://space.bilibili.com/19940729" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M10 9l4 0"/><path d="M7 4l2 4"/><path d="M17 4l-2 4"/><path d="M8 18l1-3"/><path d="M16 18l-1-3"/></svg>
            <span class="label">B站</span>
            <span>bilibili.com/19940729</span>
          </a>
          <a href="https://helilab.cn" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            <span class="label">Website</span>
            <span>helilab.cn</span>
          </a>
        </div>
      </div>

      <footer class="site-footer" style="margin-top: 48px;">
        <span class="footer-text">&copy; 2026 <span class="accent">Helilab</span> 合理实验室</span>
        <span class="footer-text">Built with precision & restraint</span>
      </footer>
    </div>
  `;
}

function renderProjectCard(project, index) {
  const imageHtml = project.image
    ? `<div class="card-image-placeholder"><img src="${project.image}" alt="${project.name}" loading="lazy"></div>`
    : `<div class="card-image-placeholder ${project.placeholder}"></div>`;
  return `
    <a href="#/project/${project.id}" class="project-card reveal ${index > 0 ? 'reveal-delay-' + Math.min(index, 5) : ''}" data-id="${project.id}">
      <div class="card-header">
        <span class="card-num">${project.num}</span>
        <svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
      <h3 class="card-title">${project.name}</h3>
      <p class="card-desc">${project.tagline}</p>
      <div class="card-tags">
        ${project.tech.slice(0, 4).map(t => `<span class="card-tag">${t}</span>`).join('')}
      </div>
      ${imageHtml}
    </a>
  `;
}

// --- Scroll Reveal ---
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');

  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// --- Init ---
window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);

// Handle initial load
if (!window.location.hash) {
  window.location.hash = '#/';
} else {
  navigate();
}

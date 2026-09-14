# Artisan Paper & Minimal Editorial Deck

[![Claude Skill](https://img.shields.io/badge/Claude-Skill-purple)](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview)
[![Cursor Compatible](https://img.shields.io/badge/Cursor-Compatible-blue)](https://cursor.com)
[![Antigravity Ready](https://img.shields.io/badge/Antigravity-Ready-orange)](https://deepmind.google/technologies/gemini/)
[![GSAP](https://img.shields.io/badge/GSAP-Animation%20Engine-black)](https://gsap.com)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange.svg)](LICENSE)

面向 AI 编程助手（Claude Code、Cursor、Antigravity、Copilot 等）的 16:9 网页演示文稿设计与生成规范。

聚焦于高信息密度与克制美学，支持**手工纸质（Artisan Paper）**与**极简编辑（Minimal Editorial）**两种视觉风格，内置图示化表达原则与标准的 16:9 网页交互能力。

---

## ✨ 核心特性

- 📜 **两种视觉风格**：
  - **Artisan Paper（手工纸质风）**：融入纸张质感、活页打孔、锯齿票根等物料细节，支持 9 种纸色与文字对比度自适应；
  - **Minimal Editorial（极简编辑风）**：参考杂志画册排版，暖中性底色、发丝细线、三色上限与大面积留白。
- 🎯 **形式追随内容 (Form Follows Content)**：
  - 不预设死板模板，由 AI 根据文案逻辑、受众与数据关系推导构图与图示，做到一页一构思。
- 🏛️ **结构与排版原则**：
  - **金字塔原理**：结论先行，使用观点明确的行动导向标题；
  - **3 秒法则**：主标断言与视觉焦点清晰，重点一目了然；
  - **克制与留白**：文案精炼，严格控制单页字数与认知负荷；
  - **CRAP 原则**：明确对比、对齐基线、统一间距与视觉连贯；
  - **高数据墨水比**：去除无意义装饰，突出核心数据与结论。
- 📊 **图示化表达 (Visual Thinking)**：
  - 减少纯文本列表，支持柱状对比、环形比例、增强飞轮、刻度时间线、十字象限与纯数字看板等图形语汇。
- 🕹️ **统一 16:9 交互支持**：
  - **自适应缩放**：固定 16:9 舞台随视口等比缩放，无滚动条、不破坏版式；
  - **全屏放映（按 `F`）**：纯净演示模式，背景平滑延展；
  - **入场动效（按 `R`）**：轻量微动效，支持按键重播；
  - **行内文本编辑（按 `E` / `Cmd+S`）**：支持直接点击修改文案并保存至本地存储；
  - **PDF 导出（按 `P`）**：内置 16:9 矢量打印样式，支持一键调起打印或脚本导出。

---

## 🌟 视觉可能与版式表现力集锦 (Endless Layout Possibilities)

> [!TIP]
> **形式严格追随内容 · 拒绝公式化固定套路**  
> 本系统**不设任何死板的固化模板**。每一页幻灯片皆由 AI 智能体根据您的具体文案语义、逻辑脉络与数据关系**现场推导、有机设计**。  
> 以下集中展示本系统在**数据图表、纯数字度量、物料排版与极简编辑**等不同场景下的代表性视觉表现力与灵感思路（点击任意预览即可在新标签页体验交互原型源码）：

### 1. 📊 权威数据图表与图形思考 (Data Charts & Visual Thinking)

杜绝三维立体与廉价数码渐变，遵循塔夫特数据墨水比，以纯粹矢量发丝几何构建高信噪比图表：

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <a href="examples/10_column_bar_chart.html"><img src="assets/previews/10_column_bar_chart.png" alt="柱形对比图" /></a>
      <br>
      <b><a href="examples/10_column_bar_chart.html">柱形对比图 (Column Bar Chart)</a></b><br>
      <sub>发丝刻度基线 · 季度增量高亮 · 侧栏关键结论卡片</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/11_donut_ring_chart.html"><img src="assets/previews/11_donut_ring_chart.png" alt="结构圆环图" /></a>
      <br>
      <b><a href="examples/11_donut_ring_chart.html">结构圆环图 (Donut Ring Chart)</a></b><br>
      <sub>精密 SVG 环状切片 · 中心大字号核心指标 · 结构明细条目卡</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="examples/02_loop_cycle.html"><img src="assets/previews/editorial_02.png" alt="闭环飞轮" /></a>
      <br>
      <b><a href="examples/02_loop_cycle.html">闭环增强回路飞轮 (Loop Cycle Flywheel)</a></b><br>
      <sub>四阶段因果自驱动回路 · 细线导轨弧线 · 中心徽标锚点</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/05_quadrant_chart.html"><img src="assets/previews/editorial_04.png" alt="十字象限" /></a>
      <br>
      <b><a href="examples/05_quadrant_chart.html">战略十字象限矩阵 (2×2 Quadrant Axis)</a></b><br>
      <sub>双轴四象限战略坐标 · 散点分布标定 · 差异化价值区位</sub>
    </td>
  </tr>
</table>

---

### 2. 🔢 纯数字度量衡与高墨水比断言 (Pure Numbers & Quantitative Impact)

当文稿的核心在于关键数据突破时，以超大字号数字压阵，赋予画面极具力量感的留白与冲击力：

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <a href="examples/12_pure_number_stats.html"><img src="assets/previews/12_pure_number_stats.png" alt="纯数字陈述大版" /></a>
      <br>
      <b><a href="examples/12_pure_number_stats.html">纯数字陈述大版 (Pure Numbers Showcase)</a></b><br>
      <sub>84px 衬线巨字 · 核心度量衡三列阵列 · 极致信噪比释放</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/demo_artisan_paper.html#5"><img src="assets/previews/artisan_05.png" alt="标本技术矩阵" /></a>
      <br>
      <b><a href="examples/demo_artisan_paper.html#5">标本技术矩阵 (Specimen Data Sheet)</a></b><br>
      <sub>欧洲排印标本格式 · 4 栏度量指标 · 等宽技术参数校验表</sub>
    </td>
  </tr>
</table>

---

### 3. 📜 纸质物料典藏与触觉排版 (Artisan Paper Material Layouts)

将 400GSM 棉浆纤维微距底纹、物理打孔透光、锯齿撕边票券与火漆印章融入实体商业与路演叙事：

<table width="100%">
  <tr>
    <td width="33.3%" align="center">
      <a href="examples/demo_artisan_paper.html#1"><img src="assets/previews/artisan_01.png" alt="立论大字封面" /></a>
      <br>
      <b>立论大字封面 (Poster Cover)</b><br>
      <sub>火漆印章 · 档案打字机元信息</sub>
    </td>
    <td width="33.3%" align="center">
      <a href="examples/demo_artisan_paper.html#2"><img src="assets/previews/artisan_02.png" alt="双联活页大纲" /></a>
      <br>
      <b>双联活页大纲 (Rowland Split)</b><br>
      <sub>打孔透光内阴影 · 双栏结构导轨</sub>
    </td>
    <td width="33.3%" align="center">
      <a href="examples/demo_artisan_paper.html#3"><img src="assets/previews/artisan_03.png" alt="锯齿票券论断" /></a>
      <br>
      <b>锯齿撕边票券 (Sawtooth Ticket)</b><br>
      <sub>物理圆弧齿孔 · 悬浮金句卡片</sub>
    </td>
  </tr>
</table>

---

### 4. 🏛️ 静奢编辑与四声部排印 (Quiet Luxury Minimal Editorial)

象牙暖白底色、0.5–1px 发丝细线几何、不对称留白、三色上限，如独立杂志画册般沉静：

<table width="100%">
  <tr>
    <td width="33.3%" align="center">
      <a href="examples/demo_minimal_editorial.html#1"><img src="assets/previews/editorial_01.png" alt="空镜巨字与目录" /></a>
      <br>
      <b>空镜巨字与目录 (Hero-Word & TOC)</b><br>
      <sub>不对称留白 · 老式衬线编号目录</sub>
    </td>
    <td width="33.3%" align="center">
      <a href="examples/04_banded_list.html"><img src="assets/previews/editorial_03.png" alt="拱顶色带对比" /></a>
      <br>
      <b>拱顶色带对比 (Banded Attribute)</b><br>
      <sub>拱顶题名 · 高对比三色带对照列表</sub>
    </td>
    <td width="33.3%" align="center">
      <a href="examples/demo_minimal_editorial.html#6"><img src="assets/previews/editorial_06.png" alt="极简行动尾页" /></a>
      <br>
      <b>极简行动尾页 (Action Outro)</b><br>
      <sub>发丝细线边框 · 克制行动呼吁落款</sub>
    </td>
  </tr>
</table>

---

## 🎨 双风格大师级色彩体系与智能反色 (Chromatic Systems & Color Engines)

演示系统为两大独立美学风格分别构建了严格的色彩纪律与自适应矩阵。无论是在物料纸板上，还是在静奢极简版面中，均支持底色与墨水的高对比智能反色，并在放映过程中支持一键实时调配换肤：

### 📜 体系一 · Artisan Paper 9 大工坊大师纸色 (9 Master Paper Palettes)

源自欧洲独立手工工坊与典藏档案的 9 种经典纸品母色。针对不同明度的纸板底色，搭载**智能高对比反色引擎**：深色纸板（陶土红棕、橄榄麻布、古典棉纸）自动反转为米白墨色；浅色票据纸板自动咬合为深炭矿物油墨：

![9 大工坊大师纸色与智能反色矩阵](assets/previews/palette_system_showcase.png)

<table width="100%">
  <tr>
    <td width="25%" align="center">
      <img src="assets/previews/palette_variant_terracotta.png" alt="01 陶土红棕" />
      <br>
      <b>01 · 陶土红棕 (Terracotta)</b><br>
      <sub>深色底板 · 象牙墨自动反白</sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/previews/palette_variant_butter.png" alt="05 黄油票据" />
      <br>
      <b>05 · 黄油票据 (Butter Invoice)</b><br>
      <sub>经典票根 · 暖黄深炭矿物墨</sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/previews/palette_variant_olive.png" alt="02 橄榄麻布" />
      <br>
      <b>02 · 橄榄麻布 (Olive Linen)</b><br>
      <sub>原麻深底 · 自然雅致古朴墨</sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/previews/palette_variant_celadon.png" alt="04 冷杉青绿" />
      <br>
      <b>04 · 冷杉青绿 (Celadon)</b><br>
      <sub>清润青灰 · 深黛绿植物咬合</sub>
    </td>
  </tr>
</table>

---

### 🏛️ 体系二 · Minimal Editorial 6 大静奢暖中性色盘 (6 Quiet Luxury Neutral Palettes)

源自高端独立艺术杂志与品牌画册的单色纪律：**单一暖中性底色 + 炭墨文字 + 至多 1 个低饱和强调色（<8%）**。全图杜绝彩虹糖堆砌，深陶土褐底板自动触发暗色高对比度反转：

![6 大静奢暖中性色盘与排印色相](assets/previews/editorial_palette_showcase.png)

<table width="100%">
  <tr>
    <td width="25%" align="center">
      <img src="assets/previews/editorial_variant_ivory.png" alt="01 象牙灰" />
      <br>
      <b>01 · 象牙灰 (Ivory · 默认)</b><br>
      <sub>经典中性 · 陶土红微强调色</sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/previews/editorial_variant_greige.png" alt="02 暖米灰" />
      <br>
      <b>02 · 暖米灰 (Warm Greige)</b><br>
      <sub>低饱和米灰 · 暖褐沉稳强调色</sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/previews/editorial_variant_taupe.png" alt="06 深陶土褐" />
      <br>
      <b>06 · 深陶土褐 (Deep Taupe)</b><br>
      <sub>暗色反转 · 米白发丝线与香槟金</sub>
    </td>
    <td width="25%" align="center">
      <img src="assets/previews/editorial_variant_olive_beige.png" alt="05 橄榄米色" />
      <br>
      <b>05 · 橄榄米色 (Olive Beige)</b><br>
      <sub>自然大地 · 草木深绿哲学感</sub>
    </td>
  </tr>
</table>

---

## ⌨️ 快捷键指南 (Keyboard Shortcuts)

| 按键 | 功能 | 说明 |
| :---: | :---: | :--- |
| `→` / `↓` / `Space` / `Enter` | **下一页** | 切换到下一张幻灯片 |
| `←` / `↑` / `PageUp` | **上一页** | 切换到上一张幻灯片 |
| `Home` / `End` | **首屏 / 末屏** | 快速跳转至第一页或最后一页 |
| **`F`** | **全屏放映** | 隐退导航控件，全屏演讲模式，背景无缝融合 |
| **`R`** | **重播动效** | 重新触发当前页的 GSAP 逐层交错动效 |
| **`E`** | **编辑文案** | 开启行内全量编辑模式，高亮文本虚线框 |
| **`Cmd+S`** / `Ctrl+S` | **保存持久化** | 将编辑后的所有文案自动保存至 LocalStorage |
| **`P`** / `Cmd+P` | **导出 PDF** | 调起浏览器 16:9 无损矢量打印预览 |
| `Esc` | **退出模式** | 退出全屏模式或退出编辑模式 |

---

## 📦 安装与配置 (Installation)

### 方式 1：通过 Skills CLI 安装（推荐）

```bash
npx skills add gaoyatting/artisan-paper-deck
```

### 方式 2：在各类 AI 编程助手中直接配置

将本仓库克隆或放置在您的 Skills 目录下：

```bash
# 克隆到本地
git clone https://github.com/gaoyatting/artisan-paper-deck.git
```

- **Claude Code**：在项目根目录或全局技能配置中包含 `artisan-paper-deck`；
- **Cursor**：将本技能目录软链接或放入 `.cursor/skills/`；
- **Google Antigravity**：放入 `~/.gemini/antigravity/builtin/skills/` 或工作区 skills 目录；
- **Windsurf / GitHub Copilot**：作为上下文或自定义指令载入 `SKILL.md`。

---

## 📁 目录结构 (Directory Structure)

```
artisan-paper-deck/
├── SKILL.md                          # 核心规范与思维引擎（排版哲学、图示族谱、交互定律）
├── templates/                        # 开箱即用底座脚手架（自适应 16:9 舞台与交互脚本）
│   ├── deck_template.html            # 标准 16:9 多页交互 Deck 基础容器
│   └── editorial_card_scaffold.html  # 单页极简卡片轻量脚手架
├── examples/                         # 排版灵感与设计思考参考（图表/纯数字/物料/极简思路原型，拒绝模板套用）
│   ├── 10_column_bar_chart.html      # 柱形对比图表原型
│   ├── 11_donut_ring_chart.html      # 结构比例圆环图原型
│   ├── 12_pure_number_stats.html     # 纯数字度量衡大版原型
│   ├── demo_artisan_paper.html       # 风格 A 手工纸质物料完整多页参考
│   ├── demo_minimal_editorial.html   # 风格 B 静奢极简完整多页参考
│   └── ...                           # 闭环飞轮、时间线、象限等其他思路原型
├── assets/previews/                  # 高清缩略图、图表与色卡矩阵图片
└── scripts/
    └── export_pdf.js                 # 基于 Puppeteer 的无损 16:9 矢量批量导出脚本
```

---

## 📄 许可证说明 (License & Terms)

本项目遵循 **[CC BY-NC 4.0](LICENSE) (知识共享 署名-非商业性使用 4.0 国际)** 许可协议：

- ✅ **个人与非商业用途 (Free for Non-Commercial)**：
  - 免费且自由用于个人学习、技术研究、内部非营利性演讲分享与衍生修改。
- 💼 **商业营利性用途 (Commercial Authorization Required)**：
  - 若用于商业营利行为（如面向付费客户交付的设计/咨询服务、商业付费培训教材、闭源商业产品集成打包、第三方商业模版转售等），**需事先取得原作者的书面商业许可或商务授权**。
  - 如需商业合作洽谈或获取商用授权，欢迎通过 GitHub Issue 提交沟通。

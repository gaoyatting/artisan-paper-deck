# 双风格专业演示文稿系统规范：权威排版、图示语汇与物料典藏 (Artisan Paper & Minimal Editorial Deck Doctrine)

[![Claude Skill](https://img.shields.io/badge/Claude-Skill-purple)](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview)
[![Cursor Compatible](https://img.shields.io/badge/Cursor-Compatible-blue)](https://cursor.com)
[![Antigravity Ready](https://img.shields.io/badge/Antigravity-Ready-orange)](https://deepmind.google/technologies/gemini/)
[![GSAP](https://img.shields.io/badge/GSAP-Animation%20Engine-black)](https://gsap.com)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-orange.svg)](LICENSE)

面向 AI 编程助手（Claude Code、Cursor、Antigravity、Copilot、Windsurf 等）的**高品质 16:9 网页级演示文稿、演讲胶片与 Pitch Deck 规范体系**。

彻底剔除传统商业幻灯片中充斥的“大段文字堆砌、塑料数码渐变、高光光晕与无意义彩色色块”，深度融合**世界级权威演示文稿设计理论**，原生支持**两大经典美学体系**，并构建在工业级的 16:9 动态缩放引擎、图形化视觉思考（Visual Thinking）与极简全屏交互闭环之上。

---

## ✨ 核心特色 (Core Highlights)

- 📜 **两大殿堂级美学体系**：
  - **风格 A · Artisan Paper（手工物料与纸质典藏风）**：将真实纸品物料、400GSM 棉浆纤维、活页打孔透光、印刷锯齿撕边票券与欧洲排印标本格式深度融入演示叙事；支持 9 套大师工匠纸色智能高对比反色引擎（深色底自动转为米白墨色）；
  - **风格 B · Minimal Editorial（留白辑要 · 静奢极简编辑风）**：源自高端品牌画册与独立杂志版面，单一暖中性底色、0.5–1px 发丝细线几何、三色上限、四声部排印、大面积呼吸空气感与不对称留白。
- 🎯 **零摩擦单风格自主决断 (Autonomous Selection)**：
  - 单次任务智能体自动研判文案场景并自主决断最契合的一套美学风格直接成卷（杜绝向用户反复确认打扰），成品交付后亦支持随时一键无损重构为另一风格。
- 🏛️ **权威演示理论的工程化落地**：
  - **芭芭拉·明托《金字塔原理》**：结论先行（BLUF）与行动导向标题（Action Titles），杜绝名词短语式主标；
  - **南希·杜阿尔特《Slide:ology》**：3 秒看懂法则（The 3-Second Glance Test），主标断言与视觉焦点一览无余；
  - **加尔·雷诺兹《演说之禅》**：大道至简与留白（間），文字越少力量越强，彻底消灭提词板长篇累牍；
  - **塞斯·高汀极简律**：单页字数硬预算（汉字严格控制在 25–45 字以内，上限 ≤ 60 字）；
  - **罗宾·威廉姆斯 CRAP 基石**：对比（悬殊级差）、重复（发丝线与两角制统一）、对齐（基线对齐）、亲密性（间距即逻辑）；
  - **爱德华·塔夫特**：最大化数据墨水比（Data-Ink Ratio）。
- 📊 **系统化图示设计族谱 (Visual Thinking)**：
  - “文不如表，表不如图”，严禁直排纯文本清单；
  - 内置四大图示族谱：演进与序列（闭环循环飞轮、细密刻度时间线）、结构与层级（同心嵌套圆、侧线支柱导轨）、对比与分布（十字象限散点、拱顶题名色带列表）、证据与断言（大数字陈述、裁切标定画框）。
- 🕹️ **工业级统一 16:9 Deck 交互引擎**：
  - **16:9 固定舞台动态等比缩放**：JS 监听视口并自动以 `Math.min(vw/1280, vh/720)` 变换，无论窗口如何拉伸均永无滚动条、永不撑破；
  - **沉浸全屏模式（按 `F`）**：自动隐退所有边缘 UI，视口背景平滑延展幻灯片底色；
  - **逐层动效与即时重播（按 `R`）**：GSAP 微错落逐层级联入场动效；
  - **全量自动化行内即时编辑（按 `E` & `Cmd+S`）**：底层脚本自动扫描叶子节点，一键进入所见即所得修改模式，修改内容自动持久化至 `localStorage`；
  - **印刷级 16:9 PDF 导出（按 `P` / `Cmd+P`）**：内置矢量打印样式与配套 Puppeteer 无损批量导出脚本。

---

## 🖼 版式范例画廊 (Gallery)

内置 9 套高质量 16:9 经典版式源码，均位于 [examples/](examples/) 目录，双击任意 HTML 文件即可在浏览器全屏交互体验：

<table width="100%">
  <tr>
    <td width="50%" align="center">
      <a href="examples/01_intro_deck.html"><img src="assets/previews/01_intro_deck.png" alt="01 五页介绍 Deck" /></a>
      <br>
      <b><a href="examples/01_intro_deck.html">01 · 五页完整介绍 Deck</a></b><br>
      <sub>目录 / 架构 / 特色 / 理论 / 结语五联完整演示</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/02_loop_cycle.html"><img src="assets/previews/02_loop_cycle.png" alt="02 闭环循环" /></a>
      <br>
      <b><a href="examples/02_loop_cycle.html">02 · 闭环循环飞轮</a></b><br>
      <sub>四阶段因果闭环增强回路与自驱动飞轮</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="examples/03_nested_circles.html"><img src="assets/previews/03_nested_circles.png" alt="03 同心嵌套圆" /></a>
      <br>
      <b><a href="examples/03_nested_circles.html">03 · 同心嵌套圆</a></b><br>
      <sub>三层核心驱动、赋能与外围生态层级</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/04_banded_list.html"><img src="assets/previews/04_banded_list.png" alt="04 拱顶题名色带列表" /></a>
      <br>
      <b><a href="examples/04_banded_list.html">04 · 拱顶题名色带列表</a></b><br>
      <sub>高对比度三色带对比与横向属性矩阵</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="examples/05_quadrant_chart.html"><img src="assets/previews/05_quadrant_chart.png" alt="05 十字象限散点" /></a>
      <br>
      <b><a href="examples/05_quadrant_chart.html">05 · 十字象限散点矩阵</a></b><br>
      <sub>双轴四象限战略定位与散点标定</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/06_tick_timeline.html"><img src="assets/previews/06_tick_timeline.png" alt="06 刻度尺时间线" /></a>
      <br>
      <b><a href="examples/06_tick_timeline.html">06 · 细密刻度时间线</a></b><br>
      <sub>工业刻度尺微步进时间轴与里程碑节点</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="examples/07_side_rule_columns.html"><img src="assets/previews/07_side_rule_columns.png" alt="07 侧线三列编号" /></a>
      <br>
      <b><a href="examples/07_side_rule_columns.html">07 · 侧线三列编号支柱</a></b><br>
      <sub>竖向导轨三列排印与参数标本列阵</sub>
    </td>
    <td width="50%" align="center">
      <a href="examples/08_number_statement.html"><img src="assets/previews/08_number_statement.png" alt="08 巨型数字陈述" /></a>
      <br>
      <b><a href="examples/08_number_statement.html">08 · 极简巨型数字陈述</a></b><br>
      <sub>高墨水比纯粹断言与大字号数据印证</sub>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <a href="examples/09_crop_mark_frame.html"><img src="assets/previews/09_crop_mark_frame.png" alt="09 裁切标定画框" style="max-width: 60%;" /></a>
      <br>
      <b><a href="examples/09_crop_mark_frame.html">09 · 工业裁切标定画框</a></b><br>
      <sub>四个角标裁切规线与中央画框物料展陈</sub>
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
├── SKILL.md                          # 核心技能规范（双风格哲学、图示语法、交互定律）
├── templates/                        # 开箱即用模板脚手架
│   ├── deck_template.html            # 标准 16:9 多页完整 Deck 脚手架
│   └── editorial_card_scaffold.html  # 静奢单页/卡片快速脚手架
├── examples/                         # 9 大经典版式范例（可直接双击运行）
│   ├── 01_intro_deck.html
│   ├── 02_loop_cycle.html
│   ├── 03_nested_circles.html
│   ├── 04_banded_list.html
│   ├── 05_quadrant_chart.html
│   ├── 06_tick_timeline.html
│   ├── 07_side_rule_columns.html
│   ├── 08_number_statement.html
│   └── 09_crop_mark_frame.html
├── assets/previews/                  # 范例高清预览截图
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

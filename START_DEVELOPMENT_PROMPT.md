# 🚀 开始开发微信小程序 - 提示词模板

## 📍 项目位置
```
C:\dev\Nnews\figma
├── /exports/          ← 图标、Logo资源
├── /guidelines/       ← 设计规范文档
├── /src/              ← React Web版本（参考）
└── 各种.md文档         ← 开发指南
```

---

## 💬 复制给AI的提示词

```markdown
你好！我需要你帮我开发一个微信小程序"N前线"。

## 项目背景
这是为中日软件外包公司的中高层管理者开发的工具，用于每日快速了解客户野村総合研究所（NRI）的最新公开动态。

设计要求：专业、克制、偏金融/咨询风格，深蓝/深灰配色，日系沉稳设计。

## 现有资源
项目位于：`C:\dev\Nnews\figma`

我已经完成了：
1. ✅ 完整的UI设计规范文档
2. ✅ React Web版本（可参考组件结构）
3. ✅ 所有图标资源（SVG和PNG）
4. ✅ Logo设计（书法泼墨风格v2.0）
5. ✅ 品牌视觉系统

## 你需要做的
基于我提供的设计规范，开发一个**微信小程序**版本。

## 📋 第一步：读取关键文档

请按顺序仔细阅读以下文档（优先级从高到低）：

### 🥇 必读文档（核心）
1. **`PROMPT_FOR_GEMINI.md`** - 总览和快速开始指南
2. **`WECHAT_MINIPROGRAM_UI_GUIDE.md`** - 完整的微信小程序UI实现规范

### 🥈 重要文档（详细规范）
3. **`BRAND_GUIDE.md`** - 品牌视觉系统v2.0
4. **`exports/COLOR_REFERENCE.md`** - 配色速查表

### 🥉 参考文档（需要时查看）
5. **`exports/LOGO_CALLIGRAPHY_GUIDE.md`** - Logo设计详解
6. **`exports/PNG_CONVERSION_CHECKLIST.md`** - 图标资源清单
7. **`UI_SYSTEM_DOCUMENTATION.md`** - UI系统完整文档

## 🎯 开发要求

### 信息架构（严格遵守）
**4个一级页面**（通过底部TabBar导航）：
1. 今日快讯（home）- 首页
2. 分类浏览（category）
3. 音频概览（audio）
4. 设置/偏好（settings）

**2个二级页面**：
- 详情页（detail）
- 收藏页（bookmarks）

### 技术栈
- 微信小程序原生开发（WXML + WXSS + JS）
- 不使用任何小程序框架（不用uni-app、Taro等）

### 设计规范（严格遵循）
- 所有颜色、尺寸、圆角必须与文档完全一致
- 使用 `rpx` 单位（1rpx = 0.5px）
- 间距遵循 8rpx 基准系统
- 不要自由发挥，严格按照文档实现

## 📦 资源位置

### Logo文件
- **PNG版本**：`/exports/icons-png/logo-dark.png`（深色版）
- **PNG版本**：`/exports/icons-png/logo-light.png`（浅色版）
- SVG源文件：`/exports/logo-dark.svg`（参考）

### TabBar图标
**PNG文件**（已转换好），位于 `/exports/icons-png/`：
- `tabbar-home-gray.png` / `tabbar-home-dark.png`
- `tabbar-category-gray.png` / `tabbar-category-dark.png`
- `tabbar-audio-gray.png` / `tabbar-audio-dark.png`
- `tabbar-settings-gray.png` / `tabbar-settings-dark.png`

### 其他图标
位于 `/exports/icons-png/`：
- `arrow-left.png` - 返回箭头
- `star-outline.png` / `star-filled.png` - 收藏星标
- `play.png` / `pause.png` - 播放/暂停

## 🎬 开始开发

请按照以下顺序开发：

### 第1步：创建项目结构
创建微信小程序标准目录结构：
```
pages/
├── home/          - 今日快讯
├── category/      - 分类浏览
├── audio/         - 音频概览
├── settings/      - 设置
├── detail/        - 详情页
└── bookmarks/     - 收藏页

components/
├── tabbar/        - 自定义TabBar
└── newsCard/      - 新闻卡片组件

images/
└── tabbar/        - TabBar图标

utils/
└── mock-data.js   - 模拟数据
```

### 第2步：配置文件
创建 `app.json`、`app.wxss`、`app.js`

### 第3步：开发启动页
实现三阶段动画（3.8秒）：
- 0-1.2s：Logo淡入+发光
- 1.2-2.8s：双语Slogan
- 2.8-3.8s：CRT关闭效果

### 第4步：开发主页面
按优先级：home → settings → category → audio

### 第5步：开发组件
- 自定义TabBar
- NewsCard组件
- 详情页、收藏页

## ⚠️ 注意事项

1. **严格遵循文档**：不要自由发挥，所有设计细节都在文档中
2. **颜色精确**：使用十六进制色值，不要近似
3. **单位统一**：使用 `rpx`，不用 `px`
4. **动画流畅**：启动页动画时间必须准确
5. **TabBar自定义**：必须使用自定义TabBar（不用默认样式）

## 🎨 核心配色（快速参考）

```css
/* 头部背景 */
background: linear-gradient(135deg, #1e293b 0%, #334155 100%);

/* 页面背景 */
background: #f8fafc;

/* 主要文字 */
color: #111827;

/* TabBar未激活 */
color: #9ca3af;

/* TabBar激活 */
color: #1e293b;

/* 强调色（S级、收藏） */
color: #f97316;
```

## 📞 遇到问题时

如果对设计规范有疑问：
1. 先查看 `WECHAT_MINIPROGRAM_UI_GUIDE.md`
2. 再查看 `PROMPT_FOR_GEMINI.md`
3. 参考 `BRAND_GUIDE.md` 理解品牌体系

## 🚀 准备好了吗？

现在请：
1. 先读取 `PROMPT_FOR_GEMINI.md`
2. 然后告诉我你准备从哪一步开始
3. 我会提供必要的文件内容和详细说明

让我们开始吧！
```

---

## 📝 使用说明

### 方式1：直接复制上面的内容
1. 复制上面框框内的所有内容
2. 粘贴给AI（如Gemini、Claude等）
3. 等待AI回复，确认已读取文档

### 方式2：分步进行
如果AI一次处理不了太多信息，可以分步：

**第1次对话**：
```
你好！我需要开发一个微信小程序"N前线"。项目位于C:\dev\Nnews\figma。
请先读取并总结以下文档：
1. PROMPT_FOR_GEMINI.md
2. WECHAT_MINIPROGRAM_UI_GUIDE.md

读完后，告诉我你理解的项目要求和设计规范。
```

**第2次对话**（AI确认理解后）：
```
很好！现在请开始创建微信小程序项目结构：
1. 创建app.json配置
2. 创建全局样式app.wxss
3. 创建4个主页面和2个二级页面的目录

所有颜色和尺寸必须严格遵循文档规范，不要自由发挥。
```

**第3次对话**（项目结构创建后）：
```
现在请实现启动页动画，要求：
1. 三阶段动画（0-1.2s / 1.2-2.8s / 2.8-3.8s）
2. Logo使用 /exports/icons-png/logo-light.png
3. 双语Slogan（中文+日文）
4. CRT关闭效果

动画时间必须准确，参考PROMPT_FOR_GEMINI.md中的代码。
```

---

## 🎯 预期效果

AI应该会：
1. ✅ 读取指定的文档
2. ✅ 理解项目需求和设计规范
3. ✅ 创建符合规范的微信小程序代码
4. ✅ 严格遵循颜色、尺寸、动画等细节
5. ✅ 询问不清楚的地方

---

## 📋 开发检查清单

开发过程中，让AI确认：

### 配色检查
- [ ] 头部渐变：#1e293b → #334155
- [ ] 页面背景：#f8fafc
- [ ] TabBar灰色：#9ca3af
- [ ] TabBar激活：#1e293b
- [ ] 强调色：#f97316

### 尺寸检查
- [ ] 使用 rpx 单位
- [ ] 间距遵循 8rpx 基准
- [ ] 卡片圆角：16rpx
- [ ] TabBar高度：120rpx

### 结构检查
- [ ] 4个主页面 + 2个二级页面
- [ ] 自定义TabBar
- [ ] 启动页动画（3.8秒）

---

**准备好了就复制上面的提示词给AI吧！** 🚀

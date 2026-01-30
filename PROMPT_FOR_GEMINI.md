# 给 Gemini 的微信小程序开发提示词模板

---

## 🎯 项目简介

我需要你开发一个微信小程序"N前线"，用于企业管理者每日浏览客户NRI的公开动态。

**设计风格**：专业、克制、金融/咨询风格，深蓝灰配色，日系沉稳设计。

**重要**：请严格遵循我提供的设计规范，不要自由发挥！

---

## 📋 必读文档

我已经准备好完整的UI设计规范，请仔细阅读：
1. `/WECHAT_MINIPROGRAM_UI_GUIDE.md` - 完整UI实现指南
2. `/exports/COLOR_REFERENCE.md` - 配色速查表

---

## 🎨 核心设计要求

### 配色（精确色值，勿改）
- **头部背景**：`linear-gradient(135deg, #1e293b 0%, #334155 100%)`
- **页面背景**：`#f8fafc`
- **主要文字**：`#111827`
- **未激活图标**：`#9ca3af`
- **激活图标**：`#1e293b`
- **强调色（收藏、S级）**：`#f97316`

### 单位规范
- 所有尺寸使用 `rpx`（1rpx = 0.5px）
- 间距遵循 8rpx 基准（8/16/24/32/40...）
- 字体大小：xs=24rpx, sm=28rpx, base=32rpx, lg=36rpx, xl=40rpx, 2xl=48rpx
- 圆角：卡片=16rpx，小元素=8rpx

### 图标资源
**重要**：微信小程序不支持 lucide-react，所有图标我已经导出为SVG，位于 `/exports/icons/` 目录：
- `tabbar-home.svg` - 首页图标
- `tabbar-category.svg` - 分类图标
- `tabbar-audio.svg` - 音频图标
- `tabbar-settings.svg` - 设置图标
- `arrow-left.svg` - 返回箭头
- `star-outline.svg` - 未收藏星标
- `star-filled.svg` - 已收藏星标
- `play.svg` / `pause.svg` - 播放/暂停

**你需要**：将这些SVG转换为PNG图片（灰色版#9ca3af + 深色版#1e293b），放在小程序的 `/images/tabbar/` 目录。

---

## 🏗️ 页面架构

### 4个主页面（通过自定义TabBar导航）
1. **今日快讯**（home）- 展示当日新闻列表
2. **分类浏览**（category）- 按主题筛选新闻
3. **音频概览**（audio）- AI语音播报
4. **设置**（settings）- 偏好设置、我的收藏

### 2个二级页面
- **详情页**（detail）- 显示完整新闻内容
- **收藏页**（bookmarks）- 从设置页进入

---

## 🎬 启动页动画（重要！）

时间轴：总共3.8秒
1. **0-1.2s**：大Logo "N" 淡入+缩放+发光
2. **1.2-2.8s**：双语Slogan淡入
   - 中文：核心客户动态 · 每日速览
   - 日文：主要顧客の最新動向を、毎日コンパクトに
3. **2.8-3.8s**：CRT电视关闭效果（垂直收缩+中线闪光）

**WXSS关键代码**：
```css
/* Logo发光动画 */
@keyframes logoGlow {
  from { filter: drop-shadow(0 0 20rpx rgba(59, 130, 246, 0.2)); }
  to { filter: drop-shadow(0 0 60rpx rgba(59, 130, 246, 0.6)); }
}

/* CRT关闭动画 */
@keyframes crtClose {
  0% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(50% 0 50% 0); }
}
```

---

## 🧭 底部TabBar（自定义）

### app.json配置
```json
{
  "tabBar": {
    "custom": true,
    "list": [
      { "pagePath": "pages/home/home", "text": "今日快讯" },
      { "pagePath": "pages/category/category", "text": "分类浏览" },
      { "pagePath": "pages/audio/audio", "text": "音频概览" },
      { "pagePath": "pages/settings/settings", "text": "设置" }
    ]
  }
}
```

### 样式要点
- 高度：120rpx
- 白色背景，上有阴影
- 图标尺寸：48rpx
- 文字：未激活#9ca3af，激活#1e293b
- 激活态图标缩放：`transform: scale(1.1)`

---

## 🎴 NewsCard 组件规范

### WXML结构
```xml
<view class="news-card">
  <view class="card-header">
    <view class="category-tag {{category}}">{{categoryLabel}}</view>
    <view class="importance-badge {{importance}}">{{importance}}</view>
  </view>
  <text class="card-title">{{titleJp}}</text>
  <text class="card-summary">{{summaryCn}}</text>
</view>
```

### 分类标签配色
- **IR**：背景 `#eff6ff`，文字 `#1d4ed8`
- **AI**：背景 `#faf5ff`，文字 `#7e22ce`
- **finance**：背景 `#f0fdf4`，文字 `#15803d`
- **hr**：背景 `#fffbeb`，文字 `#d97706`
- **governance**：背景 `#f0fdfa`，文字 `#0f766e`

### 重要性标签配色
- **S级**：`#f97316` + 白字
- **A级**：`#2563eb` + 白字
- **B级**：`#9ca3af` + 白字

---

## 📄 页面头部规范

**所有主页面**使用统一的深色渐变头部：

```css
.page-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 64rpx 40rpx 48rpx;
}

.header-title {
  font-size: 40rpx;
  font-weight: 600;
  color: #ffffff;
}

.header-subtitle {
  font-size: 28rpx;
  color: #cbd5e1;
  font-weight: 300;
}
```

---

## 🎨 Logo使用

Logo SVG已准备好：`/exports/logo-dark.svg`（深色版）、`/exports/logo-light.svg`（浅色版）

**使用场景**：
- 启动页：超大尺寸（400rpx x 400rpx），浅色版
- 设置页底部：中等尺寸（64rpx x 64rpx），深色版

---

## ⚠️ 常见错误对照

| ❌ 错误做法 | ✅ 正确做法 |
|----------|----------|
| TabBar图标用文字 | 使用PNG图片 |
| 头部单色背景 | 使用渐变 linear-gradient(135deg, #1e293b, #334155) |
| 用px单位 | 用rpx单位 |
| 自行调整配色 | 严格使用文档色值 |
| 卡片圆角用8rpx | 用16rpx |
| 忽略启动动画 | 必须实现三阶段动画 |

---

## 📋 开发检查清单

在每个页面完成后，请确认：

### 视觉设计
- [ ] 头部使用深蓝灰渐变背景
- [ ] 页面背景为 #f8fafc
- [ ] 卡片圆角统一 16rpx
- [ ] 间距符合 8rpx 基准系统
- [ ] 配色与文档完全一致

### 底部TabBar
- [ ] 使用自定义TabBar
- [ ] 图标为PNG图片（两套：灰色+深色）
- [ ] 激活态有缩放动画
- [ ] 文字颜色准确（#9ca3af / #1e293b）
- [ ] 高度120rpx，白色背景

### 启动页
- [ ] 三阶段动画时间准确（1200ms/2800ms/3800ms）
- [ ] Logo有发光效果
- [ ] Slogan双语文案准确
- [ ] CRT关闭效果流畅

### NewsCard
- [ ] 分类标签颜色准确（5种）
- [ ] 重要性标签颜色准确（3种）
- [ ] 标题最多2行，摘要最多2行
- [ ] 点击有阴影反馈

---

## 🚀 开始开发

请按照以下顺序开发：

1. **创建项目结构**
   - 4个主页面 + 2个二级页面
   - 自定义TabBar组件
   - 全局样式 app.wxss

2. **准备资源**
   - 将 `/exports/icons/` 中的SVG转为PNG
   - 放置Logo文件

3. **开发启动页**
   - 实现三阶段动画
   - 测试时间准确性

4. **开发主页面**
   - 先做首页（今日快讯）
   - 再做其他三个页面
   - 保持头部样式一致

5. **开发组件**
   - NewsCard
   - TabBar
   - 详情页

6. **测试与优化**
   - 检查所有颜色是否准确
   - 验证动画流畅度
   - 测试页面跳转

---

## 📦 最终交付物

请确保以下内容完整：

1. 所有页面WXML/WXSS/JS文件
2. 自定义TabBar完整代码
3. 图标PNG资源（@2x和@3x）
4. Logo图片资源
5. app.json完整配置
6. app.wxss全局样式

---

## 💡 开发提示

1. **配色最重要**：所有颜色必须精确匹配文档，不要凭感觉调整
2. **单位必须用rpx**：微信小程序响应式单位
3. **图标必须是图片**：不要用字体图标或Unicode字符
4. **渐变不能省**：头部背景必须是渐变，不能用单色
5. **动画不能跳过**：启动页三阶段动画是核心体验
6. **间距要规范**：遵循8rpx基准系统（8/16/24/32/40...）

---

## 🎯 关键成功因素

如果你能做到以下几点，这个小程序就是完美的：

1. ✅ 启动页动画流畅，三阶段清晰
2. ✅ 头部深蓝灰渐变背景正确
3. ✅ TabBar图标美观，激活态有动画
4. ✅ NewsCard样式精确，分类标签颜色准确
5. ✅ 所有配色与文档完全一致
6. ✅ 间距、圆角、字体等细节准确

---

**现在开始开发吧！有任何疑问请参考 `/WECHAT_MINIPROGRAM_UI_GUIDE.md` 详细文档。**

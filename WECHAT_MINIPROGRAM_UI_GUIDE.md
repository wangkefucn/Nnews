# N前线 微信小程序 UI 完美复刻指南
## 专为微信小程序开发准备的超详细设计规范

---

## 🎯 核心问题说明

**微信小程序与React Web的关键差异**：
1. ❌ 不支持 React、Motion 等前端框架
2. ❌ 不支持 `lucide-react` 图标库
3. ❌ 不支持 Tailwind CSS
4. ✅ 使用 WXML + WXSS + JavaScript
5. ✅ 需要手动编写所有样式和动画

**本文档解决方案**：
- 提供所有图标的SVG代码（可直接复制）
- 提供完整的WXSS样式变量
- 提供微信小程序动画API实现方案
- 提供精确到像素的设计规范

---

## 🎨 完整配色系统（精确色值）

### 主色调
```css
/* 深色系（头部、强调） */
--color-slate-900: #0f172a;
--color-slate-800: #1e293b;
--color-slate-700: #334155;
--color-slate-600: #475569;

/* 灰色系（文字、边框） */
--color-gray-900: #111827;
--color-gray-600: #4b5563;
--color-gray-500: #6b7280;
--color-gray-400: #9ca3af;
--color-gray-300: #d1d5db;
--color-gray-200: #e5e7eb;
--color-gray-100: #f3f4f6;
--color-gray-50: #f9fafb;

/* 背景色 */
--color-slate-50: #f8fafc;
--color-white: #ffffff;
--color-black: #000000;
```

### 强调色
```css
/* 橙色系（重要性S级、收藏） */
--color-orange-500: #f97316;
--color-orange-600: #ea580c;
--color-amber-500: #f59e0b;
--color-amber-600: #d97706;

/* 蓝色系（重要性A级、链接） */
--color-blue-600: #2563eb;
--color-blue-700: #1d4ed8;
--color-blue-500: #3b82f6;
--color-blue-50: #eff6ff;

/* 分类标签色 */
--color-purple-700: #7e22ce;
--color-purple-50: #faf5ff;
--color-green-700: #15803d;
--color-green-50: #f0fdf4;
--color-teal-700: #0f766e;
--color-teal-50: #f0fdfa;
```

### 渐变色（头部背景）
```css
/* 深蓝灰渐变 */
background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
```

---

## 📐 设计Token（所有尺寸、间距）

### 字体尺寸
```css
--text-xs: 24rpx;      /* 12px */
--text-sm: 28rpx;      /* 14px */
--text-base: 32rpx;    /* 16px */
--text-lg: 36rpx;      /* 18px */
--text-xl: 40rpx;      /* 20px */
--text-2xl: 48rpx;     /* 24px */
--text-3xl: 60rpx;     /* 30px */
```

### 字重
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 行高
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### 间距（rpx单位）
```css
--spacing-1: 8rpx;     /* 4px */
--spacing-2: 16rpx;    /* 8px */
--spacing-3: 24rpx;    /* 12px */
--spacing-4: 32rpx;    /* 16px */
--spacing-5: 40rpx;    /* 20px */
--spacing-6: 48rpx;    /* 24px */
--spacing-8: 64rpx;    /* 32px */
--spacing-10: 80rpx;   /* 40px */
--spacing-12: 96rpx;   /* 48px */
--spacing-16: 128rpx;  /* 64px */
--spacing-20: 160rpx;  /* 80px */
```

### 圆角
```css
--radius-sm: 8rpx;     /* 4px */
--radius-md: 12rpx;    /* 6px */
--radius-lg: 16rpx;    /* 8px */
--radius-xl: 20rpx;    /* 10px */
--radius-2xl: 32rpx;   /* 16px */
--radius-full: 9999rpx;
```

### 阴影
```css
--shadow-sm: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
--shadow-md: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);
--shadow-lg: 0 16rpx 32rpx rgba(0, 0, 0, 0.15);
```

---

## 🖼️ Logo 设计资产

### Logo SVG 代码（可直接使用）

**方案1：作为image组件使用**
将下面的SVG保存为 `/images/logo.svg`：

```xml
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 主体N字母 -->
  <path d="M8 40V8H14L34 30.5V8H40V40H34L14 17.5V40H8Z" fill="#1e293b"/>
  <!-- 虚线分割（可选） -->
  <path d="M14 8L34 30.5" stroke="#cbd5e1" stroke-width="0.5" stroke-dasharray="2 2"/>
</svg>
```

**方案2：作为组件封装（推荐）**
创建 `/components/logo/logo.wxml`：

```xml
<view class="logo-container {{variant}}">
  <!-- SVG内联 -->
  <view class="logo-icon" style="width: {{size}}rpx; height: {{size}}rpx;">
    <view class="logo-svg" style="background-image: url('data:image/svg+xml;base64,{{logoBase64}}');"></view>
  </view>
  
  <!-- 文字部分（可选） -->
  <text wx:if="{{showText}}" class="logo-text {{theme}}">N前线</text>
</view>
```

**Logo的Base64编码**（深色主题）：
```
PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNOCA0MFY4SDE0TDM0IDMwLjVWOEg0MFY0MEgzNEwxNCAxNy41VjQwSDhaIiBmaWxsPSIjMWUyOTNiIi8+CiAgPHBhdGggZD0iTTE0IDhMMzQgMzAuNSIgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIi8+Cjwvc3ZnPg==
```

### Logo变体说明

**1. horizontal（横向）**
```
[Logo图标] N前线
```
- 用于：设置页底部
- 尺寸：图标32rpx，文字32rpx
- 间距：gap 24rpx

**2. square（方形）**
```
[Logo图标]
  N前线
```
- 用于：启动页、品牌展示
- 尺寸：图标64rpx，文字40rpx
- 纵向排列，gap 16rpx

**3. icon-only（仅图标）**
```
[Logo图标]
```
- 用于：页面角落装饰
- 尺寸：24-48rpx

---

## 🎬 启动页动画（微信小程序实现）

### 动画时间轴（总时长3800ms）

| 阶段 | 时间范围 | 内容 | 动画效果 |
|------|----------|------|----------|
| 1 | 0-1200ms | 大Logo "N" | 淡入+缩放+发光 |
| 2 | 1200-2800ms | 双语Slogan | 淡入+上滑 |
| 3 | 2800-3800ms | CRT关闭 | 垂直收缩+闪光 |

### WXML结构

```xml
<!-- pages/splash/splash.wxml -->
<view class="splash-container">
  <!-- 阶段1：大Logo -->
  <view class="phase-logo" wx:if="{{phase === 'logo'}}">
    <image src="/images/logo-large.svg" class="logo-large" mode="aspectFit"></image>
  </view>

  <!-- 阶段2：Slogan -->
  <view class="phase-slogan" wx:if="{{phase === 'slogan'}}">
    <text class="slogan-cn">核心客户动态 · 每日速览</text>
    <text class="slogan-jp">主要顧客の最新動向を、毎日コンパクトに</text>
  </view>

  <!-- 阶段3：CRT关闭效果 -->
  <view class="phase-crt" wx:if="{{phase === 'crt'}}">
    <view class="crt-line"></view>
  </view>
</view>
```

### WXSS样式

```css
/* pages/splash/splash.wxss */
.splash-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  overflow: hidden;
}

/* 阶段1：Logo动画 */
.phase-logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: logoFadeIn 600ms ease-out forwards;
}

.logo-large {
  width: 400rpx;
  height: 400rpx;
  filter: drop-shadow(0 0 40rpx rgba(59, 130, 246, 0.4));
  animation: logoGlow 1000ms ease-in-out infinite alternate;
}

@keyframes logoFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes logoGlow {
  from {
    filter: drop-shadow(0 0 20rpx rgba(59, 130, 246, 0.2));
  }
  to {
    filter: drop-shadow(0 0 60rpx rgba(59, 130, 246, 0.6));
  }
}

/* 阶段2：Slogan动画 */
.phase-slogan {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32rpx;
  animation: sloganFadeIn 500ms ease-out forwards;
}

.slogan-cn {
  font-size: 48rpx;
  font-weight: 300;
  color: #e2e8f0;
  letter-spacing: 4rpx;
  animation: textSlideUp 500ms ease-out 100ms both;
}

.slogan-jp {
  font-size: 36rpx;
  font-weight: 300;
  color: #94a3b8;
  letter-spacing: 2rpx;
  animation: textSlideUp 500ms ease-out 200ms both;
}

@keyframes sloganFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes textSlideUp {
  from {
    opacity: 0;
    transform: translateY(20rpx);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 阶段3：CRT关闭动画 */
.phase-crt {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  animation: crtClose 800ms ease-in forwards;
}

.crt-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 4rpx;
  background: #ffffff;
  box-shadow: 0 0 20rpx rgba(255, 255, 255, 0.8);
  animation: crtFlash 800ms ease-in forwards;
}

@keyframes crtClose {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(50% 0 50% 0);
  }
}

@keyframes crtFlash {
  0% { opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 0.8; }
  100% { opacity: 0; }
}
```

### JS逻辑

```javascript
// pages/splash/splash.js
Page({
  data: {
    phase: 'logo'  // 'logo' | 'slogan' | 'crt'
  },

  onLoad() {
    this.startAnimation();
  },

  startAnimation() {
    // 阶段1 → 2：1200ms后切换到Slogan
    setTimeout(() => {
      this.setData({ phase: 'slogan' });
    }, 1200);

    // 阶段2 → 3：2800ms后切换到CRT
    setTimeout(() => {
      this.setData({ phase: 'crt' });
    }, 2800);

    // 阶段3完成：3800ms后跳转到首页
    setTimeout(() => {
      wx.reLaunch({
        url: '/pages/home/home'
      });
    }, 3800);
  }
});
```

---

## 🧭 底部导航栏 TabBar（完整实现）

### 图标SVG资源

**重要**：微信小程序不支持 lucide-react，需要手动导出SVG图标。

#### 1. 今日快讯（Home）图标
```xml
<!-- images/tabbar/home.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### 2. 分类浏览（Grid3x3）图标
```xml
<!-- images/tabbar/category.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### 3. 音频概览（Headphones）图标
```xml
<!-- images/tabbar/audio.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### 4. 设置（Settings）图标
```xml
<!-- images/tabbar/settings.svg -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 1v6m0 6v6M1 12h6m6 0h6M4.22 4.22l4.24 4.24m5.28 5.28l4.24 4.24M19.78 4.22l-4.24 4.24m-5.28 5.28l-4.24 4.24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### app.json 配置（使用自定义TabBar）

```json
{
  "pages": [
    "pages/home/home",
    "pages/category/category",
    "pages/audio/audio",
    "pages/settings/settings"
  ],
  "tabBar": {
    "custom": true,
    "color": "#9ca3af",
    "selectedColor": "#1e293b",
    "backgroundColor": "#ffffff",
    "borderStyle": "white",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "今日快讯"
      },
      {
        "pagePath": "pages/category/category",
        "text": "分类浏览"
      },
      {
        "pagePath": "pages/audio/audio",
        "text": "音频概览"
      },
      {
        "pagePath": "pages/settings/settings",
        "text": "设置"
      }
    ]
  }
}
```

### 自定义TabBar实现

**custom-tab-bar/index.wxml**
```xml
<view class="tabbar">
  <view 
    wx:for="{{list}}" 
    wx:key="index"
    class="tabbar-item {{selected === index ? 'active' : ''}}"
    bindtap="switchTab"
    data-index="{{index}}"
    data-path="{{item.pagePath}}"
  >
    <!-- 图标 -->
    <image 
      src="{{selected === index ? item.selectedIconPath : item.iconPath}}" 
      class="tabbar-icon"
      mode="aspectFit"
    ></image>
    
    <!-- 文字 -->
    <text class="tabbar-text">{{item.text}}</text>
  </view>
</view>
```

**custom-tab-bar/index.wxss**
```css
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background: #ffffff;
  border-top: 1rpx solid #e5e7eb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: 0 -4rpx 16rpx rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rpx;
  padding: 12rpx 0;
  transition: all 0.3s ease;
}

.tabbar-icon {
  width: 48rpx;
  height: 48rpx;
  transition: transform 0.3s ease;
}

/* 激活态图标放大 */
.tabbar-item.active .tabbar-icon {
  transform: scale(1.1);
}

.tabbar-text {
  font-size: 24rpx;
  color: #9ca3af;
  transition: color 0.3s ease, font-weight 0.3s ease;
}

.tabbar-item.active .tabbar-text {
  color: #1e293b;
  font-weight: 500;
}
```

**custom-tab-bar/index.js**
```javascript
Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: "/pages/home/home",
        text: "今日快讯",
        iconPath: "/images/tabbar/home-gray.png",
        selectedIconPath: "/images/tabbar/home-dark.png"
      },
      {
        pagePath: "/pages/category/category",
        text: "分类浏览",
        iconPath: "/images/tabbar/category-gray.png",
        selectedIconPath: "/images/tabbar/category-dark.png"
      },
      {
        pagePath: "/pages/audio/audio",
        text: "音频概览",
        iconPath: "/images/tabbar/audio-gray.png",
        selectedIconPath: "/images/tabbar/audio-dark.png"
      },
      {
        pagePath: "/pages/settings/settings",
        text: "设置",
        iconPath: "/images/tabbar/settings-gray.png",
        selectedIconPath: "/images/tabbar/settings-dark.png"
      }
    ]
  },

  methods: {
    switchTab(e) {
      const { index, path } = e.currentTarget.dataset;
      wx.switchTab({ url: path });
      this.setData({ selected: index });
    }
  }
});
```

### TabBar图标准备（两种方案）

**方案1：使用PNG图片**（推荐）
- 导出两套图标：灰色版（#9ca3af）和深色版（#1e293b）
- 尺寸：48x48px（@2x为96x96px，@3x为144x144px）
- 命名规则：
  - `home-gray.png` / `home-dark.png`
  - `category-gray.png` / `category-dark.png`
  - `audio-gray.png` / `audio-dark.png`
  - `settings-gray.png` / `settings-dark.png`

**方案2：使用iconfont**
- 上传SVG到阿里iconfont或自建字体库
- 使用字体图标代替图片

---

## 📄 页面头部规范

### 标准头部结构（WXML）

```xml
<!-- 所有主页面通用的头部 -->
<view class="page-header">
  <view class="header-content">
    <text class="header-title">{{pageTitle}}</text>
    <text class="header-subtitle">{{subtitle}}</text>
  </view>
</view>
```

### 标准头部样式（WXSS）

```css
.page-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 64rpx 40rpx 48rpx;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.header-title {
  font-size: 40rpx;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 1rpx;
}

.header-subtitle {
  font-size: 28rpx;
  color: #cbd5e1;
  font-weight: 300;
}
```

### 各页面头部配置

| 页面 | pageTitle | subtitle |
|------|-----------|----------|
| 首页 | 今日快讯 | 核心客户动态 · 每日速览 |
| 分类浏览 | 分类浏览 | 按主题查看NRI动态 |
| 音频概览 | 音频概览 | AI语音播报今日要闻 |
| 设置 | 设置 | 偏好设置与账户管理 |

---

## 🎴 NewsCard 新闻卡片

### WXML结构

```xml
<view class="news-card" bindtap="handleClick" data-id="{{item.id}}">
  <!-- 顶部：分类标签 + 重要性标签 -->
  <view class="card-header">
    <view class="category-tag {{item.category}}">
      <text>{{item.categoryLabel}}</text>
    </view>
    <view class="importance-badge {{item.importance}}">
      <text>{{item.importance}}</text>
    </view>
  </view>

  <!-- 标题（日文） -->
  <text class="card-title">{{item.titleJp}}</text>

  <!-- 摘要（中文） -->
  <text class="card-summary">{{item.summaryCn}}</text>
</view>
```

### WXSS样式

```css
.news-card {
  background: #ffffff;
  border-radius: 16rpx;
  border: 1rpx solid #e5e7eb;
  padding: 32rpx;
  margin-bottom: 24rpx;
  transition: box-shadow 0.3s ease;
}

.news-card:active {
  box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);
}

/* 卡片头部 */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rpx;
}

/* 分类标签 */
.category-tag {
  padding: 8rpx 20rpx;
  border-radius: 8rpx;
  font-size: 24rpx;
}

.category-tag.IR {
  background: #eff6ff;
  color: #1d4ed8;
}

.category-tag.AI {
  background: #faf5ff;
  color: #7e22ce;
}

.category-tag.finance {
  background: #f0fdf4;
  color: #15803d;
}

.category-tag.hr {
  background: #fffbeb;
  color: #d97706;
}

.category-tag.governance {
  background: #f0fdfa;
  color: #0f766e;
}

/* 重要性标签 */
.importance-badge {
  padding: 4rpx 16rpx;
  border-radius: 8rpx;
  font-size: 24rpx;
  font-weight: 600;
}

.importance-badge.S {
  background: #f97316;
  color: #ffffff;
}

.importance-badge.A {
  background: #2563eb;
  color: #ffffff;
}

.importance-badge.B {
  background: #9ca3af;
  color: #ffffff;
}

/* 标题 */
.card-title {
  font-size: 32rpx;
  font-weight: 500;
  color: #111827;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 16rpx;
}

/* 摘要 */
.card-summary {
  font-size: 28rpx;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

---

## 🔧 全局样式配置

### app.wxss（全局CSS变量）

```css
/* app.wxss */
page {
  /* 配色 */
  --color-primary: #1e293b;
  --color-secondary: #334155;
  --color-accent-orange: #f97316;
  --color-accent-blue: #2563eb;
  
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-text-muted: #9ca3af;
  
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-border: #e5e7eb;
  
  /* 字体 */
  --font-size-xs: 24rpx;
  --font-size-sm: 28rpx;
  --font-size-base: 32rpx;
  --font-size-lg: 36rpx;
  --font-size-xl: 40rpx;
  --font-size-2xl: 48rpx;
  
  /* 间距 */
  --spacing-xs: 8rpx;
  --spacing-sm: 16rpx;
  --spacing-md: 24rpx;
  --spacing-lg: 32rpx;
  --spacing-xl: 40rpx;
  
  /* 圆角 */
  --radius-sm: 8rpx;
  --radius-md: 12rpx;
  --radius-lg: 16rpx;
  
  /* 阴影 */
  --shadow-sm: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8rpx 16rpx rgba(0, 0, 0, 0.1);
  
  /* 基础设置 */
  background-color: var(--color-bg-secondary);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: 1.5;
}

/* 隐藏滚动条（微信小程序风格） */
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}

/* 通用容器 */
.container {
  padding: 0 40rpx;
}

.page-content {
  padding-bottom: 160rpx; /* 为TabBar预留空间 */
}
```

---

## 🎯 其他核心组件样式

### 1. CategoryTag 分类标签

```css
/* 已在NewsCard部分包含，此处为独立使用版本 */
.category-tag-standalone {
  display: inline-block;
  padding: 8rpx 20rpx;
  border-radius: 8rpx;
  font-size: 24rpx;
  font-weight: 400;
}
```

### 2. 按钮样式

```css
/* 主按钮 */
.btn-primary {
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  color: #ffffff;
  border: none;
  border-radius: 16rpx;
  padding: 28rpx 48rpx;
  font-size: 32rpx;
  font-weight: 500;
  box-shadow: 0 4rpx 12rpx rgba(249, 115, 22, 0.3);
}

.btn-primary:active {
  opacity: 0.9;
  transform: translateY(2rpx);
}

/* 次要按钮 */
.btn-secondary {
  background: #ffffff;
  color: #1e293b;
  border: 1rpx solid #e5e7eb;
  border-radius: 16rpx;
  padding: 28rpx 48rpx;
  font-size: 32rpx;
}

.btn-secondary:active {
  background: #f8fafc;
}

/* 文字按钮 */
.btn-text {
  background: transparent;
  color: #2563eb;
  border: none;
  padding: 16rpx 24rpx;
  font-size: 28rpx;
}
```

### 3. 输入框样式

```css
.input-field {
  background: #f3f4f6;
  border: 1rpx solid #e5e7eb;
  border-radius: 12rpx;
  padding: 24rpx 32rpx;
  font-size: 32rpx;
  color: #111827;
}

.input-field:focus {
  border-color: #2563eb;
  background: #ffffff;
}
```

### 4. 开关按钮（Switch）

```xml
<switch class="custom-switch" checked="{{checked}}" bindchange="handleChange"/>
```

```css
.custom-switch {
  transform: scale(0.9);
}

/* 微信小程序原生switch默认样式较好，无需过多自定义 */
```

---

## 📱 页面布局规范

### 标准页面结构

```xml
<view class="page">
  <!-- 头部 -->
  <view class="page-header">
    <!-- 见上文"页面头部规范" -->
  </view>

  <!-- 主内容区（可滚动） -->
  <scroll-view class="page-content" scroll-y>
    <!-- 内容 -->
  </scroll-view>

  <!-- 底部TabBar（自定义组件会自动渲染） -->
</view>
```

```css
.page {
  min-height: 100vh;
  background: #f8fafc;
}

.page-content {
  height: calc(100vh - 112rpx - 120rpx); /* 视口高度 - 头部高度 - TabBar高度 */
  padding: 40rpx;
  padding-bottom: 160rpx;
}
```

---

## 🔍 详情页样式

### WXML结构

```xml
<view class="detail-page">
  <!-- 顶部导航栏 -->
  <view class="detail-header">
    <view class="back-button" bindtap="goBack">
      <image src="/images/icons/arrow-left.svg" class="back-icon"></image>
      <text>返回</text>
    </view>
    <view class="bookmark-button" bindtap="toggleBookmark">
      <image 
        src="{{isBookmarked ? '/images/icons/star-filled.svg' : '/images/icons/star.svg'}}" 
        class="star-icon"
      ></image>
    </view>
  </view>

  <!-- 文章头部 -->
  <view class="article-header">
    <view class="article-meta">
      <view class="category-tag {{category}}">{{categoryLabel}}</view>
      <view class="importance-badge {{importance}}">{{importance}}</view>
    </view>
    <text class="article-title">{{titleJp}}</text>
    <text class="article-time">{{publishedAt}}</text>
  </view>

  <!-- 文章正文 -->
  <view class="article-body">
    <!-- 日文原文 -->
    <view class="content-section">
      <view class="section-label">日文原文</view>
      <text class="content-text">{{contentJp}}</text>
    </view>

    <!-- 中文翻译（根据设置显示�� -->
    <view class="content-section" wx:if="{{language === 'both'}}">
      <view class="section-label">中文翻译</view>
      <text class="content-text">{{contentCn}}</text>
    </view>
  </view>
</view>
```

### WXSS样式

```css
.detail-page {
  min-height: 100vh;
  background: #ffffff;
}

/* 顶部导航栏 */
.detail-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1rpx solid #e5e7eb;
  padding: 24rpx 40rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 12rpx;
  font-size: 28rpx;
  color: #1e293b;
}

.back-icon {
  width: 32rpx;
  height: 32rpx;
}

.bookmark-button {
  padding: 12rpx;
}

.star-icon {
  width: 40rpx;
  height: 40rpx;
}

/* 文章头部 */
.article-header {
  padding: 40rpx;
  border-bottom: 1rpx solid #e5e7eb;
}

.article-meta {
  display: flex;
  gap: 16rpx;
  margin-bottom: 24rpx;
}

.article-title {
  font-size: 40rpx;
  font-weight: 600;
  color: #111827;
  line-height: 1.6;
  margin-bottom: 16rpx;
}

.article-time {
  font-size: 28rpx;
  color: #9ca3af;
}

/* 文章正文 */
.article-body {
  padding: 40rpx;
}

.content-section {
  margin-bottom: 48rpx;
}

.section-label {
  font-size: 28rpx;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 16rpx;
  padding-bottom: 12rpx;
  border-bottom: 2rpx solid #e5e7eb;
}

.content-text {
  font-size: 32rpx;
  color: #111827;
  line-height: 1.8;
  white-space: pre-wrap;
}
```

---

## 🎨 其他常用图标SVG

### 返回箭头（Arrow Left）
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 星标（Star）- 未收藏
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 星标（Star Filled）- 已收藏
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f97316" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 播放按钮（Play）
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
</svg>
```

### 暂停按钮（Pause）
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
  <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
</svg>
```

### 书签（Bookmark）
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## 📋 完整检查清单

在开发时，请逐项对照：

### 视觉设计
- [ ] 配色严格使用文档中的精确色值
- [ ] 头部使用深蓝灰渐变背景（#1e293b → #334155）
- [ ] 页面背景使用 #f8fafc（slate-50）
- [ ] 字体大小使用rpx单位（已转换好）
- [ ] 圆角统一使用 16rpx（卡片）、8rpx（小元素）
- [ ] 间距遵循 8rpx 基准（8/16/24/32/40...）

### Logo & 品牌
- [ ] Logo SVG已保存到 /images/logo.svg
- [ ] 启动页Logo尺寸为 400rpx x 400rpx
- [ ] Slogan双语文案准确：
  - 中文：核心客户动态 · 每日速览
  - 日文：主要顧客の最新動向を、毎日コンパクトに
- [ ] 设置页底部显示Logo（horizontal变体）

### 启动页动画
- [ ] 三阶段时间准确（1200ms / 2800ms / 3800ms）
- [ ] Logo有淡入+缩放+发光效果
- [ ] Slogan有淡入+上滑效果，两行文字有延迟
- [ ] CRT关闭有垂直收缩+中线闪光
- [ ] 动画结束后跳转到首页

### 底部TabBar
- [ ] 使用自定义TabBar（custom: true）
- [ ] 四个导航项准确：今日快讯/分类浏览/音频概览/设置
- [ ] 图标使用PNG（灰色版+深色版各一套）
- [ ] 激活态图标有缩放动画（scale: 1.1）
- [ ] 文字颜色：未激活 #9ca3af，激活 #1e293b
- [ ] TabBar高度 120rpx，白色背景，上有阴影

### 页面头部
- [ ] 所有主页面使用深蓝灰渐变头部
- [ ] 标题字号 40rpx，字重 600
- [ ] 副标题字号 28rpx，颜色 #cbd5e1
- [ ] 头部padding：64rpx（上）40rpx（左右）48rpx（下）

### NewsCard
- [ ] 白色背景，灰色边框（#e5e7eb），圆角 16rpx
- [ ] 分类标签颜色准确（IR蓝/AI紫/finance绿/hr琥珀/governance青）
- [ ] 重要性标签颜色准确（S橙/A蓝/B灰）
- [ ] 标题最多2行，摘要最多2行（-webkit-line-clamp: 2）
- [ ] 点击时有阴影效果

### 详情页
- [ ] 顶部有返回按钮和收藏按钮
- [ ] 文章头部包含分类标签、重要性标签、标题、时间
- [ ] 正文分为"日文原文"和"中文翻译"两部分
- [ ] 根据语言设置显示/隐藏中文翻译
- [ ] 星标图标在已收藏时填充橙色（#f97316）

### 图标资源
- [ ] 所有TabBar图标已导出PNG（@2x和@3x）
- [ ] 返回、星标、播放、暂停等图标已准备SVG
- [ ] 图标颜色可通过currentColor继承
- [ ] 图标尺寸：TabBar 48rpx，页面内 32-40rpx

### 响应式
- [ ] 主内容区padding-bottom预留160rpx（TabBar空间）
- [ ] 使用scroll-view实现页面滚动
- [ ] 隐藏滚动条（::-webkit-scrollbar: display none）
- [ ] 适配安全区域（env(safe-area-inset-bottom)）

### 状态管理
- [ ] 全局设置使用wx.getStorageSync/setStorageSync
- [ ] selectedTopics默认值：['IR', 'AI', 'finance']
- [ ] language默认值：'both'
- [ ] 收藏列表持久化存储

---

## 🚨 常见错误对照

| Gemini可能出现的问题 | 正确做法 |
|---------------------|---------|
| TabBar图标使用文字"Home" | 使用PNG图标或SVG转PNG |
| 头部背景单色 | 使用线性渐变 linear-gradient(135deg, #1e293b, #334155) |
| 卡片圆角太小 | 统一使用 16rpx |
| 字体大小用px | 统一使用rpx单位 |
| 配色不准确 | 严格使用文档中的HEX色值 |
| 缺少启动页动画 | 必须实现三阶段动画 |
| Logo使用文字"N" | 使用SVG图形Logo |
| 间距不统一 | 遵循8rpx基准系统 |
| 滚动条可见 | 隐藏所有滚动条 |
| TabBar激活态无动画 | 添加图标缩放和颜色过渡 |

---

## 📦 资源文件清单

请确保以下文件已准备好：

```
/images/
├── logo.svg                        # Logo SVG
├── logo-large.png                  # 启动页大Logo（400x400px @2x）
├── tabbar/
│   ├── home-gray.png              # TabBar图标-首页-未激活
│   ├── home-dark.png              # TabBar图标-首页-激活
│   ├── category-gray.png          # TabBar图标-分类-未激活
│   ├── category-dark.png          # TabBar图标-分类-激活
│   ├── audio-gray.png             # TabBar图标-音频-未激活
│   ├── audio-dark.png             # TabBar图标-音频-激活
│   ├── settings-gray.png          # TabBar图标-设置-未激活
│   └── settings-dark.png          # TabBar图标-设置-激活
└── icons/
    ├── arrow-left.svg              # 返回箭头
    ├── star.svg                    # 星标-未收藏
    ├── star-filled.svg             # 星标-已收藏
    ├── play.svg                    # 播放
    ├── pause.svg                   # 暂停
    └── bookmark.svg                # 书签
```

---

## 🎓 给Gemini/AI的最终提示

**请严格遵循以下规范**：

1. **配色**：所有颜色必须使用本文档中的精确HEX色值，不要自行调整
2. **单位**：所有尺寸使用rpx，1rpx = 0.5px（微信小程序规范）
3. **图标**：不要使用图标库，使用本文档提供的SVG代码或PNG图片
4. **动画**：使用WXSS @keyframes和微信小程序动画API，不要使用第三方库
5. **布局**：严格按照本文档的WXML结构和WXSS样式，不要自由发挥
6. **命名**：类名使用kebab-case（如 .page-header），变量使用camelCase
7. **间距**：遵循8rpx基准系统（8/16/24/32/40...）
8. **字体**：不要使用自定义字体，使用系统默认字体即可
9. **渐变**：头部背景必须使用渐变 `linear-gradient(135deg, #1e293b 0%, #334155 100%)`
10. **细节**：注意阴影、圆角、边框等细节，要与文档一致

**验收标准**：
- 启动页动画流畅，三阶段时间准确
- TabBar图标美观，激活态有动画
- 头部使用深蓝灰渐变背景
- NewsCard样式与文档完全一致
- 配色、间距、圆角等所有细节准确

---

**文档版本**：v2.0 - 微信小程序专版  
**最后更新**：2026-01-30  
**适用范围**：微信小程序开发（WXML/WXSS/JS）

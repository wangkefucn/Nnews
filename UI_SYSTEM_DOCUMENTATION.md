# N前线 微信小程序 UI 系统文档
## 专业提示词 for AI 开发

---

## 📋 项目概述

**项目名称**：N前线（N-Frontline）  
**项目类型**：微信小程序 - 企业信息速览工具  
**目标用户**：中国对日软件外包公司的中高层管理者  
**核心功能**：每日快速了解客户野村総合研究所（NRI）的最新公开动态  

**设计风格定位**：
- 专业、克制、偏金融/咨询风格
- 类似企业研究简报
- 深蓝/深灰配色方案
- 日系沉稳（寂刹风格）设计
- **绝对不要**娱乐化或卡通风格

---

## 🎨 设计系统规范

### 配色方案

**主色调**：
- 深蓝灰：`from-slate-800 to-slate-700`（头部渐变）
- 深石板色：`slate-800`（主要交互元素）
- 浅背景：`slate-50`（页面背景）

**强调色**：
- 橙色渐变：`from-amber-500 to-orange-500`（收藏/重要功能）
- 蓝色：`blue-600`（重要性A级标签）
- 橙色：`orange-500`（重要性S级标签）

**辅助色**：
- 灰色层级：`gray-200`, `gray-400`, `gray-500`, `gray-600`, `gray-900`
- 深色背景：`slate-900`, `slate-800`

**语义化颜色**（CSS Variables in `/src/styles/theme.css`）：
```css
--primary: #030213
--background: #ffffff
--card: #ffffff
--border: rgba(0, 0, 0, 0.1)
```

### 字体规范

**层级体系**（已在 theme.css 中定义）：
- H1: `text-2xl`, `font-medium`
- H2: `text-xl`, `font-medium`
- H3: `text-lg`, `font-medium`
- H4: `text-base`, `font-medium`
- Body: `text-base`, `font-normal`
- Small: `text-sm`, `text-xs`

**字重**：
- `font-semibold`：标题、品牌名称
- `font-medium`：次级标题、按钮
- `font-light`：Slogan、辅助文本

**行高**：统一使用 `line-height: 1.5`

### 圆角规范

- 卡片/按钮：`rounded-lg` (0.625rem)
- 小元素：`rounded` (4px)
- 圆形：`rounded-full`

### 间距规范

**内边距（Padding）**：
- 页面容器：`px-5 py-5`
- 卡片内容：`p-4` 或 `p-5`
- 按钮：`p-4`

**外边距（Margin）**：
- 区块间距：`mb-3`, `mb-4`, `mb-6`
- 组件间距：`space-y-2`, `space-y-4`, `space-y-6`

### 阴影与边框

- 卡片边框：`border border-gray-200`
- Hover阴影：`hover:shadow-md`
- 分隔线：`border-t border-gray-200`

---

## 🏗️ 信息架构

### 4个一级页面（通过底部TabBar导航）

#### 1. 今日快讯（首页 - `home`）
- **路由标识**：`home`
- **组件**：`HomePage.tsx`
- **功能**：展示当日最新的NRI相关快讯
- **特点**：
  - 简洁的深色头部（只有标题和更新时间）
  - 新闻卡片列表滚动展示
  - 点击新闻卡片进入详情页

#### 2. 分类浏览（`category`）
- **路由标识**：`category`
- **组件**：`CategoryPage.tsx`
- **功能**：按主题分类浏览新闻
- **支持的分类**：
  - IR情报（财报、业绩发布）
  - AI・数字化（技术创新）
  - 证券/金融（金融业务动态）
  - 人事（组织架构、人事变动）
  - 治理（ESG、可持续发展）

#### 3. 音频概览（`audio`）
- **路由标识**：`audio`
- **组件**：`AudioPage.tsx`
- **功能**：AI语音播报今日要闻摘要

#### 4. 设置/偏好（`settings`）
- **路由标识**：`settings`
- **组件**：`SettingsPage.tsx`
- **功能**：
  - 我的收藏入口
  - 关注主题设置（多选，IR必选）
  - 显示语言设置（日文+中文 / 仅日文）
  - 底部品牌标识展示

### 二级页面

#### 详情页（`DetailPage.tsx`）
- 显示完整新闻内容（日文原文 + 中文翻译）
- 收藏功能（星标）
- 返回按钮

#### 收藏页（`BookmarksPage.tsx`）
- 从设置页进入
- 展示所有已收藏的新闻
- 支持点击进入详情

---

## 🧩 核心组件说明

### 1. TabBar 底部导航（`TabBar.tsx`）

**位置**：固定在底部  
**高度**：约 64px  
**背景**：白色，上边有阴影分隔  

**导航项配置**：
```javascript
[
  { id: 'home', label: '今日快讯', icon: Home },
  { id: 'category', label: '分类浏览', icon: Grid3x3 },
  { id: 'audio', label: '音频概览', icon: Headphones },
  { id: 'settings', label: '设置', icon: Settings }
]
```

**交互状态**：
- 激活态：图标和文字为 `text-slate-800`
- 未激活：`text-gray-400`
- Hover：`hover:text-gray-600`

### 2. NewsCard 新闻卡片（`NewsCard.tsx`）

**Props接口**：
```typescript
interface NewsCardProps {
  id: string;
  category: 'IR' | 'AI' | 'finance' | 'hr' | 'governance' | 'default';
  categoryLabel: string;       // 显示的分类名称
  titleJp: string;             // 日文标题
  summaryCn: string;           // 中文摘要
  importance: 'S' | 'A' | 'B'; // 重要性级别
  onClick?: () => void;
}
```

**重要性标签颜色**：
- **S级**：`bg-orange-500 text-white`（最高优先级）
- **A级**：`bg-blue-600 text-white`（重要）
- **B级**：`bg-slate-400 text-white`（一般）

**样式特征**：
- 白色背景，灰色边框
- 圆角 `rounded-lg`
- Hover时显示阴影 `hover:shadow-md`
- 标题最多2行，摘要最多2行（`line-clamp-2`）

### 3. CategoryTag 分类标签（`CategoryTag.tsx`）

**支持的变体**：
```typescript
variant: 'IR' | 'AI' | 'finance' | 'hr' | 'governance' | 'default'
```

**颜色映射**：
- IR：`bg-blue-50 text-blue-700`
- AI：`bg-purple-50 text-purple-700`
- finance：`bg-green-50 text-green-700`
- hr：`bg-amber-50 text-amber-700`
- governance：`bg-teal-50 text-teal-700`

**尺寸**：`text-xs`，`px-2.5 py-1`

### 4. Logo 品牌标识（`Logo.tsx`）

**Props配置**：
```typescript
interface LogoProps {
  variant?: 'horizontal' | 'square' | 'icon-only';
  size?: 'small' | 'medium' | 'large';
  theme?: 'dark' | 'light';
}
```

**设计要点**：
- 核心图形：几何化的字母"N"
- SVG Path绘制，支持深浅两种主题
- 包含微妙的虚线分割（斜线）
- 可组合产品名称"N前线"

**使用场景**：
- 启动页：超大Logo动画
- 设置页底部：Square变体 + 产品名
- 品牌展示页：各种尺寸组合

---

## 🎬 启动页动画（`SplashScreen.tsx`）

**动画流程**（总时长 3.8秒）：

**阶段1（0-1.2s）**：大Logo "N"登场
- 200x200px 超大尺寸
- 淡入 + 放大动画（opacity + scale）
- 蓝色发光效果 `drop-shadow`
- Logo路径绘制动画（pathLength）

**阶段2（1.2-2.8s）**：转到Slogan
- Logo淡出
- 双语Slogan淡入滑动：
  - 中文：核心客户动态 · 每日速览
  - 日文：主要顧客の最新動向を、毎日コンパクトに
- 文字大小：`text-2xl` 和 `text-lg`

**阶段3（2.8-3.8s）**：CRT电视关闭效果
- 使用 `clipPath: inset()` 实现上下收缩
- 中间白色亮线闪烁
- 最后淡入黑色，完成过渡

**技术栈**：Motion (motion/react)

---

## 📄 页面头部规范

**标准头部样式**（应用于所有主页面）：
```jsx
<div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-6">
  <h1 className="text-xl font-semibold mb-1">{页面标题}</h1>
  {/* 可选：副标题或更新时间 */}
  <p className="text-sm text-slate-300">{辅助信息}</p>
</div>
```

**特点**：
- 深色渐变背景（深蓝灰）
- 白色文字
- 标题 `text-xl font-semibold`
- 副标题使用 `slate-300` 半透明效果

---

## 🔧 状态管理（SettingsContext）

**Context路径**：`/src/app/contexts/SettingsContext.tsx`

**管理的状态**：
```typescript
interface SettingsContextType {
  selectedTopics: string[];      // 用户选中的主题列表
  setSelectedTopics: (topics: string[]) => void;
  language: string;              // 'both' | 'jp'
  setLanguage: (lang: string) => void;
}
```

**默认值**：
- `selectedTopics`: `['IR', 'AI', 'finance']`
- `language`: `'both'`（日文+中文）

**使用方法**：
```typescript
import { useSettings } from '@/app/contexts/SettingsContext';
const { selectedTopics, language } = useSettings();
```

---

## 📱 响应式与交互规范

### 单手操作优化
- 所有主要交互元素高度 ≥ 44px
- 底部TabBar图标间距充足
- 关键按钮尺寸：`p-4` 或 `p-5`

### 触摸反馈
- 卡片：`hover:shadow-md transition-shadow cursor-pointer`
- 按钮：`hover:from-amber-600 hover:to-orange-600 transition-all`
- 列表项：`hover:border-gray-300`

### 滚动行为
- 主内容区可滚动：`overflow-y-auto`
- 底部TabBar固定：`fixed bottom-0`
- 页面底部预留空间：`pb-20`（避免被TabBar遮挡）
- **隐藏滚动条**（微信小程序风格）：
  ```css
  scrollbar-width: none;
  -ms-overflow-style: none;
  *::-webkit-scrollbar { display: none; }
  ```

---

## 🌐 多语言设计

### 语言切换逻辑

**语言选项**：
1. **日文 + 中文**（`both`）：同时显示原文与翻译（推荐）
2. **仅日文**（`jp`）：只显示日文原文

**实现方式**：
- 在详情页根据 `language` 状态条件渲染
- 使用 `useSettings()` 获取当前语言设置

### 文本规范

**日文文本**：
- 使用在标题、原文引用
- 字号通常比中文稍大（`text-base` vs `text-sm`）

**中文文本**：
- 摘要、翻译、UI标签
- 保持简洁、专业的企业级表达

**中日双语Slogan**：
- 中文：核心客户动态 · 每日速览
- 日文：主要顧客の最新動向を、毎日コンパクトに

---

## 🎯 关键交互流程

### 1. 首页 → 详情页
```
用户点击NewsCard 
  → 触发 handleNewsClick(id)
  → setShowDetail(true) + setSelectedNewsId(id)
  → 渲染 DetailPage
  → 用户点击返回
  → setShowDetail(false)
  → 回到首页
```

### 2. 设置 → 收藏页
```
设置页点击"我的收藏"按钮
  → 触发 handleShowBookmarks()
  → setShowBookmarks(true)
  → 渲染 BookmarksPage
  → 用户点击返回
  → setShowBookmarks(false)
  → 回到设置页
```

### 3. 收藏页 → 详情页
```
收藏页点击NewsCard
  → 触发 onNewsClick(id)
  → setShowDetail(true)
  → 关闭收藏页，打开详情页
```

---

## 🛠️ 技术栈与工具

### 核心技术
- **框架**：React 18.3.1
- **构建**：Vite 6.3.5
- **样式**：Tailwind CSS 4.1.12
- **动画**：Motion 12.23.24 (motion/react)
- **图标**：lucide-react 0.487.0

### UI组件库
- Radix UI（无样式基础组件）
- 自定义组件封装

### 文件导入规范
- 使用 `@` 别名：映射到 `/src` 目录
- 示例：`import { Logo } from '@/app/components/brand/Logo'`

### CSS架构
- Tailwind CSS v4（无需 `tailwind.config.js`）
- CSS Variables 定义在 `/src/styles/theme.css`
- 字体导入统一在 `/src/styles/fonts.css`

---

## 📦 组件目录结构

```
/src/app/components/
├── brand/                    # 品牌相关
│   ├── Logo.tsx             # Logo组件（3种变体）
│   ├── SplashScreen.tsx     # 启动页动画
│   ├── AppIcon.tsx          # App图标
│   └── BrandShowcase.tsx    # 品牌展示页（Cmd+B）
├── pages/                   # 页面组件
│   ├── HomePage.tsx         # 今日快讯
│   ├── CategoryPage.tsx     # 分类浏览
│   ├── AudioPage.tsx        # 音频概览
│   ├── SettingsPage.tsx     # 设置/偏好
│   ├── DetailPage.tsx       # 详情页
│   └── BookmarksPage.tsx    # 收藏页
├── ui/                      # 基础UI组件
├── NewsCard.tsx             # 新闻卡片
├── CategoryTag.tsx          # 分类标签
└── TabBar.tsx               # 底部导航栏

/src/app/contexts/
└── SettingsContext.tsx      # 全局状态管理

/src/styles/
├── theme.css                # 主题变量（勿随意修改）
├── fonts.css                # 字体导入
└── globals.css              # 全局样式
```

---

## ⚠️ 开发注意事项

### 设计原则
1. **克制优先**：避免过度装饰，保持专业感
2. **信息密度**：内容紧凑但不拥挤，留白得当
3. **对比清晰**：重要信息突出，层级分明
4. **日系美学**：沉稳、寂静、极简

### 禁止事项
- ❌ 不要使用娱乐化、卡通风格的图标或插图
- ❌ 不要使用鲜艳、高饱和度的配色
- ❌ 不要添加不必要的动画或特效
- ❌ 不要修改 `/src/styles/theme.css` 的token（除非明确要求）
- ❌ 不要随意改变既定的信息架构（4个一级页面）

### 最佳实践
- ✅ 遵循现有组件的Props接口设计
- ✅ 保持与现有页面一致的头部样式
- ✅ 使用 Tailwind 工具类，避免内联样式
- ✅ 新组件放在对应的目录下（brand / pages / ui）
- ✅ 使用 `useSettings()` 访问全局设置
- ✅ 所有页面预留底部空间 `pb-20`

### 测试要点
- 验证所有TabBar导航切换正常
- 检查详情页和收藏页的返回流程
- 确认语言切换后内容显示正确
- 测试启动页动画完整播放
- 验证响应式布局（尽管主要为移动端设计）

---

## 🎨 品牌资产

### Logo设计理念
- **核心图形**：字母"N"的几何化设计
- **象征意义**：
  - 垂直线条：代表专业性和稳定性
  - 对角线：代表信息流动和连接
  - 虚线分割：代表结构化的信息解构

### Slogan设计
- **中文**：核心客户动态 · 每日速览
  - 强调"核心"：精选重要信息
  - 强调"每日"：定期更新
  - 强调"速览"：快速获取
  
- **日文**：主要顧客の最新動向を、毎日コンパクトに
  - 对应中文含义
  - 强调"コンパクト"（compact）：信息精简

### 品牌色
- **主色**：深石板灰 `#1e293b` (slate-800)
- **辅色**：深灰蓝渐变 `slate-800` → `slate-700`
- **强调色**：琥珀橙 `amber-500` → `orange-500`

---

## 📊 数据结构参考

### 新闻条目（News Item）
```typescript
interface NewsItem {
  id: string;                                    // 唯一标识
  category: 'IR' | 'AI' | 'finance' | 'hr' | 'governance';
  categoryLabel: string;                         // 显示名称
  titleJp: string;                               // 日文标题
  titleCn?: string;                              // 中文标题（可选）
  summaryCn: string;                             // 中文摘要
  contentJp: string;                             // 日文全文
  contentCn?: string;                            // 中文翻译（可选）
  importance: 'S' | 'A' | 'B';                  // 重要性
  publishedAt: string;                           // 发布时间
  source?: string;                               // 来源
  isBookmarked?: boolean;                        // 是否收藏
}
```

### 主题配置（Topics）
```typescript
const topics = [
  { id: 'IR', label: 'IR情报', desc: '财报、业绩发布等', required: true },
  { id: 'AI', label: 'AI・数字化', desc: '技术创新、新产品发布', required: false },
  { id: 'finance', label: '证券/金融', desc: '金融业务动态', required: false },
  { id: 'hr', label: '人事', desc: '组织架构、人事变动', required: false },
  { id: 'governance', label: '治理', desc: 'ESG、可持续发展', required: false },
];
```

---

## 🚀 快速开始清单

当你开始开发微信小程序版本时，请确保：

### 前期准备
1. ✅ 理解4个一级页面的信息架构
2. ✅ 熟悉深蓝灰配色方案
3. ✅ 了解克制、专业的设计风格定位
4. ✅ 掌握组件Props接口和数据结构

### 开发阶段
1. ✅ 复用现有的UI组件设计（NewsCard, CategoryTag等）
2. ✅ 保持与Web版一致的视觉语言
3. ✅ 适配微信小程序的交互规范（如导航栏、下拉刷新等）
4. ✅ 实现状态持久化（localStorage → 微信小程序Storage）

### 测试验证
1. ✅ 在微信开发者工具中测试所有页面
2. ✅ 验证TabBar切换流程
3. ✅ 检查详情页和收藏页跳转
4. ✅ 测试语言切换功能

---

## 📞 补充说明

### 关于品牌展示页
- 快捷键：`Cmd/Ctrl + B` 可打开品牌展示页面
- 包含Logo的各种尺寸和变体
- 启动页预览
- 仅用于开发参考，不在小程序中暴露

### 关于更新频率
- 设计预期：每日3次自动更新
- 更新时间：08:30 / 13:00 / 18:00
- （注：当前Web版为模拟数据）

### 关于NRI
- 全称：野村総合研究所（Nomura Research Institute）
- 是小程序的核心关注对象
- 所有新闻内容围绕NRI的公开动态展开

---

## 🎓 总结

这是一个为**企业中高层管理者**设计的**专业信息工具**，设计风格应当：
- **沉稳克制**：不追求视觉冲击，而是信息清晰
- **高效实用**：快速浏览，一手操作，信息密度高
- **专业可信**：金融/咨询级别的视觉质感
- **双语友好**：支持日文原文和中文翻译无缝切换

在开发微信小程序版本时，请严格遵循上述设计系统，确保视觉和交互的一致性。

---

**文档版本**：v1.0  
**最后更新**：2026-01-29  
**适用范围**：微信小程序开发、UI复刻、设计系统迁移

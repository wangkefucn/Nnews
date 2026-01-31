# ✅ 分类标签与等级系统设计完成总结

## 🎯 你的需求

> 【设置】tab的主题名字（显示），和【今日快讯】tab的分类标签（文字，字体颜色，背景色等），【分类浏览】tab的筛选项名字，标签等，整理形成统一的设计思路。还有各个快讯的级别S，A，B。

---

## ✅ 已完成的工作

### 📁 创建的核心文档

**`/CATEGORY_AND_LEVEL_DESIGN_SYSTEM.md`** ⭐ **主文档**
- 完整的分类体系定义（6大分类）
- 统一的等级系统设计（S/A/B三级）
- 各页面应用规范（今日快讯/分类浏览/设置）
- 完整的WXML+WXSS代码示例
- 数据结构规范
- 配色速查表

---

## 🏷️ 统一的分类体系（6大类）

| Key | 中文名称 | 日文名称 | 描述 | 是否必选 |
|-----|---------|---------|------|---------|
| `ir` | **IR情报** | IRニュース | 财报、业绩发布等 | ✅ 是 |
| `ai` | **AI・数字化** | AI・デジタル | 技术创新、新产品发布 | ❌ 否 |
| `finance` | **证券/金融** | 証券・金融 | 金融业务动态 | ❌ 否 |
| `hr` | **人事・组织** | 人事・組織 | 组织架构、人事变动 | ❌ 否 |
| `governance` | **治理** | ガバナンス | ESG、可持续发展 | ❌ 否 |
| `all` | **全部** | すべて | （筛选用） | - |

### 分类标签配色方案

```css
/* IR情报 - 蓝色系 */
background: #eff6ff;  /* 浅蓝背景 */
color: #1e40af;       /* 深蓝文字 */

/* AI・数字化 - 绿色系 */
background: #f0fdf4;  /* 浅绿背景 */
color: #15803d;       /* 深绿文字 */

/* 证券/金融 - 黄色系 */
background: #fef3c7;  /* 浅黄背景 */
color: #b45309;       /* 深黄文字 */

/* 人事・组织 - 粉色系 */
background: #fce7f3;  /* 浅粉背景 */
color: #be185d;       /* 深粉文字 */

/* 治理 - 紫色系 */
background: #f3e8ff;  /* 浅紫背景 */
color: #6b21a8;       /* 深紫文字 */
```

### 视觉示例

#### 小标签（新闻卡片上）
```
[IR情报]  [AI・数字化]  [证券/金融]  [人事・组织]  [治理]
  蓝色       绿色          黄色         粉色        紫色
```

#### 大按钮（分类浏览筛选器）
```
未选中：浅灰背景 #f1f5f9 + 灰色文字 #64748b
选中：  深色背景 #1e293b + 白色文字 #ffffff
```

---

## 🏅 统一的等级系统（3级）

| 等级 | 名称 | 含义 | 典型场景 | 颜色 |
|------|-----|------|---------|------|
| **S** | 极重要 | 对业务有直接影响的关键信息 | 财报发布、重大人事任命 | 🟠 橙色 |
| **A** | 重要 | 需要关注的重要动态 | 新产品发布、业务合作 | 🔵 蓝色 |
| **B** | 一般 | 日常信息，供参考 | 常规报告、行业动态 | ⚪ 灰色 |

### 等级徽章配色方案

```css
/* S级 - 橙色（强调） */
.level-badge.s {
  background: #f97316;    /* 橙色背景 */
  color: #ffffff;         /* 白色文字 */
  box-shadow: 0 2rpx 8rpx rgba(249, 115, 22, 0.3);  /* 橙色阴影 */
}

/* A级 - 蓝色（重要） */
.level-badge.a {
  background: #3b82f6;    /* 蓝色背景 */
  color: #ffffff;         /* 白色文字 */
  box-shadow: 0 2rpx 8rpx rgba(59, 130, 246, 0.25);  /* 蓝色阴影 */
}

/* B级 - 灰色（一般） */
.level-badge.b {
  background: #9ca3af;    /* 灰色背景 */
  color: #ffffff;         /* 白色文字 */
  /* 无阴影 */
}
```

### 视觉示例

```
 ┌───┐   ┌───┐   ┌───┐
 │ S │   │ A │   │ B │
 └───┘   └───┘   └───┘
  橙色     蓝色     灰色
 有阴影   有阴影   无阴影
```

徽章尺寸：**40rpx × 40rpx**，圆角 **6rpx**，字体 **24rpx 加粗**

---

## 📱 各页面应用规范

### 1️⃣ 今日快讯（HomePage）

#### 新闻卡片布局
```
┌─────────────────────────────────────────┐
│ [AI・数字化]                       [A]   │  ← 左：小标签，右：等级徽章
│                                         │
│ 生成AIを活用した金融機関向け新サービス      │  ← 日文标题（32rpx 粗体）
│ 「AI Insight Platform」を提供開始        │
│                                         │
│ 推出面向金融机构的生成式AI新服务...       │  ← 中文摘要（28rpx 常规）
│                                         │
│ NRI官网 · 10:30                         │  ← 来源·时间（24rpx 灰色）
└─────────────────────────────────────────┘
```

**关键元素**：
- 分类标签（左上）：22rpx字体，4rpx圆角，颜色对应分类
- 等级徽章（右上）：40×40rpx，6rpx圆角，颜色对应等级
- 标题（日文）：32rpx，粗体，深色#111827
- 摘要（中文）：28rpx，常规，灰色#6b7280
- 底部信息：24rpx，浅灰#9ca3af

---

### 2️⃣ 分类浏览（CategoryPage）

#### 顶部分类筛选器
```
┌─────────────────────────────────────────┐
│  [全部] [IR情报] [AI・数字化] ...        │  ← 横向滚动的分类按钮
└─────────────────────────────────────────┘
     ↑
   选中态：深色背景 + 白色文字
   未选中：浅灰背景 + 灰色文字
```

**按钮样式**：
- 高度：64rpx
- 内边距：12rpx 24rpx
- 圆角：24rpx（胶囊形）
- 字体：28rpx
- 间距：16rpx

**状态颜色**：
```css
/* 未选中 */
background: #f1f5f9;
color: #64748b;
font-weight: 400;

/* 选中 */
background: #1e293b;
color: #ffffff;
font-weight: 500;
```

#### 新闻列表
与今日快讯页面相同，显示分类标签和等级徽章。

---

### 3️⃣ 设置页面（SettingsPage）

#### 关注主题选择
```
┌─────────────────────────────────────────┐
│ 关注主题                                 │
│ 选择您关注的信息类型（可多选）            │
├─────────────────────────────────────────┤
│ ☑ IR情报    (必选)                      │  ← 深色复选框 + 必选标记
│   财报、业绩发布等                       │  ← 灰色描述文字
├─────────────────────────────────────────┤
│ ☑ AI・数字化                            │
│   技术创新、新产品发布                   │
├─────────────────────────────────────────┤
│ ☑ 证券/金融                             │
│   金融业务动态                          │
├─────────────────────────────────────────┤
│ ☐ 人事・组织                            │
│   组织架构、人事变动                     │
├─────────────────────────────────────────┤
│ ☐ 治理                                  │
│   ESG、可持续发展                       │
└─────────────────────────────────────────┘
```

**关键元素**：
- 主题名称：28rpx，粗体500，深色#1e293b
- 必选标记：22rpx，橙色#f97316（仅IR情报）
- 描述文字：24rpx，常规，浅灰#9ca3af
- 复选框：深色#1e293b
- 分隔线：#f1f5f9

---

## 📊 完整配色速查表

### 分类标签配色

| 分类 | 背景色 Hex | 文字色 Hex | 色系 |
|------|-----------|-----------|------|
| IR情报 | `#eff6ff` | `#1e40af` | 蓝 |
| AI・数字化 | `#f0fdf4` | `#15803d` | 绿 |
| 证券/金融 | `#fef3c7` | `#b45309` | 黄 |
| 人事・组织 | `#fce7f3` | `#be185d` | 粉 |
| 治理 | `#f3e8ff` | `#6b21a8` | 紫 |

### 等级徽章配色

| 等级 | 背景色 | 文字色 | 阴影 |
|------|--------|--------|------|
| S | `#f97316` | `#ffffff` | `0 2rpx 8rpx rgba(249, 115, 22, 0.3)` |
| A | `#3b82f6` | `#ffffff` | `0 2rpx 8rpx rgba(59, 130, 246, 0.25)` |
| B | `#9ca3af` | `#ffffff` | 无 |

### 筛选按钮配色

| 状态 | 背景色 | 文字色 | 字重 |
|------|--------|--------|------|
| 未选中 | `#f1f5f9` | `#64748b` | 400 |
| 选中 | `#1e293b` | `#ffffff` | 500 |

---

## 💻 代码示例

### 分类数据配置

```javascript
// utils/categories.js
const categories = {
  ir: {
    key: 'ir',
    labelCn: 'IR情报',
    labelJp: 'IRニュース',
    descCn: '财报、业绩发布等',
    descJp: '決算、業績発表など',
    required: true
  },
  ai: {
    key: 'ai',
    labelCn: 'AI・数字化',
    labelJp: 'AI・デジタル',
    descCn: '技术创新、新产品发布',
    descJp: '技術革新、新製品発表',
    required: false
  },
  finance: {
    key: 'finance',
    labelCn: '证券/金融',
    labelJp: '証券・金融',
    descCn: '金融业务动态',
    descJp: '金融ビジネス動向',
    required: false
  },
  hr: {
    key: 'hr',
    labelCn: '人事・组织',
    labelJp: '人事・組織',
    descCn: '组织架构、人事变动',
    descJp: '組織構造、人事異動',
    required: false
  },
  governance: {
    key: 'governance',
    labelCn: '治理',
    labelJp: 'ガバナンス',
    descCn: 'ESG、可持续发展',
    descJp: 'ESG、サステナビリティ',
    required: false
  }
};

module.exports = { categories };
```

### 等级数据配置

```javascript
// utils/levels.js
const levels = {
  s: {
    key: 's',
    labelCn: '极重要',
    labelJp: '最重要',
    bgColor: '#f97316',
    textColor: '#ffffff',
    shadow: '0 2rpx 8rpx rgba(249, 115, 22, 0.3)'
  },
  a: {
    key: 'a',
    labelCn: '重要',
    labelJp: '重要',
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    shadow: '0 2rpx 8rpx rgba(59, 130, 246, 0.25)'
  },
  b: {
    key: 'b',
    labelCn: '一般',
    labelJp: '一般',
    bgColor: '#9ca3af',
    textColor: '#ffffff',
    shadow: 'none'
  }
};

module.exports = { levels };
```

### 新闻卡片组件

```xml
<!-- components/news-card/news-card.wxml -->
<view class="news-card" bindtap="onTap">
  <!-- 顶部信息栏 -->
  <view class="card-header">
    <!-- 分类标签 -->
    <view class="category-tag {{category}}">
      <text>{{categoryLabel}}</text>
    </view>
    
    <!-- 等级徽章 -->
    <view class="level-badge {{importance}}">
      <text>{{importance.toUpperCase()}}</text>
    </view>
  </view>
  
  <!-- 标题和摘要 -->
  <view class="card-content">
    <text class="title-jp">{{titleJp}}</text>
    <text class="summary-cn">{{summaryCn}}</text>
  </view>
  
  <!-- 底部信息 -->
  <view class="card-footer">
    <text class="source">{{source}}</text>
    <text class="divider">·</text>
    <text class="time">{{publishTime}}</text>
  </view>
</view>
```

```css
/* components/news-card/news-card.wxss */

/* 卡片容器 */
.news-card {
  background: #ffffff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.06);
}

/* 顶部信息栏 */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16rpx;
}

/* 分类标签 */
.category-tag {
  padding: 4rpx 16rpx;
  border-radius: 4rpx;
  font-size: 22rpx;
  font-weight: 400;
}

.category-tag.ir {
  background: #eff6ff;
  color: #1e40af;
}

.category-tag.ai {
  background: #f0fdf4;
  color: #15803d;
}

.category-tag.finance {
  background: #fef3c7;
  color: #b45309;
}

.category-tag.hr {
  background: #fce7f3;
  color: #be185d;
}

.category-tag.governance {
  background: #f3e8ff;
  color: #6b21a8;
}

/* 等级徽章 */
.level-badge {
  width: 40rpx;
  height: 40rpx;
  border-radius: 6rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  font-weight: 700;
}

.level-badge.s {
  background: #f97316;
  color: #ffffff;
  box-shadow: 0 2rpx 8rpx rgba(249, 115, 22, 0.3);
}

.level-badge.a {
  background: #3b82f6;
  color: #ffffff;
  box-shadow: 0 2rpx 8rpx rgba(59, 130, 246, 0.25);
}

.level-badge.b {
  background: #9ca3af;
  color: #ffffff;
}

/* 卡片内容 */
.card-content {
  margin-bottom: 16rpx;
}

.title-jp {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #111827;
  line-height: 1.5;
  margin-bottom: 8rpx;
}

.summary-cn {
  display: block;
  font-size: 28rpx;
  color: #6b7280;
  line-height: 1.6;
}

/* 底部信息 */
.card-footer {
  display: flex;
  align-items: center;
  gap: 8rpx;
  font-size: 24rpx;
  color: #9ca3af;
}

.divider {
  color: #d1d5db;
}
```

---

## ✅ 统一性检查清单

开发时确保：

### 分类标签
- [ ] 所有页面使用相同的6个分类key（ir/ai/finance/hr/governance/all）
- [ ] 小标签（卡片）：22rpx字体，4rpx圆角
- [ ] 大按钮（筛选）：28rpx字体，24rpx圆角
- [ ] 颜色严格遵循配色表（5种颜色）
- [ ] 中文和日文名称一致

### 等级徽章
- [ ] S级：橙色#f97316，带阴影
- [ ] A级：蓝色#3b82f6，带阴影
- [ ] B级：灰色#9ca3af，无阴影
- [ ] 徽章尺寸：40×40rpx
- [ ] 字体：24rpx，加粗（700）
- [ ] 圆角：6rpx

### 设置页面
- [ ] IR情报标记为"必选"，橙色文字
- [ ] 复选框颜色：#1e293b
- [ ] 显示描述文字（灰色#9ca3af）
- [ ] 分隔线：#f1f5f9

### 数据结构
- [ ] 使用统一的分类配置对象
- [ ] 使用统一的等级配置对象
- [ ] 新闻数据包含category和importance字段

---

## 📚 相关文档

1. **`/CATEGORY_AND_LEVEL_DESIGN_SYSTEM.md`** ⭐ 主文档（详细规范）
2. **`/PROMPT_FOR_GEMINI.md`** - AI开发文档（已更新）
3. **`/QUICK_START_PROMPT.md`** - 快速启动提示词
4. **`/WECHAT_MINIPROGRAM_UI_GUIDE.md`** - UI完整指南

---

## 🎯 核心价值

### 统一性
✅ 所有页面使用相同的分类和等级定义
✅ 配色、尺寸、圆角完全一致
✅ 数据结构标准化

### 专业性
✅ 克制的配色方案（淡色背景+深色文字）
✅ 清晰的视觉层级（S > A > B）
✅ 符合金融咨询风格

### 可扩展性
✅ 分类和等级配置可集中管理
✅ 新增分类/等级只需修改配置文件
✅ 代码可复用（组件化）

---

## 🚀 下一步

### 复制给AI开发

使用 `/QUICK_START_PROMPT.md`，AI会自动读取所有设计规范，包括：
- 分类标签系统
- 等级徽章系统
- 各页面应用规范
- 完整代码示例

### 验收检查

开发完成后，对照 **配色速查表** 和 **检查清单** 验收：
1. 打开任意新闻卡片，检查分类标签颜色
2. 检查S/A/B徽章颜色和阴影
3. 打开分类浏览，检查筛选按钮样式
4. 打开设置页面，检查主题选择样式

---

**统一、专业、克制的设计系统，为用户提供一致的使用体验！** ✨

# 🏷️ N前线 分类标签与等级系统设计规范

## 📋 设计原则

### 核心目标
1. **视觉一致性**：所有页面的分类标签和等级徽章样式完全统一
2. **信息层级**：通过颜色和大小区分重要性（S > A > B）
3. **快速识别**：用户能在0.5秒内识别分类和重要性
4. **克制专业**：符合金融咨询风格，避免娱乐化

---

## 🎨 一、分类体系（Category System）

### 1.1 分类列表（6大类）

| Key | 中文名称 | 日文名称 | 英文描述 | 关键词示例 |
|-----|---------|---------|---------|-----------|
| `ir` | IR情报 | IRニュース | IR Information | 财报、业绩发布等 |
| `ai` | AI・数字化 | AI・デジタル | AI & Digital | 技术创新、新产品发布 |
| `finance` | 证券/金融 | 証券・金融 | Finance & Securities | 金融业务动态 |
| `hr` | 人事・组织 | 人事・組織 | HR & Organization | 组织架构、人事变动 |
| `governance` | 治理 | ガバナンス | Governance | ESG、可持续发展 |
| `all` | 全部 | すべて | All | （筛选用） |

### 1.2 分类标签视觉设计

#### 标签样式规格

**小标签（用于卡片左上角）**：
```css
/* 基础样式 */
.category-tag {
  display: inline-block;
  padding: 4rpx 16rpx;
  border-radius: 4rpx;
  font-size: 22rpx;
  font-weight: 400;
  letter-spacing: 0.5rpx;
}

/* 各分类颜色 */
.category-tag.ir {
  background: #eff6ff;    /* 浅蓝背景 */
  color: #1e40af;         /* 深蓝文字 */
}

.category-tag.ai {
  background: #f0fdf4;    /* 浅绿背景 */
  color: #15803d;         /* 深绿文字 */
}

.category-tag.finance {
  background: #fef3c7;    /* 浅黄背景 */
  color: #b45309;         /* 深黄文字 */
}

.category-tag.hr {
  background: #fce7f3;    /* 浅粉背景 */
  color: #be185d;         /* 深粉文字 */
}

.category-tag.governance {
  background: #f3e8ff;    /* 浅紫背景 */
  color: #6b21a8;         /* 深紫文字 */
}
```

**大标签/筛选按钮（用于分类浏览页面顶部）**：
```css
/* 未选中状态 */
.category-filter {
  padding: 12rpx 24rpx;
  border-radius: 24rpx;
  font-size: 28rpx;
  font-weight: 400;
  background: #f1f5f9;    /* 浅灰背景 */
  color: #64748b;         /* 中灰文字 */
  border: none;
  transition: all 0.2s ease;
}

/* 选中状态 */
.category-filter.active {
  background: #1e293b;    /* 深色背景 */
  color: #ffffff;         /* 白色文字 */
  font-weight: 500;
}
```

#### 视觉示例

**今日快讯 - 新闻卡片**：
```
┌────────────────────────────────────┐
│ [IR情报]                    [S]    │  ← 小标签 + 等级徽章
│                                    │
│ NRI、2024年度第3四半期決算を発表    │
│ 营业利润は前年同期比12.3%増         │
│                                    │
│ 野村综研公布2024财年Q3财报... 08:30 │
└────────────────────────────────────┘
```

**分类浏览 - 顶部筛选器**：
```
┌────────────────────────────────────┐
│ [证券/金融] [AI/数字化] ...         │  ← 大标签（可点击切换）
└────────────────────────────────────┘
```

**设置页面 - 关注主题**：
```
┌────────────────────────────────────┐
│ ☑ IR情报    (必选)                 │
│   财报、业绩发布等                  │
├────────────────────────────────────┤
│ ☑ AI・数字化                       │
│   技术创新、新产品发布              │
├────────────────────────────────────┤
│ ☐ 人事                             │
│   组织架构、人事变动                │
└────────────────────────────────────┘
```

---

## 🏅 二、等级系统（Importance Level）

### 2.1 等级定义

| 等级 | 中文名称 | 含义 | 典型场景 |
|------|---------|------|---------|
| **S** | 极重要 | 对业务有直接影响的关键信息 | 财报发布、重大人事任命、战略调整 |
| **A** | 重要 | 需要关注的重要动态 | 新产品发布、业务合作、技术创新 |
| **B** | 一般 | 日常信息，供参考 | 常规报告、行业动态、一般新闻 |

### 2.2 等级徽章视觉设计

#### 徽章样式规格

```css
/* 基础徽章样式 */
.level-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40rpx;
  height: 40rpx;
  border-radius: 6rpx;
  font-size: 24rpx;
  font-weight: 700;
  letter-spacing: 0.5rpx;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* S级 - 橙色（强调） */
.level-badge.s {
  background: #f97316;    /* 橙色背景 */
  color: #ffffff;         /* 白色文字 */
  box-shadow: 0 2rpx 8rpx rgba(249, 115, 22, 0.3);
}

/* A级 - 蓝色（重要） */
.level-badge.a {
  background: #3b82f6;    /* 蓝色背景 */
  color: #ffffff;         /* 白色文字 */
  box-shadow: 0 2rpx 8rpx rgba(59, 130, 246, 0.25);
}

/* B级 - 灰色（一般） */
.level-badge.b {
  background: #9ca3af;    /* 灰色背景 */
  color: #ffffff;         /* 白色文字 */
}
```

#### 视觉示例

```
S级：  ┌───┐
      │ S │  ← 橙色 #f97316，带阴影
      └───┘

A级：  ┌───┐
      │ A │  ← 蓝色 #3b82f6，带阴影
      └───┘

B级：  ┌───┐
      │ B │  ← 灰色 #9ca3af，无阴影
      └───┘
```

---

## 📐 三、各页面应用规范

### 3.1 今日快讯（HomePage）

#### 新闻卡片布局
```
┌─────────────────────────────────────────┐
│ [AI・数字化]                       [A]   │  ← 左：分类小标签，右：等级徽章
│                                         │
│ 生成AIを活用した金融機関向け新サービス      │  ← 日文标题（粗体）
│ 「AI Insight Platform」を提供開始        │
│                                         │
│ 推出面向金融机构的生成式AI新服务...       │  ← 中文摘要（常规）
│                                         │
│ NRI官网 · 10:30                         │  ← 来源 · 时间（小字灰色）
└─────────────────────────────────────────┘
```

#### WXML代码
```xml
<view class="news-card">
  <!-- 顶部信息栏 -->
  <view class="card-header">
    <!-- 分类标签 -->
    <view class="category-tag {{item.category}}">
      <text>{{categoryLabels[item.category]}}</text>
    </view>
    
    <!-- 等级徽章 -->
    <view class="level-badge {{item.importance}}">
      <text>{{item.importance.toUpperCase()}}</text>
    </view>
  </view>
  
  <!-- 标题和摘要 -->
  <view class="card-content">
    <text class="title-jp">{{item.titleJp}}</text>
    <text class="summary-cn">{{item.summaryCn}}</text>
  </view>
  
  <!-- 底部元信息 -->
  <view class="card-footer">
    <text class="source">{{item.source}}</text>
    <text class="divider">·</text>
    <text class="time">{{item.publishTime}}</text>
  </view>
</view>
```

#### WXSS样式
```css
.news-card {
  background: #ffffff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.06);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16rpx;
}

/* 分类标签（小） */
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

### 3.2 分类浏览（CategoryPage）

#### 顶部分类筛选器
```
┌─────────────────────────────────────────┐
│ [证券/金融] [AI/数字化] [IR情报] ...     │  ← 横向滚动的分类按钮
└─────────────────────────────────────────┘
```

#### WXML代码
```xml
<view class="category-tabs">
  <scroll-view scroll-x class="tabs-scroll" scroll-with-animation>
    <view class="tab-list">
      <button 
        class="category-filter {{activeCategory === 'all' ? 'active' : ''}}"
        bindtap="selectCategory"
        data-key="all">
        全部
      </button>
      <button 
        class="category-filter {{activeCategory === 'ir' ? 'active' : ''}}"
        bindtap="selectCategory"
        data-key="ir">
        IR情报
      </button>
      <button 
        class="category-filter {{activeCategory === 'ai' ? 'active' : ''}}"
        bindtap="selectCategory"
        data-key="ai">
        AI・数字化
      </button>
      <button 
        class="category-filter {{activeCategory === 'finance' ? 'active' : ''}}"
        bindtap="selectCategory"
        data-key="finance">
        证券/金融
      </button>
      <button 
        class="category-filter {{activeCategory === 'hr' ? 'active' : ''}}"
        bindtap="selectCategory"
        data-key="hr">
        人事・组织
      </button>
      <button 
        class="category-filter {{activeCategory === 'governance' ? 'active' : ''}}"
        bindtap="selectCategory"
        data-key="governance">
        治理
      </button>
    </view>
  </scroll-view>
</view>
```

#### WXSS样式
```css
.category-tabs {
  background: #ffffff;
  padding: 16rpx 0;
  margin-bottom: 16rpx;
}

.tabs-scroll {
  white-space: nowrap;
}

.tab-list {
  display: inline-flex;
  gap: 16rpx;
  padding: 0 32rpx;
}

.category-filter {
  display: inline-block;
  padding: 12rpx 24rpx;
  border-radius: 24rpx;
  font-size: 28rpx;
  font-weight: 400;
  background: #f1f5f9;
  color: #64748b;
  border: none;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.category-filter.active {
  background: #1e293b;
  color: #ffffff;
  font-weight: 500;
}

.category-filter::after {
  border: none;
}
```

---

### 3.3 设置页面（SettingsPage）- 关注主题

#### 主题列表布局
```
┌─────────────────────────────────────────┐
│ 关注主题                                 │
│ 选择您关注的信息类型（可多选）            │
├─────────────────────────────────────────┤
│ ☑ IR情报    (必选)                      │
│   财报、业绩发布等                       │
├─────────────────────────────────────────┤
│ ☑ AI・数字化                            │
│   技术创新、新产品发布                   │
├─────────────────────────────────────────┤
│ ☑ 证券/金融                             │
│   金融业务动态                          │
├─────────────────────────────────────────┤
│ ☐ 人事                                  │
│   组织架构、人事变动                     │
├─────────────────────────────────────────┤
│ ☐ 治理                                  │
│   ESG、可持续发展                       │
└─────────────────────────────────────────┘
```

#### WXML代码
```xml
<view class="settings-section">
  <view class="section-header">
    <text class="section-title">关注主题</text>
    <text class="section-subtitle">选择您关注的信息类型（可多选）</text>
  </view>
  
  <view class="topic-list">
    <!-- IR情报 - 必选 -->
    <view class="topic-item required">
      <checkbox-group bindchange="onTopicChange" data-key="ir">
        <label class="topic-label">
          <checkbox value="ir" checked="{{true}}" disabled="{{true}}" color="#1e293b"/>
          <view class="topic-info">
            <view class="topic-header">
              <text class="topic-name">IR情报</text>
              <text class="required-tag">(必选)</text>
            </view>
            <text class="topic-desc">财报、业绩发布等</text>
          </view>
        </label>
      </checkbox-group>
    </view>
    
    <!-- AI・数字化 -->
    <view class="topic-item">
      <checkbox-group bindchange="onTopicChange" data-key="ai">
        <label class="topic-label">
          <checkbox value="ai" checked="{{settings.topics.includes('ai')}}" color="#1e293b"/>
          <view class="topic-info">
            <text class="topic-name">AI・数字化</text>
            <text class="topic-desc">技术创新、新产品发布</text>
          </view>
        </label>
      </checkbox-group>
    </view>
    
    <!-- 证券/金融 -->
    <view class="topic-item">
      <checkbox-group bindchange="onTopicChange" data-key="finance">
        <label class="topic-label">
          <checkbox value="finance" checked="{{settings.topics.includes('finance')}}" color="#1e293b"/>
          <view class="topic-info">
            <text class="topic-name">证券/金融</text>
            <text class="topic-desc">金融业务动态</text>
          </view>
        </label>
      </checkbox-group>
    </view>
    
    <!-- 人事・组织 -->
    <view class="topic-item">
      <checkbox-group bindchange="onTopicChange" data-key="hr">
        <label class="topic-label">
          <checkbox value="hr" checked="{{settings.topics.includes('hr')}}" color="#1e293b"/>
          <view class="topic-info">
            <text class="topic-name">人事・组织</text>
            <text class="topic-desc">组织架构、人事变动</text>
          </view>
        </label>
      </checkbox-group>
    </view>
    
    <!-- 治理 -->
    <view class="topic-item">
      <checkbox-group bindchange="onTopicChange" data-key="governance">
        <label class="topic-label">
          <checkbox value="governance" checked="{{settings.topics.includes('governance')}}" color="#1e293b"/>
          <view class="topic-info">
            <text class="topic-name">治理</text>
            <text class="topic-desc">ESG、可持续发展</text>
          </view>
        </label>
      </checkbox-group>
    </view>
  </view>
</view>
```

#### WXSS样式
```css
.settings-section {
  background: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin: 16rpx 32rpx;
}

.section-header {
  margin-bottom: 24rpx;
}

.section-title {
  display: block;
  font-size: 32rpx;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8rpx;
}

.section-subtitle {
  display: block;
  font-size: 24rpx;
  color: #64748b;
}

.topic-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.topic-item {
  padding: 24rpx 0;
  border-bottom: 1rpx solid #f1f5f9;
}

.topic-item:last-child {
  border-bottom: none;
}

.topic-label {
  display: flex;
  align-items: flex-start;
  gap: 16rpx;
}

.topic-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rpx;
}

.topic-header {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.topic-name {
  font-size: 28rpx;
  font-weight: 500;
  color: #1e293b;
}

.required-tag {
  font-size: 22rpx;
  color: #f97316;
}

.topic-desc {
  font-size: 24rpx;
  color: #9ca3af;
  line-height: 1.4;
}

/* 必选项置灰 */
.topic-item.required {
  opacity: 0.6;
}
```

---

## 📊 四、数据结构规范

### 4.1 新闻数据结构
```javascript
// 单条新闻对象
const newsItem = {
  id: 1,                              // 唯一ID
  titleJp: 'NRI、2024年度...',        // 日文标题
  summaryCn: 'NRI发布了...',          // 中文摘要
  category: 'ir',                     // 分类key（ir/ai/finance/hr/governance）
  importance: 's',                    // 等级（s/a/b）
  publishTime: '10:30',               // 发布时间
  publishDate: '2026-01-30',          // 发布日期
  source: 'NRI官网',                  // 来源
  isBookmarked: false,                // 是否已收藏
  url: 'https://...'                  // 原文链接
};
```

### 4.2 分类配置
```javascript
// pages/data/categories.js
const categories = {
  all: {
    key: 'all',
    labelCn: '全部',
    labelJp: 'すべて',
    descCn: '所有类型',
    descJp: 'すべてのタイプ',
    required: false
  },
  ir: {
    key: 'ir',
    labelCn: 'IR情报',
    labelJp: 'IRニュース',
    descCn: '财报、业绩发布等',
    descJp: '決算、業績発表など',
    required: true  // 必选
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

### 4.3 等级配置
```javascript
// pages/data/levels.js
const levels = {
  s: {
    key: 's',
    labelCn: '极重要',
    labelJp: '最重要',
    color: '#f97316',       // 橙色
    bgColor: '#f97316',
    textColor: '#ffffff',
    shadow: '0 2rpx 8rpx rgba(249, 115, 22, 0.3)'
  },
  a: {
    key: 'a',
    labelCn: '重要',
    labelJp: '重要',
    color: '#3b82f6',       // 蓝色
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    shadow: '0 2rpx 8rpx rgba(59, 130, 246, 0.25)'
  },
  b: {
    key: 'b',
    labelCn: '一般',
    labelJp: '一般',
    color: '#9ca3af',       // 灰色
    bgColor: '#9ca3af',
    textColor: '#ffffff',
    shadow: 'none'
  }
};

module.exports = { levels };
```

---

## 🎯 五、使用示例

### 5.1 在页面中使用分类标签

```javascript
// pages/home/home.js
const { categories } = require('../data/categories');

Page({
  data: {
    categories: categories,
    newsList: []
  },
  
  onLoad() {
    this.loadNews();
  },
  
  // 获取分类标签文字
  getCategoryLabel(key) {
    return this.data.categories[key]?.labelCn || '未知';
  }
});
```

```xml
<!-- pages/home/home.wxml -->
<view class="category-tag {{item.category}}">
  <text>{{categories[item.category].labelCn}}</text>
</view>
```

### 5.2 在页面中使用等级徽章

```javascript
// pages/home/home.js
const { levels } = require('../data/levels');

Page({
  data: {
    levels: levels,
    newsList: []
  }
});
```

```xml
<!-- pages/home/home.wxml -->
<view class="level-badge {{item.importance}}" 
      style="background: {{levels[item.importance].bgColor}}; 
             color: {{levels[item.importance].textColor}}; 
             box-shadow: {{levels[item.importance].shadow}}">
  <text>{{item.importance.toUpperCase()}}</text>
</view>
```

---

## 📋 六、完整配色速查表

### 分类标签配色

| 分类 | 背景色 | 文字色 | Hex背景 | Hex文字 |
|------|--------|--------|---------|---------|
| IR情报 | 浅蓝 | 深蓝 | `#eff6ff` | `#1e40af` |
| AI・数字化 | 浅绿 | 深绿 | `#f0fdf4` | `#15803d` |
| 证券/金融 | 浅黄 | 深黄 | `#fef3c7` | `#b45309` |
| 人事・组织 | 浅粉 | 深粉 | `#fce7f3` | `#be185d` |
| 治理 | 浅紫 | 深紫 | `#f3e8ff` | `#6b21a8` |

### 等级徽章配色

| 等级 | 背景色 | 文字色 | 阴影 |
|------|--------|--------|------|
| S | `#f97316` | `#ffffff` | `0 2rpx 8rpx rgba(249, 115, 22, 0.3)` |
| A | `#3b82f6` | `#ffffff` | `0 2rpx 8rpx rgba(59, 130, 246, 0.25)` |
| B | `#9ca3af` | `#ffffff` | `none` |

### 筛选按钮配色

| 状态 | 背景色 | 文字色 | 字重 |
|------|--------|--------|------|
| 未选中 | `#f1f5f9` | `#64748b` | 400 |
| 选中 | `#1e293b` | `#ffffff` | 500 |

---

## ✅ 总结

### 设计统一性检查清单

开发时确保：

#### 分类标签
- [ ] 所有页面使用相同的分类key（ir/ai/finance/hr/governance）
- [ ] 卡片小标签使用22rpx字体
- [ ] 筛选按钮使用28rpx字体
- [ ] 颜色与配色表完全一致
- [ ] 圆角：小标签4rpx，大按钮24rpx

#### 等级徽章
- [ ] S级橙色 #f97316 + 阴影
- [ ] A级蓝色 #3b82f6 + 阴影
- [ ] B级灰色 #9ca3af 无阴影
- [ ] 徽章尺寸40×40rpx，字体24rpx加粗
- [ ] 圆角6rpx

#### 文字显示
- [ ] 中文和日文名称一致使用
- [ ] 设置页面显示描述文字
- [ ] 卡片上仅显示分类名称

#### 数据结构
- [ ] 使用统一的分类key
- [ ] 等级使用小写（s/a/b）
- [ ] 所有分类和等级配置集中管理

---

**统一的设计系统确保了专业、克制的视觉风格！** ✨

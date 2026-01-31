# UI组件详细规范 | Component Specification

**版本**：1.0.0  
**更新日期**：2026-01-31  
**适用范围**：微信小程序原生开发

---

## 📋 组件代码规范

本文档提供**微信小程序原生开发**的组件实现规范，包含完整的代码示例和技术细节。

---

## 🏷️ CategoryTag - 分类标签组件

### 文件结构

```
/components/
├─ category-tag/
│  ├─ category-tag.wxml
│  ├─ category-tag.wxss
│  ├─ category-tag.js
│  └─ category-tag.json
```

### 组件接口（category-tag.js）

```javascript
Component({
  properties: {
    // 分类key: 'ir' | 'ai' | 'finance' | 'hr' | 'governance' | 'all'
    category: {
      type: String,
      value: 'ir'
    },
    
    // 尺寸变体: 'small' | 'large' | 'filter'
    variant: {
      type: String,
      value: 'small'
    },
    
    // 是否激活（filter变体专用）
    active: {
      type: Boolean,
      value: false
    },
    
    // 是否显示描述（large变体可用）
    showDescription: {
      type: Boolean,
      value: false
    },
    
    // 语言: 'cn' | 'jp'
    language: {
      type: String,
      value: 'cn'
    }
  },
  
  data: {
    // 分类配置数据
    categoryConfig: {
      ir: {
        labelCn: 'IR情报',
        labelJp: 'IRニュース',
        descCn: '财报、业绩发布等',
        descJp: '決算、業績発表など',
        bgColor: '#3b82f6',
        borderColor: '#60a5fa'
      },
      ai: {
        labelCn: 'AI・数字化',
        labelJp: 'AI・デジタル',
        descCn: '技术创新、新产品发布',
        descJp: '技術革新、新製品発表',
        bgColor: '#10b981',
        borderColor: '#34d399'
      },
      finance: {
        labelCn: '证券/金融',
        labelJp: '証券・金融',
        descCn: '金融业务动态',
        descJp: '金融ビジネス動向',
        bgColor: '#8b5cf6',
        borderColor: '#a78bfa'
      },
      hr: {
        labelCn: '人事・组织',
        labelJp: '人事・組織',
        descCn: '人事任命、组织变革',
        descJp: '人事任命、組織変革',
        bgColor: '#f97316',
        borderColor: '#fb923c'
      },
      governance: {
        labelCn: '治理',
        labelJp: 'ガバナンス',
        descCn: '公司治理、CSR',
        descJp: 'コーポレートガバナンス、CSR',
        bgColor: '#6b7280',
        borderColor: '#9ca3af'
      },
      all: {
        labelCn: '全部',
        labelJp: 'すべて',
        descCn: '所有类型',
        descJp: 'すべてのタイプ',
        bgColor: '#334155',
        borderColor: '#475569'
      }
    }
  },
  
  methods: {
    // 点击事件
    handleTap() {
      this.triggerEvent('tap', {
        category: this.properties.category
      });
    },
    
    // 获取当前配置
    getCurrentConfig() {
      return this.data.categoryConfig[this.properties.category];
    },
    
    // 获取显示文本
    getLabel() {
      const config = this.getCurrentConfig();
      return this.properties.language === 'cn' ? config.labelCn : config.labelJp;
    },
    
    // 获取描述文本
    getDescription() {
      const config = this.getCurrentConfig();
      return this.properties.language === 'cn' ? config.descCn : config.descJp;
    }
  }
});
```

### 组件模板（category-tag.wxml）

```xml
<view 
  class="category-tag category-tag--{{variant}} {{active ? 'category-tag--active' : ''}}"
  style="background-color: {{active || variant !== 'filter' ? categoryConfig[category].bgColor : 'transparent'}}; border-color: {{categoryConfig[category].borderColor}};"
  bindtap="handleTap"
>
  <!-- Small / Filter 变体 -->
  <text wx:if="{{variant === 'small' || variant === 'filter'}}" class="category-tag__label">
    {{language === 'cn' ? categoryConfig[category].labelCn : categoryConfig[category].labelJp}}
  </text>
  
  <!-- Large 变体 -->
  <view wx:if="{{variant === 'large'}}" class="category-tag__large-content">
    <view class="category-tag__large-title">
      <text class="category-tag__label">{{categoryConfig[category].labelCn}}</text>
      <text class="category-tag__label-jp">{{categoryConfig[category].labelJp}}</text>
    </view>
    
    <text wx:if="{{showDescription}}" class="category-tag__desc">
      {{language === 'cn' ? categoryConfig[category].descCn : categoryConfig[category].descJp}}
    </text>
  </view>
</view>
```

### 组件样式（category-tag.wxss）

```css
/* 基础样式 */
.category-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.2s ease;
}

/* Small 变体 */
.category-tag--small {
  height: 36rpx;
  padding: 0 16rpx;
  font-size: 24rpx;
  border-radius: 4rpx;
}

/* Large 变体 */
.category-tag--large {
  padding: 16rpx 32rpx;
  border-radius: 8rpx;
}

.category-tag__large-content {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.category-tag__large-title {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.category-tag__label {
  font-size: 28rpx;
  font-weight: 500;
}

.category-tag__label-jp {
  font-size: 24rpx;
  opacity: 0.9;
}

.category-tag__desc {
  font-size: 24rpx;
  opacity: 0.8;
  margin-top: 4rpx;
}

/* Filter 变体 */
.category-tag--filter {
  min-width: 140rpx;
  height: 56rpx;
  padding: 0 32rpx;
  font-size: 28rpx;
  border-radius: 9999rpx;
  border: 2rpx solid transparent;
}

/* Filter 未激活状态 */
.category-tag--filter:not(.category-tag--active) {
  background-color: transparent !important;
  border-color: #e5e7eb;
  color: #6b7280;
}

/* 点击效果 */
.category-tag:active {
  opacity: 0.8;
  transform: scale(0.98);
}
```

### 使用示例

```xml
<!-- Small 变体（新闻卡片） -->
<category-tag 
  category="ir" 
  variant="small" 
  language="cn"
/>

<!-- Large 变体（设置页面） -->
<category-tag 
  category="ai" 
  variant="large" 
  show-description="{{true}}"
  language="cn"
/>

<!-- Filter 变体（分类筛选栏） -->
<category-tag 
  category="finance" 
  variant="filter" 
  active="{{selectedCategories.includes('finance')}}"
  bind:tap="onCategoryTap"
/>
```

---

## 🏆 LevelBadge - 等级徽章组件

### 文件结构

```
/components/
├─ level-badge/
│  ├─ level-badge.wxml
│  ├─ level-badge.wxss
│  ├─ level-badge.js
│  └─ level-badge.json
```

### 组件接口（level-badge.js）

```javascript
Component({
  properties: {
    // 等级: 's' | 'a' | 'b'
    level: {
      type: String,
      value: 's'
    },
    
    // 尺寸变体: 'compact' | 'standard' | 'large'
    variant: {
      type: String,
      value: 'standard'
    },
    
    // 是否选中（large变体专用）
    selected: {
      type: Boolean,
      value: true
    },
    
    // 语言: 'cn' | 'jp'
    language: {
      type: String,
      value: 'cn'
    }
  },
  
  data: {
    // 等级配置数据
    levelConfig: {
      s: {
        labelCn: 'S级',
        labelJp: 'Sクラス',
        letter: 'S',
        bgColor: '#f97316',
        borderColor: '#fb923c',
        descCn: '高度重要',
        descJp: '高度重要'
      },
      a: {
        labelCn: 'A级',
        labelJp: 'Aクラス',
        letter: 'A',
        bgColor: '#3b82f6',
        borderColor: '#60a5fa',
        descCn: '中度重要',
        descJp: '中度重要'
      },
      b: {
        labelCn: 'B级',
        labelJp: 'Bクラス',
        letter: 'B',
        bgColor: '#6b7280',
        borderColor: '#9ca3af',
        descCn: '一般重要',
        descJp: '一般重要'
      }
    }
  },
  
  methods: {
    handleTap() {
      this.triggerEvent('tap', {
        level: this.properties.level
      });
    },
    
    getCurrentConfig() {
      return this.data.levelConfig[this.properties.level];
    },
    
    getDisplayText() {
      const config = this.getCurrentConfig();
      if (this.properties.variant === 'large') {
        return this.properties.language === 'cn' ? config.labelCn : config.labelJp;
      }
      return config.letter;
    }
  }
});
```

### 组件模板（level-badge.wxml）

```xml
<view 
  class="level-badge level-badge--{{variant}} {{selected ? 'level-badge--selected' : 'level-badge--unselected'}}"
  style="background-color: {{selected || variant !== 'large' ? levelConfig[level].bgColor : 'transparent'}}; border-color: {{levelConfig[level].borderColor}};"
  bindtap="handleTap"
>
  <text class="level-badge__text">
    {{variant === 'large' ? (language === 'cn' ? levelConfig[level].labelCn : levelConfig[level].labelJp) : levelConfig[level].letter}}
  </text>
</view>
```

### 组件样式（level-badge.wxss）

```css
/* 基础样式 */
.level-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  font-weight: 600;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

/* Compact 变体 */
.level-badge--compact {
  width: 36rpx;
  height: 36rpx;
  font-size: 22rpx;
}

/* Standard 变体 */
.level-badge--standard {
  width: 44rpx;
  height: 44rpx;
  font-size: 24rpx;
}

/* Large 变体 */
.level-badge--large {
  width: 96rpx;
  height: 96rpx;
  font-size: 32rpx;
  border: 3rpx solid;
}

/* 未选中状态（仅large变体） */
.level-badge--large.level-badge--unselected {
  background-color: transparent !important;
  border-color: #e5e7eb !important;
  color: #9ca3af !important;
}

/* 选中状态（仅large变体） */
.level-badge--large.level-badge--selected {
  border-color: transparent;
}

/* 点击效果 */
.level-badge:active {
  opacity: 0.8;
  transform: scale(0.95);
}

.level-badge__text {
  line-height: 1;
}
```

### 使用示例

```xml
<!-- Compact 变体（详情页） -->
<level-badge 
  level="s" 
  variant="compact"
/>

<!-- Standard 变体（新闻卡片） -->
<level-badge 
  level="a" 
  variant="standard"
/>

<!-- Large 变体（设置页面） -->
<level-badge 
  level="b" 
  variant="large" 
  selected="{{selectedLevels.includes('b')}}"
  bind:tap="onLevelTap"
/>
```

---

## ⏰ TimeFilter - 时间筛选组件

### 1. DateSwitcher - 日期切换器

#### 文件：date-switcher.js

```javascript
Component({
  properties: {
    currentDate: {
      type: String,
      value: '' // YYYY-MM-DD
    }
  },
  
  methods: {
    onPrevDay() {
      const date = new Date(this.properties.currentDate);
      date.setDate(date.getDate() - 1);
      this.triggerEvent('change', {
        date: this.formatDate(date)
      });
    },
    
    onNextDay() {
      const date = new Date(this.properties.currentDate);
      date.setDate(date.getDate() + 1);
      this.triggerEvent('change', {
        date: this.formatDate(date)
      });
    },
    
    formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    
    getDisplayDate() {
      const date = new Date(this.properties.currentDate);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      const weekday = weekdays[date.getDay()];
      
      return `${month}月${day}日 ${weekday}`;
    }
  }
});
```

#### 模板：date-switcher.wxml

```xml
<view class="date-switcher">
  <view class="date-switcher__button" bindtap="onPrevDay">
    <text class="date-switcher__arrow">←</text>
  </view>
  
  <view class="date-switcher__current">
    <text class="date-switcher__text">{{getDisplayDate()}}</text>
  </view>
  
  <view class="date-switcher__button" bindtap="onNextDay">
    <text class="date-switcher__arrow">→</text>
  </view>
</view>
```

#### 样式：date-switcher.wxss

```css
.date-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 32rpx;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

.date-switcher__button {
  width: 64rpx;
  height: 64rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.2s;
}

.date-switcher__button:active {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(0.95);
}

.date-switcher__arrow {
  font-size: 32rpx;
  color: #ffffff;
  font-weight: 500;
}

.date-switcher__current {
  flex: 1;
  text-align: center;
}

.date-switcher__text {
  font-size: 32rpx;
  font-weight: 600;
  color: #ffffff;
}
```

### 2. QuickTimeFilter - 快速时间筛选

#### 文件：quick-time-filter.js

```javascript
Component({
  properties: {
    selectedPreset: {
      type: String,
      value: '7d'
    }
  },
  
  data: {
    presets: [
      { key: 'today', label: '今日' },
      { key: '3d', label: '3日' },
      { key: '7d', label: '7日' },
      { key: '30d', label: '30日' },
      { key: 'all', label: '全部' },
      { key: 'custom', label: '自定义' }
    ]
  },
  
  methods: {
    onPresetTap(e) {
      const preset = e.currentTarget.dataset.preset;
      
      if (preset === 'custom') {
        this.triggerEvent('customclick');
      } else {
        this.triggerEvent('change', { preset });
      }
    }
  }
});
```

#### 模板：quick-time-filter.wxml

```xml
<scroll-view class="quick-time-filter" scroll-x enhanced show-scrollbar="{{false}}">
  <view class="quick-time-filter__list">
    <view 
      wx:for="{{presets}}" 
      wx:key="key"
      class="quick-time-filter__item {{selectedPreset === item.key ? 'quick-time-filter__item--active' : ''}}"
      data-preset="{{item.key}}"
      bindtap="onPresetTap"
    >
      <text class="quick-time-filter__text">{{item.label}}</text>
    </view>
  </view>
</scroll-view>
```

#### 样式：quick-time-filter.wxss

```css
.quick-time-filter {
  width: 100%;
  white-space: nowrap;
}

.quick-time-filter__list {
  display: inline-flex;
  gap: 16rpx;
  padding: 24rpx 32rpx;
}

.quick-time-filter__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120rpx;
  height: 56rpx;
  padding: 0 32rpx;
  background: #ffffff;
  border: 2rpx solid #e5e7eb;
  border-radius: 9999rpx;
  transition: all 0.2s;
}

.quick-time-filter__item--active {
  background: #1e293b;
  border-color: #1e293b;
}

.quick-time-filter__item:active {
  opacity: 0.8;
  transform: scale(0.98);
}

.quick-time-filter__text {
  font-size: 28rpx;
  font-weight: 500;
  color: #6b7280;
}

.quick-time-filter__item--active .quick-time-filter__text {
  color: #ffffff;
}
```

### 3. AudioTimeFilter - 音频时间筛选

#### 文件：audio-time-filter.js

```javascript
Component({
  properties: {
    selectedPreset: {
      type: String,
      value: '30d'
    }
  },
  
  data: {
    presets: [
      { key: '7d', label: '近7日' },
      { key: '30d', label: '近30日' },
      { key: '90d', label: '近90日' },
      { key: 'all', label: '全部' }
    ],
    showPicker: false
  },
  
  methods: {
    onFilterTap() {
      this.setData({ showPicker: !this.data.showPicker });
    },
    
    onPresetSelect(e) {
      const preset = e.currentTarget.dataset.preset;
      this.triggerEvent('change', { preset });
      this.setData({ showPicker: false });
    },
    
    getCurrentLabel() {
      const current = this.data.presets.find(
        p => p.key === this.properties.selectedPreset
      );
      return current ? current.label : '近30日';
    }
  }
});
```

#### 模板：audio-time-filter.wxml

```xml
<view class="audio-time-filter">
  <view class="audio-time-filter__trigger" bindtap="onFilterTap">
    <text class="audio-time-filter__label">{{getCurrentLabel()}}</text>
    <text class="audio-time-filter__icon">{{showPicker ? '▲' : '▼'}}</text>
  </view>
  
  <view wx:if="{{showPicker}}" class="audio-time-filter__dropdown">
    <view 
      wx:for="{{presets}}" 
      wx:key="key"
      class="audio-time-filter__option {{selectedPreset === item.key ? 'audio-time-filter__option--active' : ''}}"
      data-preset="{{item.key}}"
      bindtap="onPresetSelect"
    >
      <text class="audio-time-filter__option-text">{{item.label}}</text>
      <text wx:if="{{selectedPreset === item.key}}" class="audio-time-filter__check">✓</text>
    </view>
  </view>
</view>
```

#### 样式：audio-time-filter.wxss

```css
.audio-time-filter {
  position: relative;
  display: inline-block;
}

.audio-time-filter__trigger {
  display: flex;
  align-items: center;
  gap: 8rpx;
  padding: 12rpx 24rpx;
  background: #f8fafc;
  border: 2rpx solid #e5e7eb;
  border-radius: 8rpx;
  transition: all 0.2s;
}

.audio-time-filter__trigger:active {
  background: #f1f5f9;
}

.audio-time-filter__label {
  font-size: 28rpx;
  color: #1e293b;
}

.audio-time-filter__icon {
  font-size: 20rpx;
  color: #6b7280;
}

.audio-time-filter__dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8rpx;
  min-width: 200rpx;
  background: #ffffff;
  border-radius: 8rpx;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.12);
  z-index: 100;
  overflow: hidden;
}

.audio-time-filter__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 32rpx;
  transition: background 0.2s;
}

.audio-time-filter__option:active {
  background: #f8fafc;
}

.audio-time-filter__option--active {
  background: #f0f9ff;
}

.audio-time-filter__option-text {
  font-size: 28rpx;
  color: #1e293b;
}

.audio-time-filter__option--active .audio-time-filter__option-text {
  color: #3b82f6;
  font-weight: 500;
}

.audio-time-filter__check {
  font-size: 28rpx;
  color: #3b82f6;
  font-weight: 600;
}
```

---

## 📱 集成示例

### 新闻卡片组件（news-card）

```xml
<!-- news-card.wxml -->
<view class="news-card" bindtap="onCardTap">
  <!-- 标题栏：分类标签 + 等级徽章 + 时间 -->
  <view class="news-card__header">
    <category-tag category="{{item.category}}" variant="small" />
    <level-badge level="{{item.level}}" variant="standard" />
    <text class="news-card__time">{{item.publishTime}}</text>
  </view>
  
  <!-- 标题 -->
  <view class="news-card__title">{{item.titleJp}}</view>
  
  <!-- 摘要 -->
  <view class="news-card__summary">{{item.summaryCn}}</view>
  
  <!-- 底部信息 -->
  <view class="news-card__footer">
    <text class="news-card__source">{{item.source}}</text>
  </view>
</view>
```

### 分类浏览页面

```xml
<!-- category-page.wxml -->
<view class="category-page">
  <!-- 头部 -->
  <view class="category-page__header">
    <text class="category-page__title">分类浏览</text>
  </view>
  
  <!-- 分类筛选栏 -->
  <scroll-view class="category-filter-bar" scroll-x>
    <view class="category-filter-bar__list">
      <category-tag 
        wx:for="{{categories}}" 
        wx:key="key"
        category="{{item}}" 
        variant="filter"
        active="{{selectedCategories.includes(item)}}"
        bind:tap="onCategoryTap"
        data-category="{{item}}"
      />
    </view>
  </scroll-view>
  
  <!-- 时间筛选器 -->
  <quick-time-filter 
    selected-preset="{{timePreset}}"
    bind:change="onTimeChange"
    bind:customclick="onShowDatePicker"
  />
  
  <!-- 结果计数 -->
  <view class="result-count">
    <text>共 {{newsList.length}} 条</text>
  </view>
  
  <!-- 新闻列表 -->
  <view class="news-list">
    <news-card 
      wx:for="{{newsList}}" 
      wx:key="id"
      item="{{item}}"
      bind:tap="onNewsCardTap"
      data-id="{{item.id}}"
    />
  </view>
</view>
```

---

## ✅ 开发检查清单

### CategoryTag组件
- [ ] 实现6种分类配置（ir/ai/finance/hr/governance/all）
- [ ] 使用正确的颜色值
- [ ] 实现3种尺寸变体（small/large/filter）
- [ ] 支持激活/未激活状态切换
- [ ] 支持中日双语
- [ ] 点击事件正确触发
- [ ] 过渡动画流畅

### LevelBadge组件
- [ ] 实现3种等级配置（s/a/b）
- [ ] 使用正确的颜色值
- [ ] 实现3种尺寸变体（compact/standard/large）
- [ ] 圆形徽章样式正确
- [ ] 支持选中/未选中状态（large变体）
- [ ] 点击事件正确触发
- [ ] 过渡动画流畅

### TimeFilter组件
- [ ] DateSwitcher日期切换正确
- [ ] QuickTimeFilter横向滚动流畅
- [ ] AudioTimeFilter下拉菜单正常显示
- [ ] 日期格式化正确（X月X日 周X）
- [ ] 时间范围计算准确
- [ ] 所有事件正确触发

### 集成测试
- [ ] 所有页面组件正常显示
- [ ] 组件间通信正常
- [ ] 数据流转正确
- [ ] 无样式冲突
- [ ] 性能流畅

---

## 🎨 颜色速查表

```javascript
// 分类颜色
const CATEGORY_COLORS = {
  ir: { bg: '#3b82f6', border: '#60a5fa' },
  ai: { bg: '#10b981', border: '#34d399' },
  finance: { bg: '#8b5cf6', border: '#a78bfa' },
  hr: { bg: '#f97316', border: '#fb923c' },
  governance: { bg: '#6b7280', border: '#9ca3af' },
  all: { bg: '#334155', border: '#475569' }
};

// 等级颜色
const LEVEL_COLORS = {
  s: { bg: '#f97316', border: '#fb923c' },
  a: { bg: '#3b82f6', border: '#60a5fa' },
  b: { bg: '#6b7280', border: '#9ca3af' }
};

// 通用颜色
const COMMON_COLORS = {
  headerGradientStart: '#1e293b',
  headerGradientEnd: '#334155',
  background: '#f8fafc',
  textPrimary: '#1e293b',
  textSecondary: '#6b7280',
  border: '#e5e7eb',
  white: '#ffffff'
};
```

---

## 📐 尺寸速查表（rpx）

```javascript
// 组件尺寸
const COMPONENT_SIZES = {
  categoryTag: {
    small: { height: 36, fontSize: 24, padding: '0 16rpx', radius: 4 },
    large: { height: 80, fontSize: 28, padding: '16rpx 32rpx', radius: 8 },
    filter: { height: 56, fontSize: 28, padding: '0 32rpx', radius: 9999 }
  },
  levelBadge: {
    compact: { size: 36, fontSize: 22 },
    standard: { size: 44, fontSize: 24 },
    large: { size: 96, fontSize: 32 }
  },
  timeFilter: {
    dateSwitcher: { height: 80, fontSize: 32 },
    quickFilter: { height: 56, fontSize: 28 },
    audioFilter: { height: 56, fontSize: 28 }
  }
};

// 间距
const SPACING = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48
};
```

---

**严格遵循本规范，确保视觉一致性！** ⭐

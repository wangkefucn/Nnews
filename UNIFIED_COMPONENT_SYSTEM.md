# 统一UI组件系统规范 | Unified Component System

**版本**：1.0.0  
**更新日期**：2026-01-31  
**状态**：✅ 已完成并集成到所有页面

---

## 📋 概览

N前线应用建立了完整的统一UI组件系统，包含3大核心组件，共32+种显示变体，覆盖所有页面场景。

### 设计目标
- ✅ **视觉一致性** - 所有页面使用相同的设计语言
- ✅ **复用性** - 一次定义，处处使用
- ✅ **灵活性** - 多种变体适配不同场景
- ✅ **可维护性** - 集中管理，易于更新

---

## 🎯 三大核心组件

### 1. CategoryTag - 分类标签组件
**文件**：`/src/app/components/shared/CategoryTag.tsx`  
**用途**：显示和筛选新闻分类  
**变体数**：12种（3种尺寸 × 4种状态）

### 2. LevelBadge - 等级徽章组件
**文件**：`/src/app/components/shared/LevelBadge.tsx`  
**用途**：显示新闻重要性等级  
**变体数**：9种（3种尺寸 × 3种等级）

### 3. TimeFilter - 时间筛选组件
**文件**：`/src/app/components/shared/TimeFilter.tsx`  
**用途**：时间范围筛选和日期导航  
**变体数**：11种（5类组件 + 6种辅助）

---

## 🏷️ CategoryTag - 分类标签系统

### 分类定义（6种）

```typescript
type CategoryKey = 'ir' | 'ai' | 'finance' | 'hr' | 'governance' | 'all';
```

| Key | 中文 | 日文 | 描述 | 颜色代码 | 用途 |
|-----|------|------|------|---------|------|
| `ir` | IR情报 | IRニュース | 财报、业绩发布 | `#3b82f6` 蓝色 | 财务相关信息 |
| `ai` | AI・数字化 | AI・デジタル | 技术创新、新产品 | `#10b981` 绿色 | 技术动态 |
| `finance` | 证券/金融 | 証券・金融 | 金融业务动态 | `#8b5cf6` 紫色 | 金融业务 |
| `hr` | 人事・组织 | 人事・組織 | 人事任命、组织变革 | `#f97316` 橙色 | 人事信息 |
| `governance` | 治理 | ガバナンス | 公司治理、CSR | `#6b7280` 灰色 | 治理相关 |
| `all` | 全部 | すべて | 所有类型 | `#334155` 深灰 | 全部筛选 |

### 变体类型（3种）

#### 1. Small - 小尺寸标签
**用途**：新闻卡片、详情页标题栏  
**尺寸**：`px-2 py-0.5 text-xs`（微信小程序：`32rpx × 36rpx，字体24rpx`）  
**特性**：
- 紧凑显示
- 只显示中文标签
- 圆角 `4rpx`

```tsx
<CategoryTag category="ir" variant="small" />
// 显示：蓝色背景 + 白色 "IR情报"
```

#### 2. Large - 大尺寸标签
**用途**：设置页面的分类复选列表  
**尺寸**：`px-4 py-2 text-sm`（微信小程序：`64rpx × 56rpx，字体28rpx`）  
**特性**：
- 较大触摸区域
- 显示中文 + 日文（双行）
- 圆角 `8rpx`
- 可显示描述文字

```tsx
<CategoryTag category="ir" variant="large" showDescription />
// 显示：
// IR情报 | IRニュース
// 财报、业绩发布等
```

#### 3. Filter - 筛选按钮
**用途**：分类浏览页面顶部横向滚动栏  
**尺寸**：`px-4 py-2 text-sm`（微信小程序：`80rpx × 56rpx，字体28rpx`）  
**特性**：
- 可激活/未激活状态
- 激活：彩色背景 + 白色文字
- 未激活：灰色边框 + 灰色文字
- 圆角 `9999px`（完全圆角）

```tsx
<CategoryTag category="ir" variant="filter" active={true} />
// 激活状态：蓝色背景 + 白色 "IR情报"
// 未激活状态：灰色边框 + 灰色 "IR情报"
```

### 组件配置数据

```typescript
interface CategoryConfig {
  key: CategoryKey;
  labelCn: string;      // 中文标签
  labelJp: string;      // 日文标签
  descCn: string;       // 中文描述
  descJp: string;       // 日文描述
  required?: boolean;   // 是否必选（IR为必选）
}

export const CATEGORIES: Record<CategoryKey, CategoryConfig> = {
  ir: {
    key: 'ir',
    labelCn: 'IR情报',
    labelJp: 'IRニュース',
    descCn: '财报、业绩发布等',
    descJp: '決算、業績発表など',
    required: true  // IR情报不可取消订阅
  },
  // ... 其他分类
};
```

### 高级组件

#### CategoryFilterBar - 分类筛选栏
**用途**：分类浏览页面顶部  
**特性**：
- 横向滚动
- 多选支持
- 自动显示"全部"选项

```tsx
<CategoryFilterBar
  selectedCategories={['ir', 'ai']}
  onChange={(selected) => console.log(selected)}
/>
```

#### CategoryChecklist - 分类复选列表
**用途**：设置页面的订阅管理  
**特性**：
- 垂直列表
- 复选框选择
- 显示分类描述
- IR情报不可取消（required: true）

```tsx
<CategoryChecklist
  selectedCategories={['ir', 'ai']}
  onChange={(selected) => console.log(selected)}
/>
```

### 颜色规范（重要⭐）

每个分类有完整的颜色系统：

```css
/* IR情报 - 蓝色 */
background: #3b82f6
border: #60a5fa
text: #ffffff

/* AI・数字化 - 绿色 */
background: #10b981
border: #34d399
text: #ffffff

/* 证券/金融 - 紫色 */
background: #8b5cf6
border: #a78bfa
text: #ffffff

/* 人事・组织 - 橙色 */
background: #f97316
border: #fb923c
text: #ffffff

/* 治理 - 灰色 */
background: #6b7280
border: #9ca3af
text: #ffffff

/* 全部 - 深灰 */
background: #334155
border: #475569
text: #ffffff
```

---

## 🏆 LevelBadge - 等级徽章系统

### 等级定义（3种）

```typescript
type LevelKey = 's' | 'a' | 'b';
```

| 等级 | 中文 | 日文 | 含义 | 颜色 | 使用场景 |
|-----|------|------|------|------|---------|
| `s` | S级 | Sクラス | 高度重要 | `#f97316` 橙色 | 财报发布、重大并购、战略发布 |
| `a` | A级 | Aクラス | 中度重要 | `#3b82f6` 蓝色 | 新产品发布、业务合作、人事任命 |
| `b` | B级 | Bクラス | 一般重要 | `#6b7280` 灰色 | 行业资讯、活动信息、一般动态 |

### 变体类型（3种）

#### 1. Standard - 标准徽章
**用途**：新闻卡片  
**尺寸**：`w-6 h-6 text-xs`（微信小程序：`44rpx × 44rpx，字体24rpx`）  
**特性**：
- 圆形徽章
- 单字母显示（S/A/B）
- 白色文字

```tsx
<LevelBadge level="s" variant="standard" />
// 显示：橙色圆形 + 白色 "S"
```

#### 2. Large - 大尺寸徽章
**用途**：设置页面的等级筛选  
**尺寸**：`w-16 h-16 text-base`（微信小程序：`96rpx × 96rpx，字体32rpx`）  
**特性**：
- 较大尺寸
- 显示完整文字（S级/A级/B级）
- 可选择/未选择状态
- 未选择时显示灰色边框

```tsx
<LevelBadge level="s" variant="large" selected={true} />
// 选中：橙色背景 + 白色 "S级"
// 未选中：灰色边框 + 灰色 "S级"
```

#### 3. Compact - 紧凑徽章
**用途**：详情页标题栏、空间受限的场景  
**尺寸**：`w-5 h-5 text-xs`（微信小程序：`36rpx × 36rpx，字体22rpx`）  
**特性**：
- 最小尺寸
- 单字母显示
- 适合与文字并排

```tsx
<LevelBadge level="s" variant="compact" />
// 显示：小橙色圆形 + 白色 "S"
```

### 高级组件

#### LevelFilter - 等级筛选器
**用途**：分类浏览页面、设置页面  
**特性**：
- 三个等级并排显示
- 多选支持
- 显示中文标签

```tsx
<LevelFilter
  selectedLevels={['s', 'a']}
  onChange={(selected) => console.log(selected)}
  variant="standard"
/>
```

#### LevelLegend - 等级图例
**用途**：设置页面、帮助说明  
**特性**：
- 完整的等级说明
- 显示颜色、名称、含义
- 帮助用户理解等级系统

```tsx
<LevelLegend />
// 显示：
// 🟠 S级 - 高度重要（财报、重大发布）
// 🔵 A级 - 中度重要（业务动态）
// ⚪ B级 - 一般重要（行业资讯）
```

### 颜色规范（重要⭐）

```css
/* S级 - 橙色 */
background: #f97316
border: #fb923c
text: #ffffff

/* A级 - 蓝色 */
background: #3b82f6
border: #60a5fa
text: #ffffff

/* B级 - 灰色 */
background: #6b7280
border: #9ca3af
text: #ffffff

/* 未选择状态 */
background: transparent
border: #e5e7eb
text: #9ca3af
```

---

## ⏰ TimeFilter - 时间筛选系统

### 组件类型（5类）

#### 1. DateSwitcher - 日期切换器
**用途**：今日快讯页面顶部  
**功能**：前一天 ← 今天 → 后一天  

**特性**：
- 大按钮，易于点击
- 居中显示当前日期
- 左右箭头切换
- 日期格式：`1月31日 周六`

```tsx
<DateSwitcher
  currentDate="2026-01-31"
  onChange={(date) => console.log(date)}
/>
```

**布局**：
```
┌──────────────────────────────────┐
│  ←   1月31日 周六   →           │
└──────────────────────────────────┘
```

#### 2. QuickTimeFilter - 快速时间筛选
**用途**：分类浏览页面  
**选项**：今日 / 3日 / 7日 / 30日 / 全部 / 自定义

**特性**：
- 横向滚动胶囊按钮
- 单选模式
- 激活状态显示深蓝背景
- 点击"自定义"弹出日期范围选择器

```tsx
<QuickTimeFilter
  selectedPreset="7d"
  onPresetChange={(preset) => console.log(preset)}
  onCustomRangeClick={() => showDatePicker()}
/>
```

**预设选项**：
```typescript
type TimeFilterPreset = 
  | 'today'   // 今日
  | '3d'      // 近3日
  | '7d'      // 近7日  (默认)
  | '30d'     // 近30日
  | 'all'     // 全部
  | 'custom'; // 自定义
```

#### 3. CustomDateRangePicker - 自定义日期范围
**用途**：分类浏览页面（点击"自定义"后弹出）  
**功能**：选择开始日期和结束日期

**特性**：
- 两个日期选择器（开始/结束）
- 确认/取消按钮
- 日期验证（结束 >= 开始）
- 显示选择的天数范围

```tsx
<CustomDateRangePicker
  startDate="2026-01-01"
  endDate="2026-01-31"
  onConfirm={(start, end) => console.log(start, end)}
  onCancel={() => close()}
/>
```

#### 4. AudioTimeFilter - 音频时间筛选
**用途**：音频概览页面  
**选项**：近7日 / 近30日 / 近90日 / 全部

**特性**：
- 下拉选择器样式
- 紧凑显示（不占用太多空间）
- 适合音频列表页面

```tsx
<AudioTimeFilter
  selectedPreset="30d"
  onChange={(preset) => console.log(preset)}
/>
```

#### 5. 辅助组件

##### ResultCount - 结果计数
**用途**：显示筛选结果数量

```tsx
<ResultCount count={23} />
// 显示："共 23 条"
```

##### EmptyState - 空状态提示
**用途**：无数据时显示

```tsx
<EmptyState message="暂无符合条件的快讯" />
```

### 时间范围计算

```typescript
interface TimeRange {
  startDate: string;  // YYYY-MM-DD
  endDate: string;    // YYYY-MM-DD
  preset: TimeFilterPreset;
}

// 预设转换函数
function presetToRange(preset: TimeFilterPreset): TimeRange {
  const today = new Date();
  
  switch(preset) {
    case 'today':
      return { startDate: today, endDate: today, preset };
    case '3d':
      return { startDate: today - 3天, endDate: today, preset };
    case '7d':
      return { startDate: today - 7天, endDate: today, preset };
    case '30d':
      return { startDate: today - 30天, endDate: today, preset };
    case 'all':
      return { startDate: null, endDate: null, preset };
  }
}
```

---

## 📱 页面集成示例

### 1. 今日快讯页面（HomePage）

```tsx
import { DateSwitcher, ResultCount, EmptyState } from '@/components/shared/TimeFilter';
import { CategoryTag } from '@/components/shared/CategoryTag';
import { LevelBadge } from '@/components/shared/LevelBadge';

function HomePage() {
  return (
    <>
      {/* 头部 + 日期切换器 */}
      <DateSwitcher currentDate={date} onChange={setDate} />
      
      {/* 结果计数 */}
      <ResultCount count={newsList.length} />
      
      {/* 新闻卡片 */}
      {newsList.map(news => (
        <NewsCard
          category={<CategoryTag category={news.category} variant="small" />}
          level={<LevelBadge level={news.level} variant="standard" />}
          {...news}
        />
      ))}
      
      {/* 空状态 */}
      {newsList.length === 0 && (
        <EmptyState message="今日暂无快讯" />
      )}
    </>
  );
}
```

### 2. 分类浏览页面（CategoryPage）

```tsx
import { CategoryFilterBar } from '@/components/shared/CategoryTag';
import { QuickTimeFilter, CustomDateRangePicker } from '@/components/shared/TimeFilter';

function CategoryPage() {
  return (
    <>
      {/* 分类筛选栏 */}
      <CategoryFilterBar
        selectedCategories={selected}
        onChange={setSelected}
      />
      
      {/* 时间筛选器 */}
      <QuickTimeFilter
        selectedPreset={timePreset}
        onPresetChange={setTimePreset}
        onCustomRangeClick={() => setShowDatePicker(true)}
      />
      
      {/* 自定义日期选择器（弹窗） */}
      {showDatePicker && (
        <CustomDateRangePicker
          onConfirm={handleConfirm}
          onCancel={() => setShowDatePicker(false)}
        />
      )}
      
      {/* 新闻列表 */}
      {/* ... */}
    </>
  );
}
```

### 3. 设置页面（SettingsPage）

```tsx
import { CategoryChecklist } from '@/components/shared/CategoryTag';
import { LevelFilter, LevelLegend } from '@/components/shared/LevelBadge';

function SettingsPage() {
  return (
    <>
      {/* 分类订阅 */}
      <CategoryChecklist
        selectedCategories={subscribed}
        onChange={setSubscribed}
      />
      
      {/* 等级筛选 */}
      <LevelFilter
        selectedLevels={levels}
        onChange={setLevels}
        variant="large"
      />
      
      {/* 等级说明 */}
      <LevelLegend />
    </>
  );
}
```

### 4. 音频概览页面（AudioPage）

```tsx
import { AudioTimeFilter } from '@/components/shared/TimeFilter';

function AudioPage() {
  return (
    <>
      {/* 音频时间筛选 */}
      <AudioTimeFilter
        selectedPreset={timeRange}
        onChange={setTimeRange}
      />
      
      {/* 音频列表 */}
      {/* ... */}
    </>
  );
}
```

---

## 🎨 设计原则

### 1. 一致性（Consistency）
- 所有分类标签使用相同的设计语言
- 所有等级徽章使用统一的形状和尺寸比例
- 所有时间筛选器使用一致的交互模式

### 2. 可识别性（Recognizability）
- 每个分类有独特的颜色，一眼就能识别
- S/A/B等级用颜色编码，快速判断重要性
- 时间筛选器位置固定，易于找到

### 3. 易用性（Usability）
- 所有可点击元素有足够的触摸区域（最小44rpx）
- 激活状态明显区分
- 反馈及时（按下效果、状态变化）

### 4. 灵活性（Flexibility）
- 多种尺寸变体适配不同场景
- 支持单选/多选模式
- 可配置显示内容（只显示图标/带文字/完整描述）

---

## 📐 尺寸规范（微信小程序）

### CategoryTag 尺寸

| 变体 | 宽度 | 高度 | 字体 | 圆角 | 内边距 |
|------|------|------|------|------|--------|
| small | auto | 36rpx | 24rpx | 4rpx | 16rpx 8rpx |
| large | auto | 80rpx | 28rpx | 8rpx | 32rpx 16rpx |
| filter | 140rpx | 56rpx | 28rpx | 9999rpx | 32rpx 16rpx |

### LevelBadge 尺寸

| 变体 | 宽度 | 高度 | 字体 | 形状 |
|------|------|------|------|------|
| compact | 36rpx | 36rpx | 22rpx | 圆形 |
| standard | 44rpx | 44rpx | 24rpx | 圆形 |
| large | 96rpx | 96rpx | 32rpx | 圆形 |

### TimeFilter 尺寸

| 组件 | 高度 | 字体 | 圆角 |
|------|------|------|------|
| DateSwitcher | 80rpx | 32rpx | 8rpx |
| QuickTimeFilter按钮 | 56rpx | 28rpx | 9999rpx |
| AudioTimeFilter | 56rpx | 28rpx | 8rpx |

---

## ✅ 开发检查清单

在实现统一组件系统时，请确保：

### CategoryTag
- [ ] 实现了6种分类（ir/ai/finance/hr/governance/all）
- [ ] 每个分类使用正确的专属颜色
- [ ] 实现了3种尺寸变体（small/large/filter）
- [ ] 支持激活/未激活状态
- [ ] 支持中日双语显示
- [ ] 实现了CategoryFilterBar（横向滚动）
- [ ] 实现了CategoryChecklist（垂直列表，带描述）
- [ ] IR情报分类设置为必选（不可取消）

### LevelBadge
- [ ] 实现了3种等级（s/a/b）
- [ ] 每个等级使用正确的颜色
- [ ] 实现了3种尺寸变体（compact/standard/large）
- [ ] 支持选中/未选中状态
- [ ] 圆形徽章样式
- [ ] 实现了LevelFilter（多选筛选器）
- [ ] 实现了LevelLegend（等级说明）

### TimeFilter
- [ ] 实现了DateSwitcher（日期切换器）
- [ ] 实现了QuickTimeFilter（快速筛选，6个选项）
- [ ] 实现了CustomDateRangePicker（自定义日期范围）
- [ ] 实现了AudioTimeFilter（音频时间筛选）
- [ ] 实现了ResultCount（结果计数）
- [ ] 实现了EmptyState（空状态）
- [ ] 日期格式化正确
- [ ] 时间范围计算准确

### 集成检查
- [ ] 今日快讯页面使用DateSwitcher
- [ ] 分类浏览页面使用CategoryFilterBar + QuickTimeFilter
- [ ] 音频页面使用AudioTimeFilter
- [ ] 设置页面使用CategoryChecklist + LevelFilter
- [ ] 所有新闻卡片显示CategoryTag（small）+ LevelBadge（standard）
- [ ] 详情页显示CategoryTag（small）+ LevelBadge（compact）
- [ ] 我的收藏页面使用统一的新闻卡片

---

## 🔄 版本历史

### v1.0.0 (2026-01-31)
- ✅ 初始版本发布
- ✅ 完成3大核心组件开发
- ✅ 实现32+种显示变体
- ✅ 集成到所有页面
- ✅ 建立完整的设计规范文档

---

## 📞 支持

如有任何关于组件系统的疑问，请参考：
- `UI_COMPONENTS_SPECIFICATION.md` - 组件详细规范
- `WECHAT_MINIPROGRAM_UI_GUIDE.md` - 页面UI指南
- `BRAND_GUIDE.md` - 品牌视觉规范

**记住：不要自由发挥，严格遵循规范！** ⭐

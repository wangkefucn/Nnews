# 🎨 N前线 统一UI组件库文档

## 📦 组件概览

已开发完成的统一UI组件库，包含：
- ✅ **分类标签组件** - 6种分类，3种变体
- ✅ **等级徽章组件** - 3个等级，3种尺寸
- ✅ **时间筛选组件** - 5种筛选器类型
- ✅ **辅助组件** - 空状态、结果计数等

---

## 🚀 快速访问

### 查看组件展示页面

**快捷键**：`Cmd/Ctrl + U`

或访问URL：`http://localhost:5173` 后按 `Cmd + U`（Mac）或 `Ctrl + U`（Windows）

展示页面包含：
- 所有组件的各种变体
- 实际应用示例（新闻卡片）
- 配色参考速查
- 交互式演示

---

## 📂 组件文件位置

```
/src/app/components/shared/
├── CategoryTag.tsx      # 分类标签组件
├── LevelBadge.tsx       # 等级徽章组件
└── TimeFilter.tsx       # 时间筛选组件

/src/app/components/pages/
└── UIShowcasePage.tsx   # 组件展示页面
```

---

## 🏷️ 一、分类标签组件

### 文件：`CategoryTag.tsx`

#### 1.1 基础组件：`<CategoryTag />`

**Props**：
```typescript
interface CategoryTagProps {
  category: CategoryKey;        // 'ir' | 'ai' | 'finance' | 'hr' | 'governance' | 'all'
  variant?: 'small' | 'large' | 'filter';  // 变体
  active?: boolean;             // 是否激活（仅filter变体）
  onClick?: () => void;         // 点击回调
  showJapanese?: boolean;       // 显示日文
  className?: string;           // 自定义类名
}
```

**使用示例**：
```tsx
import { CategoryTag } from '@/app/components/shared/CategoryTag';

// 小标签（用于新闻卡片）
<CategoryTag category="ir" variant="small" />

// 大标签（用于标题）
<CategoryTag category="ai" variant="large" />

// 筛选按钮（用于分类浏览）
<CategoryTag 
  category="finance" 
  variant="filter" 
  active={true}
  onClick={() => handleCategoryChange('finance')}
/>

// 日文版本
<CategoryTag category="hr" variant="small" showJapanese />
```

**变体说明**：
- **small**：22rpx = 11px，用于新闻卡片左上角
- **large**：28rpx = 14px，用于页面标题等
- **filter**：28rpx = 14px，胶囊形按钮，用于分类筛选

---

#### 1.2 筛选栏组件：`<CategoryFilterBar />`

横向滚动的分类筛选栏，用于分类浏览页面顶部。

**Props**：
```typescript
interface CategoryFilterBarProps {
  categories: CategoryKey[];     // 显示的分类列表
  activeCategory: CategoryKey;   // 当前激活的分类
  onCategoryChange: (category: CategoryKey) => void;  // 切换回调
  showJapanese?: boolean;
  className?: string;
}
```

**使用示例**：
```tsx
import { CategoryFilterBar } from '@/app/components/shared/CategoryTag';

function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <CategoryFilterBar
      categories={['all', 'ir', 'ai', 'finance', 'hr', 'governance']}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    />
  );
}
```

---

#### 1.3 复选列表组件：`<CategoryChecklist />`

带描述的分类复选列表，用于设置页面的主题选择。

**Props**：
```typescript
interface CategoryChecklistProps {
  selectedCategories: CategoryKey[];     // 已选中的分类
  onToggle: (category: CategoryKey) => void;  // 切换回调
  showDescriptions?: boolean;            // 显示描述文字
  showJapanese?: boolean;
  className?: string;
}
```

**使用示例**：
```tsx
import { CategoryChecklist } from '@/app/components/shared/CategoryTag';

function SettingsPage() {
  const [selectedCategories, setSelectedCategories] = useState(['ir', 'ai']);

  const handleToggle = (category: CategoryKey) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <CategoryChecklist
      selectedCategories={selectedCategories}
      onToggle={handleToggle}
      showDescriptions={true}
    />
  );
}
```

---

#### 1.4 分类配置数据

```typescript
import { CATEGORIES } from '@/app/components/shared/CategoryTag';

// 分类数据结构
CATEGORIES = {
  ir: {
    key: 'ir',
    labelCn: 'IR情报',
    labelJp: 'IRニュース',
    descCn: '财报、业绩发布等',
    descJp: '決算、業績発表など',
    required: true  // IR情报为必选
  },
  // ... 其他分类
};

// 获取分类标签文字
const label = CATEGORIES['ir'].labelCn;  // "IR情报"
```

---

## 🏅 二、等级徽章组件

### 文件：`LevelBadge.tsx`

#### 2.1 基础组件：`<LevelBadge />`

**Props**：
```typescript
interface LevelBadgeProps {
  level: LevelKey;              // 's' | 'a' | 'b'
  variant?: 'standard' | 'large' | 'compact';  // 尺寸变体
  showLabel?: boolean;          // 显示文字标签
  showJapanese?: boolean;
  className?: string;
}
```

**使用示例**：
```tsx
import { LevelBadge } from '@/app/components/shared/LevelBadge';

// 标准尺寸（用于新闻卡片）
<LevelBadge level="s" variant="standard" />

// 大尺寸（用于详情页）
<LevelBadge level="a" variant="large" />

// 紧凑尺寸（用于列表）
<LevelBadge level="b" variant="compact" />

// 带文字标签
<LevelBadge level="s" variant="standard" showLabel />
// 显示：[S] 极重要

// 日文版本
<LevelBadge level="a" variant="standard" showLabel showJapanese />
// 显示：[A] 重要
```

**尺寸说明**：
- **standard**：40rpx × 40rpx = 20px × 20px，用于新闻卡片
- **large**：56rpx × 56rpx = 28px × 28px，用于详情页
- **compact**：32rpx × 32rpx = 16px × 16px，用于密集列表

---

#### 2.2 筛选器组件：`<LevelFilter />`

等级筛选器，可多选。

**Props**：
```typescript
interface LevelFilterProps {
  selectedLevels: LevelKey[];    // 已选中的等级
  onToggle: (level: LevelKey) => void;  // 切换回调
  showJapanese?: boolean;
  className?: string;
}
```

**使用示例**：
```tsx
import { LevelFilter } from '@/app/components/shared/LevelBadge';

function FilterSection() {
  const [selectedLevels, setSelectedLevels] = useState(['s', 'a']);

  const handleToggle = (level: LevelKey) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  return (
    <LevelFilter
      selectedLevels={selectedLevels}
      onToggle={handleToggle}
    />
  );
}
```

---

#### 2.3 等级说明组件：`<LevelLegend />`

等级说明，用于帮助页面或首次使用引导。

**Props**：
```typescript
interface LevelLegendProps {
  showJapanese?: boolean;
  orientation?: 'horizontal' | 'vertical';  // 布局方向
  className?: string;
}
```

**使用示例**：
```tsx
import { LevelLegend } from '@/app/components/shared/LevelBadge';

// 垂直布局（默认）
<LevelLegend orientation="vertical" />

// 横向布局
<LevelLegend orientation="horizontal" />
```

---

#### 2.4 等级配置数据

```typescript
import { LEVELS } from '@/app/components/shared/LevelBadge';

// 等级数据结构
LEVELS = {
  s: {
    key: 's',
    labelCn: '极重要',
    labelJp: '最重要',
    bgColor: '#f97316',    // 橙色
    textColor: '#ffffff',
    shadowColor: '0 1px 4px rgba(249, 115, 22, 0.3)'
  },
  // ... 其他等级
};

// 获取等级配置
const config = LEVELS['s'];
const color = config.bgColor;  // "#f97316"
```

---

## ⏰ 三、时间筛选组件

### 文件：`TimeFilter.tsx`

#### 3.1 日期切换器：`<DateSwitcher />`

用于今日快讯页面，格式：[◀ 昨天] [📅 今天] [明天 ▶]

**Props**：
```typescript
interface DateSwitcherProps {
  currentDate: string;          // YYYY-MM-DD
  isToday: boolean;             // 是否是今天
  onPrevDay: () => void;        // 前一天
  onNextDay: () => void;        // 后一天
  onDateSelect: () => void;     // 打开日期选择器
  className?: string;
}
```

**使用示例**：
```tsx
import { DateSwitcher } from '@/app/components/shared/TimeFilter';

function HomePage() {
  const [currentDate, setCurrentDate] = useState('2026-01-30');
  const [isToday, setIsToday] = useState(true);

  return (
    <DateSwitcher
      currentDate={currentDate}
      isToday={isToday}
      onPrevDay={() => {
        setIsToday(false);
        setCurrentDate('2026-01-29');
      }}
      onNextDay={() => {
        setIsToday(true);
        setCurrentDate('2026-01-30');
      }}
      onDateSelect={() => {
        // 打开日期选择器
      }}
    />
  );
}
```

---

#### 3.2 快捷时间筛选：`<QuickTimeFilter />`

用于分类浏览页面，格式：[今天] [本周] [本月] [自定义]

**Props**：
```typescript
interface QuickTimeFilterProps {
  activeFilter: TimeFilterPreset;  // 'today' | 'week' | 'month' | 'custom'
  onFilterChange: (filter: TimeFilterPreset) => void;
  showCustomRange?: boolean;       // 显示自定义范围
  currentRange?: TimeRange;        // 当前范围
  className?: string;
}
```

**使用示例**：
```tsx
import { QuickTimeFilter } from '@/app/components/shared/TimeFilter';

function CategoryPage() {
  const [activeFilter, setActiveFilter] = useState('week');
  const [customRange, setCustomRange] = useState({
    startDate: '2026-01-23',
    endDate: '2026-01-30'
  });

  return (
    <QuickTimeFilter
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
      showCustomRange={activeFilter === 'custom'}
      currentRange={customRange}
    />
  );
}
```

---

#### 3.3 自定义日期范围选择器：`<CustomDateRangePicker />`

弹窗形式的日期范围选择器。

**Props**：
```typescript
interface CustomDateRangePickerProps {
  startDate: string;            // YYYY-MM-DD
  endDate: string;              // YYYY-MM-DD
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
  maxDays?: number;             // 最大天数（默认90）
  className?: string;
}
```

**使用示例**：
```tsx
import { CustomDateRangePicker } from '@/app/components/shared/TimeFilter';

function CategoryPage() {
  const [showPicker, setShowPicker] = useState(false);
  const [startDate, setStartDate] = useState('2026-01-23');
  const [endDate, setEndDate] = useState('2026-01-30');

  return (
    <>
      <button onClick={() => setShowPicker(true)}>选择日期范围</button>
      
      {showPicker && (
        <CustomDateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onConfirm={() => {
            setShowPicker(false);
            // 加载数据
          }}
          onCancel={() => setShowPicker(false)}
          maxDays={90}
        />
      )}
    </>
  );
}
```

---

#### 3.4 音频时间筛选：`<AudioTimeFilter />`

用于音频概览页面，格式：[最近7天] [最近30天]

**Props**：
```typescript
interface AudioTimeFilterProps {
  activeFilter: 'recent7' | 'recent30';
  onFilterChange: (filter: 'recent7' | 'recent30') => void;
  className?: string;
}
```

**使用示例**：
```tsx
import { AudioTimeFilter } from '@/app/components/shared/TimeFilter';

function AudioPage() {
  const [audioFilter, setAudioFilter] = useState('recent7');

  return (
    <AudioTimeFilter
      activeFilter={audioFilter}
      onFilterChange={setAudioFilter}
    />
  );
}
```

---

#### 3.5 辅助组件

**结果数量显示**：
```tsx
import { ResultCount } from '@/app/components/shared/TimeFilter';

<ResultCount count={42} />
// 显示："共找到 42 条快讯"
```

**空状态**：
```tsx
import { EmptyState } from '@/app/components/shared/TimeFilter';

<EmptyState
  date="2026-01-29"
  onBackToToday={() => {
    // 回到今天
  }}
/>

// 自定义消息
<EmptyState message="暂无相关快讯" />
```

---

## 🎨 四、配色参考

### 分类标签配色

| 分类 | 背景色 | 文字色 |
|------|--------|--------|
| IR情报 | `#eff6ff` | `#1e40af` |
| AI・数字化 | `#f0fdf4` | `#15803d` |
| 证券/金融 | `#fef3c7` | `#b45309` |
| 人事・组织 | `#fce7f3` | `#be185d` |
| 治理 | `#f3e8ff` | `#6b21a8` |

### 等级徽章配色

| 等级 | 背景色 | 文字色 | 阴影 |
|------|--------|--------|------|
| S | `#f97316` | `#ffffff` | `0 1px 4px rgba(249, 115, 22, 0.3)` |
| A | `#3b82f6` | `#ffffff` | `0 1px 4px rgba(59, 130, 246, 0.25)` |
| B | `#9ca3af` | `#ffffff` | 无 |

### 筛选按钮配色

| 状态 | 背景色 | 文字色 | 字重 |
|------|--------|--------|------|
| 未选中 | `#f1f5f9` | `#64748b` | 400 |
| 选中 | `#1e293b` | `#ffffff` | 500 |

---

## 📋 五、实际应用示例

### 新闻卡片完整示例

```tsx
import { CategoryTag } from '@/app/components/shared/CategoryTag';
import { LevelBadge } from '@/app/components/shared/LevelBadge';

function NewsCard({ news }) {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm">
      {/* 顶部信息栏 */}
      <div className="flex items-center justify-between mb-2">
        <CategoryTag category={news.category} variant="small" />
        <LevelBadge level={news.importance} variant="standard" />
      </div>

      {/* 标题 */}
      <h3 className="text-base font-semibold text-slate-800 leading-snug mb-1">
        {news.titleJp}
      </h3>

      {/* 摘要 */}
      <p className="text-sm text-gray-600 leading-relaxed mb-2">
        {news.summaryCn}
      </p>

      {/* 底部信息 */}
      <div className="flex items-center gap-1 text-xs text-gray-400">
        <span>{news.source}</span>
        <span>·</span>
        <span>{news.publishTime}</span>
      </div>
    </div>
  );
}
```

### 分类浏览页面完整示例

```tsx
import { CategoryFilterBar } from '@/app/components/shared/CategoryTag';
import { QuickTimeFilter, ResultCount } from '@/app/components/shared/TimeFilter';

function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTimeFilter, setActiveTimeFilter] = useState('week');
  const [newsList, setNewsList] = useState([]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 页面头部 */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 px-5 py-8">
        <h1 className="text-2xl font-semibold text-white mb-1">分类浏览</h1>
        <p className="text-sm text-slate-300 font-light">按主题深度查询</p>
      </div>

      {/* 分类筛选栏 */}
      <CategoryFilterBar
        categories={['all', 'ir', 'ai', 'finance', 'hr', 'governance']}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 时间筛选器 */}
      <QuickTimeFilter
        activeFilter={activeTimeFilter}
        onFilterChange={setActiveTimeFilter}
      />

      {/* 结果数量 */}
      <ResultCount count={newsList.length} />

      {/* 新闻列表 */}
      <div className="px-4 py-2 space-y-2">
        {newsList.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
```

---

## ✅ 使用检查清单

开发时确保：

### 分类标签
- [ ] 使用统一的分类key（ir/ai/finance/hr/governance）
- [ ] 小标签用于卡片，filter变体用于筛选
- [ ] 颜色与配色表一致
- [ ] 必要时显示日文版本

### 等级徽章
- [ ] S级橙色，A级蓝色，B级灰色
- [ ] S和A级有阴影，B级无阴影
- [ ] 标准尺寸用于卡片，��尺寸用于详情

### 时间筛选
- [ ] 今日快讯使用DateSwitcher
- [ ] 分类浏览使用QuickTimeFilter
- [ ] 音频页面使用AudioTimeFilter
- [ ] 空状态显示EmptyState

### 数据一致性
- [ ] 使用CATEGORIES配置对象
- [ ] 使用LEVELS配置对象
- [ ] 新闻数据包含category和importance字段

---

## 🚀 下一步

1. **查看展示页面**：按 `Cmd/Ctrl + U` 查看所有组件变体
2. **复制代码**：从展示页面或本文档复制代码到你的页面
3. **自定义样式**：通过className prop添加自定义样式
4. **集成数据**：连接真实API数据

---

**统一的组件库，确保整个应用的一致性和专业性！** ✨

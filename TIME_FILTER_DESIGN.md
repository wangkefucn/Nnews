# ⏰ 时间筛选逻辑设计

## 📋 设计原则

### 用户场景分析
1. **今日快讯**：快速浏览今天的重要信息（通勤、碎片时间）
2. **分类浏览**：深度查询特定主题的历史信息（办公室、准备会议）
3. **音频概览**：收听最近的内容（通勤、开车）
4. **收藏页**：回顾历史重要信息（不限时间）

---

## 🎯 时间筛选方案

### 1. 今日快讯（home）

#### 默认显示
- **仅显示今天**（当日0:00-23:59）
- 按时间倒序排列（最新在前）

#### 时间筛选器
**位置**：页面顶部（搜索栏下方），小型日期选择器

**交互方式**：
```
┌─────────────────────────────────┐
│  [◀ 昨天]  [📅 今天]  [明天 ▶]  │  ← 快速切换按钮
└─────────────────────────────────┘
```

**功能**：
- 默认：显示"今天"
- 点击日期：弹出日期选择器，可选任意历史日期
- 左右箭头：快速切换前一天/后一天
- **不能选择未来日期**（因为新闻还没发生）

#### UI规格
```css
/* 日期筛选器 */
height: 72rpx;
background: #ffffff;
border-radius: 12rpx;
margin: 16rpx 32rpx;
padding: 12rpx 24rpx;

/* 日期按钮 */
font-size: 28rpx;
color: #1e293b; /* 当前选中 */
color: #64748b; /* 箭头按钮 */
```

#### 视觉状态
- **今天**：文字深色 `#1e293b` + 📅 图标
- **历史日期**：显示具体日期"2026-01-29" + 浅色文字 `#64748b`
- **空状态**：显示"当天暂无快讯"

---

### 2. 分类浏览（category）

#### 默认显示
- **显示本周信息**（周一00:00 - 周日23:59）
- 按时间倒序排列

#### 时间筛选器
**位置**：页面顶部，分类Tab下方

**两级筛选**：
```
┌─────────────────────────────────────┐
│ 快捷筛选：                           │
│ [ 今天 ] [ 本周 ] [ 本月 ] [自定义]  │
└─────────────────────────────────────┘
                ↓ 点击"自定义"
┌─────────────────────────────────────┐
│ 开始日期： [2026-01-23] 📅           │
│ 结束日期： [2026-01-30] 📅           │
│            [ 取消 ] [ 确定 ]         │
└─────────────────────────────────────┘
```

**快捷选项**：
1. **今天**：当日 0:00-23:59
2. **本周**：本周一 0:00 - 本周日 23:59（默认）
3. **本月**：本月1日 0:00 - 本月最后一天 23:59
4. **自定义**：弹出日期范围选择器

#### 自定义日期选择器
**规则**：
- 开始日期不能晚于结束日期
- 结束日期不能晚于今天
- 最多支持查询90天范围（防止数据量过大）
- 默认建议时间段：7天、30天、90天

#### UI规格
```css
/* 快捷筛选按钮组 */
display: flex;
gap: 16rpx;
padding: 24rpx 32rpx;
background: #ffffff;

/* 单个按钮 */
height: 64rpx;
padding: 0 24rpx;
border-radius: 32rpx;
font-size: 28rpx;

/* 未选中 */
background: #f1f5f9;
color: #64748b;

/* 选中状态 */
background: #1e293b;
color: #ffffff;
```

#### 数据加载
```javascript
// 显示加载状态
if (timeRange > 30天) {
  显示骨架屏 + "正在加载历史数据..."
}

// 结果数量提示
显示 "共找到 {count} 条快讯"
```

---

### 3. 音频概览（audio）

#### 默认显示
- **显示最近7天**（今天往前推7天）
- 按日期分组，每天一个AI播报

#### 时间筛选器
**位置**：页面顶部

**快捷选项**：
```
┌─────────────────────────────────────┐
│ [ 最近7天 ] [ 最近30天 ] [更多...]   │
└─────────────────────────────────────┘
```

**功能**：
- **最近7天**：默认，显示过去7天的音频
- **最近30天**：显示过去30天（按周折叠）
- **更多**：跳转到历史音频列表页

#### UI特点
- 按日期分组显示
- 每组显示：日期标签 + 播放按钮 + 时长
- 已播放的显示进度条

---

### 4. 收藏页（bookmarks）

#### 默认显示
- **显示全部收藏**（不限时间）
- 按收藏时间倒序排列（最近收藏在前）

#### 排序选项
**位置**：右上角排序按钮

**选项**：
```
┌─────────────────────┐
│ ○ 按收藏时间        │
│ ● 按新闻发布时间    │
│ ○ 按重要性等级      │
└─────────────────────┘
```

#### 时间筛选（可选）
- 如果收藏超过100条，可添加时间筛选
- 选项：全部、本月、3个月内、更早

---

## 🎨 UI组件设计

### 组件1：日期快速切换器（今日快讯用）

```wxml
<view class="date-switcher">
  <button class="btn-prev" bindtap="prevDay">
    <text>◀ 昨天</text>
  </button>
  
  <button class="btn-today" bindtap="showDatePicker">
    <text class="icon">📅</text>
    <text class="date">{{currentDate}}</text>
  </button>
  
  <button class="btn-next" bindtap="nextDay" disabled="{{isToday}}">
    <text>明天 ▶</text>
  </button>
</view>
```

```wxss
.date-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72rpx;
  background: #ffffff;
  border-radius: 12rpx;
  margin: 16rpx 32rpx;
  padding: 0 24rpx;
}

.btn-prev, .btn-next {
  font-size: 28rpx;
  color: #64748b;
  background: transparent;
  border: none;
  padding: 0;
}

.btn-today {
  font-size: 32rpx;
  font-weight: 600;
  color: #1e293b;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.btn-next[disabled] {
  color: #cbd5e1;
}
```

---

### 组件2：时间范围选择器（分类浏览用）

```wxml
<view class="time-range-filter">
  <!-- 快捷选项 -->
  <view class="quick-filters">
    <button 
      class="filter-btn {{activeFilter === 'today' ? 'active' : ''}}"
      bindtap="selectFilter"
      data-filter="today">
      今天
    </button>
    <button 
      class="filter-btn {{activeFilter === 'week' ? 'active' : ''}}"
      bindtap="selectFilter"
      data-filter="week">
      本周
    </button>
    <button 
      class="filter-btn {{activeFilter === 'month' ? 'active' : ''}}"
      bindtap="selectFilter"
      data-filter="month">
      本月
    </button>
    <button 
      class="filter-btn {{activeFilter === 'custom' ? 'active' : ''}}"
      bindtap="showCustomPicker">
      自定义
    </button>
  </view>
  
  <!-- 当前选择显示 -->
  <view class="selected-range" wx:if="{{activeFilter === 'custom'}}">
    <text>{{startDate}} 至 {{endDate}}</text>
  </view>
</view>

<!-- 自定义日期选择器（弹窗） -->
<view class="custom-picker-modal" wx:if="{{showCustomModal}}">
  <view class="modal-content">
    <view class="picker-row">
      <text class="label">开始日期</text>
      <picker mode="date" value="{{startDate}}" end="{{endDate}}" bindchange="onStartDateChange">
        <view class="picker-value">
          {{startDate}} 📅
        </view>
      </picker>
    </view>
    
    <view class="picker-row">
      <text class="label">结束日期</text>
      <picker mode="date" value="{{endDate}}" start="{{startDate}}" end="{{today}}" bindchange="onEndDateChange">
        <view class="picker-value">
          {{endDate}} 📅
        </view>
      </picker>
    </view>
    
    <view class="modal-actions">
      <button class="btn-cancel" bindtap="cancelCustomPicker">取消</button>
      <button class="btn-confirm" bindtap="confirmCustomPicker">确定</button>
    </view>
  </view>
</view>
```

```wxss
.time-range-filter {
  background: #ffffff;
  padding: 24rpx 32rpx;
}

.quick-filters {
  display: flex;
  gap: 16rpx;
}

.filter-btn {
  flex: 1;
  height: 64rpx;
  border-radius: 32rpx;
  font-size: 28rpx;
  background: #f1f5f9;
  color: #64748b;
  border: none;
}

.filter-btn.active {
  background: #1e293b;
  color: #ffffff;
}

.selected-range {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #64748b;
  text-align: center;
}

/* 自定义选择器弹窗 */
.custom-picker-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  width: 600rpx;
  background: #ffffff;
  border-radius: 24rpx;
  padding: 48rpx 32rpx;
}

.picker-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32rpx;
}

.label {
  font-size: 28rpx;
  color: #64748b;
}

.picker-value {
  font-size: 28rpx;
  color: #1e293b;
  padding: 16rpx 24rpx;
  background: #f1f5f9;
  border-radius: 8rpx;
}

.modal-actions {
  display: flex;
  gap: 16rpx;
  margin-top: 32rpx;
}

.btn-cancel, .btn-confirm {
  flex: 1;
  height: 80rpx;
  border-radius: 12rpx;
  font-size: 32rpx;
  border: none;
}

.btn-cancel {
  background: #f1f5f9;
  color: #64748b;
}

.btn-confirm {
  background: #1e293b;
  color: #ffffff;
}
```

---

## 📊 数据处理逻辑

### JavaScript逻辑示例

```javascript
// pages/home/home.js - 今日快讯
Page({
  data: {
    currentDate: '',
    isToday: true,
    newsList: []
  },
  
  onLoad() {
    this.setCurrentDate(new Date());
    this.loadNews();
  },
  
  // 设置当前日期
  setCurrentDate(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    this.setData({
      currentDate: this.formatDate(date),
      isToday: date.getTime() === today.getTime(),
      selectedDate: date
    });
  },
  
  // 前一天
  prevDay() {
    const date = new Date(this.data.selectedDate);
    date.setDate(date.getDate() - 1);
    this.setCurrentDate(date);
    this.loadNews();
  },
  
  // 后一天（不能超过今天）
  nextDay() {
    if (this.data.isToday) return;
    const date = new Date(this.data.selectedDate);
    date.setDate(date.getDate() + 1);
    this.setCurrentDate(date);
    this.loadNews();
  },
  
  // 显示日期选择器
  showDatePicker() {
    // 使用微信小程序的日期选择器
    // 或跳转到日历页面
  },
  
  // 加载新闻
  loadNews() {
    wx.showLoading({ title: '加载中...' });
    
    // 调用API获取指定日期的新闻
    const dateStr = this.data.currentDate;
    
    // 这里接入真实API
    // 现在用模拟数据
    setTimeout(() => {
      const mockNews = this.getMockNewsByDate(dateStr);
      this.setData({ newsList: mockNews });
      wx.hideLoading();
    }, 500);
  },
  
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});
```

```javascript
// pages/category/category.js - 分类浏览
Page({
  data: {
    activeFilter: 'week', // today | week | month | custom
    startDate: '',
    endDate: '',
    showCustomModal: false,
    newsList: []
  },
  
  onLoad() {
    this.initDateRange('week');
    this.loadNews();
  },
  
  // 初始化日期范围
  initDateRange(filter) {
    const today = new Date();
    let startDate, endDate;
    
    switch(filter) {
      case 'today':
        startDate = endDate = today;
        break;
      case 'week':
        startDate = this.getMonday(today);
        endDate = today;
        break;
      case 'month':
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = today;
        break;
    }
    
    this.setData({
      activeFilter: filter,
      startDate: this.formatDate(startDate),
      endDate: this.formatDate(endDate)
    });
  },
  
  // 获取本周一
  getMonday(date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  },
  
  // 选择快捷筛选
  selectFilter(e) {
    const filter = e.currentTarget.dataset.filter;
    
    if (filter === 'custom') {
      this.setData({ showCustomModal: true });
    } else {
      this.initDateRange(filter);
      this.loadNews();
    }
  },
  
  // 确认自定义日期
  confirmCustomPicker() {
    // 验证日期范围
    const start = new Date(this.data.startDate);
    const end = new Date(this.data.endDate);
    const diffDays = (end - start) / (1000 * 60 * 60 * 24);
    
    if (diffDays > 90) {
      wx.showToast({
        title: '最多查询90天范围',
        icon: 'none'
      });
      return;
    }
    
    this.setData({
      activeFilter: 'custom',
      showCustomModal: false
    });
    this.loadNews();
  },
  
  // 加载新闻
  loadNews() {
    wx.showLoading({ title: '加载中...' });
    
    const { startDate, endDate } = this.data;
    
    // 调用API
    setTimeout(() => {
      const mockNews = this.getMockNewsByRange(startDate, endDate);
      this.setData({ newsList: mockNews });
      wx.hideLoading();
      
      // 显示结果数量
      wx.showToast({
        title: `共找到 ${mockNews.length} 条快讯`,
        icon: 'none',
        duration: 1500
      });
    }, 800);
  }
});
```

---

## 🎯 用户体验优化

### 1. 性能优化
```javascript
// 分页加载（超过50条时）
loadMore() {
  if (this.data.newsList.length >= 50 && !this.data.hasMore) {
    // 显示"加载更多"按钮
    // 或上拉触底自动加载
  }
}
```

### 2. 空状态设计
```wxml
<view class="empty-state" wx:if="{{newsList.length === 0}}">
  <image src="/images/empty-news.png" class="empty-icon"></image>
  <text class="empty-text">{{currentDate}} 暂无快讯</text>
  <button class="btn-back-today" bindtap="backToToday">回到今天</button>
</view>
```

### 3. 加载状态
```wxml
<!-- 骨架屏 -->
<view class="skeleton-list" wx:if="{{loading}}">
  <view class="skeleton-card" wx:for="{{[1,2,3,4,5]}}" wx:key="index">
    <view class="skeleton-title"></view>
    <view class="skeleton-text"></view>
    <view class="skeleton-text short"></view>
  </view>
</view>
```

### 4. 日期提示
```javascript
// 在标题栏显示当前筛选范围
wx.setNavigationBarTitle({
  title: this.getPageTitle()
});

getPageTitle() {
  const { activeFilter, startDate, endDate } = this.data;
  if (activeFilter === 'today') return '今日快讯';
  if (activeFilter === 'week') return '本周快讯';
  if (activeFilter === 'month') return '本月快讯';
  return `${startDate} 至 ${endDate}`;
}
```

---

## 📋 总结

### 页面时间逻辑一览表

| 页面 | 默认显示 | 筛选方式 | 最大范围 |
|------|---------|---------|---------|
| 今日快讯 | 今天 | 日期切换器 | 不限（单日） |
| 分类浏览 | 本周 | 快捷+自定义 | 90天 |
| 音频概览 | 最近7天 | 快捷选项 | 30天 |
| 收藏页 | 全部 | 仅排序 | 不限 |

### 设计亮点
1. ✅ 符合用户使用场景（快速 vs 深度）
2. ✅ 交互简洁（快捷选项优先）
3. ✅ 性能友好（限制查询范围）
4. ✅ 视觉清晰（选中状态明显）
5. ✅ 体验流畅（加载状态+空状态）

---

**这套方案平衡了易用性和灵活性，符合中高层管理者的使用习惯！** ✨

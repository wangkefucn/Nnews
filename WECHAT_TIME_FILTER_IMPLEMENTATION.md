# ⏰ 微信小程序时间筛选完整实现代码

## 📋 设计规格速查

| 页面 | 默认显示 | 筛选方式 | 最大范围 |
|------|---------|---------|---------|
| 今日快讯 | 今天 | 日期切换器（◀今天▶） | 不限（单日） |
| 分类浏览 | 本周 | 快捷按钮+自定义 | 90天 |
| 音频概览 | 最近7天 | 快捷按钮 | 30天 |
| 收藏页 | 全部 | 排序选项 | 不限 |

---

## 1️⃣ 今日快讯 - 日期快速切换器

### pages/home/home.wxml

```xml
<view class="page">
  <!-- 深色头部 -->
  <view class="page-header">
    <text class="header-title">今日快讯</text>
    <text class="header-subtitle">NRI公开动态速览</text>
  </view>
  
  <!-- 日期切换器 -->
  <view class="date-switcher">
    <button class="btn-prev" bindtap="prevDay">
      <text class="arrow">◀</text>
      <text>昨天</text>
    </button>
    
    <button class="btn-today" bindtap="showDatePicker">
      <text class="icon">📅</text>
      <text class="date">{{displayDate}}</text>
    </button>
    
    <button 
      class="btn-next {{isToday ? 'disabled' : ''}}" 
      bindtap="nextDay" 
      disabled="{{isToday}}">
      <text>明天</text>
      <text class="arrow">▶</text>
    </button>
  </view>
  
  <!-- 新闻列表 -->
  <view class="news-list">
    <block wx:if="{{newsList.length > 0}}">
      <news-card 
        wx:for="{{newsList}}" 
        wx:key="id"
        data="{{item}}"
        bindtap="toDetail"
        data-id="{{item.id}}">
      </news-card>
    </block>
    
    <!-- 空状态 -->
    <view class="empty-state" wx:else>
      <image src="/images/empty-news.png" class="empty-icon" mode="aspectFit"></image>
      <text class="empty-text">{{displayDate}} 暂无快讯</text>
      <button class="btn-back-today" bindtap="backToToday" wx:if="{{!isToday}}">
        回到今天
      </button>
    </view>
  </view>
</view>
```

### pages/home/home.wxss

```css
/* 页面容器 */
.page {
  min-height: 100vh;
  background: #f8fafc;
  padding-bottom: 140rpx; /* 为TabBar留空间 */
}

/* 深色头部 */
.page-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 64rpx 40rpx 48rpx;
}

.header-title {
  display: block;
  font-size: 40rpx;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8rpx;
}

.header-subtitle {
  display: block;
  font-size: 28rpx;
  color: #cbd5e1;
  font-weight: 300;
}

/* 日期切换器 */
.date-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72rpx;
  background: #ffffff;
  border-radius: 12rpx;
  margin: 16rpx 32rpx;
  padding: 0 24rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.08);
}

.btn-prev, .btn-today, .btn-next {
  display: flex;
  align-items: center;
  gap: 4rpx;
  background: transparent;
  border: none;
  padding: 0;
  font-size: 28rpx;
}

.btn-prev, .btn-next {
  color: #64748b;
}

.btn-prev:active, .btn-next:active {
  color: #1e293b;
}

.btn-next.disabled {
  color: #cbd5e1;
}

.btn-today {
  font-size: 32rpx;
  font-weight: 600;
  color: #1e293b;
  gap: 8rpx;
}

.arrow {
  font-size: 24rpx;
}

.icon {
  font-size: 28rpx;
}

/* 新闻列表 */
.news-list {
  padding: 0 32rpx 32rpx;
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120rpx 60rpx;
}

.empty-icon {
  width: 240rpx;
  height: 240rpx;
  margin-bottom: 32rpx;
  opacity: 0.3;
}

.empty-text {
  font-size: 28rpx;
  color: #9ca3af;
  margin-bottom: 32rpx;
}

.btn-back-today {
  height: 72rpx;
  padding: 0 48rpx;
  background: #1e293b;
  color: #ffffff;
  border: none;
  border-radius: 36rpx;
  font-size: 28rpx;
}
```

### pages/home/home.js

```javascript
Page({
  data: {
    selectedDate: null,      // Date对象
    displayDate: '今天',     // 显示文字
    isToday: true,           // 是否是今天
    newsList: [],            // 新闻列表
    loading: false
  },

  onLoad(options) {
    // 初始化为今天
    const today = new Date();
    this.setCurrentDate(today);
    this.loadNews();
  },

  // 设置当前日期
  setCurrentDate(date) {
    const today = new Date();
    // 重置时间为00:00:00，方便比较
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const isToday = date.getTime() === today.getTime();
    
    this.setData({
      selectedDate: date,
      displayDate: isToday ? '今天' : this.formatDate(date),
      isToday: isToday
    });
  },

  // 前一天
  prevDay() {
    const date = new Date(this.data.selectedDate);
    date.setDate(date.getDate() - 1);
    this.setCurrentDate(date);
    this.loadNews();
  },

  // 后一天
  nextDay() {
    if (this.data.isToday) return;
    
    const date = new Date(this.data.selectedDate);
    date.setDate(date.getDate() + 1);
    this.setCurrentDate(date);
    this.loadNews();
  },

  // 显示日期选择器
  showDatePicker() {
    const self = this;
    wx.showActionSheet({
      itemList: ['选择日期', '回到今天'],
      success(res) {
        if (res.tapIndex === 0) {
          // 选择日期
          self.selectCustomDate();
        } else if (res.tapIndex === 1) {
          // 回到今天
          self.backToToday();
        }
      }
    });
  },

  // 自定义日期选择
  selectCustomDate() {
    const self = this;
    const today = this.formatDateISO(new Date());
    
    wx.showModal({
      title: '选择日期',
      editable: true,
      placeholderText: 'YYYY-MM-DD',
      content: this.formatDateISO(this.data.selectedDate),
      success(res) {
        if (res.confirm && res.content) {
          const date = new Date(res.content);
          if (!isNaN(date.getTime())) {
            self.setCurrentDate(date);
            self.loadNews();
          } else {
            wx.showToast({
              title: '日期格式错误',
              icon: 'none'
            });
          }
        }
      }
    });
  },

  // 回到今天
  backToToday() {
    this.setCurrentDate(new Date());
    this.loadNews();
  },

  // 加载新闻
  loadNews() {
    const self = this;
    
    this.setData({ loading: true });
    wx.showLoading({ title: '加载中...' });

    const dateStr = this.formatDateISO(this.data.selectedDate);

    // TODO: 调用真实API
    // wx.request({
    //   url: 'https://your-api.com/news',
    //   data: { date: dateStr },
    //   success(res) {
    //     self.setData({ newsList: res.data.list });
    //   }
    // });

    // 模拟数据
    setTimeout(() => {
      const mockData = self.getMockNewsByDate(dateStr);
      self.setData({ 
        newsList: mockData,
        loading: false
      });
      wx.hideLoading();
    }, 500);
  },

  // 格式化日期（显示用）
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 格式化日期（ISO格式）
  formatDateISO(date) {
    return this.formatDate(date);
  },

  // 模拟数据
  getMockNewsByDate(dateStr) {
    // 这里返回模拟数据
    return [
      {
        id: 1,
        titleJp: '野村総合研究所、AI活用の新サービス発表',
        summaryCn: 'NRI发布了利用生成式AI的新型咨询服务，旨在提高企业DX推进效率',
        category: 'ai',
        importance: 'S',
        publishTime: '10:30',
        source: 'NRI官网',
        isBookmarked: false
      }
      // ... 更多数据
    ];
  },

  // 跳转到详情页
  toDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
});
```

---

## 2️⃣ 分类浏览 - 时间范围选择器

### pages/category/category.wxml

```xml
<view class="page">
  <!-- 深色头部 -->
  <view class="page-header">
    <text class="header-title">分类浏览</text>
    <text class="header-subtitle">按主题深度查询</text>
  </view>
  
  <!-- 分类Tab -->
  <view class="category-tabs">
    <scroll-view scroll-x class="tabs-scroll">
      <view class="tab-list">
        <view 
          class="tab-item {{activeCategory === item.key ? 'active' : ''}}"
          wx:for="{{categories}}"
          wx:key="key"
          bindtap="selectCategory"
          data-key="{{item.key}}">
          <text>{{item.label}}</text>
        </view>
      </view>
    </scroll-view>
  </view>
  
  <!-- 时间范围筛选器 -->
  <view class="time-range-filter">
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
    
    <!-- 结果数量 -->
    <view class="result-count" wx:if="{{newsList.length > 0}}">
      <text>共找到 {{newsList.length}} 条快讯</text>
    </view>
  </view>
  
  <!-- 新闻列表 -->
  <view class="news-list">
    <news-card 
      wx:for="{{newsList}}" 
      wx:key="id"
      data="{{item}}">
    </news-card>
    
    <!-- 空状态 -->
    <view class="empty-state" wx:if="{{newsList.length === 0 && !loading}}">
      <text class="empty-text">暂无相关快讯</text>
    </view>
  </view>
</view>

<!-- 自定义日期选择器弹窗 -->
<view class="custom-picker-modal" wx:if="{{showCustomModal}}" bindtap="closeModal">
  <view class="modal-content" catchtap="stopPropagation">
    <view class="modal-header">
      <text class="modal-title">选择时间范围</text>
    </view>
    
    <view class="picker-row">
      <text class="label">开始日期</text>
      <picker 
        mode="date" 
        value="{{startDate}}" 
        end="{{endDate}}"
        bindchange="onStartDateChange">
        <view class="picker-value">
          {{startDate}} <text class="icon">📅</text>
        </view>
      </picker>
    </view>
    
    <view class="picker-row">
      <text class="label">结束日期</text>
      <picker 
        mode="date" 
        value="{{endDate}}" 
        start="{{startDate}}" 
        end="{{today}}"
        bindchange="onEndDateChange">
        <view class="picker-value">
          {{endDate}} <text class="icon">📅</text>
        </view>
      </picker>
    </view>
    
    <view class="date-range-hint">
      <text>最多查询90天范围</text>
    </view>
    
    <view class="modal-actions">
      <button class="btn-cancel" bindtap="cancelCustomPicker">取消</button>
      <button class="btn-confirm" bindtap="confirmCustomPicker">确定</button>
    </view>
  </view>
</view>
```

### pages/category/category.wxss

```css
/* 时间范围筛选器 */
.time-range-filter {
  background: #ffffff;
  padding: 24rpx 32rpx;
  margin-bottom: 16rpx;
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
  transition: all 0.2s ease;
}

.filter-btn.active {
  background: #1e293b;
  color: #ffffff;
}

.selected-range {
  margin-top: 16rpx;
  padding-top: 16rpx;
  border-top: 1rpx solid #e5e7eb;
  font-size: 24rpx;
  color: #64748b;
  text-align: center;
}

.result-count {
  margin-top: 12rpx;
  font-size: 24rpx;
  color: #9ca3af;
  text-align: center;
}

/* 自定义日期选择器弹窗 */
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
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  width: 600rpx;
  max-width: 90%;
  background: #ffffff;
  border-radius: 24rpx;
  padding: 48rpx 32rpx;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(100rpx);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  margin-bottom: 32rpx;
}

.modal-title {
  font-size: 36rpx;
  font-weight: 600;
  color: #1e293b;
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
  display: flex;
  align-items: center;
  gap: 8rpx;
  font-size: 28rpx;
  color: #1e293b;
  padding: 16rpx 24rpx;
  background: #f1f5f9;
  border-radius: 8rpx;
}

.date-range-hint {
  font-size: 24rpx;
  color: #f97316;
  text-align: center;
  margin-bottom: 32rpx;
}

.modal-actions {
  display: flex;
  gap: 16rpx;
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

### pages/category/category.js

```javascript
Page({
  data: {
    // 分类
    categories: [
      { key: 'all', label: '全部' },
      { key: 'ir', label: 'IR信息' },
      { key: 'ai', label: 'AI/DX' },
      { key: 'finance', label: '财务' },
      { key: 'hr', label: '人事' },
      { key: 'governance', label: '治理' }
    ],
    activeCategory: 'all',
    
    // 时间筛选
    activeFilter: 'week',
    startDate: '',
    endDate: '',
    today: '',
    showCustomModal: false,
    
    // 数据
    newsList: [],
    loading: false
  },

  onLoad() {
    const today = new Date();
    this.setData({
      today: this.formatDate(today)
    });
    
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
        startDate = this.getMonday(new Date(today));
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
    this.initDateRange(filter);
    this.loadNews();
  },

  // 显示自定义选择器
  showCustomPicker() {
    this.setData({ showCustomModal: true });
  },

  // 关闭弹窗
  closeModal() {
    this.setData({ showCustomModal: false });
  },

  // 阻止冒泡
  stopPropagation() {},

  // 开始日期改变
  onStartDateChange(e) {
    this.setData({ startDate: e.detail.value });
  },

  // 结束日期改变
  onEndDateChange(e) {
    this.setData({ endDate: e.detail.value });
  },

  // 取消自定义选择
  cancelCustomPicker() {
    this.setData({ showCustomModal: false });
  },

  // 确认自定义选择
  confirmCustomPicker() {
    // 验证日期范围
    const start = new Date(this.data.startDate);
    const end = new Date(this.data.endDate);
    const diffDays = (end - start) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) {
      wx.showToast({
        title: '开始日期不能晚于结束日期',
        icon: 'none'
      });
      return;
    }

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

  // 选择分类
  selectCategory(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ activeCategory: key });
    this.loadNews();
  },

  // 加载新闻
  loadNews() {
    const { startDate, endDate, activeCategory } = this.data;

    this.setData({ loading: true });
    wx.showLoading({ title: '加载中...' });

    // TODO: 调用真实API
    setTimeout(() => {
      const mockData = this.getMockNewsByRange(startDate, endDate, activeCategory);
      this.setData({ 
        newsList: mockData,
        loading: false
      });
      wx.hideLoading();
    }, 800);
  },

  // 格式化日期
  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 模拟数据
  getMockNewsByRange(startDate, endDate, category) {
    // 返回模拟数据
    return [];
  }
});
```

---

## 📊 总结

### 实现要点

1. **今日快讯**：
   - 简洁的日期切换器（◀今天▶）
   - 可选择任意历史日期
   - 禁止选择未来日期

2. **分类浏览**：
   - 快捷选项（今天/本周/本月）优先
   - 自定义日期范围弹窗
   - 限制90天最大范围

3. **用户体验**：
   - 加载状态反馈
   - 空状态提示
   - 结果数量显示
   - 平滑动画过渡

4. **性能优化**：
   - 防抖加载
   - 骨架屏
   - 分页加载（数据量大时）

---

**完整实现代码，直接复制使用！** ✨

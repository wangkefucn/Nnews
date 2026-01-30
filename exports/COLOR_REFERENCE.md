# N前线 配色速查表
## 精确HEX色值 - 直接复制使用

---

## 主色系（深色）

```
深石板 900: #0f172a
深石板 800: #1e293b  ← 主要品牌色
深石板 700: #334155
深石板 600: #475569
深石板 300: #cbd5e1
深石板 50:  #f8fafc  ← 页面背景色
```

---

## 灰色系（文字、边框）

```
灰色 900: #111827  ← 主要文字
灰色 600: #4b5563
灰色 500: #6b7280  ← 次要文字
灰色 400: #9ca3af  ← 未激活状态
灰色 300: #d1d5db
灰色 200: #e5e7eb  ← 边框
灰色 100: #f3f4f6
灰色 50:  #f9fafb
```

---

## 强调色（橙色系）

```
琥珀 500: #f59e0b
琥珀 600: #d97706
橙色 500: #f97316  ← 重要性S级、收藏
橙色 600: #ea580c
```

渐变写法：
```css
background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
```

---

## 功能色（蓝色系）

```
蓝色 500: #3b82f6
蓝色 600: #2563eb  ← 重要性A级、链接
蓝色 700: #1d4ed8
蓝色 50:  #eff6ff  ← IR标签背景
```

---

## 分类标签色

### IR情报（蓝色）
```
背景: #eff6ff  (blue-50)
文字: #1d4ed8  (blue-700)
```

### AI·数字化（紫色）
```
背景: #faf5ff  (purple-50)
文字: #7e22ce  (purple-700)
```

### 证券/金融（绿色）
```
背景: #f0fdf4  (green-50)
文字: #15803d  (green-700)
```

### 人事（琥珀色）
```
背景: #fffbeb  (amber-50)
文字: #d97706  (amber-600)
```

### 治理（青色）
```
背景: #f0fdfa  (teal-50)
文字: #0f766e  (teal-700)
```

---

## 重要性标签色

### S级（橙色 - 最重要）
```
背景: #f97316
文字: #ffffff
```

### A级（蓝色 - 重要）
```
背景: #2563eb
文字: #ffffff
```

### B级（灰色 - 一般）
```
背景: #9ca3af
文字: #ffffff
```

---

## 渐变背景

### 头部渐变（深蓝灰）
```css
background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
```

### 启动页背景（深蓝黑）
```css
background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
```

### 收藏按钮渐变（琥珀橙）
```css
background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
```

---

## 基础色

```
白色:  #ffffff
黑色:  #000000
透明:  transparent
```

---

## 微信小程序 WXSS 变量定义

```css
/* app.wxss */
page {
  /* 品牌色 */
  --brand-primary: #1e293b;
  --brand-secondary: #334155;
  
  /* 强调色 */
  --accent-orange: #f97316;
  --accent-blue: #2563eb;
  
  /* 文字色 */
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;
  --text-white: #ffffff;
  
  /* 背景色 */
  --bg-page: #f8fafc;
  --bg-card: #ffffff;
  --bg-header: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  
  /* 边框色 */
  --border-color: #e5e7eb;
  --border-light: #f3f4f6;
  
  /* 分类标签 - IR */
  --tag-ir-bg: #eff6ff;
  --tag-ir-text: #1d4ed8;
  
  /* 分类标签 - AI */
  --tag-ai-bg: #faf5ff;
  --tag-ai-text: #7e22ce;
  
  /* 分类标签 - finance */
  --tag-finance-bg: #f0fdf4;
  --tag-finance-text: #15803d;
  
  /* 分类标签 - hr */
  --tag-hr-bg: #fffbeb;
  --tag-hr-text: #d97706;
  
  /* 分类标签 - governance */
  --tag-gov-bg: #f0fdfa;
  --tag-gov-text: #0f766e;
  
  /* 重要性标签 */
  --badge-s: #f97316;
  --badge-a: #2563eb;
  --badge-b: #9ca3af;
}
```

---

## 使用示例

### 页面头部
```css
.page-header {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #ffffff;
}
```

### 新闻卡片
```css
.news-card {
  background: #ffffff;
  border: 1rpx solid #e5e7eb;
}
```

### IR标签
```css
.category-tag.IR {
  background: #eff6ff;
  color: #1d4ed8;
}
```

### S级重要性标签
```css
.importance-badge.S {
  background: #f97316;
  color: #ffffff;
}
```

### TabBar激活态
```css
.tabbar-item.active .tabbar-text {
  color: #1e293b;
}
```

---

## 色彩使用原则

1. **深色区域**（头部、TabBar激活态）：使用 `#1e293b`
2. **浅色背景**（页面、卡片外）：使用 `#f8fafc`
3. **卡片背景**：使用 `#ffffff`
4. **主要文字**：使用 `#111827`
5. **次要文字**：使用 `#6b7280`
6. **未激活状态**：使用 `#9ca3af`
7. **边框**：使用 `#e5e7eb`
8. **重要元素**（收藏、S级）：使用 `#f97316`

---

**提示**：所有颜色值都是精确测量后的标准值，请勿随意修改！

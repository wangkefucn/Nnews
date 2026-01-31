# ⚡ 快速启动提示词（复制给AI）

---

你好！我需要你开发一个微信小程序"N前线"。

## 项目信息
- **项目位置**：`C:\dev\Nnews\figma`
- **目标**：为中高层管理者开发的NRI动态速览工具
- **风格**：专业克制、金融咨询风、日系沉稳、深蓝灰配色

## 第一步：读取文档

请按顺序阅读以下文档：

### 必读（核心）
1. **`PROMPT_FOR_GEMINI.md`** - 总览和快速开始
2. **`WECHAT_MINIPROGRAM_UI_GUIDE.md`** - 微信小程序完整UI规范

### 参考（需要时查看）
3. `BRAND_GUIDE.md` - 品牌视觉v2.0
4. `exports/COLOR_REFERENCE.md` - 配色速查
5. `exports/PNG_CONVERSION_CHECKLIST.md` - 图标资源清单

读完后，告诉我你理解的项目架构和设计规范。

## 资源位置
- **Logo PNG**：`/exports/icons-png/logo-dark.png` 和 `logo-light.png`
- **TabBar图标**：`/exports/icons-png/tabbar-*-gray.png` 和 `tabbar-*-dark.png`
- **其他图标**：`/exports/icons-png/` 目录下

## 页面结构
**4个主页面**（TabBar）：
1. 今日快讯（home）
   - 默认显示：仅今天（当日0:00-23:59）
   - 时间筛选：日期快速切换器（◀今天▶），可选任意历史日期
2. 分类浏览（category）
   - 默认显示：本周（周一0:00 - 周日23:59）
   - 时间筛选：快捷选项（今天/本周/本月）+ 自定义日期范围（最多90天）
3. 音频概览（audio）
   - 默认显示：最近7天
   - 时间筛选：最近7天/最近30天
4. 设置（settings）
   - 收藏页：显示全部收藏，可按收藏时间/发布时间/重要性排序

**2个二级页面**：
- 详情页（detail）
- 收藏页（bookmarks）

## 开发要求
- 微信小程序原生开发（不用框架）
- 严格遵循文档规范，不自由发挥
- 使用 `rpx` 单位
- 所有颜色使用文档精确色值

## 核心配色
```css
头部：linear-gradient(135deg, #1e293b, #334155)
背景：#f8fafc
TabBar未激活：#9ca3af
TabBar激活：#1e293b
强调色：#f97316
```

---

**准备好后，请先读取上述文档，然后告诉我你的理解！** 🚀
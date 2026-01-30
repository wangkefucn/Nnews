# N前线 资源导出目录

## 📂 目录说明

这个目录包含了所有用于微信小程序开发的导出资源和文档。

---

## 📋 文件清单

### 🎨 Logo文件
- **`logo-dark.svg`** - 深色版Logo（用于浅色背景）
- **`logo-light.svg`** - 浅色版Logo（用于深色背景）
- 设计风格：中国书法泼墨，120×120px

### 📄 设计文档
- **`LOGO_CALLIGRAPHY_GUIDE.md`** - Logo书法版超详细设计说明
- **`LOGO_UPDATE_v2.0.md`** - Logo v2.0更新摘要
- **`PNG_CONVERSION_CHECKLIST.md`** - PNG图标转换清单
- **`COLOR_REFERENCE.md`** - 配色速查表

### 🖼️ 图标资源

#### `/icons/` - SVG源文件
所有图标的矢量源文件（9个SVG）：
- TabBar图标：home, category, audio, settings
- 功能图标：arrow-left, star-outline, star-filled, play, pause

#### `/icons-png/` - PNG转换文件
手动转换后的PNG图标（15个PNG）：

**Logo图标**：
- `logo-dark.png` - 深色版Logo
- `logo-light.png` - 浅色版Logo

**TabBar图标**（每个2个版本）：
- `tabbar-home-gray.png` / `tabbar-home-dark.png`
- `tabbar-category-gray.png` / `tabbar-category-dark.png`
- `tabbar-audio-gray.png` / `tabbar-audio-dark.png`
- `tabbar-settings-gray.png` / `tabbar-settings-dark.png`

**功能图标**：
- `arrow-left.png` - 返回箭头
- `star-outline.png` / `star-filled.png` - 收藏星标
- `play.png` / `pause.png` - 播放/暂停

---

## 🎯 快速开始

### 微信小程序开发者

1. **阅读开发文档**
   - 主文档：`/PROMPT_FOR_GEMINI.md`
   - UI指南：`/WECHAT_MINIPROGRAM_UI_GUIDE.md`

2. **准备Logo**
   - 使用 `/icons-png/logo-dark.png` 和 `/icons-png/logo-light.png`
   - 复制到小程序项目的 `/images/` 目录

3. **准备图标**
   - 使用 `/icons-png/` 目录下的所有PNG文件
   - 复制到小程序项目的 `/images/tabbar/` 目录

4. **参考配色**
   - 查看 `COLOR_REFERENCE.md` 获取精确色值

### React开发者

- Logo已内联到 `/src/app/components/brand/Logo.tsx`
- 直接导入使用：`import { Logo } from '@/app/components/brand/Logo';`
- 按 `Cmd+B` 查看品牌展示页面

---

## 📐 规格说明

### Logo规格
- **尺寸**：120×120px（SVG），144×144px（PNG推荐）
- **格式**：SVG矢量 / PNG-24透明
- **颜色**：深色版（浅背景）/ 浅色版（深背景）

### 图标规格
- **尺寸**：144×144px（@3x）
- **格式**：PNG-24，透明背景
- **颜色**：
  - 灰色版（未激活）：#9ca3af
  - 深色版（激活）：#1e293b
  - 强调色（收藏）：#f97316

---

## 🎨 设计理念

### Logo v2.0 - 书法泼墨风格
- **核心概念**：中国书法 × AI科技
- **粗壮笔画**：6-10px，有力量感
- **书法细节**：飞白、墨点、笔锋
- **科技元素**：蓝色渐变（#1e40af → #60a5fa）
- **文化点缀**：红色印章

详细说明请阅读 `LOGO_CALLIGRAPHY_GUIDE.md`

---

## 🔧 转换工具

### SVG转PNG推荐工具
- **在线工具**：https://svgtopng.com/
- **Figma**：导入SVG → 调整颜色 → 导出PNG
- **Photoshop/Illustrator**：打开SVG → 修改颜色 → 导出PNG

### 转换参数
- 尺寸：144×144px
- 格式：PNG-24
- 背景：透明
- DPI：72

---

## 📊 PNG转换清单

参考 `PNG_CONVERSION_CHECKLIST.md` 获取详细转换清单。

**需要转换的文件**：
- Logo：2个文件（深色版 + 浅色版）
- TabBar图标：8个文件（4个图标 × 2个版本）
- 功能图标：5个文件

**总计**：15个PNG文件

---

## 🎯 使用建议

### 微信小程序
1. **启动页**：使用 `logo-light.png`（192rpx × 192rpx）
2. **设置页**：使用 `logo-dark.png`（64rpx × 64rpx）
3. **TabBar**：使用 `tabbar-*-gray.png`（未激活）和 `tabbar-*-dark.png`（激活）

### Web应用
- 直接使用SVG文件获得最佳缩放效果
- React组件已内联SVG，无需额外导入

---

## 📝 文档链接

### 核心文档
- `/PROMPT_FOR_GEMINI.md` - AI开发主文档
- `/WECHAT_MINIPROGRAM_UI_GUIDE.md` - 完整UI实现指南
- `/BRAND_GUIDE.md` - 品牌视觉系统v2.0

### 专项文档
- `/exports/LOGO_CALLIGRAPHY_GUIDE.md` - Logo设计详解
- `/exports/LOGO_UPDATE_v2.0.md` - Logo更新说明
- `/exports/PNG_CONVERSION_CHECKLIST.md` - 转换清单
- `/exports/COLOR_REFERENCE.md` - 配色速查

---

## ✅ 准备状态

- ✅ SVG文件 - 已完成
- ✅ 设计文档 - 已完成
- ⏳ PNG文件 - 手动转换中

---

## 💡 注意事项

1. **颜色精确度**
   - 使用文档中的精确色值
   - 不要凭肉眼调整颜色
   - 使用取色器验证

2. **透明背景**
   - 必须是真透明
   - 检查边缘无白边

3. **文件命名**
   - 使用小写字母
   - 用连字符（-）分隔
   - 遵循清单命名

4. **备份源文件**
   - 保留所有SVG源文件
   - 不要覆盖原始文件

---

## 📞 获取帮助

- 查看 `/DOCUMENTATION_UPDATE_CHECKLIST.md` 了解文档更新状态
- 按 `Cmd+B` 在React应用中查看品牌展示页面
- 阅读各专项文档获取详细信息

---

**版本**：v2.0 书法泼墨风格  
**更新日期**：2026年1月30日  
**状态**：✅ 设计完成，⏳ PNG转换中

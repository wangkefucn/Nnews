# TabBar 图标 PNG 转换说明

## 📁 文件清单

本文件夹包含8个SVG文件，已设置好正确的颜色，可直接用于PNG转换：

### 灰色版本（未选中状态 - #9ca3af）
1. `home-gray.svg` → 转换为 `home-gray.png`
2. `category-gray.svg` → 转换为 `category-gray.png`
3. `audio-gray.svg` → 转换为 `audio-gray.png`
4. `settings-gray.svg` → 转换为 `settings-gray.png`

### 深色版本（选中状态 - #1e293b）
5. `home-dark.svg` → 转换为 `home-dark.png`
6. `category-dark.svg` → 转换为 `category-dark.png`
7. `audio-dark.svg` → 转换为 `audio-dark.png`
8. `settings-dark.svg` → 转换为 `settings-dark.png`

---

## 🔄 使用 https://svgtopng.com/ 转换步骤

### 方法一：单个转换（简单但重复8次）

1. **打开网站**：访问 https://svgtopng.com/
2. **上传SVG**：将 `home-gray.svg` 拖入或点击上传
3. **设置尺寸**：
   - Width: `144` （对应微信小程序 @3x）
   - Height: `144`
   - 保持勾选 "Lock aspect ratio"
4. **下载PNG**：点击 "Convert" 后下载
5. **重命名**：将下载的文件重命名为 `home-gray.png`
6. **重复**：对其他7个SVG文件重复此过程

### 方法二：批量转换（推荐）

1. **准备文件**：选中本文件夹的所有8个SVG文件
2. **批量上传**：一次性拖入 https://svgtopng.com/
3. **统一设置**：所有文件设置为 144×144px
4. **批量下载**：网站通常会提供打包下载
5. **检查命名**：确认文件名正确对应

---

## 📐 尺寸规范

根据微信小程序要求，TabBar图标需要提供多种尺寸：

| 设备密度 | 尺寸 | 说明 |
|---------|------|------|
| @1x | 48×48px | 基础尺寸 |
| @2x | 96×96px | 标准视网膜屏 |
| **@3x** | **144×144px** | **推荐使用**（高清屏） |

**推荐导出 144×144px**，微信会自动缩放到合适尺寸。

---

## ✅ 转换完成后的检查清单

- [ ] 共8个PNG文件
- [ ] 每个文件大小在 2-10KB 之间（正常范围）
- [ ] 灰色图标看起来是浅灰色（#9ca3af）
- [ ] 深色图标看起来是深蓝灰色（#1e293b）
- [ ] 背景透明（可用 Photoshop/Figma 打开确认）
- [ ] 尺寸统一为 144×144px

---

## 🎯 在微信小程序中使用

将转换好的8个PNG文件放入微信小程序项目的：

```
/images/tabbar/
├── home-gray.png
├── home-dark.png
├── category-gray.png
├── category-dark.png
├── audio-gray.png
├── audio-dark.png
├── settings-gray.png
└── settings-dark.png
```

然后在 `app.json` 中引用：

```json
"tabBar": {
  "list": [
    {
      "pagePath": "pages/home/home",
      "text": "今日快讯",
      "iconPath": "/images/tabbar/home-gray.png",
      "selectedIconPath": "/images/tabbar/home-dark.png"
    }
    // ... 其他3个
  ]
}
```

---

## 🔧 备选转换工具

如果 svgtopng.com 不可用，可使用：

1. **Figma**（推荐）
   - 导入SVG → 选中图层 → Export → PNG → 3x
   
2. **在线工具**
   - https://cloudconvert.com/svg-to-png
   - https://convertio.co/svg-png/
   
3. **本地工具**
   - Adobe Illustrator
   - Inkscape（免费开源）
   - ImageMagick（命令行）

---

## 💡 常见问题

**Q: 转换后的PNG看起来是黑色的？**  
A: 检查SVG文件中的颜色值是否正确，应该是 `#9ca3af` 或 `#1e293b`

**Q: 图标边缘有锯齿？**  
A: 使用更大的尺寸（如 288×288px）然后在小程序中缩放，或使用 Figma 的高质量导出

**Q: 文件太大？**  
A: 使用 TinyPNG (https://tinypng.com/) 压缩，目标控制在 5KB 以内

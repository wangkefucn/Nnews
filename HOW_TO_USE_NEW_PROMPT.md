# 如何使用新提示词指导AI开发

## 📋 快速指南

### 1️⃣ 准备工作

将以下文件发送给开发AI：

#### ✅ 必读文档（5个）
```
1. UPDATED_PROMPT_FOR_AI.md          - 新的总提示词（包含组件系统说明）⭐
2. PROMPT_FOR_GEMINI.md              - 项目总览
3. WECHAT_MINIPROGRAM_UI_GUIDE.md    - 完整UI规范
4. BRAND_GUIDE.md                    - 品牌视觉系统
5. UNIFIED_COMPONENT_SYSTEM.md       - 统一组件系统规范（新增）⭐
6. UI_COMPONENTS_SPECIFICATION.md    - 组件详细规范（新增）⭐
```

#### 📁 资源文件
```
/exports/icons-png/
├─ logo-dark.png
├─ logo-light.png
├─ tabbar-*-gray.png
└─ tabbar-*-dark.png
```

---

### 2️⃣ 发送给AI的完整提示词

复制以下内容，直接发送给开发AI：

```markdown
你好！我需要你开发一个微信小程序"N前线"。

项目位置：C:\dev\Nnews\figma
目标：为中高层管理者开发的NRI动态速览工具
风格：专业克制、金融咨询风、日系沉稳、深蓝灰配色

## 🎯 关键更新（2026-01-31）

我们刚刚完成了**统一UI组件系统**的开发，包含：

1. **CategoryTag** - 分类标签组件（12种变体）
   - 5大分类 + 1个全选，每个都有专属颜色
   - 3种尺寸：small/large/filter
   
2. **LevelBadge** - 等级徽章组件（9种变体）
   - S/A/B三级重要性标记
   - 3种尺寸：compact/standard/large
   
3. **TimeFilter** - 时间筛选组件（11种变体）
   - 日期切换器、快速筛选、音频筛选等

**总计：32+ 种显示变体，覆盖所有页面场景**

## 📚 请按顺序阅读以下文档：

### 必读文档（6个）
1. **UPDATED_PROMPT_FOR_AI.md** - 新的总提示词 ⭐
2. **PROMPT_FOR_GEMINI.md** - 项目总览
3. **WECHAT_MINIPROGRAM_UI_GUIDE.md** - 完整UI规范
4. **BRAND_GUIDE.md** - 品牌视觉
5. **UNIFIED_COMPONENT_SYSTEM.md** - 统一组件系统 ⭐⭐
6. **UI_COMPONENTS_SPECIFICATION.md** - 组件详细规范（含代码示例）⭐⭐

### 关键信息

**5大分类系统**（每个都有专属颜色）：
- IR情报（蓝色 #3b82f6）- 财报、业绩
- AI・数字化（绿色 #10b981）- 技术创新
- 证券/金融（紫色 #8b5cf6）- 金融业务
- 人事・组织（橙色 #f97316）- 人事任命
- 治理（灰色 #6b7280）- 公司治理

**3级等级系统**：
- S级（橙色 #f97316）- 高度重要
- A级（蓝色 #3b82f6）- 中度重要
- B级（灰色 #6b7280）- 一般重要

**核心配色**：
- 头部：linear-gradient(135deg, #1e293b, #334155)
- 背景：#f8fafc
- 强调色：#f97316

**资源位置**：
- Logo：/exports/icons-png/logo-dark.png 和 logo-light.png
- TabBar图标：/exports/icons-png/tabbar-*-gray.png 和 dark.png

**开发要求**：
- ✅ 微信小程序原生开发（不用框架）
- ✅ 使用 rpx 单位
- ✅ 严格遵循文档规范，不自由发挥
- ✅ 必须实现组件系统的32+种变体
- ✅ 每个分类使用对应的专属颜色

## 🚀 开始开发前请确认：

- [ ] 已读取所有6个文档
- [ ] 理解了5大分类及其专属颜色
- [ ] 理解了3级等级系统
- [ ] 理解了32+种组件变体
- [ ] 知道了所有资源文件位置
- [ ] 明确了开发优先级

准备好后，请告诉我：
1. 你理解的项目架构（4个主页面 + 2个二级页面）
2. 三大核心组件系统（CategoryTag、LevelBadge、TimeFilter）
3. 5大分类的颜色和含义
4. 3级等级的颜色和含义
5. 设计风格特点

开始吧！
```

---

### 3️⃣ AI应该回复什么

AI正确理解后，应该回复类似这样的内容：

```
✅ 我已阅读完所有文档，理解了统一组件系统，可以开始开发。

## 项目理解：

### 架构（4+2页面）
- 4个主页面（TabBar）：今日快讯、分类浏览、音频概览、设置
- 2个二级页面：详情页、我的收藏

### 三大核心组件（32+变体）

1. **CategoryTag** - 12种变体
   - Small（新闻卡片）
   - Large（设置页面）
   - Filter（分类筛选栏）

2. **LevelBadge** - 9种变体
   - Compact（详情页）
   - Standard（新闻卡片）
   - Large（设置页面筛选）

3. **TimeFilter** - 11种变体
   - DateSwitcher（今日快讯）
   - QuickTimeFilter（分类浏览）
   - AudioTimeFilter（音频页面）
   - 其他辅助组件

### 5大分类及颜色
✅ IR情报 - 蓝色 #3b82f6 - 财报、业绩发布
✅ AI・数字化 - 绿色 #10b981 - 技术创新
✅ 证券/金融 - 紫色 #8b5cf6 - 金融业务
✅ 人事・组织 - 橙色 #f97316 - 人事任命
✅ 治理 - 灰色 #6b7280 - 公司治理

### 3级等级及颜色
✅ S级 - 橙色 #f97316 - 高度重要
✅ A级 - 蓝色 #3b82f6 - 中度重要
✅ B级 - 灰色 #6b7280 - 一般重要

### 设计风格
✅ 专业克制、金融咨询风
✅ 日系沉稳（寂刹风格）
✅ 深蓝/深灰配色
✅ 绝对不娱乐化或卡通风格

准备开始开发，请告诉我第一步要做什么！
```

---

### 4️⃣ 如果AI理解不正确

#### ❌ 错误信号1：没有提到"32+种变体"

回复：
```
请重新阅读 UNIFIED_COMPONENT_SYSTEM.md，我们有完整的组件系统：
- CategoryTag：12种变体（3种尺寸 × 4种状态）
- LevelBadge：9种变体（3种尺寸 × 3种等级）
- TimeFilter：11种变体（5类组件）

这是项目的核心，必须完整实现！
```

#### ❌ 错误信号2：分类颜色理解错误

回复：
```
分类颜色必须严格遵循：
- IR情报 = 蓝色 #3b82f6（不是其他蓝色）
- AI・数字化 = 绿色 #10b981（不是其他绿色）
- 证券/金融 = 紫色 #8b5cf6
- 人事・组织 = 橙色 #f97316
- 治理 = 灰色 #6b7280

请确认你能看到 UNIFIED_COMPONENT_SYSTEM.md 中的颜色规范！
```

#### ❌ 错误信号3：等级系统理解错误

回复：
```
等级系统必须是：
- S级（小写's'）= 橙色 #f97316 = 高度重要
- A级（小写'a'）= 蓝色 #3b82f6 = 中度重要
- B级（小写'b'）= 灰色 #6b7280 = 一般重要

请参考 UNIFIED_COMPONENT_SYSTEM.md 的等级定义部分！
```

#### ❌ 错误信号4：想要"自由发挥"

回复：
```
❌ 不允许自由发挥！

请严格遵循：
1. 使用文档中的精确色值
2. 实现所有32+种组件变体
3. 保持专业克制的金融咨询风格
4. 不要添加娱乐化元素
5. 不要修改组件设计

如有疑问，立即提问，不要猜测！
```

---

### 5️⃣ 开发优先级建议

建议按以下顺序指导AI开发：

#### 第一阶段：核心组件（1-2天）
```
请先开发三大核心组件：

1. CategoryTag组件
   - 实现6种分类配置
   - 实现3种尺寸变体（small/large/filter）
   - 测试激活/未激活状态

2. LevelBadge组件
   - 实现3种等级配置
   - 实现3种尺寸变体（compact/standard/large）
   - 测试选中/未选中状态

3. TimeFilter组件
   - DateSwitcher（日期切换器）
   - QuickTimeFilter（快速筛选）
   - AudioTimeFilter（音频筛选）

完成后给我看效果图！
```

#### 第二阶段：页面集成（2-3天）
```
现在集成组件到各页面：

1. 今日快讯页面
   - 头部使用DateSwitcher
   - 新闻卡片显示CategoryTag（small）+ LevelBadge（standard）
   
2. 分类浏览页面
   - 顶部使用CategoryFilterBar
   - 时间筛选使用QuickTimeFilter
   
3. 设置页面
   - 使用CategoryChecklist
   - 使用LevelFilter

4. 音频页面
   - 使用AudioTimeFilter

完成后给我看每个页面的效果图！
```

#### 第三阶段：二级页面（1天）
```
完成二级页面：

1. 详情页
   - 标题栏显示CategoryTag（small）+ LevelBadge（compact）
   
2. 我的收藏
   - 使用统一的新闻卡片组件

完成后给我看完整流程的效果图！
```

---

### 6️⃣ 常见问题速查

#### Q1: AI说找不到某个文档？
**A**: 确保发送了所有6个文档：
```
UPDATED_PROMPT_FOR_AI.md
PROMPT_FOR_GEMINI.md
WECHAT_MINIPROGRAM_UI_GUIDE.md
BRAND_GUIDE.md
UNIFIED_COMPONENT_SYSTEM.md ⭐
UI_COMPONENTS_SPECIFICATION.md ⭐
```

#### Q2: AI对颜色有疑问？
**A**: 直接复制这个给AI：
```javascript
// 分类颜色（必须使用精确值）
const CATEGORY_COLORS = {
  ir: '#3b82f6',        // 蓝色
  ai: '#10b981',        // 绿色
  finance: '#8b5cf6',   // 紫色
  hr: '#f97316',        // 橙色
  governance: '#6b7280' // 灰色
};

// 等级颜色（必须使用精确值）
const LEVEL_COLORS = {
  s: '#f97316',  // 橙色
  a: '#3b82f6',  // 蓝色
  b: '#6b7280'   // 灰色
};
```

#### Q3: AI想知道组件的具体实现？
**A**: 指引AI查看：
```
请查看 UI_COMPONENTS_SPECIFICATION.md，里面有：
- 完整的代码示例
- 组件接口定义
- 样式规范
- 使用示例

所有代码都已经写好，直接参考实现即可！
```

#### Q4: AI询问开发优先级？
**A**: 回复：
```
开发顺序：
1️⃣ 先开发三大核心组件（CategoryTag、LevelBadge、TimeFilter）
2️⃣ 再集成到4个主页面
3️⃣ 最后完成2个二级页面

不要跳过步骤，一步一步来！
```

---

### 7️⃣ 检查清单

在AI完成开发后，用这个清单验证：

#### ✅ CategoryTag组件
- [ ] 6种分类都正确实现（ir/ai/finance/hr/governance/all）
- [ ] 每个分类使用正确的专属颜色
- [ ] 3种尺寸变体都能正常显示（small/large/filter）
- [ ] 激活/未激活状态切换正常
- [ ] 中日双语显示正确

#### ✅ LevelBadge组件
- [ ] 3种等级都正确实现（s/a/b）
- [ ] 每个等级使用正确的颜色
- [ ] 3种尺寸变体都能正常显示（compact/standard/large）
- [ ] 圆形徽章样式正确
- [ ] 选中/未选中状态切换正常（large变体）

#### ✅ TimeFilter组件
- [ ] DateSwitcher日期切换正常
- [ ] QuickTimeFilter横向滚动流畅
- [ ] AudioTimeFilter下拉菜单正常
- [ ] 日期格式化正确
- [ ] 时间范围计算准确

#### ✅ 页面集成
- [ ] 今日快讯使用DateSwitcher
- [ ] 分类浏览使用CategoryFilterBar + QuickTimeFilter
- [ ] 音频页面使用AudioTimeFilter
- [ ] 设置页面使用CategoryChecklist + LevelFilter
- [ ] 所有新闻卡片显示标签和徽章
- [ ] 详情页显示紧凑版标签和徽章

#### ✅ 视觉一致性
- [ ] 所有颜色使用文档规定的精确值
- [ ] 设计风格专业克制，无娱乐化元素
- [ ] 日系沉稳风格得到体现
- [ ] 所有页面视觉统一

---

### 8️⃣ 救命稻草

如果AI完全理解不了，发送这个**超简化版**：

```
请开发微信小程序，有3个核心组件：

1. 分类标签（6种，每种不同颜色）
   - IR情报 蓝色
   - AI・数字化 绿色
   - 证券/金融 紫色
   - 人事・组织 橙色
   - 治理 灰色
   
2. 等级徽章（3级，圆形）
   - S级 橙色（最重要）
   - A级 蓝色（中等）
   - B级 灰色（一般）

3. 时间筛选器
   - 今日快讯页面：日期切换按钮
   - 分类浏览页面：今日/3日/7日/30日选择
   - 音频页面：下拉选择

请先看 UI_COMPONENTS_SPECIFICATION.md，里面有完整代码！
```

---

## 🎯 总结

### 关键要点
1. ✅ 使用 `UPDATED_PROMPT_FOR_AI.md` 作为主提示词
2. ✅ 确保AI读取所有6个文档
3. ✅ 强调"32+种组件变体"
4. ✅ 强调颜色必须精确
5. ✅ 强调不允许自由发挥

### 成功标志
AI能够清楚说出：
- ✅ 5大分类及其专属颜色
- ✅ 3级等级及其含义
- ✅ 32+种组件变体
- ✅ 开发优先级

### 最重要的话
**"不要自由发挥，严格遵循文档！"**

---

**祝开发顺利！有问题随时问我！** 🚀✨

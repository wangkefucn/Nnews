import React, { useState } from 'react';
import { 
  CategoryTag, 
  CategoryFilterBar, 
  CategoryChecklist,
  CATEGORIES,
  CategoryKey 
} from '@/app/components/shared/CategoryTag';
import { 
  LevelBadge, 
  LevelFilter, 
  LevelLegend,
  LevelKey 
} from '@/app/components/shared/LevelBadge';
import {
  DateSwitcher,
  QuickTimeFilter,
  CustomDateRangePicker,
  AudioTimeFilter,
  ResultCount,
  EmptyState,
  TimeFilterPreset,
  TimeRange
} from '@/app/components/shared/TimeFilter';

export function UIShowcasePage() {
  // 分类状态
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>(['ir', 'ai']);
  
  // 等级状态
  const [selectedLevels, setSelectedLevels] = useState<LevelKey[]>(['s', 'a']);
  
  // 时间筛选状态
  const [currentDate, setCurrentDate] = useState('2026-01-30');
  const [isToday, setIsToday] = useState(true);
  const [activeTimeFilter, setActiveTimeFilter] = useState<TimeFilterPreset>('week');
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [customRange, setCustomRange] = useState<TimeRange>({
    startDate: '2026-01-23',
    endDate: '2026-01-30'
  });
  const [audioFilter, setAudioFilter] = useState<'recent7' | 'recent30'>('recent7');

  // 分类切换处理
  const handleCategoryToggle = (category: CategoryKey) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // 等级切换处理
  const handleLevelToggle = (level: LevelKey) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  // 时间筛选处理
  const handleTimeFilterChange = (filter: TimeFilterPreset) => {
    setActiveTimeFilter(filter);
    if (filter === 'custom') {
      setShowCustomPicker(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* 页面标题 */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 px-5 py-8">
        <h1 className="text-2xl font-semibold text-white mb-1">UI组件展示</h1>
        <p className="text-sm text-slate-300 font-light">
          统一设计系统 - 所有组件变体
        </p>
      </div>

      <div className="px-4 py-6 space-y-8">
        
        {/* ========== 分类标签组件 ========== */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded"></span>
            分类标签组件
          </h2>

          {/* 小标签变体 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              1. 小标签（用于新闻卡片）
            </h3>
            <div className="flex flex-wrap gap-2">
              <CategoryTag category="ir" variant="small" />
              <CategoryTag category="ai" variant="small" />
              <CategoryTag category="finance" variant="small" />
              <CategoryTag category="hr" variant="small" />
              <CategoryTag category="governance" variant="small" />
            </div>
          </div>

          {/* 大标签变体 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              2. 大标签（用于标题等）
            </h3>
            <div className="flex flex-wrap gap-2">
              <CategoryTag category="ir" variant="large" />
              <CategoryTag category="ai" variant="large" />
              <CategoryTag category="finance" variant="large" />
              <CategoryTag category="hr" variant="large" />
              <CategoryTag category="governance" variant="large" />
            </div>
          </div>

          {/* 筛选按钮变体 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              3. 筛选按钮（用于分类浏览）
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <CategoryTag category="all" variant="filter" active />
              <CategoryTag category="ir" variant="filter" />
              <CategoryTag category="ai" variant="filter" />
              <CategoryTag category="finance" variant="filter" />
              <CategoryTag category="hr" variant="filter" />
              <CategoryTag category="governance" variant="filter" />
            </div>
            <p className="text-xs text-gray-400">点击下方筛选栏体验交互效果 ↓</p>
          </div>

          {/* 筛选栏组件 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              4. 分类筛选栏（可交互）
            </h3>
            <CategoryFilterBar
              categories={['all', 'ir', 'ai', 'finance', 'hr', 'governance']}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className="rounded-xl border border-slate-200"
            />
            <p className="text-xs text-gray-400 mt-2">
              当前选中：{CATEGORIES[activeCategory].labelCn}
            </p>
          </div>

          {/* 日文版本 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              5. 日文版本
            </h3>
            <div className="flex flex-wrap gap-2">
              <CategoryTag category="ir" variant="small" showJapanese />
              <CategoryTag category="ai" variant="small" showJapanese />
              <CategoryTag category="finance" variant="small" showJapanese />
              <CategoryTag category="hr" variant="small" showJapanese />
              <CategoryTag category="governance" variant="small" showJapanese />
            </div>
          </div>

          {/* 复选列表组件 */}
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              6. 复选列表（用于设置页面）
            </h3>
            <CategoryChecklist
              selectedCategories={selectedCategories}
              onToggle={handleCategoryToggle}
              showDescriptions
              className="border border-slate-200"
            />
          </div>
        </section>

        {/* ========== 等级徽章组件 ========== */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-600 rounded"></span>
            等级徽章组件
          </h2>

          {/* 标准尺寸 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              1. 标准尺寸（用于新闻卡片）
            </h3>
            <div className="flex gap-3">
              <LevelBadge level="s" variant="standard" />
              <LevelBadge level="a" variant="standard" />
              <LevelBadge level="b" variant="standard" />
            </div>
          </div>

          {/* 大尺寸 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              2. 大尺寸（用于详情页）
            </h3>
            <div className="flex gap-3">
              <LevelBadge level="s" variant="large" />
              <LevelBadge level="a" variant="large" />
              <LevelBadge level="b" variant="large" />
            </div>
          </div>

          {/* 紧凑尺寸 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              3. 紧凑尺寸（用于密集列表）
            </h3>
            <div className="flex gap-3">
              <LevelBadge level="s" variant="compact" />
              <LevelBadge level="a" variant="compact" />
              <LevelBadge level="b" variant="compact" />
            </div>
          </div>

          {/* 带文字标签 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              4. 带文字标签
            </h3>
            <div className="space-y-2">
              <LevelBadge level="s" variant="standard" showLabel />
              <LevelBadge level="a" variant="standard" showLabel />
              <LevelBadge level="b" variant="standard" showLabel />
            </div>
          </div>

          {/* 日文版本 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              5. 日文版本
            </h3>
            <div className="space-y-2">
              <LevelBadge level="s" variant="standard" showLabel showJapanese />
              <LevelBadge level="a" variant="standard" showLabel showJapanese />
              <LevelBadge level="b" variant="standard" showLabel showJapanese />
            </div>
          </div>

          {/* 筛选器组件 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              6. 等级筛选器（可交互）
            </h3>
            <LevelFilter
              selectedLevels={selectedLevels}
              onToggle={handleLevelToggle}
            />
            <p className="text-xs text-gray-400 mt-2">
              已选中：{selectedLevels.map(l => l.toUpperCase()).join(', ')}
            </p>
          </div>

          {/* 等级说明 */}
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              7. 等级说明（用于帮助页面）
            </h3>
            <div className="bg-slate-50 rounded-xl p-4">
              <LevelLegend orientation="vertical" />
            </div>
          </div>
        </section>

        {/* ========== 时间筛选组件 ========== */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-600 rounded"></span>
            时间筛选组件
          </h2>

          {/* 日期切换器 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              1. 日期切换器（用于今日快讯）
            </h3>
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
              onDateSelect={() => alert('打开日期选择器')}
            />
          </div>

          {/* 快捷时间筛选 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              2. 快捷时间筛选（用于分类浏览）
            </h3>
            <QuickTimeFilter
              activeFilter={activeTimeFilter}
              onFilterChange={handleTimeFilterChange}
              showCustomRange={activeTimeFilter === 'custom'}
              currentRange={customRange}
              className="rounded-xl border border-slate-200"
            />
            <p className="text-xs text-gray-400 mt-2">
              当前筛选：
              {activeTimeFilter === 'today' && '今天'}
              {activeTimeFilter === 'week' && '本周'}
              {activeTimeFilter === 'month' && '本月'}
              {activeTimeFilter === 'custom' && `${customRange.startDate} 至 ${customRange.endDate}`}
            </p>
          </div>

          {/* 音频时间筛选 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              3. 音频时间筛选（用于音频概览）
            </h3>
            <AudioTimeFilter
              activeFilter={audioFilter}
              onFilterChange={setAudioFilter}
            />
          </div>

          {/* 结果数量 */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              4. 结果数量显示
            </h3>
            <ResultCount count={42} />
          </div>

          {/* 空状态 */}
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-3">
              5. 空状态组件
            </h3>
            <div className="bg-slate-50 rounded-xl">
              <EmptyState
                date="2026-01-29"
                onBackToToday={() => alert('回到今天')}
              />
            </div>
          </div>
        </section>

        {/* ========== 新闻卡片示例 ========== */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-600 rounded"></span>
            实际应用示例
          </h2>

          {/* 新闻卡片示例 */}
          <div className="space-y-4">
            {/* S级新闻 */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <CategoryTag category="ir" variant="small" />
                <LevelBadge level="s" variant="standard" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 leading-snug mb-1">
                野村総合研究所、2024年度第3四半期決算を発表
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                NRI发布2024财年Q3财报，营业利润同比增长12.3%，超出市场预期...
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span>NRI官网</span>
                <span>·</span>
                <span>10:30</span>
              </div>
            </div>

            {/* A级新闻 */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <CategoryTag category="ai" variant="small" />
                <LevelBadge level="a" variant="standard" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 leading-snug mb-1">
                生成AIを活用した金融機関向け新サービス「AI Insight Platform」を提供開始
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                推出面向金融机构的生成式AI新服务，旨在提高企业DX推进效率...
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span>NRI官网</span>
                <span>·</span>
                <span>14:20</span>
              </div>
            </div>

            {/* B级新闻 */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <CategoryTag category="governance" variant="small" />
                <LevelBadge level="b" variant="standard" />
              </div>
              <h3 className="text-base font-semibold text-slate-800 leading-snug mb-1">
                サステナビリティレポート2024を公開
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                发布2024年可持续发展报告，介绍ESG方面的最新举措和成果...
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span>NRI官网</span>
                <span>·</span>
                <span>16:45</span>
              </div>
            </div>
          </div>
        </section>

        {/* 配色参考 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-pink-600 rounded"></span>
            配色参考
          </h2>

          {/* 分类配色 */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-600 mb-3">分类标签配色</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-blue-50 rounded border border-blue-200"></div>
                <span className="text-xs text-slate-600">IR情报：#eff6ff / #1e40af</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-green-50 rounded border border-green-200"></div>
                <span className="text-xs text-slate-600">AI・数字化：#f0fdf4 / #15803d</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-amber-50 rounded border border-amber-200"></div>
                <span className="text-xs text-slate-600">证券/金融：#fef3c7 / #b45309</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-pink-50 rounded border border-pink-200"></div>
                <span className="text-xs text-slate-600">人事・组织：#fce7f3 / #be185d</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-purple-50 rounded border border-purple-200"></div>
                <span className="text-xs text-slate-600">治理：#f3e8ff / #6b21a8</span>
              </div>
            </div>
          </div>

          {/* 等级配色 */}
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-3">等级徽章配色</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-orange-600 rounded shadow-sm"></div>
                <span className="text-xs text-slate-600">S级：#f97316 + 阴影</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-blue-600 rounded shadow-sm"></div>
                <span className="text-xs text-slate-600">A级：#3b82f6 + 阴影</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-8 bg-gray-400 rounded"></div>
                <span className="text-xs text-slate-600">B级：#9ca3af 无阴影</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 自定义日期选择器弹窗 */}
      {showCustomPicker && (
        <CustomDateRangePicker
          startDate={customRange.startDate}
          endDate={customRange.endDate}
          onStartDateChange={(date) => setCustomRange({ ...customRange, startDate: date })}
          onEndDateChange={(date) => setCustomRange({ ...customRange, endDate: date })}
          onConfirm={() => setShowCustomPicker(false)}
          onCancel={() => {
            setShowCustomPicker(false);
            setActiveTimeFilter('week');
          }}
        />
      )}
    </div>
  );
}

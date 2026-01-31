import React, { useState } from 'react';

export type TimeFilterPreset = 'today' | 'week' | 'month' | 'custom';

export interface TimeRange {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
}

interface DateSwitcherProps {
  currentDate: string; // YYYY-MM-DD
  isToday: boolean;
  onPrevDay: () => void;
  onNextDay: () => void;
  onDateSelect: () => void;
  className?: string;
}

/**
 * 日期快速切换器
 * 用于今日快讯页面
 * 
 * 格式：[◀ 昨天] [📅 今天] [明天 ▶]
 */
export function DateSwitcher({
  currentDate,
  isToday,
  onPrevDay,
  onNextDay,
  onDateSelect,
  className = ''
}: DateSwitcherProps) {
  const formatDisplayDate = (dateStr: string, isTodayFlag: boolean) => {
    if (isTodayFlag) return '今天';
    return dateStr;
  };

  return (
    <div className={`
      flex items-center justify-between
      h-9 bg-white rounded-lg
      px-3 shadow-sm
      ${className}
    `}>
      {/* 前一天按钮 */}
      <button
        onClick={onPrevDay}
        className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
      >
        <span className="text-xs">◀</span>
        <span>昨天</span>
      </button>

      {/* 当前日期 */}
      <button
        onClick={onDateSelect}
        className="flex items-center gap-1 text-base font-semibold text-slate-800 hover:text-slate-600 transition-colors"
      >
        <span>📅</span>
        <span>{formatDisplayDate(currentDate, isToday)}</span>
      </button>

      {/* 后一天按钮 */}
      <button
        onClick={onNextDay}
        disabled={isToday}
        className={`
          flex items-center gap-1 text-sm transition-colors
          ${isToday 
            ? 'text-slate-300 cursor-not-allowed' 
            : 'text-slate-500 hover:text-slate-800'
          }
        `}
      >
        <span>明天</span>
        <span className="text-xs">▶</span>
      </button>
    </div>
  );
}

interface QuickTimeFilterProps {
  activeFilter: TimeFilterPreset;
  onFilterChange: (filter: TimeFilterPreset) => void;
  showCustomRange?: boolean;
  currentRange?: TimeRange;
  className?: string;
}

/**
 * 快捷时间筛选器
 * 用于分类浏览页面
 * 
 * 格式：[今天] [本周] [本月] [自定义]
 */
export function QuickTimeFilter({
  activeFilter,
  onFilterChange,
  showCustomRange = false,
  currentRange,
  className = ''
}: QuickTimeFilterProps) {
  const filters: { key: TimeFilterPreset; label: string }[] = [
    { key: 'today', label: '今天' },
    { key: 'week', label: '本周' },
    { key: 'month', label: '本月' },
    { key: 'custom', label: '自定义' }
  ];

  return (
    <div className={`bg-white py-3 px-4 ${className}`}>
      {/* 快捷按钮 */}
      <div className="flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`
              flex-1 h-8 rounded-full text-sm transition-all duration-200
              ${activeFilter === filter.key
                ? 'bg-slate-800 text-white font-medium'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* 当前自定义范围显示 */}
      {showCustomRange && activeFilter === 'custom' && currentRange && (
        <div className="mt-2 pt-2 border-t border-slate-100 text-center text-xs text-slate-500">
          {currentRange.startDate} 至 {currentRange.endDate}
        </div>
      )}
    </div>
  );
}

interface CustomDateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
  maxDays?: number;
  className?: string;
}

/**
 * 自定义日期范围选择器
 * 弹窗形式，用于分类浏览页面
 */
export function CustomDateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onConfirm,
  onCancel,
  maxDays = 90,
  className = ''
}: CustomDateRangePickerProps) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`
        bg-white rounded-3xl p-6 max-w-md w-full
        animate-in fade-in slide-in-from-bottom-4 duration-300
        ${className}
      `}>
        {/* 标题 */}
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          选择时间范围
        </h3>

        {/* 日期选择 */}
        <div className="space-y-4 mb-4">
          {/* 开始日期 */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-slate-600">开始日期</label>
            <input
              type="date"
              value={startDate}
              max={endDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              className="px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-800 border-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          {/* 结束日期 */}
          <div className="flex items-center justify-between">
            <label className="text-sm text-slate-600">结束日期</label>
            <input
              type="date"
              value={endDate}
              min={startDate}
              max={today}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-800 border-none focus:ring-2 focus:ring-slate-800"
            />
          </div>
        </div>

        {/* 提示 */}
        <div className="text-xs text-orange-600 text-center mb-4">
          最多查询{maxDays}天范围
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 h-10 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200 transition-colors"
          >
            取消
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-10 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
}

interface AudioTimeFilterProps {
  activeFilter: 'recent7' | 'recent30';
  onFilterChange: (filter: 'recent7' | 'recent30') => void;
  className?: string;
}

/**
 * 音频时间筛选器
 * 用于音频概览页面
 * 
 * 格式：[最近7天] [最近30天]
 */
export function AudioTimeFilter({
  activeFilter,
  onFilterChange,
  className = ''
}: AudioTimeFilterProps) {
  const filters = [
    { key: 'recent7' as const, label: '最近7天' },
    { key: 'recent30' as const, label: '最近30天' }
  ];

  return (
    <div className={`flex gap-2 ${className}`}>
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${activeFilter === filter.key
              ? 'bg-slate-800 text-white'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

interface ResultCountProps {
  count: number;
  className?: string;
}

/**
 * 结果数量显示
 * 显示当前筛选条件下的结果数量
 */
export function ResultCount({ count, className = '' }: ResultCountProps) {
  return (
    <div className={`text-xs text-gray-400 text-center ${className}`}>
      共找到 {count} 条快讯
    </div>
  );
}

interface EmptyStateProps {
  date?: string;
  onBackToToday?: () => void;
  message?: string;
  className?: string;
}

/**
 * 空状态组件
 * 当没有数据时显示
 */
export function EmptyState({
  date,
  onBackToToday,
  message,
  className = ''
}: EmptyStateProps) {
  const displayMessage = message || (date ? `${date} 暂无快讯` : '暂无快讯');

  return (
    <div className={`flex flex-col items-center justify-center py-16 px-8 ${className}`}>
      {/* 空状态图标 */}
      <div className="w-24 h-24 mb-4 opacity-30">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-gray-400">
          <path
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 提示文字 */}
      <p className="text-sm text-gray-400 mb-4">{displayMessage}</p>

      {/* 回到今天按钮 */}
      {onBackToToday && (
        <button
          onClick={onBackToToday}
          className="px-6 py-2 bg-slate-800 text-white rounded-full text-sm font-medium hover:bg-slate-700 transition-colors"
        >
          回到今天
        </button>
      )}
    </div>
  );
}

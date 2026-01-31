import React from 'react';

export type LevelKey = 's' | 'a' | 'b';

export interface LevelConfig {
  key: LevelKey;
  labelCn: string;
  labelJp: string;
  bgColor: string;
  textColor: string;
  shadowColor: string;
}

export const LEVELS: Record<LevelKey, LevelConfig> = {
  s: {
    key: 's',
    labelCn: '极重要',
    labelJp: '最重要',
    bgColor: '#f97316',
    textColor: '#ffffff',
    shadowColor: '0 1px 4px rgba(249, 115, 22, 0.3)'
  },
  a: {
    key: 'a',
    labelCn: '重要',
    labelJp: '重要',
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    shadowColor: '0 1px 4px rgba(59, 130, 246, 0.25)'
  },
  b: {
    key: 'b',
    labelCn: '一般',
    labelJp: '一般',
    bgColor: '#9ca3af',
    textColor: '#ffffff',
    shadowColor: 'none'
  }
};

interface LevelBadgeProps {
  level: LevelKey;
  variant?: 'standard' | 'large' | 'compact';
  showLabel?: boolean;
  showJapanese?: boolean;
  className?: string;
}

/**
 * 等级徽章组件
 * 
 * @param variant
 *  - standard: 标准尺寸 40×40rpx = 20×20px，用于新闻卡片
 *  - large: 大尺寸 56×56rpx = 28×28px，用于详情页等
 *  - compact: 紧凑尺寸 32×32rpx = 16×16px，用于列表等
 * 
 * @param showLabel 是否显示文字标签（如"极重要"）
 */
export function LevelBadge({
  level,
  variant = 'standard',
  showLabel = false,
  showJapanese = false,
  className = ''
}: LevelBadgeProps) {
  const config = LEVELS[level];
  const letter = level.toUpperCase();

  // 变体尺寸样式
  const sizeStyles = {
    standard: 'w-5 h-5 text-xs', // 20px × 20px, 12px font
    large: 'w-7 h-7 text-sm',    // 28px × 28px, 14px font
    compact: 'w-4 h-4 text-[10px]' // 16px × 16px, 10px font
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <div
        className={`
          ${sizeStyles[variant]}
          rounded
          flex items-center justify-center
          font-bold
          tracking-wide
        `}
        style={{
          backgroundColor: config.bgColor,
          color: config.textColor,
          boxShadow: config.shadowColor
        }}
      >
        {letter}
      </div>
      {showLabel && (
        <span className="text-sm text-gray-600">
          {showJapanese ? config.labelJp : config.labelCn}
        </span>
      )}
    </div>
  );
}

interface LevelFilterProps {
  selectedLevels: LevelKey[];
  onToggle: (level: LevelKey) => void;
  showJapanese?: boolean;
  className?: string;
}

/**
 * 等级筛选器组件
 * 用于筛选不同重要性级别的新闻
 */
export function LevelFilter({
  selectedLevels,
  onToggle,
  showJapanese = false,
  className = ''
}: LevelFilterProps) {
  const levels: LevelKey[] = ['s', 'a', 'b'];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="text-sm text-gray-600 mr-1">重要性：</span>
      {levels.map((level) => {
        const config = LEVELS[level];
        const isSelected = selectedLevels.includes(level);

        return (
          <button
            key={level}
            onClick={() => onToggle(level)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200
              flex items-center gap-1.5
              ${isSelected 
                ? 'ring-2 ring-offset-1' 
                : 'opacity-50 hover:opacity-100'
              }
            `}
            style={{
              backgroundColor: isSelected ? config.bgColor : '#f1f5f9',
              color: isSelected ? config.textColor : '#64748b',
              ringColor: isSelected ? config.bgColor : 'transparent'
            }}
          >
            <span className="font-bold">{level.toUpperCase()}</span>
            <span>{showJapanese ? config.labelJp : config.labelCn}</span>
          </button>
        );
      })}
    </div>
  );
}

interface LevelLegendProps {
  showJapanese?: boolean;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * 等级说明组件
 * 用于帮助页面或首次使用引导
 */
export function LevelLegend({
  showJapanese = false,
  orientation = 'vertical',
  className = ''
}: LevelLegendProps) {
  const levels: LevelKey[] = ['s', 'a', 'b'];
  
  const containerClass = orientation === 'horizontal' 
    ? 'flex gap-4' 
    : 'space-y-2';

  return (
    <div className={`${className}`}>
      <h4 className="text-sm font-semibold text-slate-800 mb-2">重要性等级说明</h4>
      <div className={containerClass}>
        {levels.map((level) => {
          const config = LEVELS[level];
          const examples = {
            s: '财报发布、重大人事任命、战略调整',
            a: '新产品发布、业务合作、技术创新',
            b: '常规报告、行业动态、一般新闻'
          };

          return (
            <div key={level} className="flex items-start gap-2">
              <LevelBadge level={level} variant="standard" />
              <div className="flex-1">
                <div className="font-medium text-sm text-slate-800">
                  {showJapanese ? config.labelJp : config.labelCn}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {examples[level]}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

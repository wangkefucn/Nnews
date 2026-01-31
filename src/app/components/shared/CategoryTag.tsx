import React from 'react';

export type CategoryKey = 'ir' | 'ai' | 'finance' | 'hr' | 'governance' | 'all';

export interface CategoryConfig {
  key: CategoryKey;
  labelCn: string;
  labelJp: string;
  descCn: string;
  descJp: string;
  required?: boolean;
}

export const CATEGORIES: Record<CategoryKey, CategoryConfig> = {
  all: {
    key: 'all',
    labelCn: '全部',
    labelJp: 'すべて',
    descCn: '所有类型',
    descJp: 'すべてのタイプ',
    required: false
  },
  ir: {
    key: 'ir',
    labelCn: 'IR情报',
    labelJp: 'IRニュース',
    descCn: '财报、业绩发布等',
    descJp: '決算、業績発表など',
    required: true
  },
  ai: {
    key: 'ai',
    labelCn: 'AI・数字化',
    labelJp: 'AI・デジタル',
    descCn: '技术创新、新产品发布',
    descJp: '技術革新、新製品発表',
    required: false
  },
  finance: {
    key: 'finance',
    labelCn: '证券/金融',
    labelJp: '証券・金融',
    descCn: '金融业务动态',
    descJp: '金融ビジネス動向',
    required: false
  },
  hr: {
    key: 'hr',
    labelCn: '人事・组织',
    labelJp: '人事・組織',
    descCn: '组织架构、人事变动',
    descJp: '組織構造、人事異動',
    required: false
  },
  governance: {
    key: 'governance',
    labelCn: '治理',
    labelJp: 'ガバナンス',
    descCn: 'ESG、可持续发展',
    descJp: 'ESG、サステナビリティ',
    required: false
  }
};

interface CategoryTagProps {
  category: CategoryKey;
  variant?: 'small' | 'large' | 'filter';
  active?: boolean;
  onClick?: () => void;
  showJapanese?: boolean;
  className?: string;
}

/**
 * 分类标签组件
 * 
 * @param variant 
 *  - small: 小标签，用于新闻卡片（22rpx = 11px）
 *  - large: 大标签，用于页面标题等（28rpx = 14px）
 *  - filter: 筛选按钮，用于分类浏览页面（28rpx = 14px）
 */
export function CategoryTag({ 
  category, 
  variant = 'small', 
  active = false,
  onClick,
  showJapanese = false,
  className = ''
}: CategoryTagProps) {
  const config = CATEGORIES[category];
  const label = showJapanese ? config.labelJp : config.labelCn;

  // 基础样式类
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-200';
  
  // 变体样式
  const variantStyles = {
    small: 'px-2 py-0.5 rounded text-[11px] font-normal tracking-wide',
    large: 'px-3 py-1 rounded text-sm font-normal tracking-wide',
    filter: 'px-3 py-1.5 rounded-full text-sm font-normal whitespace-nowrap'
  };

  // 分类颜色样式
  const categoryColorStyles = {
    ir: variant === 'filter' && active 
      ? 'bg-slate-800 text-white font-medium'
      : variant === 'filter'
      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      : 'bg-blue-50 text-blue-700',
    ai: variant === 'filter' && active
      ? 'bg-slate-800 text-white font-medium'
      : variant === 'filter'
      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      : 'bg-green-50 text-green-700',
    finance: variant === 'filter' && active
      ? 'bg-slate-800 text-white font-medium'
      : variant === 'filter'
      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      : 'bg-amber-50 text-amber-700',
    hr: variant === 'filter' && active
      ? 'bg-slate-800 text-white font-medium'
      : variant === 'filter'
      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      : 'bg-pink-50 text-pink-700',
    governance: variant === 'filter' && active
      ? 'bg-slate-800 text-white font-medium'
      : variant === 'filter'
      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      : 'bg-purple-50 text-purple-700',
    all: variant === 'filter' && active
      ? 'bg-slate-800 text-white font-medium'
      : variant === 'filter'
      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200'
      : 'bg-gray-50 text-gray-700'
  };

  const interactiveStyles = onClick ? 'cursor-pointer' : '';

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${categoryColorStyles[category]} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

interface CategoryFilterBarProps {
  categories: CategoryKey[];
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
  showJapanese?: boolean;
  className?: string;
}

/**
 * 分类筛选栏组件
 * 用于分类浏览页面顶部
 */
export function CategoryFilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  showJapanese = false,
  className = ''
}: CategoryFilterBarProps) {
  return (
    <div className={`bg-white py-2 overflow-x-auto ${className}`}>
      <div className="flex gap-2 px-4 min-w-max">
        {categories.map((cat) => (
          <CategoryTag
            key={cat}
            category={cat}
            variant="filter"
            active={activeCategory === cat}
            onClick={() => onCategoryChange(cat)}
            showJapanese={showJapanese}
          />
        ))}
      </div>
    </div>
  );
}

interface CategoryChecklistProps {
  selectedCategories: CategoryKey[];
  onToggle: (category: CategoryKey) => void;
  showDescriptions?: boolean;
  showJapanese?: boolean;
  className?: string;
}

/**
 * 分类复选列表组件
 * 用于设置页面的主题选择
 */
export function CategoryChecklist({
  selectedCategories,
  onToggle,
  showDescriptions = true,
  showJapanese = false,
  className = ''
}: CategoryChecklistProps) {
  const displayCategories = Object.values(CATEGORIES).filter(cat => cat.key !== 'all');

  return (
    <div className={`bg-white rounded-2xl p-4 ${className}`}>
      <div className="mb-3">
        <h3 className="text-base font-semibold text-slate-800 mb-1">关注主题</h3>
        <p className="text-xs text-slate-500">选择您关注的信息类型（可多选）</p>
      </div>
      
      <div className="space-y-0">
        {displayCategories.map((cat, index) => {
          const isChecked = selectedCategories.includes(cat.key);
          const isRequired = cat.required;
          const isLast = index === displayCategories.length - 1;

          return (
            <div
              key={cat.key}
              className={`py-3 ${!isLast ? 'border-b border-slate-100' : ''}`}
            >
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  disabled={isRequired}
                  onChange={() => !isRequired && onToggle(cat.key)}
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-slate-800 focus:ring-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="text-sm font-medium text-slate-800">
                      {showJapanese ? cat.labelJp : cat.labelCn}
                    </span>
                    {isRequired && (
                      <span className="text-xs text-orange-600">(必选)</span>
                    )}
                  </div>
                  {showDescriptions && (
                    <p className="text-xs text-gray-400 leading-snug">
                      {showJapanese ? cat.descJp : cat.descCn}
                    </p>
                  )}
                </div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

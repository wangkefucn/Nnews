import React, { useState } from 'react';
import { NewsCard } from '../NewsCard';
import { useSettings } from '@/app/contexts/SettingsContext';
import { 
  CategoryFilterBar, 
  CategoryKey,
  CATEGORIES 
} from '@/app/components/shared/CategoryTag';
import { 
  QuickTimeFilter, 
  CustomDateRangePicker,
  ResultCount,
  EmptyState,
  TimeFilterPreset,
  TimeRange 
} from '@/app/components/shared/TimeFilter';

interface CategoryPageProps {
  onNewsClick: (id: string) => void;
}

export function CategoryPage({ onNewsClick }: CategoryPageProps) {
  const { selectedTopics } = useSettings();
  
  // 映射旧的分类到新的统一分类系统
  const categoryMapping: Record<string, CategoryKey> = {
    'IR': 'ir',
    'AI': 'ai',
    'hr': 'hr',
    'governance': 'governance'
  };

  // 获取可用的分类（基于用户设置）
  const getAvailableCategories = (): CategoryKey[] => {
    const categories: CategoryKey[] = ['all', 'ir']; // 'all' 和 'ir' 总是可用
    
    if (selectedTopics.includes('AI')) categories.push('ai');
    if (selectedTopics.includes('governance')) categories.push('governance');
    if (selectedTopics.includes('hr')) categories.push('hr');
    
    return categories;
  };

  const availableCategories = getAvailableCategories();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  
  // 时间筛选状态
  const [activeTimeFilter, setActiveTimeFilter] = useState<TimeFilterPreset>('week');
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [customRange, setCustomRange] = useState<TimeRange>({
    startDate: '2026-01-23',
    endDate: '2026-01-30'
  });

  // 新闻数据（使用新的分类key）
  const allNews = [
    {
      id: 'f1',
      category: 'finance' as CategoryKey,
      titleJp: 'デジタル証券基盤「BOOSTRY」、大手銀行3行との連携を発表',
      summaryCn: '数字证券平台"BOOSTRY"宣布与三大银行合作',
      importance: 'a' as const,
      publishTime: '14:20',
      source: 'NRI官网'
    },
    {
      id: 'f2',
      category: 'finance' as CategoryKey,
      titleJp: '野村證券との共同プロジェクト「次世代取引システム」が稼働開始',
      summaryCn: '与野村证券的共同项目"新一代交易系统"开始运行',
      importance: 'b' as const,
      publishTime: '11:15',
      source: 'NRI官网'
    },
    {
      id: 'f3',
      category: 'finance' as CategoryKey,
      titleJp: '金融機関向けリスク管理ソリューションの新バージョンをリリース',
      summaryCn: '发布面向金融机构的风险管理解决方案新版本',
      importance: 'b' as const,
      publishTime: '09:30',
      source: 'NRI官网'
    },
    {
      id: 'ir1',
      category: 'ir' as CategoryKey,
      titleJp: 'NRI、2024年度第3四半期決算を発表　営業利益は前年同期比12.3%増',
      summaryCn: '野村综研公布2024财年Q3财报，营业利润同比增长12.3%',
      importance: 's' as const,
      publishTime: '10:30',
      source: 'NRI官网'
    },
    {
      id: 'a1',
      category: 'ai' as CategoryKey,
      titleJp: '生成AIを活用した金融機関向け新サービス「AI Insight Platform」を提供開始',
      summaryCn: '推出面向金融机构的生成AI新服务"AI Insight Platform"',
      importance: 'a' as const,
      publishTime: '15:45',
      source: 'NRI官网'
    },
    {
      id: 'a2',
      category: 'ai' as CategoryKey,
      titleJp: 'OpenAIとの戦略的パートナーシップを締結　企業向けAI導入支援を強化',
      summaryCn: '与OpenAI达成战略合作伙伴关系，强化企业AI导入支援',
      importance: 's' as const,
      publishTime: '08:30',
      source: 'NRI官网'
    },
    {
      id: 'h1',
      category: 'hr' as CategoryKey,
      titleJp: '執行役員人事の発表　デジタル戦略部門に新体制',
      summaryCn: '公布执行董事人事任命，数字战略部门新体制',
      importance: 'b' as const,
      publishTime: '16:00',
      source: 'NRI官网'
    },
    {
      id: 'h2',
      category: 'hr' as CategoryKey,
      titleJp: '新卒採用を前年比20%増　AI・データサイエンス人材を重点採用',
      summaryCn: '应届毕业生招聘同比增加20%，重点招聘AI和数据科学人才',
      importance: 'b' as const,
      publishTime: '13:20',
      source: 'NRI官网'
    },
    {
      id: 'g1',
      category: 'governance' as CategoryKey,
      titleJp: 'サステナビリティ報告書2024を発表　ESG目標の進捗を公開',
      summaryCn: '发布2024年可持续发展报告，公开ESG目标进展',
      importance: 'b' as const,
      publishTime: '10:00',
      source: 'NRI官网'
    },
  ];

  // 筛选新闻
  const filteredNews = allNews.filter(news => {
    if (activeCategory === 'all') return true;
    return news.category === activeCategory;
  });

  // 处理时间筛选变化
  const handleTimeFilterChange = (filter: TimeFilterPreset) => {
    setActiveTimeFilter(filter);
    if (filter === 'custom') {
      setShowCustomPicker(true);
    }
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-4">
        <h1 className="text-xl font-semibold mb-1">分类浏览</h1>
        <p className="text-sm text-slate-300 font-light">按主题深度查询</p>
      </div>

      {/* 分类筛选栏 - 使用新组件 */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <CategoryFilterBar
          categories={availableCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* 时间筛选器 - 使用新组件 */}
      <div className="bg-white border-b border-slate-100">
        <QuickTimeFilter
          activeFilter={activeTimeFilter}
          onFilterChange={handleTimeFilterChange}
          showCustomRange={activeTimeFilter === 'custom'}
          currentRange={customRange}
        />
      </div>

      {/* 结果数量 */}
      <div className="py-2">
        <ResultCount count={filteredNews.length} />
      </div>

      {/* 新闻列表 */}
      {filteredNews.length > 0 ? (
        <div className="px-4 py-2 space-y-3">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              {...news}
              categoryLabel={CATEGORIES[news.category].labelCn}
              onClick={() => onNewsClick(news.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState 
          message={`暂无${activeCategory === 'all' ? '' : CATEGORIES[activeCategory].labelCn}快讯`}
        />
      )}

      {/* 自定义日期范围选择器弹窗 */}
      {showCustomPicker && (
        <CustomDateRangePicker
          startDate={customRange.startDate}
          endDate={customRange.endDate}
          onStartDateChange={(date) => setCustomRange({ ...customRange, startDate: date })}
          onEndDateChange={(date) => setCustomRange({ ...customRange, endDate: date })}
          onConfirm={() => {
            setShowCustomPicker(false);
            // 这里可以添加加载数据的逻辑
          }}
          onCancel={() => {
            setShowCustomPicker(false);
            setActiveTimeFilter('week');
          }}
          maxDays={90}
        />
      )}
    </div>
  );
}

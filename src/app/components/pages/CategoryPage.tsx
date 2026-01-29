import React, { useState } from 'react';
import { NewsCard } from '../NewsCard';
import { useSettings } from '@/app/contexts/SettingsContext';

interface CategoryPageProps {
  onNewsClick: (id: string) => void;
}

export function CategoryPage({ onNewsClick }: CategoryPageProps) {
  const { selectedTopics } = useSettings();
  
  // IR is always first, then filter other selected topics
  const availableCategories = [
    { id: 'IR', label: '证券/金融', topicId: 'IR' },
    { id: 'AI', label: 'AI/数字化', topicId: 'AI' },
    { id: 'hr', label: '人事/组织', topicId: 'hr' },
    { id: 'governance', label: '业绩/治理', topicId: 'governance' },
  ].filter(cat => cat.topicId === 'IR' || selectedTopics.includes(cat.topicId));

  const [activeCategory, setActiveCategory] = useState(availableCategories[0]?.id || 'IR');

  // Ensure activeCategory is valid when settings change
  React.useEffect(() => {
    if (!availableCategories.find(cat => cat.id === activeCategory)) {
      setActiveCategory(availableCategories[0]?.id || 'IR');
    }
  }, [selectedTopics]);

  const newsByCategory: Record<string, any[]> = {
    IR: [
      {
        id: 'f1',
        category: 'finance' as const,
        categoryLabel: '証券・金融',
        titleJp: 'デジタル証券基盤「BOOSTRY」、大手銀行3行との連携を発表',
        summaryCn: '数字证券平台"BOOSTRY"宣布与三大银行合作',
        importance: 'A' as const,
      },
      {
        id: 'f2',
        category: 'finance' as const,
        categoryLabel: '証券・金融',
        titleJp: '野村證券との共同プロジェクト「次世代取引システム」が稼働開始',
        summaryCn: '与野村证券的共同项目"新一代交易系统"开始运行',
        importance: 'B' as const,
      },
      {
        id: 'f3',
        category: 'finance' as const,
        categoryLabel: '証券・金融',
        titleJp: '金融機関向けリスク管理ソリューションの新バージョンをリリース',
        summaryCn: '发布面向金融机构的风险管理解决方案新版本',
        importance: 'B' as const,
      },
      {
        id: 'g2',
        category: 'IR' as const,
        categoryLabel: 'IRニュース',
        titleJp: 'NRI、2024年度第3四半期決算を発表　営業利益は前年同期比12.3%増',
        summaryCn: '野村综研公布2024财年Q3财报，营业利润同比增长12.3%',
        importance: 'S' as const,
      },
    ],
    AI: [
      {
        id: 'a1',
        category: 'AI' as const,
        categoryLabel: 'AI・デジタル',
        titleJp: '生成AIを活用した金融機関向け新サービス「AI Insight Platform」を提供開始',
        summaryCn: '推出面向金融机构的生成AI新服务"AI Insight Platform"',
        importance: 'A' as const,
      },
      {
        id: 'a2',
        category: 'AI' as const,
        categoryLabel: 'AI・デジタル',
        titleJp: 'OpenAIとの戦略的パートナーシップを締結　企業向けAI導入支援を強化',
        summaryCn: '与OpenAI达成战略合作伙伴关系，强化企业AI导入支援',
        importance: 'S' as const,
      },
    ],
    hr: [
      {
        id: 'h1',
        category: 'hr' as const,
        categoryLabel: '人事・組織',
        titleJp: '執行役員人事の発表　デジタル戦略部門に新体制',
        summaryCn: '公布执行董事人事任命，数字战略部门新体制',
        importance: 'B' as const,
      },
      {
        id: 'h2',
        category: 'hr' as const,
        categoryLabel: '人事・組織',
        titleJp: '新卒採用を前年比20%増　AI・データサイエンス人材を重点採用',
        summaryCn: '应届毕业生招聘同比增加20%，重点招聘AI和数据科学人才',
        importance: 'B' as const,
      },
    ],
    governance: [
      {
        id: 'g1',
        category: 'governance' as const,
        categoryLabel: 'ガバナンス',
        titleJp: 'サステナビリティ報告書2024を発表　ESG目標の進捗を公開',
        summaryCn: '发布2024年可持续发展报告，公开ESG目标进展',
        importance: 'B' as const,
      },
    ],
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-6">
        <h1 className="text-xl font-semibold mb-3">分类浏览</h1>
        
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {availableCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-white text-slate-800'
                  : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* News List */}
      <div className="px-4 py-4 space-y-3">
        {newsByCategory[activeCategory]?.map((news) => (
          <NewsCard
            key={news.id}
            {...news}
            onClick={() => onNewsClick(news.id)}
          />
        ))}
      </div>
    </div>
  );
}

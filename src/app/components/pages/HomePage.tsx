import React from 'react';
import { NewsCard } from '../NewsCard';

interface HomePageProps {
  onNewsClick: (id: string) => void;
}

export function HomePage({ onNewsClick }: HomePageProps) {
  const mockNews = [
    {
      id: '1',
      category: 'IR' as const,
      categoryLabel: 'IRニュース',
      titleJp: 'NRI、2024年度第3四半期決算を発表　営業利益は前年同期比12.3%増',
      summaryCn: '野村综研公布2024财年Q3财报，营业利润同比增长12.3%',
      importance: 'S' as const,
    },
    {
      id: '2',
      category: 'AI' as const,
      categoryLabel: 'AI・デジタル',
      titleJp: '生成AIを活用した金融機関向け新サービス「AI Insight Platform」を提供開始',
      summaryCn: '推出面向金融机构的生成AI新服务"AI Insight Platform"',
      importance: 'A' as const,
    },
    {
      id: '3',
      category: 'finance' as const,
      categoryLabel: '証券・金融',
      titleJp: 'デジタル証券基盤「BOOSTRY」、大手銀行3行との連携を発表',
      summaryCn: '数字证券平台"BOOSTRY"宣布与三大银行合作',
      importance: 'A' as const,
    },
    {
      id: '4',
      category: 'hr' as const,
      categoryLabel: '人事・組織',
      titleJp: '執行役員人事の発表　デジタル戦略部門に新体制',
      summaryCn: '公布执行董事人事任命，数字战略部门新体制',
      importance: 'B' as const,
    },
    {
      id: '5',
      category: 'governance' as const,
      categoryLabel: 'ガバナンス',
      titleJp: 'サステナビリティ報告書2024を発表　ESG目標の進捗を公開',
      summaryCn: '发布2024年可持续发展报告，公开ESG目标进展',
      importance: 'B' as const,
    },
  ];

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-6">
        <h1 className="text-xl font-semibold mb-1">今日快讯</h1>
        <p className="text-sm text-slate-300">
          {new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' })} · 08:30 更新
        </p>
      </div>

      {/* News List */}
      <div className="px-4 py-4 space-y-3">
        {mockNews.map((news) => (
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
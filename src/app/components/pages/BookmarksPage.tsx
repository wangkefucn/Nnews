import React from 'react';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { NewsCard } from '../NewsCard';

interface BookmarksPageProps {
  onBack: () => void;
  onNewsClick: (id: string) => void;
}

export function BookmarksPage({ onBack, onNewsClick }: BookmarksPageProps) {
  // Mock bookmarked news
  const bookmarkedNews = [
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
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-6 z-10">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={onBack} className="p-1 hover:bg-slate-700 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">我的收藏</h1>
        </div>
        <p className="text-sm text-slate-300 pl-9">
          共 {bookmarkedNews.length} 条收藏
        </p>
      </div>

      {/* Bookmarked News List */}
      <div className="px-4 py-4 space-y-3">
        {bookmarkedNews.length > 0 ? (
          bookmarkedNews.map((news) => (
            <NewsCard
              key={news.id}
              {...news}
              onClick={() => onNewsClick(news.id)}
            />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-sm">暂无收藏内容</p>
            <p className="text-gray-400 text-xs mt-2">在快讯详情页点击星标即可收藏</p>
          </div>
        )}
      </div>
    </div>
  );
}

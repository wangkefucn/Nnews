import React from 'react';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { NewsCard } from '../NewsCard';
import { CategoryKey } from '@/app/components/shared/CategoryTag';
import { LevelKey } from '@/app/components/shared/LevelBadge';
import { EmptyState } from '@/app/components/shared/TimeFilter';

interface BookmarksPageProps {
  onBack: () => void;
  onNewsClick: (id: string) => void;
}

export function BookmarksPage({ onBack, onNewsClick }: BookmarksPageProps) {
  // Mock bookmarked news
  const bookmarkedNews = [
    {
      id: '1',
      category: 'ir' as CategoryKey,
      titleJp: 'NRI、2024年度第3四半期決算を発表　営業利益は前年同期比12.3%増',
      summaryCn: '野村综研公布2024财年Q3财报，营业利润同比增长12.3%',
      importance: 's' as LevelKey,
      publishTime: '10:30',
      source: 'NRI官网'
    },
    {
      id: '2',
      category: 'ai' as CategoryKey,
      titleJp: '生成AIを活用した金融機関向け新サービス「AI Insight Platform」を提供開始',
      summaryCn: '推出面向金融机构的生成AI新服务"AI Insight Platform"',
      importance: 'a' as LevelKey,
      publishTime: '14:20',
      source: 'NRI官网'
    },
    {
      id: '3',
      category: 'finance' as CategoryKey,
      titleJp: 'デジタル証券基盤「BOOSTRY」、大手銀行3行との連携を発表',
      summaryCn: '数字证券平台"BOOSTRY"宣布与三大银行合作',
      importance: 'a' as LevelKey,
      publishTime: '11:15',
      source: 'NRI官网'
    },
  ];

  const hasBookmarks = bookmarkedNews.length > 0;

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={onBack}
            className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">我的收藏</h1>
        </div>
        <p className="text-sm text-slate-300 font-light ml-9">
          {hasBookmarks ? `共 ${bookmarkedNews.length} 条收藏` : '暂无收藏'}
        </p>
      </div>

      {/* Bookmarks List */}
      {hasBookmarks ? (
        <div className="px-4 py-4 space-y-3">
          {bookmarkedNews.map((news) => (
            <div key={news.id} className="relative group">
              <NewsCard
                {...news}
                onClick={() => onNewsClick(news.id)}
              />
              
              {/* Delete Button */}
              <button
                className="absolute top-3 right-3 p-2 bg-white rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-50"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle delete
                  console.log('Delete bookmark:', news.id);
                }}
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="pt-20">
          <EmptyState message="暂无收藏的快讯" />
          <div className="text-center mt-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
            >
              返回首页
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

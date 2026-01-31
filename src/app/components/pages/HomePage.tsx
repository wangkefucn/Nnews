import React, { useState } from 'react';
import { NewsCard } from '../NewsCard';
import { DateSwitcher, ResultCount, EmptyState } from '@/app/components/shared/TimeFilter';
import { CategoryKey } from '@/app/components/shared/CategoryTag';
import { LevelKey } from '@/app/components/shared/LevelBadge';

interface HomePageProps {
  onNewsClick: (id: string) => void;
}

export function HomePage({ onNewsClick }: HomePageProps) {
  const [currentDate, setCurrentDate] = useState('2026-01-31');
  const [isToday, setIsToday] = useState(true);

  // 模拟新闻数据
  const mockNews = [
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
    {
      id: '4',
      category: 'hr' as CategoryKey,
      titleJp: '執行役員人事の発表　デジタル戦略部門に新体制',
      summaryCn: '公布执行董事人事任命，数字战略部门新体制',
      importance: 'b' as LevelKey,
      publishTime: '16:00',
      source: 'NRI官网'
    },
    {
      id: '5',
      category: 'governance' as CategoryKey,
      titleJp: 'サステナビリティ報告書2024を発表　ESG目標の進捗を公開',
      summaryCn: '发布2024年可持续发展报告，公开ESG目标进展',
      importance: 'b' as LevelKey,
      publishTime: '09:30',
      source: 'NRI官网'
    },
  ];

  // 根据日期筛选新闻（这里暂时返回所有，实际应该根据日期过滤）
  const filteredNews = isToday ? mockNews : [];

  const handlePrevDay = () => {
    setIsToday(false);
    const date = new Date(currentDate);
    date.setDate(date.getDate() - 1);
    setCurrentDate(date.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + 1);
    const newDate = date.toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    
    setCurrentDate(newDate);
    setIsToday(newDate >= today);
  };

  const handleDateSelect = () => {
    // 这里可以打开日期选择器弹窗
    alert('打开日期选择器（待实现）');
  };

  const handleBackToToday = () => {
    const today = new Date();
    setCurrentDate(today.toISOString().split('T')[0]);
    setIsToday(true);
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-4">
        <h1 className="text-xl font-semibold mb-1">今日快讯</h1>
        <p className="text-sm text-slate-300 font-light">
          {new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' })} · 08:30 更新
        </p>
      </div>

      {/* 日期切换器 - 使用新组件 */}
      <div className="px-4 py-3 bg-white border-b border-slate-100">
        <DateSwitcher
          currentDate={currentDate}
          isToday={isToday}
          onPrevDay={handlePrevDay}
          onNextDay={handleNextDay}
          onDateSelect={handleDateSelect}
        />
      </div>

      {/* 结果数量 */}
      {filteredNews.length > 0 && (
        <div className="py-2">
          <ResultCount count={filteredNews.length} />
        </div>
      )}

      {/* 新闻列表 */}
      {filteredNews.length > 0 ? (
        <div className="px-4 py-2 space-y-3">
          {filteredNews.map((news) => (
            <NewsCard
              key={news.id}
              {...news}
              onClick={() => onNewsClick(news.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          date={currentDate}
          onBackToToday={isToday ? undefined : handleBackToToday}
        />
      )}
    </div>
  );
}

import React from 'react';
import { CategoryTag, CategoryKey } from './shared/CategoryTag';
import { LevelBadge, LevelKey } from './shared/LevelBadge';

interface NewsCardProps {
  id: string;
  category: CategoryKey;
  categoryLabel?: string;
  titleJp: string;
  summaryCn: string;
  importance: LevelKey;
  publishTime?: string;
  source?: string;
  onClick?: () => void;
}

export function NewsCard({ 
  category, 
  titleJp, 
  summaryCn, 
  importance,
  publishTime,
  source,
  onClick 
}: NewsCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
      onClick={onClick}
    >
      {/* 顶部信息栏：分类标签 + 等级徽章 */}
      <div className="flex items-center justify-between mb-2">
        <CategoryTag category={category} variant="small" />
        <LevelBadge level={importance} variant="standard" />
      </div>
      
      {/* 标题（日文） */}
      <h3 className="text-base font-semibold text-slate-800 leading-snug mb-1 line-clamp-2">
        {titleJp}
      </h3>
      
      {/* 摘要（中文） */}
      <p className="text-sm text-gray-600 leading-relaxed mb-2 line-clamp-2">
        {summaryCn}
      </p>

      {/* 底部信息：来源 · 时间 */}
      {(source || publishTime) && (
        <div className="flex items-center gap-1 text-xs text-gray-400">
          {source && <span>{source}</span>}
          {source && publishTime && <span>·</span>}
          {publishTime && <span>{publishTime}</span>}
        </div>
      )}
    </div>
  );
}

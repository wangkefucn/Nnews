import React from 'react';
import { CategoryTag } from './CategoryTag';

interface NewsCardProps {
  id: string;
  category: 'IR' | 'AI' | 'finance' | 'hr' | 'governance' | 'default';
  categoryLabel: string;
  titleJp: string;
  summaryCn: string;
  importance: 'S' | 'A' | 'B';
  onClick?: () => void;
}

export function NewsCard({ 
  category, 
  categoryLabel, 
  titleJp, 
  summaryCn, 
  importance, 
  onClick 
}: NewsCardProps) {
  const importanceColors = {
    S: 'bg-orange-500 text-white',
    A: 'bg-blue-600 text-white',
    B: 'bg-slate-400 text-white'
  };

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <CategoryTag label={categoryLabel} variant={category} />
        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${importanceColors[importance]}`}>
          {importance}
        </span>
      </div>
      
      <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">
        {titleJp}
      </h3>
      
      <p className="text-sm text-gray-500 line-clamp-2">
        {summaryCn}
      </p>
    </div>
  );
}

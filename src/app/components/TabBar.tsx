import React from 'react';
import { Home, List, Headphones, Settings } from 'lucide-react';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const tabs = [
    { id: 'home', label: '今日快讯', icon: Home },
    { id: 'category', label: '分类浏览', icon: List },
    { id: 'audio', label: '音频概览', icon: Headphones },
    { id: 'settings', label: '设置', icon: Settings },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb z-50">
      <div className="flex items-center justify-around h-16">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            >
              <Icon 
                className={`w-5 h-5 mb-1 ${isActive ? 'text-blue-700' : 'text-gray-500'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs ${isActive ? 'text-blue-700 font-medium' : 'text-gray-500'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
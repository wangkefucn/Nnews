import React from 'react';
import { Check, Star } from 'lucide-react';
import { useSettings } from '@/app/contexts/SettingsContext';
import { CategoryChecklist, CategoryKey } from '@/app/components/shared/CategoryTag';

interface SettingsPageProps {
  onShowBookmarks: () => void;
}

export function SettingsPage({ onShowBookmarks }: SettingsPageProps) {
  const { selectedTopics, setSelectedTopics, language, setLanguage } = useSettings();

  // 映射旧的topic ID到新的CategoryKey
  const topicToCategoryMap: Record<string, CategoryKey> = {
    'IR': 'ir',
    'AI': 'ai',
    'finance': 'finance',
    'hr': 'hr',
    'governance': 'governance'
  };

  const categoryToTopicMap: Record<CategoryKey, string> = {
    'ir': 'IR',
    'ai': 'AI',
    'finance': 'finance',
    'hr': 'hr',
    'governance': 'governance',
    'all': 'all'
  };

  // 将旧的selectedTopics转换为CategoryKey[]
  const selectedCategories: CategoryKey[] = selectedTopics.map(
    topic => topicToCategoryMap[topic] || 'ir'
  );

  const handleCategoryToggle = (category: CategoryKey) => {
    const topicId = categoryToTopicMap[category];
    if (!topicId || topicId === 'all') return;

    // 转换回旧的topic系统
    setSelectedTopics(
      selectedTopics.includes(topicId)
        ? selectedTopics.filter((id) => id !== topicId)
        : [...selectedTopics, topicId]
    );
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-4">
        <h1 className="text-xl font-semibold mb-1">设置 / 偏好</h1>
        <p className="text-sm text-slate-300 font-light">个性化您的阅读体验</p>
      </div>

      <div className="px-4 py-5 space-y-4">
        {/* My Bookmarks */}
        <section>
          <button
            onClick={onShowBookmarks}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-5 flex items-center justify-between hover:from-amber-600 hover:to-orange-600 transition-all shadow-md active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6" fill="currentColor" />
              <div className="text-left">
                <p className="font-semibold text-base">我的收藏</p>
                <p className="text-xs text-amber-50 mt-0.5">查看已收藏的要闻</p>
              </div>
            </div>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </section>

        {/* Topic Preferences - 使用新的CategoryChecklist组件 */}
        <section>
          <CategoryChecklist
            selectedCategories={selectedCategories}
            onToggle={handleCategoryToggle}
            showDescriptions={true}
          />
        </section>

        {/* Language Settings */}
        <section className="bg-white rounded-2xl p-4">
          <div className="mb-3">
            <h2 className="text-base font-semibold text-slate-800 mb-1">显示语言</h2>
            <p className="text-xs text-slate-500">选择快讯内容的语言显示方式</p>
          </div>
          
          <div className="space-y-2">
            <button
              onClick={() => setLanguage('both')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                language === 'both'
                  ? 'border-slate-800 bg-slate-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="text-left">
                <p className="text-sm font-medium text-slate-800">日文 + 中文</p>
                <p className="text-xs text-slate-500 mt-0.5">同时显示原文与翻译（推荐）</p>
              </div>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  language === 'both' ? 'bg-slate-800' : 'border-2 border-gray-300'
                }`}
              >
                {language === 'both' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </button>

            <button
              onClick={() => setLanguage('jp')}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                language === 'jp'
                  ? 'border-slate-800 bg-slate-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="text-left">
                <p className="text-sm font-medium text-slate-800">仅日文</p>
                <p className="text-xs text-slate-500 mt-0.5">只显示日文原文</p>
              </div>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  language === 'jp' ? 'bg-slate-800' : 'border-2 border-gray-300'
                }`}
              >
                {language === 'jp' && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </button>
          </div>
        </section>

        {/* Brand Identity Footer */}
        <section className="text-center py-6 border-t border-slate-200">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-base font-semibold text-slate-800 tracking-tight">N前线</h3>
            <div className="space-y-1">
              <p className="text-xs text-gray-600 tracking-wide">
                核心客户动态 · 每日速览
              </p>
              <p className="text-xs text-gray-400 tracking-wide">
                主要顧客の最新動向を、毎日コンパクトに
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

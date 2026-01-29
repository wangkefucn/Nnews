import React from 'react';
import { Check, Star } from 'lucide-react';
import { useSettings } from '@/app/contexts/SettingsContext';

interface SettingsPageProps {
  onShowBookmarks: () => void;
}

export function SettingsPage({ onShowBookmarks }: SettingsPageProps) {
  const { selectedTopics, setSelectedTopics, language, setLanguage } = useSettings();

  const topics = [
    { id: 'IR', label: 'IR情报', desc: '财报、业绩发布等', required: true },
    { id: 'AI', label: 'AI・数字化', desc: '技术创新、新产品发布', required: false },
    { id: 'finance', label: '证券/金融', desc: '金融业务动态', required: false },
    { id: 'hr', label: '人事', desc: '组织架构、人事变动', required: false },
    { id: 'governance', label: '治理', desc: 'ESG、可持续发展', required: false },
  ];

  const toggleTopic = (topicId: string) => {
    // IR is required and cannot be unchecked
    if (topicId === 'IR') return;
    
    setSelectedTopics(
      selectedTopics.includes(topicId)
        ? selectedTopics.filter((id) => id !== topicId)
        : [...selectedTopics, topicId]
    );
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-6">
        <h1 className="text-xl font-semibold">设置 / 偏好</h1>
      </div>

      <div className="px-5 py-5 space-y-6">
        {/* My Bookmarks */}
        <section>
          <button
            onClick={onShowBookmarks}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg p-5 flex items-center justify-between hover:from-amber-600 hover:to-orange-600 transition-all shadow-md"
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

        {/* Topic Preferences */}
        <section className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">关注主题</h2>
          <p className="text-xs text-gray-500 mb-4">选择您关注的信息类别（可多选）</p>
          
          <div className="space-y-2">
            {topics.map((topic) => {
              const isSelected = selectedTopics.includes(topic.id);
              const isRequired = topic.required;
              return (
                <button
                  key={topic.id}
                  onClick={() => toggleTopic(topic.id)}
                  disabled={isRequired}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-slate-800 bg-slate-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  } ${isRequired ? 'opacity-100' : ''}`}
                >
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {topic.label}
                      {isRequired && (
                        <span className="ml-2 text-xs text-gray-500">(必选)</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{topic.desc}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-slate-800' : 'border-2 border-gray-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Language Settings */}
        <section className="bg-white rounded-lg border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-1">显示语言</h2>
          <p className="text-xs text-gray-500 mb-4">选择快讯内容的语言显示方式</p>
          
          <div className="space-y-2">
            <button
              onClick={() => setLanguage('both')}
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                language === 'both'
                  ? 'border-slate-800 bg-slate-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">日文 + 中文</p>
                <p className="text-xs text-gray-500 mt-0.5">同时显示原文与翻译（推荐）</p>
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
              className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                language === 'jp'
                  ? 'border-slate-800 bg-slate-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">仅日文</p>
                <p className="text-xs text-gray-500 mt-0.5">只显示日文原文</p>
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
        <section className="text-center py-6 border-t border-gray-200">
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
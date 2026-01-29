import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function AudioPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [progress, setProgress] = useState(35);
  const [currentLanguage, setCurrentLanguage] = useState<'jp' | 'cn'>('cn');

  // Generate last 14 days of audio history
  const generateAudioHistory = () => {
    const history = [];
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const weekday = weekdays[date.getDay()];
      const formattedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${weekday}）`;
      const duration = `${Math.floor(Math.random() * 3) + 3}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
      
      history.push({
        date: formattedDate,
        title: 'NRI 昨日要闻总结',
        duration: duration,
      });
    }
    
    return history;
  };

  const audioHistory = generateAudioHistory();

  const speeds = [1.0, 1.2, 1.5];

  // Get formatted date with weekday in Japanese format
  const getFormattedDate = () => {
    const date = new Date();
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekdays[date.getDay()];
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日（${weekday}）`;
  };

  return (
    <div className="w-full min-h-screen pb-20 bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-5 pt-8 pb-6">
        <h1 className="text-xl font-semibold">音频概览</h1>
      </div>

      {/* Current Audio Player */}
      <div className="px-5 py-5">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-base font-medium text-gray-600 mb-1.5">
                {getFormattedDate()}
              </p>
              <h2 className="text-lg font-semibold text-gray-900">NRI 昨日要闻总结 4分钟</h2>
            </div>
            
            {/* Language Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-0.5">
              <button
                onClick={() => setCurrentLanguage('cn')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  currentLanguage === 'cn'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                中
              </button>
              <button
                onClick={() => setCurrentLanguage('jp')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  currentLanguage === 'jp'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                日
              </button>
            </div>
          </div>

          {/* Play Button */}
          <div className="flex items-center justify-center mb-5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7" fill="currentColor" />
              ) : (
                <Play className="w-7 h-7 ml-1" fill="currentColor" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-slate-800 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1:28</span>
              <span>4:12</span>
            </div>
          </div>

          {/* Speed Control */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-gray-500 mr-1">倍速：</span>
            {speeds.map((speed) => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  playbackSpeed === speed
                    ? 'bg-slate-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* History */}
      <div className="px-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">历史音频</h3>
        <div className="space-y-2">
          {audioHistory.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500">{item.duration}</span>
                  <Play className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
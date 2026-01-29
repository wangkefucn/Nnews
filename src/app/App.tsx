import React, { useState } from 'react';
import { TabBar } from '@/app/components/TabBar';
import { HomePage } from '@/app/components/pages/HomePage';
import { CategoryPage } from '@/app/components/pages/CategoryPage';
import { AudioPage } from '@/app/components/pages/AudioPage';
import { SettingsPage } from '@/app/components/pages/SettingsPage';
import { DetailPage } from '@/app/components/pages/DetailPage';
import { BookmarksPage } from '@/app/components/pages/BookmarksPage';
import { SplashScreen } from '@/app/components/brand/SplashScreen';
import { BrandShowcase } from '@/app/components/brand/BrandShowcase';
import { SettingsProvider } from '@/app/contexts/SettingsContext';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showBrandShowcase, setShowBrandShowcase] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showDetail, setShowDetail] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  // Temporary: Show brand showcase with Cmd/Ctrl + B
  // Must be at the top level, before any conditional returns
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        setShowBrandShowcase(!showBrandShowcase);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showBrandShowcase]);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (showBrandShowcase) {
    return <BrandShowcase />;
  }

  const handleNewsClick = (id: string) => {
    setSelectedNewsId(id);
    setShowDetail(true);
  };

  const handleBackToList = () => {
    setShowDetail(false);
    setSelectedNewsId(null);
  };

  const handleShowBookmarks = () => {
    setShowBookmarks(true);
  };

  const handleBackFromBookmarks = () => {
    setShowBookmarks(false);
  };

  if (showBookmarks) {
    return (
      <SettingsProvider>
        <BookmarksPage onBack={handleBackFromBookmarks} onNewsClick={handleNewsClick} />
      </SettingsProvider>
    );
  }

  if (showDetail) {
    return (
      <SettingsProvider>
        <DetailPage onBack={handleBackToList} />
      </SettingsProvider>
    );
  }

  return (
    <SettingsProvider>
      <div className="min-h-screen w-full flex flex-col bg-slate-50">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'home' && <HomePage onNewsClick={handleNewsClick} />}
          {activeTab === 'category' && <CategoryPage onNewsClick={handleNewsClick} />}
          {activeTab === 'audio' && <AudioPage />}
          {activeTab === 'settings' && <SettingsPage onShowBookmarks={handleShowBookmarks} />}
        </div>

        {/* Tab Bar */}
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </SettingsProvider>
  );
}
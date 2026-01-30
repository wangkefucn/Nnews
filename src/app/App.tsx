import React, { useState } from 'react';
import { TabBar } from '@/app/components/TabBar';
import { HomePage } from '@/app/components/pages/HomePage';
import { CategoryPage } from '@/app/components/pages/CategoryPage';
import { AudioPage } from '@/app/components/pages/AudioPage';
import { SettingsPage } from '@/app/components/pages/SettingsPage';
import { DetailPage } from '@/app/components/pages/DetailPage';
import { BookmarksPage } from '@/app/components/pages/BookmarksPage';
import { BrandShowcase } from '@/app/components/brand/BrandShowcase';
import { SettingsProvider } from '@/app/contexts/SettingsContext';

// Error boundary to catch any runtime errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: '#f8fafc',
          color: '#1e293b',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>⚠️ Error Detected</h1>
          <p style={{ fontSize: '14px', color: '#6b7280' }}>
            {this.state.error?.message || 'Unknown error'}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#1e293b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(false); // Disabled splash for testing
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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextType {
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [selectedTopics, setSelectedTopics] = useState(['IR', 'AI', 'finance']);
  const [language, setLanguage] = useState('both');

  return (
    <SettingsContext.Provider
      value={{
        selectedTopics,
        setSelectedTopics,
        language,
        setLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

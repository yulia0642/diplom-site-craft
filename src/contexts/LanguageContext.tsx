import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  ru: {
    'nav.home': 'Главная',
    'nav.articles': 'Статьи',
    'nav.books': 'Книги',
    'nav.videos': 'Видеоблоги',
    'nav.travel': 'Путешествия',
    'nav.about': 'О платформе',
  },
  en: {
    'nav.home': 'Home',
    'nav.articles': 'Articles',
    'nav.books': 'Books',
    'nav.videos': 'Video Blogs',
    'nav.travel': 'Travel',
    'nav.about': 'About',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'ru') ? saved : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

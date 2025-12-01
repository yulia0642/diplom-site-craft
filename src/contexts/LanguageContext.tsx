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
    'map.title': 'Интерактивная карта Японии',
    'map.tokyo': 'Токио',
    'map.kyoto': 'Киото',
    'map.osaka': 'Осака',
    'map.hiroshima': 'Хиросима',
    'map.sapporo': 'Саппоро',
    'map.fukuoka': 'Фукуока',
    'map.nara': 'Нара',
    'map.nagoya': 'Нагоя',
    'map.yokohama': 'Йокогама',
    'map.capital': 'Столица Японии',
    'map.culturalCapital': 'Культурная столица',
    'map.foodCapital': 'Гастрономическая столица',
    'map.peaceMemorial': 'Мемориал мира',
    'map.northernCity': 'Северный город',
    'map.southernHub': 'Южный центр Кюсю',
    'map.ancientCapital': 'Древняя столица',
    'map.industrialCenter': 'Индустриальный центр',
    'map.portCity': 'Портовый город',
  },
  en: {
    'nav.home': 'Home',
    'nav.articles': 'Articles',
    'nav.books': 'Books',
    'nav.videos': 'Video Blogs',
    'nav.travel': 'Travel',
    'nav.about': 'About',
    'map.title': 'Interactive Map of Japan',
    'map.tokyo': 'Tokyo',
    'map.kyoto': 'Kyoto',
    'map.osaka': 'Osaka',
    'map.hiroshima': 'Hiroshima',
    'map.sapporo': 'Sapporo',
    'map.fukuoka': 'Fukuoka',
    'map.nara': 'Nara',
    'map.nagoya': 'Nagoya',
    'map.yokohama': 'Yokohama',
    'map.capital': 'Capital of Japan',
    'map.culturalCapital': 'Cultural Capital',
    'map.foodCapital': 'Food Capital',
    'map.peaceMemorial': 'Peace Memorial',
    'map.northernCity': 'Northern City',
    'map.southernHub': 'Southern Kyushu Hub',
    'map.ancientCapital': 'Ancient Capital',
    'map.industrialCenter': 'Industrial Center',
    'map.portCity': 'Port City',
  },
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
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

  const value = React.useMemo(
    () => ({ language, setLanguage, t }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
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

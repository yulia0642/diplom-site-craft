import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const JapanMap = () => {
  const { language } = useLanguage();
  const title = language === 'en' ? 'Interactive Map of Japan' : 'Интерактивная карта Японии';

  // Cities data for display
  const cities = [
    { nameEn: 'Tokyo', nameRu: 'Токио', descEn: 'Capital of Japan', descRu: 'Столица Японии' },
    { nameEn: 'Kyoto', nameRu: 'Киото', descEn: 'Cultural Capital', descRu: 'Культурная столица' },
    { nameEn: 'Osaka', nameRu: 'Осака', descEn: 'Food Capital', descRu: 'Гастрономическая столица' },
    { nameEn: 'Hiroshima', nameRu: 'Хиросима', descEn: 'Peace Memorial', descRu: 'Мемориал мира' },
    { nameEn: 'Sapporo', nameRu: 'Саппоро', descEn: 'Northern City', descRu: 'Северный город' },
    { nameEn: 'Fukuoka', nameRu: 'Фукуока', descEn: 'Southern Kyushu Hub', descRu: 'Южный центр Кюсю' },
    { nameEn: 'Nara', nameRu: 'Нара', descEn: 'Ancient Capital', descRu: 'Древняя столица' },
    { nameEn: 'Nagoya', nameRu: 'Нагоя', descEn: 'Industrial Center', descRu: 'Индустриальный центр' },
    { nameEn: 'Yokohama', nameRu: 'Йокогама', descEn: 'Port City', descRu: 'Портовый город' },
  ];

  const bbox = '122.938,24.396,153.986,45.551';
  const marker = '36.2048%2C138.2529';
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;

  return (
    <div className="space-y-6">
      <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-border">
        <iframe
          title={title}
          src={src}
          style={{ border: 0 }}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      
      {/* Cities list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cities.map((city, index) => (
          <div key={index} className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
            <h3 className="font-bold text-lg mb-1">
              {language === 'en' ? city.nameEn : city.nameRu}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? city.descEn : city.descRu}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JapanMap;

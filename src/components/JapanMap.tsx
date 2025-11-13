import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const JapanMap = () => {
  const { language } = useLanguage();
  const title = language === 'en' ? 'Interactive Map of Japan' : 'Интерактивная карта Японии';

  // Approximate bounding box for Japan (lon/lat order)
  const bbox = '122.938,24.396,153.986,45.551';
  const marker = '36.2048%2C138.2529'; // Japan center

  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
  const link = `https://www.openstreetmap.org/?mlat=36.2048&mlon=138.2529#map=5/36.2048/138.2529`;

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-border">
      <iframe
        title={title}
        src={src}
        style={{ border: 0 }}
        className="w-full h-full"
        loading="lazy"
      />
      <div className="sr-only">
        <a href={link} target="_blank" rel="noreferrer">Open full map</a>
      </div>
    </div>
  );
};

export default JapanMap;

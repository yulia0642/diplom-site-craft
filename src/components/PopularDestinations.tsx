import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import tokyoSkyline from '@/assets/guide-tokyo-skyline.jpg';
import fushimiInari from '@/assets/guide-fushimi-inari.jpg';
import mountFuji from '@/assets/guide-mount-fuji.jpg';
import ryokan from '@/assets/guide-ryokan.jpg';
import osakaFood from '@/assets/guide-osaka-food.jpg';
import hiroshima from '@/assets/guide-hiroshima.jpg';

const PopularDestinations = () => {
  const { language } = useLanguage();

  const destinations = [
    {
      name: language === 'en' ? 'Tokyo' : 'Токио',
      image: tokyoSkyline,
      description: language === 'en'
        ? 'Experience the perfect blend of ultra-modern and traditional Japanese culture'
        : 'Почувствуйте идеальное сочетание ультрасовременной и традиционной японской культуры',
      highlights: language === 'en'
        ? ['Shibuya Crossing', 'Tokyo Tower', 'Senso-ji Temple']
        : ['Перекресток Сибуя', 'Токийская башня', 'Храм Сэнсо-дзи']
    },
    {
      name: language === 'en' ? 'Kyoto' : 'Киото',
      image: fushimiInari,
      description: language === 'en'
        ? 'Walk through thousands of vermillion torii gates at Fushimi Inari shrine'
        : 'Пройдите через тысячи красных ворот тории в\u00A0святилище Фусими Инари',
      highlights: language === 'en'
        ? ['Fushimi Inari', 'Kinkaku-ji', 'Arashiyama Bamboo']
        : ['Фусими Инари', 'Кинкаку-дзи', 'Бамбуковый лес Арасияма']
    },
    {
      name: language === 'en' ? 'Mount Fuji' : 'Гора Фудзи',
      image: mountFuji,
      description: language === 'en'
        ? "Japan's iconic volcano surrounded by stunning natural landscapes"
        : 'Культовый вулкан Японии в\u00A0окружении потрясающих природных ландшафтов',
      highlights: language === 'en'
        ? ['Cherry Blossoms', 'Five Lakes', 'Hiking Trails']
        : ['Цветение сакуры', 'Пять озер', 'Пешеходные тропы']
    },
    {
      name: language === 'en' ? 'Traditional Ryokan' : 'Традиционный рёкан',
      image: ryokan,
      description: language === 'en'
        ? 'Stay in a traditional Japanese inn with tatami rooms and zen gardens'
        : 'Остановитесь в\u00A0традиционной японской гостинице с\u00A0комнатами татами и\u00A0дзен-садами',
      highlights: language === 'en'
        ? ['Tatami Rooms', 'Kaiseki Cuisine', 'Hot Springs']
        : ['Комнаты татами', 'Кухня кайсэки', 'Горячие источники']
    },
    {
      name: language === 'en' ? 'Osaka Food Scene' : 'Еда в Осаке',
      image: osakaFood,
      description: language === 'en'
        ? 'Discover street food paradise with takoyaki, okonomiyaki, and more'
        : 'Откройте для себя рай уличной еды с\u00A0такояки, окономияки и\u00A0многим другим',
      highlights: language === 'en'
        ? ['Takoyaki', 'Okonomiyaki', 'Night Markets']
        : ['Такояки', 'Окономияки', 'Ночные рынки']
    },
    {
      name: language === 'en' ? 'Hiroshima' : 'Хиросима',
      image: hiroshima,
      description: language === 'en'
        ? 'Visit the Peace Memorial Park and learn about resilience and hope'
        : 'Посетите Парк мира и\u00A0узнайте о\u00A0стойкости и\u00A0надежде',
      highlights: language === 'en'
        ? ['Peace Memorial', 'Itsukushima Shrine', 'Atomic Bomb Dome']
        : ['Мемориал мира', 'Святилище Ицукусима', 'Купол атомной бомбы']
    }
  ];

  return (
    <section className="py-16 ambient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? 'Popular Destinations' : 'Популярные направления'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? 'Explore the most iconic locations across Japan'
              : 'Исследуйте самые знаковые места Японии'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur border-border/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {destination.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-foreground/80 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;

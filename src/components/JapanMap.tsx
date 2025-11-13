import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '@/contexts/LanguageContext';

// Fix default marker icon
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const JapanMap = () => {
  const { language } = useLanguage();
  
  const locations = [
    {
      name: language === 'en' ? 'Tokyo' : 'Токио',
      position: [35.6762, 139.6503] as [number, number],
      description: language === 'en' 
        ? 'Capital city with modern technology and traditional culture'
        : 'Столица с современными технологиями и традиционной культурой'
    },
    {
      name: language === 'en' ? 'Kyoto' : 'Киото',
      position: [35.0116, 135.7681] as [number, number],
      description: language === 'en'
        ? 'Ancient capital with temples and traditional architecture'
        : 'Древняя столица с храмами и традиционной архитектурой'
    },
    {
      name: language === 'en' ? 'Osaka' : 'Осака',
      position: [34.6937, 135.5023] as [number, number],
      description: language === 'en'
        ? 'Culinary capital and vibrant nightlife'
        : 'Кулинарная столица с яркой ночной жизнью'
    },
    {
      name: language === 'en' ? 'Mount Fuji' : 'Гора Фудзи',
      position: [35.3606, 138.7274] as [number, number],
      description: language === 'en'
        ? "Japan's iconic mountain and sacred site"
        : 'Культовая гора Японии и священное место'
    },
    {
      name: language === 'en' ? 'Hiroshima' : 'Хиросима',
      position: [34.3853, 132.4553] as [number, number],
      description: language === 'en'
        ? 'Peace Memorial and historical significance'
        : 'Мемориал мира и историческое значение'
    },
    {
      name: language === 'en' ? 'Nara' : 'Нара',
      position: [34.6851, 135.8048] as [number, number],
      description: language === 'en'
        ? 'Ancient temples and friendly deer'
        : 'Древние храмы и дружелюбные олени'
    },
    {
      name: language === 'en' ? 'Hokkaido' : 'Хоккайдо',
      position: [43.0642, 141.3469] as [number, number],
      description: language === 'en'
        ? 'Northern island with natural beauty and ski resorts'
        : 'Северный остров с природной красотой и горнолыжными курортами'
    }
  ];

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-border">
      <MapContainer
        center={[36.2048, 138.2529] as [number, number]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={icon}>
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">{location.name}</h3>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default JapanMap;

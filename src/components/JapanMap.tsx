import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLanguage } from '@/contexts/LanguageContext';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import L from 'leaflet';

const JapanMap = () => {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Custom icon for markers
  const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // Major cities in Japan with coordinates
  const cities = [
    { name: 'map.tokyo', description: 'map.capital', position: [35.6762, 139.6503] as [number, number] },
    { name: 'map.kyoto', description: 'map.culturalCapital', position: [35.0116, 135.7681] as [number, number] },
    { name: 'map.osaka', description: 'map.foodCapital', position: [34.6937, 135.5023] as [number, number] },
    { name: 'map.hiroshima', description: 'map.peaceMemorial', position: [34.3853, 132.4553] as [number, number] },
    { name: 'map.sapporo', description: 'map.northernCity', position: [43.0642, 141.3469] as [number, number] },
    { name: 'map.fukuoka', description: 'map.southernHub', position: [33.5904, 130.4017] as [number, number] },
    { name: 'map.nara', description: 'map.ancientCapital', position: [34.6851, 135.8048] as [number, number] },
    { name: 'map.nagoya', description: 'map.industrialCenter', position: [35.1815, 136.9066] as [number, number] },
    { name: 'map.yokohama', description: 'map.portCity', position: [35.4437, 139.6380] as [number, number] },
  ];

  if (!isClient) {
    return (
      <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-border flex items-center justify-center">
        <p className="text-muted-foreground">Загрузка карты...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-border">
      <MapContainer
        center={[36.2048, 138.2529]}
        zoom={6}
        className="w-full h-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city, index) => (
          <Marker key={index} position={city.position} icon={defaultIcon}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-base mb-1">{t(city.name)}</h3>
                <p className="text-sm text-muted-foreground">{t(city.description)}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default JapanMap;

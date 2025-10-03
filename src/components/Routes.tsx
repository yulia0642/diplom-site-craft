import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Coins, Users, Leaf, Camera, Heart, Mountain } from "lucide-react";
import toriiImage from "@/assets/culture-torii.jpg";
import kyotoImage from "@/assets/kyoto-street.jpg";
import zenImage from "@/assets/zen-garden.jpg";

const routes = [
  {
    image: toriiImage,
    title: "Духовная Япония",
    description: "Храмы, святыни и священные места от Киото до Нары с посещением утренних медитаций",
    duration: "7 дней",
    difficulty: "Средний",
    budget: "150-250 тыс. ₽",
    tags: ["Культура", "Храмы", "Медитация"],
    preferences: ["Культура", "История", "Медитация"],
    groupSize: "Индивидуальный / Групповой",
    included: ["Проживание в традиционных рёканах", "Завтраки", "Входные билеты в храмы", "Гид-переводчик"]
  },
  {
    image: kyotoImage,
    title: "Классический маршрут",
    description: "Токио, Киото, Осака, Хиросима — главные города Японии за две недели с гастротуром",
    duration: "14 дней",
    difficulty: "Легкий",
    budget: "200-350 тыс. ₽",
    tags: ["Города", "Культура", "Гастрономия"],
    preferences: ["Города", "Еда", "Шопинг", "Культура"],
    groupSize: "Любой размер группы",
    included: ["Отели 4*", "JR Pass", "Гастрономические туры", "Экскурсии с гидом"]
  },
  {
    image: zenImage,
    title: "Дзен и природа",
    description: "Уединенные онсены, сады дзен и природные парки вдали от туристических троп",
    duration: "10 дней",
    difficulty: "Сложный",
    budget: "180-300 тыс. ₽",
    tags: ["Природа", "Релакс", "Аутентичность"],
    preferences: ["Природа", "Релакс", "Уединение"],
    groupSize: "Индивидуальный / Пары",
    included: ["Премиум рёканы с частными онсенами", "Все питание", "Трансферы", "Чайные церемонии"]
  },
  {
    image: kyotoImage,
    title: "Бюджетное приключение",
    description: "Экономный маршрут для самостоятельных путешественников с хостелами и уличной едой",
    duration: "10 дней",
    difficulty: "Легкий",
    budget: "80-120 тыс. ₽",
    tags: ["Экономия", "Самостоятельно", "Города"],
    preferences: ["Бюджет", "Города", "Молодёжь"],
    groupSize: "Индивидуальный",
    included: ["Хостелы", "JR Pass", "Список недорогих ресторанов", "Карты и гиды"]
  },
  {
    image: toriiImage,
    title: "Семейный отдых",
    description: "Маршрут для семей с детьми: парки развлечений, музеи, удобный график без спешки",
    duration: "12 дней",
    difficulty: "Легкий",
    budget: "250-400 тыс. ₽",
    tags: ["Семья", "Дети", "Развлечения"],
    preferences: ["Семья", "Развлечения", "Комфорт"],
    groupSize: "Семьи с детьми",
    included: ["Семейные отели", "Входные билеты в парки", "Детское меню", "Няня по запросу"]
  },
  {
    image: zenImage,
    title: "Фотосафари",
    description: "Маршрут для фотографов: лучшие локации, рассветы и закаты, сезон момидзи",
    duration: "9 дней",
    difficulty: "Средний",
    budget: "200-320 тыс. ₽",
    tags: ["Фотография", "Природа", "Момидзи"],
    preferences: ["Фотография", "Природа", "Эстетика"],
    groupSize: "Малые группы до 8 человек",
    included: ["Отели рядом с локациями", "Ранние выезды", "Разрешения на съёмку", "Советы фотографа"]
  }
];

const Routes = () => {
  const getPreferenceIcon = (preference: string) => {
    const icons: { [key: string]: any } = {
      "Культура": Leaf,
      "Природа": Mountain,
      "Фотография": Camera,
      "Семья": Heart,
      "Бюджет": Coins,
      "Города": MapPin
    };
    return icons[preference] || MapPin;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Маршруты на любой вкус и бюджет
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Выберите готовый маршрут или создайте уникальный с учётом ваших предпочтений, бюджета и стиля путешествия
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="text-sm py-2 px-4">🏯 Культурные</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">🏔️ Природа</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">💰 Бюджетные</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">👨‍👩‍👧‍👦 Семейные</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">📸 Фототуры</Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">🧘 Релакс</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift border-border/50 group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[200px] justify-end">
                  {route.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader className="flex-grow">
                <CardTitle className="text-2xl mb-2">{route.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {route.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm pb-3 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{route.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{route.budget}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{route.groupSize}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Включено в маршрут:
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    {route.included.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" variant="outline">
                  Подробнее о маршруте
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="py-8">
              <h3 className="text-2xl font-semibold mb-4">Не нашли подходящий маршрут?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Используйте наш конструктор маршрутов: укажите предпочтения, бюджет, даты и получите 
                персональный план путешествия с учётом всех ваших пожеланий
              </p>
              <Button size="lg" className="px-8">
                Создать персональный маршрут
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Routes;

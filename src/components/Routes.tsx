import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Coins } from "lucide-react";
import toriiImage from "@/assets/culture-torii.jpg";
import kyotoImage from "@/assets/kyoto-street.jpg";
import zenImage from "@/assets/zen-garden.jpg";

const routes = [
  {
    image: toriiImage,
    title: "Духовная Япония",
    description: "Храмы, святыни и священные места от Киото до Нары",
    duration: "7 дней",
    difficulty: "Средний",
    budget: "150-250 тыс. ₽",
    tags: ["Культура", "Храмы", "Медитация"]
  },
  {
    image: kyotoImage,
    title: "Классический маршрут",
    description: "Токио, Киото, Осака — главные города Японии за две недели",
    duration: "14 дней",
    difficulty: "Легкий",
    budget: "200-350 тыс. ₽",
    tags: ["Города", "Культура", "Гастрономия"]
  },
  {
    image: zenImage,
    title: "Дзен и природа",
    description: "Уединенные онсены, сады и природные парки вдали от туристических троп",
    duration: "10 дней",
    difficulty: "Сложный",
    budget: "180-300 тыс. ₽",
    tags: ["Природа", "Релакс", "Аутентичность"]
  }
];

const Routes = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Популярные маршруты
          </h2>
          <p className="text-xl text-muted-foreground">
            Готовые маршруты от опытных путешественников или создайте свой уникальный
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-lift border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {route.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{route.title}</CardTitle>
                <CardDescription className="text-base">
                  {route.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
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
                </div>

                <Button className="w-full" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Создать свой маршрут
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Routes;

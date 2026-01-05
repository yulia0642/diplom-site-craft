import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, GraduationCap, Heart } from "lucide-react";

const cultureItems = [
  {
    icon: BookOpen,
    title: "Культурные гиды",
    description: "Подробные статьи о японской культуре, традициях, праздниках и этикете"
  },
  {
    icon: Headphones,
    title: "Подкасты",
    description: "Истории путешественников, интервью с экспатами и погружение в японский быт"
  },
  {
    icon: GraduationCap,
    title: "Языковые уроки",
    description: "Базовые фразы, выражения и советы для общения с местными жителями"
  },
  {
    icon: Heart,
    title: "Живой опыт",
    description: "Рекомендации от реальных людей, которые живут или часто бывают в Японии"
  }
];

const Culture = () => {
  return (
    <section className="py-24 bg-transparent ambient-section relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Больше, чем просто путеводитель
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы не просто показываем достопримечательности.<br />
              Мы помогаем понять культуру, традиции и дух Японии<br className="hidden md:block" />
              через образовательный контент и истории реальных людей.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Экспертный контент</p>
                  <p className="text-muted-foreground">
                    Материалы создаются редакторами и экспертами, которые знают Японию не понаслышке
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Глубокое погружение</p>
                  <p className="text-muted-foreground">
                    От базовых фраз до сложных культурных нюансов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Постоянное обновление</p>
                  <p className="text-muted-foreground">
                    Актуальная информация о визах, транспорте и локальных событиях
                  </p>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-8">
              Начать изучение
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cultureItems.map((item, index) => (
            <Card 
              key={index}
              className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm japanese-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;

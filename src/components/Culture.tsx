import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, GraduationCap, Heart } from "lucide-react";

const cultureItems = [
  {
    icon: BookOpen,
    title: "Культурные гиды",
    description: "Подробные статьи о\u00A0японской культуре, традициях, праздниках и\u00A0этикете."
  },
  {
    icon: Headphones,
    title: "Подкасты",
    description: "Истории путешественников, интервью с\u00A0экспатами и\u00A0погружение в\u00A0японский быт."
  },
  {
    icon: GraduationCap,
    title: "Языковые уроки",
    description: "Базовые фразы, выражения и\u00A0советы для общения с\u00A0местными жителями."
  },
  {
    icon: Heart,
    title: "Живой опыт",
    description: "Рекомендации от\u00A0реальных людей, которые живут или часто бывают в\u00A0Японии."
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
              Мы не{"\u00A0"}просто показываем достопримечательности.<br />
              Мы{"\u00A0"}помогаем понять культуру, традиции и{"\u00A0"}дух Японии<br className="hidden md:block" />
              через образовательный контент и{"\u00A0"}истории реальных людей.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Человеческий опыт</p>
                  <p className="text-muted-foreground">
                    Все описания и{"\u00A0"}рекомендации составлены людьми, а{"\u00A0"}не{"\u00A0"}ИИ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Глубокое погружение</p>
                  <p className="text-muted-foreground">
                    От{"\u00A0"}базовых фраз до{"\u00A0"}сложных культурных нюансов.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-semibold mb-1">Постоянное обновление</p>
                  <p className="text-muted-foreground">
                    Актуальная информация о{"\u00A0"}визах, транспорте и{"\u00A0"}локальных событиях.
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

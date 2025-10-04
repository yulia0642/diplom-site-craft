import { Card, CardContent } from "@/components/ui/card";
import { Compass, BookOpen, Languages, Sparkles } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Персонализированные маршруты",
    description: "Создавайте уникальные маршруты на основе ваших интересов, бюджета и продолжительности поездки."
  },
  {
    icon: BookOpen,
    title: "Культурные гиды",
    description: "Глубокое погружение в японскую культуру, традиции и этикет от реальных путешественников."
  },
  {
    icon: Languages,
    title: "Образовательный контент",
    description: "Полезные фразы, языковые уроки и советы для комфортного общения в Японии."
  },
  {
    icon: Sparkles,
    title: "Умные рекомендации",
    description: "ИИ-персонализация контента с сохранением человеческого опыта и экспертизы."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Современная платформа, сочетающая технологии<br className="hidden md:block" />
            и живой опыт путешественников.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import { Card, CardContent } from "@/components/ui/card";
import { Compass, BookOpen, Languages } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Персонализированные маршруты",
    description: "Создавайте уникальные маршруты на\u00A0основе ваших интересов, бюджета и\u00A0продолжительности поездки."
  },
  {
    icon: BookOpen,
    title: "Культурные гиды",
    description: "Глубокое погружение в\u00A0японскую культуру, традиции и\u00A0этикет от\u00A0реальных путешественников."
  },
  {
    icon: Languages,
    title: "Образовательный контент",
    description: "Полезные фразы, языковые уроки и\u00A0советы для комфортного общения в\u00A0Японии."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-transparent ambient-section relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Современная платформа, сочетающая технологии<br className="hidden md:block" />
            и{"\u00A0"}живой опыт путешественников.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = [
              { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20" },
              { bg: "bg-purple-500/10", text: "text-purple-500", border: "border-purple-500/20" },
              { bg: "bg-orange-500/10", text: "text-orange-500", border: "border-orange-500/20" }
            ];
            const color = colors[index % colors.length];
            return (
              <Card 
                key={index} 
                className={`hover-lift border-2 ${color.border} bg-card/80 backdrop-blur-sm transition-all hover:border-opacity-50`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl ${color.bg} flex items-center justify-center`}>
                    <feature.icon className={`w-7 h-7 ${color.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

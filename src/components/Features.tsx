import { Card, CardContent } from "@/components/ui/card";
import { Compass, BookOpen, Languages } from "lucide-react";

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
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background wave-pattern relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Современная платформа, сочетающая технологии<br className="hidden md:block" />
            и живой опыт путешественников.
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

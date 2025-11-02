import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Culture from "@/components/Culture";
import AppPromo from "@/components/AppPromo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, FileText, Users, Globe, Heart } from "lucide-react";

const Index = () => {
  const benefits = [
    {
      icon: Book,
      title: "Книги и литература",
      description: "Рецензии на японскую литературу, рекомендации для изучения языка и понимания культуры"
    },
    {
      icon: Video,
      title: "Видеоблоги",
      description: "Погружение в повседневную жизнь Японии через аутентичные видео о культуре, традициях и современности"
    },
    {
      icon: FileText,
      title: "Статьи и гайды",
      description: "Глубокие статьи о японской культуре, истории, этикете и практические советы путешественникам"
    },
    {
      icon: Users,
      title: "Сообщество",
      description: "Объединяем людей, интересующихся Японией, её языком и культурой"
    },
    {
      icon: Globe,
      title: "Культурный мост",
      description: "Помогаем понять и прочувствовать японскую культуру через призму личного опыта"
    },
    {
      icon: Heart,
      title: "Аутентичный контент",
      description: "Все материалы созданы с любовью к Японии и основаны на реальном опыте"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      {/* Platform Benefits Section */}
      <section className="py-20 wave-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
              Ваш проводник в мир Японии
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Момидзи — это медийная платформа для всех, кто увлечён Японией, её культурой и языком. 
              Мы создаём контент, который помогает глубже понять и прочувствовать японскую культуру.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="japanese-border hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Culture />
      <AppPromo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

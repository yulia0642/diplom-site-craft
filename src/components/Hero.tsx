import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-japan.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Японский пейзаж с горой Фудзи" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-2">
            Момидзи
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-primary mb-8">
            Медийная платформа о Японии
          </p>
          
          <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Персонализированные маршруты, культурные гиды и образовательный контент для незабываемого путешествия в Страну восходящего солнца
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="text-lg px-8 py-6 shadow-accent-glow">
              Создать маршрут
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Book, Video } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/guide-mount-fuji.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mount Fuji with cherry blossoms - Japan travel guide" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/95"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Момидзи</span>
            <span className="block text-3xl md:text-4xl mt-2 text-foreground font-normal">
              Ваш путеводитель по Японии
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Персонализированные маршруты, культурные гиды и образовательный контент для незабываемого путешествия в Страну восходящего солнца. Откройте для себя истинную Японию через наши статьи, видео и книги.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/travel">
              <Button size="lg" className="text-lg px-8 py-6 shadow-accent-glow group">
                <MapPin className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Путеводитель
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/articles">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Book className="mr-2 w-5 h-5" />
                Статьи и гайды
              </Button>
            </Link>
            <Link to="/videos">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Video className="mr-2 w-5 h-5" />
                Видеоблоги
              </Button>
            </Link>
          </div>
        </div>

      {/* Floating Elements - removed for cleaner look */}
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden wave-pattern bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background"></div>
      
      {/* Enhanced Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 japanese-border">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Начните планирование прямо сейчас
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Готовы отправиться в путешествие?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Получите персонализированный маршрут и эксклюзивные советы<br className="hidden md:block" />
            для вашей поездки в Японию.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email"
              className="h-12 text-base"
            />
            <Button size="lg" className="h-12 px-8 whitespace-nowrap shadow-accent-glow">
              Начать
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Присоединяйтесь к 10,000+ путешественникам,<br className="hidden sm:block" />
            которые уже открыли для себя Японию с нами.
          </p>
        </div>
      </div>

    </section>
  );
};

export default CTA;

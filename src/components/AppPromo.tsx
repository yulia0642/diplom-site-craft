import { Button } from "@/components/ui/button";
import { Smartphone, Headphones, Map, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AppPromo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">Скоро запуск</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Мобильное приложение Момидзи
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Всё содержимое платформы всегда под рукой, плюс эксклюзивные функции для путешественников
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-border/50 hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Подкасты</h3>
                <p className="text-muted-foreground">
                  Слушайте истории о Японии, языковые уроки и интервью с путешественниками в любое время
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover-lift" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Map className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Карты метро</h3>
                <p className="text-muted-foreground">
                  Интерактивные карты метро всех крупных городов Японии с офлайн-доступом и маршрутизацией
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover-lift" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Офлайн-режим</h3>
                <p className="text-muted-foreground">
                  Сохраняйте маршруты, статьи и гиды для доступа без интернета прямо в поездке
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="px-8">
              Узнать о запуске первым
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;

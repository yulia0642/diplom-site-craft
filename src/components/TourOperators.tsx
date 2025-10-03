import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Map, CheckCircle2, Users } from "lucide-react";

const TourOperators = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Планируйте поездку вашим способом
          </h2>
          <p className="text-xl text-muted-foreground">
            Выберите удобный вариант: готовый тур от партнёров или полностью самостоятельное путешествие
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-primary/20 hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Готовые туры от партнёров</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Сотрудничаем с проверенными туроператорами, специализирующимися на путешествиях в Японию
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Готовые маршруты с проживанием и трансферами</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Помощь с оформлением виз и документов</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Русскоговорящие гиды и поддержка 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Групповые и индивидуальные туры</span>
                </li>
              </ul>
              <Button className="w-full mt-4" size="lg">
                Выбрать готовый тур
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover-lift">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-2xl">Самостоятельное планирование</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Создайте уникальное путешествие с помощью наших инструментов и гидов
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Конструктор маршрутов с учётом ваших интересов</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Детальные гиды по городам и достопримечательностям</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Рекомендации отелей, ресторанов и транспорта</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Комьюнити путешественников для советов</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-4" size="lg">
                Начать планирование
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto border-border/50 bg-gradient-to-br from-background to-secondary/10">
            <CardContent className="py-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Наши партнёры</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы сотрудничаем только с проверенными туроператорами, которые обеспечивают высокое качество 
                сервиса и глубокое понимание японской культуры. Каждый партнёр проходит тщательный отбор.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TourOperators;

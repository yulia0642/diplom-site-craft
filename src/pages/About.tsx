import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, BookOpen, Video } from "lucide-react";
import momidjiImg from "@/assets/momiji-logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 wave-pattern">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in japanese-border">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg shadow-primary/10">
              <img
                src={momidjiImg}
                alt="Момидзи"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              О платформе Момидзи
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Момидзи — это медийная платформа и гид по Японии, созданная для тех, 
              кто влюблён в Страну восходящего солнца или только открывает её для себя.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Наша история</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Название "Момидзи" (紅葉) означает "красные осенние листья клёна" на японском языке. 
                Это слово символизирует красоту переходных моментов, внимание к деталям и гармонию 
                с природой — ценности, которые лежат в основе японской культуры.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы создали эту платформу, потому что верим: Япония — это не просто туристическое 
                направление, а целый мир философии, эстетики и образа жизни, который может обогатить 
                каждого, кто к нему прикоснётся.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наша миссия — быть мостом между двумя культурами, предоставляя качественный, 
                аутентичный контент на русском языке от людей, которые по-настоящему знают 
                и любят Японию.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Глубокие статьи",
                  description: "Аналитические материалы о культуре, истории и современной жизни Японии",
                  color: "primary",
                },
                {
                  icon: Video,
                  title: "Видеоблоги",
                  description: "Авторские видео от экспатов и путешественников со всей Японии",
                  color: "secondary",
                },
                {
                  icon: Heart,
                  title: "Личные маршруты",
                  description: "Персонализированные гиды для вашего идеального путешествия",
                  color: "accent",
                },
                {
                  icon: Users,
                  title: "Сообщество",
                  description: "Активное комьюнити единомышленников и японофилов",
                  color: "primary",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${feature.color}/10 rounded-full flex items-center justify-center group-hover:bg-${feature.color}/20 transition-colors shadow-lg shadow-${feature.color}/5`}>
                    <feature.icon size={32} className={`text-${feature.color}`} />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
          </div>

          {/* Technology Section */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Технологии и подход</h2>
            <div className="bg-gradient-to-br from-card to-card border border-primary/20 rounded-lg p-8 mb-8 japanese-border shadow-lg shadow-primary/5">
              <h3 className="font-bold text-xl mb-4 text-center text-primary">Умные рекомендации</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                ИИ-персонализация контента с сохранением человеческого опыта и экспертизы. 
                Мы используем искусственный интеллект для анализа ваших предпочтений и создания 
                персонализированных рекомендаций, но каждый материал создан реальными людьми 
                с личным опытом путешествий по Японии.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Аутентичность",
                  description: "Только проверенная информация от людей, живущих в Японии или регулярно там бывающих",
                  accent: "primary",
                },
                {
                  title: "Качество",
                  description: "Каждый материал проходит редактуру и проверку фактов перед публикацией",
                  accent: "secondary",
                },
                {
                  title: "Доступность",
                  description: "Делаем японскую культуру понятной и близкой для русскоязычной аудитории",
                  accent: "accent",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-card border-2 border-${value.accent}/20 rounded-lg p-6 hover:border-${value.accent} hover:shadow-lg hover:shadow-${value.accent}/10 transition-all japanese-border group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className={`font-bold text-lg mb-3 text-${value.accent} group-hover:text-${value.accent}`}>{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Отзывы наших читателей</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Анна Петрова",
                  location: "Москва",
                  text: "Благодаря Момидзи я впервые поехала в Японию подготовленной. Статьи о культуре храмов помогли избежать неловких ситуаций, а маршрут по Киото был просто идеальным!",
                },
                {
                  name: "Дмитрий Соколов",
                  location: "Санкт-Петербург",
                  text: "Живу в Токио уже 3 года, но продолжаю читать Момидзи. Здесь всегда нахожу что-то новое — от скрытых онсенов до малоизвестных фестивалей. Настоящая находка для тех, кто хочет узнать Японию глубже.",
                },
                {
                  name: "Елена Кравченко",
                  location: "Екатеринбург",
                  text: "Видеоблоги на платформе — это нечто! Смотрю их как сериал перед сном. Особенно понравился материал про сельскую Японию — показали то, что не увидишь в туристических брошюрах.",
                },
                {
                  name: "Михаил Лебедев",
                  location: "Новосибирск",
                  text: "Планировал путешествие сам, но понял, что упускаю много важного. Момидзи помог составить персональный маршрут с учётом моих интересов к истории самураев. Поездка прошла безупречно!",
                },
                {
                  name: "Ирина Волкова",
                  location: "Казань",
                  text: "Изучаю японский язык, и образовательный контент на Момидзи — отличное дополнение к учебникам. Фразы из реальной жизни, культурный контекст — всё это делает обучение живым и интересным.",
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all japanese-border animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-3 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нам</h2>
              <p className="text-muted-foreground mb-6">
                Момидзи постоянно растёт. Если вы эксперт по Японии, создаёте контент 
                или хотите сотрудничать с нами, мы будем рады услышать от вас.
              </p>
              <a
                href="mailto:contact@momidji.com"
                className="inline-block text-primary hover:underline font-medium"
              >
                contact@momidji.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

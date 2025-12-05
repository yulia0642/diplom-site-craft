import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, BookOpen, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import momidjiImg from "@/assets/momiji-logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground drop-shadow-sm">
              О платформе Момидзи
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Момидзи — это медийная платформа и гид по Японии, созданная для тех, 
              кто влюблен в Страну восходящего солнца или только открывает ее для себя.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-foreground">Наша история</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Название «Момидзи» (紅葉) означает «красные осенние листья клена» на японском языке. 
                Это слово символизирует красоту переходных моментов, внимание к деталям и гармонию 
                с природой — ценности, которые лежат в основе японской культуры.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы создали эту платформу, потому что верим: Япония — это не просто туристическое 
                направление, а целый мир философии, эстетики и образа жизни, который может обогатить 
                каждого, кто к нему прикоснется.
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
                  bgColor: "bg-blue-500/10",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-500/20",
                  hoverBg: "group-hover:bg-blue-500/20",
                  hoverBorder: "hover:border-blue-500"
                },
                {
                  icon: Video,
                  title: "Видеоблоги",
                  description: "Авторские видео от экспатов и путешественников со всей Японии",
                  bgColor: "bg-purple-500/10",
                  textColor: "text-purple-500",
                  borderColor: "border-purple-500/20",
                  hoverBg: "group-hover:bg-purple-500/20",
                  hoverBorder: "hover:border-purple-500"
                },
                {
                  icon: Heart,
                  title: "Личные маршруты",
                  description: "Персонализированные гиды для вашего идеального путешествия",
                  bgColor: "bg-orange-500/10",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-500/20",
                  hoverBg: "group-hover:bg-orange-500/20",
                  hoverBorder: "hover:border-orange-500"
                },
                {
                  icon: Users,
                  title: "Сообщество",
                  description: "Активное комьюнити единомышленников и японофилов",
                  bgColor: "bg-pink-500/10",
                  textColor: "text-pink-500",
                  borderColor: "border-pink-500/20",
                  hoverBg: "group-hover:bg-pink-500/20",
                  hoverBorder: "hover:border-pink-500"
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className={`text-center animate-fade-in group border-2 ${feature.borderColor} ${feature.hoverBorder} rounded-lg p-6 transition-all`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 ${feature.bgColor} ${feature.hoverBg} rounded-full flex items-center justify-center transition-colors shadow-lg`}>
                    <feature.icon size={32} className={feature.textColor} />
                  </div>
                  <h3 className={`font-bold mb-2 ${feature.textColor}`}>{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
          </div>

          {/* Technology Section */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-foreground">Технологии и подход</h2>
            <div className="bg-transparent border border-primary/20 rounded-lg p-8 mb-8 japanese-border shadow-lg shadow-primary/5">
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-foreground">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Аутентичность",
                  description: "Только проверенная информация от людей, живущих в Японии или регулярно там бывающих",
                  borderColor: "border-blue-500/20",
                  textColor: "text-blue-500",
                  hoverBorder: "hover:border-blue-500",
                  shadowColor: "hover:shadow-blue-500/10"
                },
                {
                  title: "Качество",
                  description: "Каждый материал проходит редактуру и проверку фактов перед публикацией",
                  borderColor: "border-purple-500/20",
                  textColor: "text-purple-500",
                  hoverBorder: "hover:border-purple-500",
                  shadowColor: "hover:shadow-purple-500/10"
                },
                {
                  title: "Доступность",
                  description: "Делаем японскую культуру понятной и близкой для русскоязычной аудитории",
                  borderColor: "border-orange-500/20",
                  textColor: "text-orange-500",
                  hoverBorder: "hover:border-orange-500",
                  shadowColor: "hover:shadow-orange-500/10"
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className={`bg-card border-2 ${value.borderColor} ${value.hoverBorder} rounded-lg p-6 hover:shadow-lg ${value.shadowColor} transition-all japanese-border group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className={`font-bold text-lg mb-3 ${value.textColor}`}>{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-foreground">Отзывы наших читателей</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Анна Петрова",
                  location: "Москва",
                  text: "Благодаря Момидзи я впервые поехала в Японию подготовленной. Статьи о культуре храмов помогли избежать неловких ситуаций, а маршрут по Киото был просто идеальным!",
                  accentColor: "blue"
                },
                {
                  name: "Дмитрий Соколов",
                  location: "Санкт-Петербург",
                  text: "Живу в Токио уже 3 года, но продолжаю читать Момидзи. Здесь всегда нахожу что-то новое — от скрытых онсенов до малоизвестных фестивалей. Настоящая находка для тех, кто хочет узнать Японию глубже.",
                  accentColor: "purple"
                },
                {
                  name: "Елена Кравченко",
                  location: "Екатеринбург",
                  text: "Видеоблоги на платформе — это нечто! Смотрю их как сериал перед сном. Особенно понравился материал про сельскую Японию — показали то, что не увидишь в туристических брошюрах.",
                  accentColor: "orange"
                },
                {
                  name: "Михаил Лебедев",
                  location: "Новосибирск",
                  text: "Планировал путешествие сам, но понял, что упускаю много важного. Момидзи помог составить персональный маршрут с учетом моих интересов к истории самураев. Поездка прошла безупречно!",
                  accentColor: "pink"
                },
                {
                  name: "Ирина Волкова",
                  location: "Казань",
                  text: "Изучаю японский язык, и образовательный контент на Момидзи — отличное дополнение к учебникам. Фразы из реальной жизни, культурный контекст — все это делает обучение живым и интересным.",
                  accentColor: "blue"
                },
              ].map((testimonial, index) => {
                const colors = {
                  blue: { border: "border-blue-500/20", hoverBorder: "hover:border-blue-500", gradient: "from-blue-500/20 to-blue-500/10", text: "text-blue-500" },
                  purple: { border: "border-purple-500/20", hoverBorder: "hover:border-purple-500", gradient: "from-purple-500/20 to-purple-500/10", text: "text-purple-500" },
                  orange: { border: "border-orange-500/20", hoverBorder: "hover:border-orange-500", gradient: "from-orange-500/20 to-orange-500/10", text: "text-orange-500" },
                  pink: { border: "border-pink-500/20", hoverBorder: "hover:border-pink-500", gradient: "from-pink-500/20 to-pink-500/10", text: "text-pink-500" }
                };
                const color = colors[testimonial.accentColor as keyof typeof colors];
                return (
                  <div
                    key={testimonial.name}
                    className={`bg-card border-2 ${color.border} rounded-lg p-6 ${color.hoverBorder} hover:shadow-lg transition-all japanese-border animate-fade-in group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 transition-all`}>
                        <span className={`${color.text} font-bold text-lg`}>
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      «{testimonial.text}»
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="bg-transparent rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-foreground">Присоединяйтесь к нам</h2>
              <p className="text-muted-foreground mb-6">
                Момидзи постоянно растет. Если вы эксперт по Японии, создаете контент 
                или хотите сотрудничать с нами, мы будем рады услышать от вас
              </p>
              <a
                href="mailto:contact@momidji.com"
                className="inline-block text-primary hover:underline font-medium"
              >
                contact@momidji.com
              </a>
            </div>
          </div>

          {/* Quick Links to Content */}
          <div className="mt-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Начните изучение</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/articles" className="group">
                <div className="p-6 bg-card rounded-lg border-2 border-blue-500/20 hover:border-blue-500 transition-all text-center">
                  <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1 text-blue-500 transition-colors">Статьи</h3>
                  <span className="text-xs text-blue-500 font-medium inline-flex items-center gap-1">
                    Читать <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
              <Link to="/videos" className="group">
                <div className="p-6 bg-card rounded-lg border-2 border-purple-500/20 hover:border-purple-500 transition-all text-center">
                  <Video className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1 text-purple-500 transition-colors">Видео</h3>
                  <span className="text-xs text-purple-500 font-medium inline-flex items-center gap-1">
                    Смотреть <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
              <Link to="/books" className="group">
                <div className="p-6 bg-card rounded-lg border-2 border-orange-500/20 hover:border-orange-500 transition-all text-center">
                  <Heart className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1 text-orange-500 transition-colors">Книги</h3>
                  <span className="text-xs text-orange-500 font-medium inline-flex items-center gap-1">
                    Купить <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
              <Link to="/travel" className="group">
                <div className="p-6 bg-card rounded-lg border-2 border-pink-500/20 hover:border-pink-500 transition-all text-center">
                  <Users className="w-10 h-10 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1 text-pink-500 transition-colors">Маршруты</h3>
                  <span className="text-xs text-pink-500 font-medium inline-flex items-center gap-1">
                    Создать <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

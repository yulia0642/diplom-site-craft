import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Culture from "@/components/Culture";
import AppPromo from "@/components/AppPromo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, FileText, Users, Globe, Heart, ArrowRight, Sparkles, Mountain, Coffee, BookOpen, Map, Calendar, Languages, Utensils, Train, Building2, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import zenMeditationMonk from "@/assets/zen-meditation-monk.jpg";
import matchaCeremony from "@/assets/matcha-ceremony.jpg";

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
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Global subtle background overlay using design tokens */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(800px 500px at 10% 10%, hsl(var(--primary) / 0.15), transparent), radial-gradient(900px 600px at 90% 20%, hsl(var(--accent) / 0.18), transparent), radial-gradient(700px 500px at 50% 85%, hsl(var(--primary) / 0.12), transparent), radial-gradient(600px 400px at 30% 50%, hsl(218 100% 60% / 0.15), transparent)'
          }}
        />
      </div>
      <Header />
      <Hero />
      <Features />
      
      {/* Japanese Culture Insights */}
      <section className="py-20 bg-transparent relative overflow-hidden ambient-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
              Погружение в японскую культуру
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Откройте для себя глубину традиций, философии и образа жизни Японии
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden hover-lift animate-fade-up">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={zenMeditationMonk} 
                  alt="Монах в медитации в японском храме"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Философия Дзен</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Японская философия Дзен учит находить красоту в простоте и гармонию в повседневности. 
                  Сады камней, чайные церемонии и искусство каллиграфии — всё это пути к внутреннему спокойствию.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={matchaCeremony} 
                  alt="Приготовление матча в традиционной чайной церемонии"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Чайная церемония</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Садо (茶道) — это не просто чаепитие, а целое искусство, воплощающее принципы гармонии, 
                  уважения, чистоты и спокойствия. Каждое движение имеет глубокий смысл.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Japanese Language & Traditions */}
      <section className="py-20 bg-transparent relative overflow-hidden ambient-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="japanese-border hover-lift animate-fade-up">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Японский язык</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Три системы письменности — хирагана, катакана и кандзи — отражают сложность и красоту японского языка. 
                  Изучение языка открывает двери к пониманию культуры.
                </p>
                <div className="text-3xl font-sans text-primary mb-2">
                  日本語
                </div>
                <p className="text-sm text-muted-foreground">Нихонго (японский язык)</p>
              </CardContent>
            </Card>

            <Card className="japanese-border hover-lift animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Сезоны и природа</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  В Японии особое отношение к смене времён года. Цветение сакуры весной, 
                  осенние клёны момидзи, зимние снежные пейзажи — каждый сезон воспевается в искусстве.
                </p>
                <div className="text-3xl font-sans text-primary mb-2">
                  四季
                </div>
                <p className="text-sm text-muted-foreground">Сики (четыре сезона)</p>
              </CardContent>
            </Card>

            <Card className="japanese-border hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ваби-саби</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Эстетическая концепция, находящая красоту в несовершенстве, простоте и быстротечности. 
                  Ваби-саби учит ценить естественность и принимать непостоянство жизни.
                </p>
                <div className="text-3xl font-sans text-primary mb-2">
                  侘寂
                </div>
                <p className="text-sm text-muted-foreground">Ваби-саби</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Japan Geography Infographic */}
      <section className="py-20 bg-transparent relative overflow-hidden ambient-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🗾 География</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
              Япония в цифрах
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Островное государство с уникальным географическим положением
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Main Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Map,
                  number: "6,852",
                  label: "островов",
                  subtitle: "4 главных острова",
                  details: ["Хонсю (самый большой)", "Хоккайдо (север)", "Кюсю (юг)", "Сикоку (наименьший)"],
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  iconColor: "text-blue-500",
                  accentColor: "bg-blue-500"
                },
                {
                  icon: Building2,
                  number: "127M",
                  label: "населения",
                  subtitle: "Мегаполисы",
                  details: ["Токио (14M жителей)", "Осака (2.7M)", "Киото (1.5M)", "Нагоя (2.3M)"],
                  gradient: "from-purple-500/20 to-pink-500/20",
                  iconColor: "text-purple-500",
                  accentColor: "bg-purple-500"
                },
                {
                  icon: Mountain,
                  number: "70%",
                  label: "гор",
                  subtitle: "Горная местность",
                  details: ["Гора Фудзи 3,776м", "110+ активных вулканов", "Онсены (горячие источники)", "Горнолыжные курорты"],
                  gradient: "from-orange-500/20 to-red-500/20",
                  iconColor: "text-orange-500",
                  accentColor: "bg-orange-500"
                },
                {
                  icon: Leaf,
                  number: "4",
                  label: "сезона",
                  subtitle: "Климатические зоны",
                  details: ["Весна: цветение сакуры", "Лето: фестивали мацури", "Осень: момидзи (клёны)", "Зима: снежные пейзажи"],
                  gradient: "from-pink-500/20 to-rose-500/20",
                  iconColor: "text-pink-500",
                  accentColor: "bg-pink-500"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index}
                    className={`relative overflow-hidden hover-lift animate-fade-up border-2 hover:border-primary/50 transition-all duration-300 bg-card`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      
                      {/* Main Number */}
                      <div className="mb-2">
                        <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-1">
                          {item.number}
                        </div>
                        <div className="text-lg font-semibold text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`h-1 w-16 ${item.accentColor} rounded-full mb-4`} />

                      {/* Subtitle */}
                      <h3 className="text-sm font-bold mb-3 text-foreground uppercase tracking-wider">
                        {item.subtitle}
                      </h3>

                      {/* Details List */}
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className={`w-1 h-1 rounded-full ${item.accentColor} mt-1.5 flex-shrink-0`} />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info Banner */}
            <Card className="japanese-border bg-card animate-fade-up">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">377975 км²</div>
                    <div className="text-sm text-muted-foreground">Общая площадь</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">29751 км</div>
                    <div className="text-sm text-muted-foreground">Длина береговой линии</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">47</div>
                    <div className="text-sm text-muted-foreground">Префектур</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Elements Timeline */}
      <section className="py-20 bg-transparent relative overflow-hidden ambient-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
              Культурные традиции
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Элементы, которые формируют японскую идентичность
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Utensils,
                title: "Японская кухня",
                subtitle: "和食 Васёку",
                items: ["Суши и сашими", "Рамен", "Темпура", "Вагаси (сладости)"],
                badge: "ЮНЕСКО"
              },
              {
                icon: Train,
                title: "Транспорт",
                subtitle: "新幹線 Синкансэн",
                items: ["Скоростные поезда", "320 км/ч", "Пунктуальность", "Технологии"],
                badge: "Инновации"
              },
              {
                icon: Languages,
                title: "Система письменности",
                subtitle: "文字 Модзи",
                items: ["Хирагана (46 знаков)", "Катакана (46 знаков)", "Кандзи (2000+ знаков)", "Ромадзи"],
                badge: "Уникально"
              },
              {
                icon: Calendar,
                title: "Праздники",
                subtitle: "祝日 Сюкудзицу",
                items: ["Новый год (Сёгацу)", "Ханами (сакура)", "Обон", "Момидзи-гари"],
                badge: "Традиции"
              },
              {
                icon: Building2,
                title: "Архитектура",
                subtitle: "建築 Кэнтику",
                items: ["Традиционные храмы", "Современные небоскрёбы", "Сады", "Минимализм"],
                badge: "Гармония"
              },
              {
                icon: Heart,
                title: "Ценности",
                subtitle: "価値観 Качикан",
                items: ["Уважение (敬)", "Гармония (和)", "Чистота (清)", "Спокойствие (静)"],
                badge: "Философия"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="japanese-border hover-lift animate-fade-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.badge}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary mb-4 font-sans">{item.subtitle}</p>
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interesting Facts */}
      <section className="py-20 bg-transparent relative overflow-hidden ambient-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
              Интересные факты о Японии
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Удивительные особенности страны восходящего солнца
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                number: "6,852",
                label: "островов",
                description: "составляют Японский архипелаг, хотя большинство населения живёт на четырёх главных островах"
              },
              {
                number: "3,000+",
                label: "иероглифов",
                description: "используется в современном японском языке, включая кандзи, хирагану и катакану"
              },
              {
                number: "21",
                label: "объектов ЮНЕСКО",
                description: "включая святилища, храмы, замки и природные памятники находятся под охраной"
              },
              {
                number: "127 млн",
                label: "жителей",
                description: "проживает в Японии, одной из самых густонаселённых стран мира"
              }
            ].map((fact, index) => (
              <Card 
                key={index}
                className="text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {fact.number}
                  </div>
                  <div className="text-lg font-semibold mb-3 text-foreground">
                    {fact.label}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-20 relative overflow-hidden bg-transparent ambient-section">
        <div className="container mx-auto px-4 relative z-10">
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
              const colors = [
                'from-primary/10 to-accent/10',
                'from-accent/10 to-primary/10',
                'from-primary/10 to-primary/5',
                'from-accent/10 to-accent/5',
                'from-primary/5 to-accent/10',
                'from-accent/5 to-primary/10',
              ];
              return (
                <Card
                  key={index}
                  className={`hover-lift group animate-fade-up backdrop-blur-sm bg-gradient-to-br ${colors[index % colors.length]} border-2 hover:border-primary transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-16 h-16 mx-auto text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
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

      {/* Quick Links Section */}
      <section className="py-16 bg-transparent relative overflow-hidden ambient-section">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Исследуйте контент</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в мир Японии через наши статьи, видео и книги
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/articles" className="group h-full">
              <Card className="hover-lift transition-all border-2 hover:border-primary h-full">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Статьи</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Глубокие материалы о культуре и традициях
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2 justify-center">
                    Читать статьи <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/videos" className="group h-full">
              <Card className="hover-lift transition-all border-2 hover:border-primary h-full">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Видео</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Авторские влоги из Японии
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2 justify-center">
                    Смотреть видео <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/books" className="group h-full">
              <Card className="hover-lift transition-all border-2 hover:border-primary h-full">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <Book className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Книги</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Избранные издания о Японии
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2 justify-center">
                    Смотреть книги <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
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

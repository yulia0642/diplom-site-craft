import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, BookOpen, Video } from "lucide-react";
import momidjiImg from "@/assets/momiji-logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
              <img
                src={momidjiImg}
                alt="Момидзи"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
              <h2 className="text-3xl font-bold mb-6 text-center">Наша история</h2>
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
              },
              {
                icon: Video,
                title: "Видеоблоги",
                description: "Авторские видео от экспатов и путешественников со всей Японии",
              },
              {
                icon: Heart,
                title: "Личные маршруты",
                description: "Персонализированные гиды для вашего идеального путешествия",
              },
              {
                icon: Users,
                title: "Сообщество",
                description: "Активное комьюнити единомышленников и японофилов",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Аутентичность",
                  description: "Только проверенная информация от людей, живущих в Японии или регулярно там бывающих",
                },
                {
                  title: "Качество",
                  description: "Каждый материал проходит редактуру и проверку фактов перед публикацией",
                },
                {
                  title: "Доступность",
                  description: "Делаем японскую культуру понятной и близкой для русскоязычной аудитории",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
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

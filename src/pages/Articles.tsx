import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Video, Book, ArrowRight } from "lucide-react";
import teaCeremonyImg from "@/assets/tea-ceremony.jpg";
import tokyoFoodImg from "@/assets/tokyo-food.jpg";
import onsenImg from "@/assets/onsen-autumn.jpg";
import zenGardenImg from "@/assets/zen-garden.jpg";
import toriiGatesImg from "@/assets/article-torii-gates.jpg";
import fujiClimbImg from "@/assets/article-fuji-climb.jpg";
import kyotoGeishaImg from "@/assets/article-kyoto-geisha.jpg";
import buddhistPagodaImg from "@/assets/article-buddhist-pagoda.jpg";
import tokyoFutureImg from "@/assets/article-tokyo-future.jpg";
import zazenMeditationImg from "@/assets/article-zazen-meditation.jpg";

const articles = [
  {
    id: 1,
    title: "Искусство японской чайной церемонии",
    excerpt: "Всё о традиции чаною: история, философия и правила проведения церемонии, которая учит гармонии и осознанности",
    image: teaCeremonyImg,
    date: "15 марта 2025",
    readTime: "8 мин",
  },
  {
    id: 2,
    title: "Гастрономический гид по Токио",
    excerpt: "Где поесть в Токио: от уличных раменных и якиторий до ресторанов со звёздами Мишлен",
    image: tokyoFoodImg,
    date: "12 марта 2025",
    readTime: "12 мин",
  },
  {
    id: 3,
    title: "Онсены: культура японских горячих источников",
    excerpt: "Полный гид по онсенам: правила посещения, лучшие курорты в горах и на побережье",
    image: onsenImg,
    date: "8 марта 2025",
    readTime: "10 мин",
  },
  {
    id: 4,
    title: "Философия дзен-садов",
    excerpt: "Как устроены японские сады камней и почему они помогают достичь внутреннего спокойствия",
    image: zenGardenImg,
    date: "5 марта 2025",
    readTime: "7 мин",
  },
  {
    id: 5,
    title: "Синтоизм и тории: врата между мирами",
    excerpt: "Что означают красные ворота тории и какую роль они играют в синтоистской традиции",
    image: toriiGatesImg,
    date: "1 марта 2025",
    readTime: "9 мин",
  },
  {
    id: 6,
    title: "Покорение Фудзи: путеводитель для восходителей",
    excerpt: "Как подготовиться к восхождению на Фудзи: маршруты, снаряжение, лучшее время и советы по ночному подъёму",
    image: fujiClimbImg,
    date: "25 февраля 2025",
    readTime: "15 мин",
  },
  {
    id: 7,
    title: "Киото: город тысячи храмов",
    excerpt: "Прогулка по древней столице: главные храмы, тихие улочки Гиона и места, где время будто остановилось",
    image: kyotoGeishaImg,
    date: "20 февраля 2025",
    readTime: "11 мин",
  },
  {
    id: 8,
    title: "Буддийские храмы Японии",
    excerpt: "От величественных комплексов Нары до горных монастырей Коя-сан: архитектура, ритуалы и философия",
    image: buddhistPagodaImg,
    date: "15 февраля 2025",
    readTime: "13 мин",
  },
  {
    id: 9,
    title: "Токио будущего: технологии и традиции",
    excerpt: "Как крупнейший мегаполис мира соединяет высокие технологии с вековыми обычаями",
    image: tokyoFutureImg,
    date: "10 февраля 2025",
    readTime: "10 мин",
  },
  {
    id: 10,
    title: "Дзадзэн: искусство сидячей медитации",
    excerpt: "Основы дзен-медитации: как практикуют монахи и с чего начать новичку",
    image: zazenMeditationImg,
    date: "5 февраля 2025",
    readTime: "8 мин",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in japanese-border">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Статьи о Японии
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Глубокие погружения в культуру, традиции и современную жизнь Японии
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => {
              const accentColors = ["blue-500", "purple-500", "orange-500", "pink-500"];
              const accentColor = accentColors[index % accentColors.length];
              return (
                <article
                  key={article.id}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/articles/${article.id}`} className="block">
                    <div className="relative overflow-hidden rounded-lg mb-4 japanese-border">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-${accentColor} shadow-lg shadow-${accentColor}/50`} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className={`px-2 py-1 rounded-full bg-${accentColor}/10 text-${accentColor} text-xs font-semibold`}>
                          {article.date}
                        </span>
                        <span>{article.readTime} чтения</span>
                      </div>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Related Content Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-transparent rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Продолжите изучение</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/videos" className="group">
                  <div className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                    <Video className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Видеоблоги</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Смотрите видео о жизни в Японии
                    </p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
                      Смотреть <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
                <Link to="/books" className="group">
                  <div className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                    <Book className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Книги</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Углубитесь в японскую культуру
                    </p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
                      Посмотреть <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;

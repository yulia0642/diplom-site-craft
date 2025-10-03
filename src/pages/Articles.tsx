import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import teaCeremonyImg from "@/assets/tea-ceremony.jpg";
import tokyoFoodImg from "@/assets/tokyo-food.jpg";
import onsenImg from "@/assets/onsen-autumn.jpg";
import zenGardenImg from "@/assets/zen-garden.jpg";

const articles = [
  {
    id: 1,
    title: "Искусство японской чайной церемонии",
    excerpt: "Погрузитесь в многовековую традицию чаною — японской чайной церемонии, которая учит присутствию, гармонии и уважению.",
    image: teaCeremonyImg,
    date: "15 марта 2025",
    readTime: "8 мин",
  },
  {
    id: 2,
    title: "Гастрономический гид по Токио",
    excerpt: "От уличной еды до звёздных ресторанов Мишлен — открывайте кулинарное разнообразие японской столицы.",
    image: tokyoFoodImg,
    date: "12 марта 2025",
    readTime: "12 мин",
  },
  {
    id: 3,
    title: "Онсэны: культура японских горячих источников",
    excerpt: "Всё, что нужно знать об онсэнах — от этикета до лучших мест для релаксации в горах и на побережье.",
    image: onsenImg,
    date: "8 марта 2025",
    readTime: "10 мин",
  },
  {
    id: 4,
    title: "Философия дзен-садов",
    excerpt: "Как японские сады камней помогают обрести внутреннее спокойствие и понять суть минимализма.",
    image: zenGardenImg,
    date: "5 марта 2025",
    readTime: "7 мин",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Статьи о Японии
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Глубокие погружения в культуру, традиции и современную жизнь Японии
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/articles/${article.id}`} className="block">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime} чтения</span>
                    </div>
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;

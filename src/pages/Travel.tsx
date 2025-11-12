import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Routes from "@/components/Routes";
import TourOperators from "@/components/TourOperators";
import { Link } from "react-router-dom";
import { FileText, Video, Book, ArrowRight } from "lucide-react";

const Travel = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground drop-shadow-lg">
              Путешествия по Японии
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Откройте для себя готовые маршруты или создайте свой идеальный тур с учётом ваших интересов и бюджета
            </p>
          </div>
        </section>

        <Routes />
        <TourOperators />

        {/* Inspiration Section */}
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-transparent rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Вдохновитесь перед поездкой</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/articles" className="group">
                    <div className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                      <FileText className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Статьи</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        О культуре и традициях
                      </p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
                        Читать <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                  <Link to="/videos" className="group">
                    <div className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                      <Video className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Видео</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Влоги из Японии
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
                        Гиды и путеводители
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Travel;

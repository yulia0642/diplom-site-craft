import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Routes from "@/components/Routes";
import TourOperators from "@/components/TourOperators";
import { lazy, Suspense } from "react";
const JapanMapLazy = lazy(() => import("@/components/JapanMap"));
import PopularDestinations from "@/components/PopularDestinations";
import { Link } from "react-router-dom";
import { FileText, Video, Book, ArrowRight, MapPin } from "lucide-react";

const Travel = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden ambient-section">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Интерактивный путеводитель</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground">
              Путешествия по Японии
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Откройте для себя готовые маршруты или создайте свой идеальный тур с учётом ваших интересов и бюджета
            </p>
          </div>
        </section>

        <PopularDestinations />

        {/* Interactive Map Section */}
        <section className="py-16 ambient-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Интерактивная карта Японии
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Изучите ключевые направления и начните планировать своё путешествие
              </p>
            </div>
            <Suspense fallback={<div className="w-full h-[600px] rounded-lg border border-border" />}> 
              <JapanMapLazy />
            </Suspense>
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

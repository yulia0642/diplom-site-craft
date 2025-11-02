import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Routes from "@/components/Routes";
import TourOperators from "@/components/TourOperators";

const Travel = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden wave-pattern">
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
      </main>
      <Footer />
    </div>
  );
};

export default Travel;

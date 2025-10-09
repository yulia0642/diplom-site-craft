import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import booksImg from "@/assets/books-japan.jpg";

const books = [
  {
    id: 1,
    title: "Япония: путь гармонии",
    author: "Анна Соколова",
    description: "Комплексный гид по японской культуре, философии и традициям. От чайной церемонии до современного искусства.",
    price: "1 890 ₽",
    pages: "384 стр.",
    year: "2024",
  },
  {
    id: 2,
    title: "Токио: город контрастов",
    author: "Дмитрий Морозов",
    description: "Авторский путеводитель по Токио с эксклюзивными маршрутами и секретными местами от местных жителей.",
    price: "1 590 ₽",
    pages: "256 стр.",
    year: "2024",
  },
  {
    id: 3,
    title: "Кулинарная Япония",
    author: "Екатерина Ямамото",
    description: "150 аутентичных рецептов японской кухни с пошаговыми инструкциями и историей каждого блюда.",
    price: "2 190 ₽",
    pages: "320 стр.",
    year: "2023",
  },
  {
    id: 4,
    title: "Святыни и храмы Киото",
    author: "Сергей Танака",
    description: "Духовное путешествие по священным местам древней столицы с фотографиями и медитативными практиками.",
    price: "2 490 ₽",
    pages: "288 стр.",
    year: "2024",
  },
  {
    id: 5,
    title: "Японский язык через культуру",
    author: "Мария Кимура",
    description: "Изучение японского языка через призму культурных особенностей, идиом и повседневных выражений.",
    price: "1 790 ₽",
    pages: "416 стр.",
    year: "2023",
  },
  {
    id: 6,
    title: "Моминдзи-гари: охота за красными листьями",
    author: "Юлия Орлова",
    description: "Сезонный гид по лучшим местам для наблюдения за осенними красками Японии с практическими советами.",
    price: "1 690 ₽",
    pages: "224 стр.",
    year: "2024",
  },
];

const Books = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 wave-pattern">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in japanese-border">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Книги о Японии
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Тщательно отобранная коллекция книг от русскоязычных авторов, знающих Японию изнутри. 
                Каждая книга — это результат многолетнего опыта жизни и путешествий по Стране восходящего солнца.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div>📚 Авторские издания</div>
                <div>🇷🇺 На русском языке</div>
                <div>📦 Доставка по всей России</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={booksImg}
                alt="Книги о Японии"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {books.map((book, index) => (
              <div
                key={book.id}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in japanese-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Автор: {book.author}
                    </p>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>{book.pages}</span>
                      <span>•</span>
                      <span>{book.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {book.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {book.price}
                      </span>
                      <Button className="gap-2">
                        Купить
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in">
            <div className="bg-accent/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Поддержите авторов</h2>
              <p className="text-muted-foreground">
                Покупая эти книги, вы поддерживаете независимых авторов и помогаете создавать 
                качественный контент о Японии на русском языке. Часть средств идёт на развитие 
                платформы Момидзи.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Books;

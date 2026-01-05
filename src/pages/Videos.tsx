import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar, FileText, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import tokyoVlogImg from "@/assets/vlog-tokyo-24h.jpg";
import kyotoSecretImg from "@/assets/vlog-kyoto-secret.jpg";
import shrineEtiquetteImg from "@/assets/vlog-shrine-etiquette.jpg";
import zenMeditationImg from "@/assets/vlog-zen-meditation.jpg";
import streetFoodImg from "@/assets/vlog-street-food.jpg";
import ruralLifeImg from "@/assets/vlog-rural-life.jpg";
import japan30daysImg from "@/assets/vlog-japan-30days.jpg";

const videos = [
  {
    id: 1,
    title: "24 часа в Токио: от рассвета до заката",
    creator: "Александр Токио",
    thumbnail: tokyoVlogImg,
    duration: "18:45",
    views: "125K",
    date: "2 дня назад",
    description: "Проживите со мной один день в столице Японии — от рыбного рынка Цукидзи до ночных огней Сибуи",
  },
  {
    id: 2,
    title: "Секретные улочки Киото: что не покажут в туристических гидах",
    creator: "Анна в Японии",
    thumbnail: kyotoSecretImg,
    duration: "15:30",
    views: "89K",
    date: "5 дней назад",
    description: "Исследуем скрытые гейши районы, тихие храмы и аутентичные кафе вдали от туристических троп",
  },
  {
    id: 3,
    title: "Как правильно посещать японские храмы и святыни",
    creator: "Дмитрий Сакура",
    thumbnail: shrineEtiquetteImg,
    duration: "12:20",
    views: "156K",
    date: "1 неделю назад",
    description: "Полный гид по этикету в храмах: от правильного поклона до ритуала очищения",
  },
  {
    id: 4,
    title: "Медитация в дзен-саду: практика осознанности",
    creator: "Елена Путь Дзен",
    thumbnail: zenMeditationImg,
    duration: "25:10",
    views: "203K",
    date: "2 недели назад",
    description: "Погружение в философию дзен через практику созерцания в традиционном японском саду камней",
  },
  {
    id: 5,
    title: "Японская уличная еда: от такояки до рамена",
    creator: "Foodie в Осаке",
    thumbnail: streetFoodImg,
    duration: "20:15",
    views: "312K",
    date: "3 недели назад",
    description: "Гастрономическое путешествие по лучшим уличным лоткам и ресторанам Осаки",
  },
  {
    id: 6,
    title: "Моя жизнь в японской деревне",
    creator: "Мария Инака",
    thumbnail: ruralLifeImg,
    duration: "16:40",
    views: "178K",
    date: "1 месяц назад",
    description: "Будни в сельской Японии: работа на рисовых полях, местные фестивали и традиционный быт",
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in japanese-border">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Видеоблоги о Японии
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Смотрите авторские видеоблоги от русскоязычных путешественников<br className="hidden md:block" />
              и экспатов, живущих в Японии — реальные истории, советы и уникальные ракурсы
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Новые каждую неделю</span>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift japanese-border">
              <img
                src={japan30daysImg}
                alt="Рекомендуемое видео"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <span className="text-sm bg-primary px-3 py-1 rounded-full">
                  Рекомендуем
                </span>
                <h3 className="text-2xl font-bold mt-2">
                  Япония за 30 дней: полное путешествие
                </h3>
                <p className="text-sm mt-2 opacity-90">
                  Эпический видеогид по всем регионам Японии от Хоккайдо до Окинавы
                </p>
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {videos.map((video, index) => {
              const badgeColors = [
                { bg: "bg-blue-500", text: "text-white", ring: "ring-blue-500/30" },
                { bg: "bg-purple-500", text: "text-white", ring: "ring-purple-500/30" },
                { bg: "bg-orange-500", text: "text-white", ring: "ring-orange-500/30" },
                { bg: "bg-pink-500", text: "text-white", ring: "ring-pink-500/30" }
              ];
              const badge = badgeColors[index % badgeColors.length];
              return (
                <div
                  key={video.id}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-3 ring-2 ring-transparent hover:ring-primary/20 transition-all">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-primary/0 group-hover:bg-primary/90 rounded-full flex items-center justify-center transition-all">
                        <Play size={24} className="text-white opacity-0 group-hover:opacity-100 ml-1" fill="white" />
                      </div>
                    </div>
                    <div className={`absolute top-2 left-2 ${badge.bg} ${badge.text} px-3 py-1 rounded-full text-xs font-semibold ring-2 ${badge.ring}`}>
                      Новое
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                      <Clock size={12} />
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{video.creator}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{video.views} просмотров</span>
                      <span>•</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in">
            <div className="bg-transparent rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Станьте частью сообщества</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Подписывайтесь на канал Момидзи, чтобы не пропустить новые видео,<br className="hidden md:block" />
                эксклюзивный контент и прямые трансляции из Японии
              </p>
              <Button size="lg" className="gap-2">
                <Play size={20} />
                Подписаться на канал
              </Button>
            </div>
          </div>

          {/* Related Content Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Больше контента</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/articles" className="group">
                <div className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                  <FileText className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Статьи</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Углубленные материалы о Японии
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
                    Читать <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
              <Link to="/books" className="group">
                <div className="p-6 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                  <BookOpen className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Книги</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Лучшие издания о японской культуре
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2">
                    Посмотреть <ArrowRight className="w-4 h-4" />
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

export default Videos;

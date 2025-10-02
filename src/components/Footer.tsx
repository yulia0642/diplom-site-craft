import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">日本ガイド</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ваш персональный гид по Японии. Персонализированные маршруты и культурные гиды.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Маршруты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Классический маршрут</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Духовная Япония</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Природа и релакс</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Создать свой</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контент</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Культурные гиды</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Подкасты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Языковые уроки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@japanguide.ru" className="hover:text-primary transition-colors">
                  info@japanguide.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Путеводитель по Японии. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

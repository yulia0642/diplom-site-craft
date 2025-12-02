import { useState, useEffect, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Play, BookOpen, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";

// Searchable content data
const searchableContent = [
  // Articles
  {
    id: "article-1",
    type: "article" as const,
    title: "Философия дзен в повседневной жизни",
    description: "Как применять принципы дзен-буддизма в современном мире",
    url: "/articles/1",
    tags: ["культура", "дзен", "философия"],
  },
  {
    id: "article-2",
    type: "article" as const,
    title: "Искусство чайной церемонии",
    description: "История и традиции японского чаепития",
    url: "/articles/2",
    tags: ["культура", "традиции", "чай"],
  },
  {
    id: "article-3",
    type: "article" as const,
    title: "Сакура: символ эфемерности",
    description: "Значение цветущей вишни в японской культуре",
    url: "/articles/3",
    tags: ["культура", "сакура", "природа"],
  },
  // Videos
  {
    id: "video-1",
    type: "video" as const,
    title: "24 часа в Токио: от рассвета до заката",
    description: "Проживите один день в столице Японии",
    url: "/videos",
    tags: ["токио", "влог", "путешествие"],
  },
  {
    id: "video-2",
    type: "video" as const,
    title: "Секретные улочки Киото",
    description: "Скрытые места вдали от туристических троп",
    url: "/videos",
    tags: ["киото", "влог", "секреты"],
  },
  {
    id: "video-3",
    type: "video" as const,
    title: "Японская уличная еда",
    description: "Гастрономическое путешествие по Осаке",
    url: "/videos",
    tags: ["еда", "осака", "кулинария"],
  },
  // Books
  {
    id: "book-1",
    type: "book" as const,
    title: "Хагакурэ. Книга самурая",
    description: "Классический трактат о пути воина",
    url: "/books",
    tags: ["самураи", "бусидо", "история"],
  },
  {
    id: "book-2",
    type: "book" as const,
    title: "Японская мифология",
    description: "Энциклопедия богов и духов Японии",
    url: "/books",
    tags: ["мифология", "боги", "фольклор"],
  },
  // Routes
  {
    id: "route-1",
    type: "route" as const,
    title: "Золотой маршрут",
    description: "Токио — Киото — Осака за 10 дней",
    url: "/travel",
    tags: ["маршрут", "токио", "киото", "осака"],
  },
  {
    id: "route-2",
    type: "route" as const,
    title: "Путь самурая",
    description: "По следам воинов феодальной Японии",
    url: "/travel",
    tags: ["маршрут", "самураи", "история"],
  },
  {
    id: "route-3",
    type: "route" as const,
    title: "Онсен-тур",
    description: "Лучшие горячие источники Японии",
    url: "/travel",
    tags: ["маршрут", "онсен", "релакс"],
  },
  // Pages
  {
    id: "page-about",
    type: "page" as const,
    title: "О платформе Момидзи",
    description: "Узнайте больше о нашей миссии и команде",
    url: "/about",
    tags: ["о нас", "момидзи"],
  },
  {
    id: "page-travel",
    type: "page" as const,
    title: "Путешествия по Японии",
    description: "Планируйте идеальную поездку",
    url: "/travel",
    tags: ["путешествия", "планирование"],
  },
];

const typeIcons = {
  article: FileText,
  video: Play,
  book: BookOpen,
  route: MapPin,
  page: Search,
};

const typeLabels = {
  article: "Статья",
  video: "Видео",
  book: "Книга",
  route: "Маршрут",
  page: "Страница",
};

interface SearchDialogProps {
  trigger?: React.ReactNode;
}

const SearchDialog = ({ trigger }: SearchDialogProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase().trim();
    
    return searchableContent.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm);
      const descMatch = item.description.toLowerCase().includes(searchTerm);
      const tagsMatch = item.tags.some((tag) => tag.toLowerCase().includes(searchTerm));
      return titleMatch || descMatch || tagsMatch;
    });
  }, [query]);

  const handleSelect = () => {
    setOpen(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border hover:border-primary/50 bg-background/50">
            <Search size={16} />
            <span className="hidden sm:inline">Поиск</span>
            <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4 pb-2">
          <DialogTitle className="sr-only">Поиск по сайту</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск статей, видео, книг, маршрутов..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-base border-0 border-b rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </DialogHeader>

        <div className="max-h-[400px] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-muted-foreground">
              <Search className="mx-auto h-8 w-8 mb-2 opacity-50" />
              <p className="text-sm">Введите запрос для поиска</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              <p className="text-sm">Ничего не найдено по запросу «{query}»</p>
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item) => {
                const Icon = typeIcons[item.type];
                return (
                  <Link
                    key={item.id}
                    to={item.url}
                    onClick={handleSelect}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {item.title}
                        </span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded flex-shrink-0">
                          {typeLabels[item.type]}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t px-4 py-2 text-xs text-muted-foreground flex items-center justify-between bg-muted/30">
          <span>{results.length > 0 ? `Найдено: ${results.length}` : "Поиск по Момидзи"}</span>
          <span className="hidden sm:inline">
            <kbd className="px-1.5 py-0.5 bg-background rounded border text-[10px]">Enter</kbd>
            {" "}для перехода
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

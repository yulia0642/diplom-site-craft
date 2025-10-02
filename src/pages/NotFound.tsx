import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold">Страница не найдена</h2>
        <p className="text-xl text-muted-foreground max-w-md">
          К сожалению, запрашиваемая страница не существует. Возможно, она была перемещена или удалена.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="/">
            <Home className="mr-2 w-5 h-5" />
            Вернуться на главную
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

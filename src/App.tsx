import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Books from "./pages/Books";
import Videos from "./pages/Videos";
import Travel from "./pages/Travel";
import About from "./pages/About";
import CreateRoute from "./pages/CreateRoute";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { initTypographyObserver } from "@/lib/typography";

const queryClient = new QueryClient();

const TypographyManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      const observer = initTypographyObserver(root);
      return () => observer?.disconnect();
    }
  }, [location.pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <TypographyManager />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/books" element={<Books />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/about" element={<About />} />
              <Route path="/create-route" element={<CreateRoute />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

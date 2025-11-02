import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Users, Coins, MapPin, Heart, Mountain, Camera, Utensils, ShoppingBag, Leaf, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreateRoute = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [duration, setDuration] = useState(7);
  const [budget, setBudget] = useState(200);
  const [travelers, setTravelers] = useState("1");
  
  const interests = [
    { id: "culture", label: "Культура и история", icon: Leaf },
    { id: "nature", label: "Природа и горы", icon: Mountain },
    { id: "food", label: "Гастрономия", icon: Utensils },
    { id: "shopping", label: "Шопинг", icon: ShoppingBag },
    { id: "photo", label: "Фотография", icon: Camera },
    { id: "spiritual", label: "Духовные практики", icon: Heart },
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestToggle = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedInterests.length === 0) {
      toast({
        title: "Выберите интересы",
        description: "Пожалуйста, выберите хотя бы один интерес для создания маршрута",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Маршрут создается!",
      description: "Мы формируем персональный маршрут на основе ваших предпочтений",
    });

    // TODO: Implement route generation logic
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 wave-pattern">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up japanese-border p-8 bg-card/50 backdrop-blur-sm rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Создайте свой идеальный маршрут
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ответьте на несколько вопросов, и мы составим персональный план путешествия,
              идеально подходящий под ваши интересы и бюджет
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* Duration */}
            <Card className="japanese-border animate-fade-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Продолжительность поездки
                </CardTitle>
                <CardDescription>Сколько дней вы планируете провести в Японии?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{duration} дней</span>
                  <span className="text-sm text-muted-foreground">от 3 до 30 дней</span>
                </div>
                <Slider
                  defaultValue={[duration]}
                  onValueChange={(value) => setDuration(value[0])}
                  min={3}
                  max={30}
                  step={1}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Budget */}
            <Card className="japanese-border animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-primary" />
                  Бюджет на человека
                </CardTitle>
                <CardDescription>Укажите примерный бюджет на весь период поездки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{budget} тыс. ₽</span>
                  <span className="text-sm text-muted-foreground">от 50 до 500 тыс. ₽</span>
                </div>
                <Slider
                  defaultValue={[budget]}
                  onValueChange={(value) => setBudget(value[0])}
                  min={50}
                  max={500}
                  step={10}
                  className="w-full"
                />
              </CardContent>
            </Card>

            {/* Travelers */}
            <Card className="japanese-border animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Количество путешественников
                </CardTitle>
                <CardDescription>Сколько человек поедет в путешествие?</CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="text-lg"
                />
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="japanese-border animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Ваши интересы
                </CardTitle>
                <CardDescription>Выберите то, что вас интересует больше всего (можно выбрать несколько)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interests.map((interest) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={interest.id}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary/50 ${
                          selectedInterests.includes(interest.id)
                            ? "border-primary bg-primary/5"
                            : "border-border"
                        }`}
                        onClick={() => handleInterestToggle(interest.id)}
                      >
                        <Checkbox
                          id={interest.id}
                          checked={selectedInterests.includes(interest.id)}
                        />
                        <Icon className={`w-5 h-5 ${selectedInterests.includes(interest.id) ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="flex-1 font-medium">
                          {interest.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Starting Point */}
            <Card className="japanese-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Начальная точка маршрута
                </CardTitle>
                <CardDescription>Из какого города вы начнете путешествие?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Токио", "Осака", "Киото"].map((city) => (
                    <Card
                      key={city}
                      className="cursor-pointer hover:border-primary transition-all hover-lift"
                    >
                      <CardContent className="p-4 text-center">
                        <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="font-medium">{city}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center pt-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button type="submit" size="lg" className="px-12 py-6 text-lg shadow-accent-glow">
                Создать маршрут
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateRoute;

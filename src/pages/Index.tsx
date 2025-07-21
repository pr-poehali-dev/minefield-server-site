import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      title: "Выживание",
      description: "Классический режим выживания с уникальными механиками",
      icon: "Sword"
    },
    {
      title: "PvP Арены",
      description: "Сражайся с другими игроками в специальных зонах",
      icon: "Zap"
    },
    {
      title: "Кланы",
      description: "Создавай альянсы и защищай территории вместе",
      icon: "Shield"
    },
    {
      title: "Экономика",
      description: "Торгуй ресурсами и развивай свой бизнес",
      icon: "Coins"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary glow">MINEFIELD</div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Особенности
              </a>
              <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
                Скачать
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-lg">
              🎮 Gaming Server
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              MINEFIELD
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Присоединяйся к эпическим приключениям на нашем Minecraft сервере.<br/>
              Выживание, PvP, кланы и уникальная экономика ждут тебя!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg neon-glow">
                <Icon name="Download" className="mr-2" />
                Скачать лаунчер
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                <Icon name="Play" className="mr-2" />
                IP: play.minefield.ru
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1200+</div>
                <div className="text-sm text-muted-foreground">Игроков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Онлайн</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Особенности сервера</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальные механики и возможности, которые сделают твою игру незабываемой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon as any} className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Готов к приключениям?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Скачай наш специальный лаунчер для быстрого подключения к серверу
            </p>
            
            <Card className="bg-card/80 backdrop-blur-sm border-primary/30 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-primary">
                  <Icon name="Download" className="mr-2" />
                  Minefield Launcher
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Версия 2.1.4 • Windows/Mac/Linux
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
                  <Icon name="Download" className="mr-2" />
                  Скачать лаунчер
                </Button>
                <div className="text-xs text-muted-foreground">
                  Или подключайся напрямую: <code className="bg-muted px-2 py-1 rounded">play.minefield.ru</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Поддержка</h2>
            <p className="text-xl text-muted-foreground">
              Нужна помощь? Мы всегда готовы ответить на твои вопросы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle>Discord</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Присоединяйся к нашему сообществу</p>
                <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10">
                  <Icon name="ExternalLink" className="mr-2 w-4 h-4" />
                  discord.gg/minefield
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500/10 rounded-full flex items-center justify-center">
                  <Icon name="Youtube" className="w-8 h-8 text-red-400" />
                </div>
                <CardTitle>YouTube</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Смотри видео о сервере</p>
                <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-400/10">
                  <Icon name="ExternalLink" className="mr-2 w-4 h-4" />
                  youtube.com/minefield
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Напиши нам напрямую</p>
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                  <Icon name="ExternalLink" className="mr-2 w-4 h-4" />
                  support@minefield.ru
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4 glow">MINEFIELD</div>
            <p className="text-muted-foreground mb-8">Лучший Minecraft сервер в рунете</p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>© 2024 Minefield Server</span>
              <span>Все права защищены</span>
              <span>Версия Minecraft 1.20.x</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
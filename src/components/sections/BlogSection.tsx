import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 via-white to-primary/5 shadow-2xl overflow-hidden">
            <CardContent className="p-10 sm:p-16 text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-6 py-3 bg-primary/20 rounded-full border-2 border-primary">
                  <p className="text-primary font-black text-sm tracking-wide">📚 ПОЛЕЗНЫЙ КОНТЕНТ</p>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">
                  Посети мой блог
                </h2>
                
                <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
                  Практические статьи о продажах, сервисе и управлении в HoReCa. Только рабочие техники без воды.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
                  <Icon name="TrendingUp" className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-sm font-bold text-foreground">Продажи</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
                  <Icon name="Users" className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-sm font-bold text-foreground">Персонал</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
                  <Icon name="Star" className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-sm font-bold text-foreground">Сервис</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-2 border-primary/20 hover:border-primary transition-all hover:scale-105">
                  <Icon name="Lightbulb" className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-sm font-bold text-foreground">Кейсы</p>
                </div>
              </div>

              <Link to="/blog">
                <Button 
                  size="lg"
                  className="text-lg px-12 py-6 shadow-xl hover:scale-105 transition-transform font-bold"
                >
                  <Icon name="BookOpen" className="mr-2" size={24} />
                  Читать блог
                </Button>
              </Link>

              <p className="text-sm text-muted-foreground">
                ✨ Новые статьи каждую неделю
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

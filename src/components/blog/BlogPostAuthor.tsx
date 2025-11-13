import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BlogPostAuthor = () => {
  return (
    <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-muted">
            <img 
              src="https://cdn.poehali.dev/files/ec636e5f-8860-4ed3-a14e-094d8acd3c94.png"
              alt="Марина"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="text-2xl font-black text-foreground">Марина</h3>
              <p className="text-foreground/70">Эксперт по продажам и сервису в HoReCa</p>
            </div>
            <p className="text-foreground/90">
              10+ лет в индустрии гостеприимства. Помогаю владельцам и управляющим выстроить систему продаж и культуры сервиса.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://instagram.com/marico.su" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" size={16} className="mr-2" />
                  Instagram
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://t.me/malinochka_marina" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostAuthor;
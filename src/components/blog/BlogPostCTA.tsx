import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BlogPostCTA = () => {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40">
      <CardContent className="p-8 md:p-12 text-center space-y-6">
        <div className="inline-block p-4 bg-primary/20 rounded-full">
          <Icon name="Rocket" size={40} className="text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-foreground">
          Готовы применить на практике?
        </h3>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Обсудим вашу ситуацию и составим план действий. Первая консультация — бесплатно.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="font-semibold" asChild>
            <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" className="mr-2" size={20} />
              Написать в Telegram
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-semibold border-2" asChild>
            <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCTA;

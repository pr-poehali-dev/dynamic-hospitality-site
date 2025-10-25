import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { blogPosts as blogPostsData } from '@/data/blogPosts';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    document.title = 'Блог MARICO PRO — Секреты продаж и сервиса в HoReCa | Статьи и кейсы';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Полезные статьи о продажах, сервисе и управлении в ресторанном бизнесе. Реальные кейсы, лайфхаки и советы от эксперта HoReCa.');
    }
  }, []);

  // Convert blogPosts object to array and extract only needed fields for list view
  const blogPosts = Object.values(blogPostsData).map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.content.substring(0, 150) + '...',
    date: post.date,
    category: post.category,
    image: post.image,
    readTime: post.readTime
  }));

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-foreground">MARICO PRO</Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link>
              <Link to="/blog" className="text-sm font-medium text-primary">Блог</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-black text-foreground">
              Блог о продажах и сервисе в <span className="text-primary">HoReCa</span>
            </h1>
            <p className="text-xl text-foreground/80">
              Делюсь опытом, кейсами и инструментами для роста вашего бизнеса
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск по статьям..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pr-12 text-lg"
                />
                <Icon name="Search" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <Icon name="SearchX" className="mx-auto text-muted-foreground mb-4" size={48} />
                <p className="text-xl text-foreground/60">Статьи не найдены</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-foreground/70 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                          <Button variant="ghost" size="sm" className="group-hover:text-primary">
                            Читать
                            <Icon name="ArrowRight" className="ml-2" size={16} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/40 bg-gradient-to-br from-background to-card">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Bell" className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-foreground">
                    Подписывайтесь на обновления
                  </h2>
                  <p className="text-foreground/80 text-lg">
                    Получайте новые статьи, кейсы и инсайты о продажах в HoReCa
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="font-semibold" asChild>
                    <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" className="mr-2" size={20} />
                      Telegram канал
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="font-semibold border-2" asChild>
                    <a href="https://www.instagram.com/marico_pro?igsh=eXljY2RqbHJtdjM4&utm_source=qr" target="_blank" rel="noopener noreferrer">
                      <Icon name="Instagram" className="mr-2" size={20} />
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-black">MARICO PRO</h3>
            <p className="text-white/80">Продажи и сервис — одна система.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://www.instagram.com/marico_pro?igsh=eXljY2RqbHJtdjM4&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://vk.com/marico_pro" target="_blank" rel="noopener noreferrer">
                  <Icon name="Mail" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://www.tiktok.com/@maricoprosales?_t=ZM-8vCslvRbJoU&_r=1" target="_blank" rel="noopener noreferrer">
                  <Icon name="Music" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://www.threads.com/@marico_pro" target="_blank" rel="noopener noreferrer">
                  <Icon name="AtSign" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://pin.it/1IbXJIzRp" target="_blank" rel="noopener noreferrer">
                  <Icon name="Pin" size={24} />
                </a>
              </Button>
            </div>
            <div className="pt-6 border-t border-white/20 text-white/60 text-sm">
              <p>© 2024 MARICO PRO. Все права защищены.</p>
            </div>
            <button
              onClick={scrollToTop}
              className="mx-auto mt-4 p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors"
              aria-label="Наверх"
            >
              <Icon name="ArrowUp" size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
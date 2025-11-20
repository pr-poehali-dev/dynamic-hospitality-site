import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { blogPosts as blogPostsData } from '@/data/blogPosts';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const currentUrl = `${window.location.origin}/blog`;
  const blogDescription = 'Полезные статьи о продажах, сервисе и управлении в ресторанном бизнесе. Реальные кейсы, лайфхаки и советы от эксперта HoReCa Марины MARICO PRO.';
  
  useEffect(() => {
    document.title = 'Блог MARICO PRO — Секреты продаж и сервиса в HoReCa | Статьи и кейсы';
    window.scrollTo(0, 0);
  }, []);

  // Convert blogPosts object to array and extract only needed fields for list view
  const blogPosts = Object.values(blogPostsData).map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || post.content.substring(0, 150) + '...',
    date: post.date,
    category: post.category,
    image: post.image,
    readTime: post.readTime,
    views: post.views || 0,
    featured: post.featured || false
  }));

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const topPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('=== BLOG DEBUG ===');
  console.log('Total posts from data:', Object.keys(blogPostsData).length);
  console.log('Processed posts:', blogPosts.length);
  console.log('Search query:', searchQuery);
  console.log('Filtered posts:', filteredPosts.length);
  console.log('Posts:', filteredPosts);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Блог MARICO PRO — Секреты продаж и сервиса в HoReCa | Статьи и кейсы</title>
        <meta name="description" content={blogDescription} />
        <meta name="keywords" content="блог horeca, продажи в ресторане, сервис ресторан, управление рестораном, обучение персонала, кейсы ресторанов, советы эксперта horeca" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph теги */}
        <meta property="og:title" content="Блог MARICO PRO — Секреты продаж и сервиса в HoReCa" />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" />
        <meta property="og:site_name" content="MARICO PRO" />
        
        {/* Twitter Card теги */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Блог MARICO PRO — Секреты продаж и сервиса в HoReCa" />
        <meta name="twitter:description" content={blogDescription} />
        <meta name="twitter:image" content="https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg" />
        
        {/* Schema.org разметка для Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Блог MARICO PRO',
            description: blogDescription,
            url: currentUrl,
            author: {
              '@type': 'Person',
              name: 'Марина',
              jobTitle: 'Эксперт по продажам и сервису в HoReCa'
            },
            publisher: {
              '@type': 'Organization',
              name: 'MARICO PRO',
              url: 'https://marico.su',
              logo: {
                '@type': 'ImageObject',
                url: 'https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg'
              }
            },
            blogPost: Object.values(blogPostsData).map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              url: `${window.location.origin}/blog/${post.id}`,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author
              },
              image: post.image,
              articleSection: post.category
            }))
          })}
        </script>
        
        {/* Schema.org разметка для BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: window.location.origin
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Блог',
                item: currentUrl
              }
            ]
          })}
        </script>
      </Helmet>
      
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

      {searchQuery === '' && featuredPosts.length > 0 && (
        <section className="py-8 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <Icon name="Star" className="text-primary" size={32} />
                <h2 className="text-3xl font-black text-foreground">Топ статей</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer group h-full border-2 border-primary/50">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Icon name="Flame" size={14} />
                          Топ
                        </div>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-foreground/70 text-sm line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Icon name="Eye" size={16} />
                              <span className="font-medium">{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={16} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium text-xs">
                            {post.category}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,320px] gap-12">
              <div>
                {searchQuery !== '' && filteredPosts.length === 0 ? (
                  <div className="text-center py-16">
                    <Icon name="SearchX" className="mx-auto text-muted-foreground mb-4" size={48} />
                    <p className="text-xl text-foreground/60">Статьи не найдены</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-black text-foreground">
                        {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'Все статьи'}
                      </h2>
                      <span className="text-sm text-muted-foreground">
                        {searchQuery ? filteredPosts.length : regularPosts.length} {searchQuery ? 'найдено' : 'статей'}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {(searchQuery ? filteredPosts : regularPosts).map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.id}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group h-full">
                      <div className="aspect-video overflow-hidden relative">
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Icon name="Eye" size={12} />
                          {post.views.toLocaleString()}
                        </div>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-foreground/70 text-sm line-clamp-2">
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
                  </div>
                )}
              </div>

              {searchQuery === '' && (
                <aside className="space-y-8">
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" className="text-primary" size={24} />
                        <h3 className="font-black text-lg text-foreground">Самые популярные</h3>
                      </div>
                      <div className="space-y-4">
                        {topPosts.map((post, index) => (
                          <Link key={post.id} to={`/blog/${post.id}`}>
                            <div className="flex gap-4 group cursor-pointer">
                              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-black text-xl">
                                {index + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                  {post.title}
                                </h4>
                                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Icon name="Eye" size={12} />
                                    <span className="font-medium">{post.views.toLocaleString()}</span>
                                  </div>
                                  <span>•</span>
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Tag" className="text-primary" size={20} />
                        <h3 className="font-black text-lg text-foreground">Категории</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {Array.from(new Set(blogPosts.map(p => p.category))).map(cat => (
                          <button
                            key={cat}
                            onClick={() => setSearchQuery(cat)}
                            className="px-3 py-1 bg-muted hover:bg-primary/20 hover:text-primary rounded-full text-sm font-medium transition-colors"
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </aside>
              )}
            </div>
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
                    <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageSquare" className="mr-2" size={20} />
                      Канал в Max
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
                <a href="https://www.instagram.com/malinochka__marina?igsh=MXNzdzR3Z3MxM25kOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://t.me/marico_pro" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={24} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary" asChild>
                <a href="https://vk.com/marico_su?from=groups" target="_blank" rel="noopener noreferrer">
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
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { blogPosts } from '@/data/blogPosts';

const BlogPreviewSection = () => {
  const posts = Object.values(blogPosts).map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.content.substring(0, 120) + '...',
    date: post.date,
    category: post.category,
    image: post.image,
    readTime: post.readTime
  }));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-foreground">Блог о продажах и сервисе</h2>
            <p className="text-xl text-foreground/70">
              Делюсь реальными кейсами, инсайтами и инструментами для роста вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
                    <p className="text-foreground/70 line-clamp-3">
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

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/blog">
                Все статьи блога
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

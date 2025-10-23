import { Link } from 'react-router-dom';

const BlogPostNavigation = () => {
  return (
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
  );
};

export default BlogPostNavigation;

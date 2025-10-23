import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface BlogPostHeaderProps {
  title: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
}

const BlogPostHeader = ({ title, date, category, readTime, author, image }: BlogPostHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        className="gap-2"
        onClick={() => navigate('/blog')}
      >
        <Icon name="ArrowLeft" size={20} />
        Назад к блогу
      </Button>

      <div className="aspect-[21/9] rounded-2xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium">
          {category}
        </span>
        <div className="flex items-center gap-2">
          <Icon name="Calendar" size={16} />
          {date}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Clock" size={16} />
          {readTime}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="User" size={16} />
          {author}
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
        {title}
      </h1>
    </div>
  );
};

export default BlogPostHeader;

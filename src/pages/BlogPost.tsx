import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogPostNavigation from '@/components/blog/BlogPostNavigation';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostAuthor from '@/components/blog/BlogPostAuthor';
import BlogPostCTA from '@/components/blog/BlogPostCTA';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Comments from '@/components/blog/Comments';
import { blogPosts } from '@/data/blogPosts';

// Функция для извлечения plain text из markdown (первые 200 символов)
const getPlainTextFromMarkdown = (markdown: string, maxLength: number = 200): string => {
  return markdown
    .replace(/^###+\s/gm, '') // убираем заголовки
    .replace(/\*\*(.+?)\*\*/g, '$1') // убираем жирный текст
    .replace(/\*(.+?)\*/g, '$1') // убираем курсив
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // убираем ссылки
    .replace(/`(.+?)`/g, '$1') // убираем код
    .replace(/\n+/g, ' ') // заменяем переносы на пробелы
    .trim()
    .substring(0, maxLength)
    .trim() + (markdown.length > maxLength ? '...' : '');
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const post = blogPosts[Number(id)];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);
  
  // Формируем полный URL для og:url
  const currentUrl = `${window.location.origin}${location.pathname}`;
  
  // Используем excerpt или fallback на getPlainTextFromMarkdown
  const description = post ? (post.excerpt || getPlainTextFromMarkdown(post.content, 200)) : '';
  
  // Форматируем дату в ISO формат для Schema.org
  const formatDateToISO = (dateStr: string): string => {
    // Преобразуем "15 октября 2024" в ISO формат
    const months: Record<string, string> = {
      'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04',
      'мая': '05', 'июня': '06', 'июля': '07', 'августа': '08',
      'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
    };
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = months[parts[1]];
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return new Date().toISOString().split('T')[0];
  };
  
  const publishedDate = post ? formatDateToISO(post.date) : '';

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* Базовые meta теги */}
        <title>{post.title} | MARICO PRO</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph теги */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:article:author" content={post.author} />
        <meta property="og:article:published_time" content={publishedDate} />
        <meta property="og:article:section" content={post.category} />
        
        {/* Twitter Card теги */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Schema.org разметка для Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            image: post.image,
            datePublished: publishedDate,
            author: {
              '@type': 'Person',
              name: post.author
            },
            description: description,
            keywords: post.keywords,
            articleSection: post.category,
            publisher: {
              '@type': 'Organization',
              name: 'MARICO PRO',
              logo: {
                '@type': 'ImageObject',
                url: 'https://cdn.poehali.dev/projects/a0f1d64c-d8ab-4496-af89-52912fc87ab2/files/76dfee33-67bf-42da-9a28-f8930d95fa50.jpg'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': currentUrl
            }
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
                item: `${window.location.origin}/blog`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.category,
                item: `${window.location.origin}/blog?category=${encodeURIComponent(post.category)}`
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: post.title,
                item: currentUrl
              }
            ]
          })}
        </script>
      </Helmet>
      
      <BlogPostNavigation />

      <article className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <BlogPostHeader
              title={post.title}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
              author={post.author}
              image={post.image}
            />

            <BlogPostContent content={post.content} />

            <BlogPostAuthor />

            <RelatedPosts currentPostId={post.id} />

            <Comments postId={post.id} />

            <BlogPostCTA />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
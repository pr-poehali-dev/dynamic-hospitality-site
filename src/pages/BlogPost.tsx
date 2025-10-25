import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import BlogPostNavigation from '@/components/blog/BlogPostNavigation';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostAuthor from '@/components/blog/BlogPostAuthor';
import BlogPostCTA from '@/components/blog/BlogPostCTA';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Comments from '@/components/blog/Comments';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[Number(id)];

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
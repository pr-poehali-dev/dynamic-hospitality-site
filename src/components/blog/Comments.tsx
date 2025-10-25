import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Comment {
  id: number;
  author_name: string;
  content: string;
  created_at: string;
}

interface CommentsProps {
  postId: number;
}

const Comments = ({ postId }: CommentsProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    content: ''
  });

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://functions.poehali.dev/cbdcacb5-a4d6-41db-a410-03853cf63a86?post_id=${postId}`
      );
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/cbdcacb5-a4d6-41db-a410-03853cf63a86', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_id: postId,
          ...formData
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Комментарий добавлен!',
          description: 'Спасибо за ваш отзыв',
        });
        setFormData({ author_name: '', author_email: '', content: '' });
        fetchComments();
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось добавить комментарий. Попробуйте снова.',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Icon name="MessageSquare" className="text-primary" />
            Комментарии ({comments.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Icon name="Loader2" className="animate-spin text-primary" size={32} />
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Icon name="MessageSquare" className="mx-auto mb-3 opacity-50" size={48} />
              <p>Пока нет комментариев. Будьте первым!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <Card key={comment.id} className="border-l-4 border-l-primary/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="User" className="text-primary" size={20} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-foreground">{comment.author_name}</span>
                          <span className="text-sm text-muted-foreground">{formatDate(comment.created_at)}</span>
                        </div>
                        <p className="text-foreground/80">{comment.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle>Оставить комментарий</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="author_name">Ваше имя *</Label>
                <Input
                  id="author_name"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  required
                  placeholder="Иван Петров"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author_email">Email (необязательно)</Label>
                <Input
                  id="author_email"
                  type="email"
                  value={formData.author_email}
                  onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
                  placeholder="ivan@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Комментарий *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={4}
                placeholder="Напишите ваш комментарий..."
                minLength={10}
                maxLength={2000}
              />
              <p className="text-xs text-muted-foreground">
                Минимум 10 символов, максимум 2000
              </p>
            </div>
            <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить комментарий
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Comments;

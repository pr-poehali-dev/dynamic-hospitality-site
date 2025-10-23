interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  const renderContent = (text: string) => {
    const lines = text.trim().split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-3xl font-black text-foreground mt-12 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={key++} className="text-lg font-bold text-foreground mt-6 mb-3">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      } else if (line.startsWith('- ')) {
        const listItems = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          listItems.push(lines[i].replace('- ', ''));
          i++;
        }
        i--;
        elements.push(
          <ul key={key++} className="space-y-2 my-4 ml-6">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-foreground/90 leading-relaxed list-disc">
                {item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split(/<strong>(.*?)<\/strong>/g).map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </li>
            ))}
          </ul>
        );
      } else if (line.match(/^\d+\./)) {
        const listItems = [];
        while (i < lines.length && lines[i].match(/^\d+\./)) {
          listItems.push(lines[i].replace(/^\d+\.\s*/, ''));
          i++;
        }
        i--;
        elements.push(
          <ol key={key++} className="space-y-2 my-4 ml-6 list-decimal">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-foreground/90 leading-relaxed">
                {item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split(/<strong>(.*?)<\/strong>/g).map((part, i) => 
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </li>
            ))}
          </ol>
        );
      } else if (line.trim() !== '') {
        elements.push(
          <p key={key++} className="text-lg text-foreground/90 leading-relaxed my-4">
            {line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split(/<strong>(.*?)<\/strong>/g).map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="font-bold text-foreground">{part}</strong> : part
            )}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderContent(content)}
    </div>
  );
};

export default BlogPostContent;

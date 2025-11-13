import Icon from '@/components/ui/icon';

const SocialProofSection = () => {
  const stats = [
    {
      icon: 'Trophy',
      value: '50+',
      label: 'Заведений трансформировано',
      color: 'text-primary'
    },
    {
      icon: 'TrendingUp',
      value: '+34%',
      label: 'Средний рост выручки',
      color: 'text-green-600'
    },
    {
      icon: 'Star',
      value: '0',
      label: 'Возвратов за 5 лет',
      color: 'text-amber-600'
    },
    {
      icon: 'DollarSign',
      value: '22+ млн ₽',
      label: 'Дополнительной прибыли клиентов',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center">
                  <Icon name={stat.icon} className={stat.color} size={32} />
                </div>
              </div>
              <div className={`text-4xl md:text-5xl font-black ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

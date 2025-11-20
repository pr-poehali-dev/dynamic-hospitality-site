import Icon from '@/components/ui/icon';

const SocialProofSection = () => {
  const stats = [
    {
      icon: 'Award',
      value: '15 лет',
      label: 'Опыта в премиум HoReCa',
      color: 'text-primary'
    },
    {
      icon: 'Briefcase',
      value: '8 проектов',
      label: 'Реализовано в 2025',
      color: 'text-green-600'
    },
    {
      icon: 'Users',
      value: '120+',
      label: 'Сотрудников обучено в 2025',
      color: 'text-amber-600'
    },
    {
      icon: 'Star',
      value: '0',
      label: 'Возвратов денег',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-10 bg-slate-900 border-y border-amber-500/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
                  <Icon name={stat.icon} className="text-slate-900" size={24} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-amber-300/80 font-medium uppercase tracking-wide">
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
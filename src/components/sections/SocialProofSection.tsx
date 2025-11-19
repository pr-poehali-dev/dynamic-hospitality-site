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
      label: 'Сотрудников обучено в 2024',
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
    <section className="py-12 bg-slate-900 border-y-4 border-amber-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform">
                  <Icon name={stat.icon} className="text-slate-900" size={40} />
                </div>
              </div>
              <div className={`text-5xl md:text-6xl font-black text-white drop-shadow-lg`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-amber-300 font-bold uppercase tracking-wider">
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
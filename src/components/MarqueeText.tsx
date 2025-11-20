interface MarqueeTextProps {
  text: string[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
}

const MarqueeText = ({ text, speed = 'normal', direction = 'left' }: MarqueeTextProps) => {
  const speedClass = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee',
    fast: 'animate-marquee-fast'
  }[speed];

  const directionClass = direction === 'right' ? 'flex-row-reverse' : '';

  return (
    <div className="overflow-hidden whitespace-nowrap bg-slate-900 py-4 border-y border-amber-500/30">
      <div className={`inline-block ${speedClass}`}>
        <div className={`flex gap-12 ${directionClass}`}>
          {[...text, ...text, ...text].map((item, index) => (
            <span
              key={index}
              className="text-2xl md:text-3xl font-bold text-amber-400 px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;

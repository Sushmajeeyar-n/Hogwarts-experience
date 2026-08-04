import TiltCard from '../TiltCard/TiltCard';

type Props = {
  title: string;
  color: string;
  description: string;
  icon: string;
};

export default function HouseCard({ title, color, description, icon }: Props) {
  return (
    <TiltCard>
      <div
        className="group relative w-[300px] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-700 hover:border-yellow-400/40"
        style={{
          boxShadow: '0 15px 45px rgba(0,0,0,.45)',
        }}
      >
        {/* Background Glow */}
        <div
          className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-35 blur-3xl transition-all duration-700 group-hover:opacity-80"
          style={{
            background: color,
          }}
        />

        {/* Animated Shine */}
        <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[140%]" />

        {/* Icon */}
        <div
          className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full text-5xl transition-all duration-700 group-hover:scale-125 group-hover:rotate-12"
          style={{
            background: color,
            boxShadow: `0 0 45px ${color}`,
          }}
        >
          {icon}
        </div>

        <h3 className="cinzel text-center text-[2.15rem] text-white">
          {title}
        </h3>

        <div
          className="mx-auto my-6 h-[2px] w-16 rounded-full"
          style={{
            background: color,
          }}
        />

        <p className="garamond text-center text-[22px] leading-9 text-gray-300">
          {description}
        </p>
      </div>
    </TiltCard>
  );
}

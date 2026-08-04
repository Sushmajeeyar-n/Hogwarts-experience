export default function MagicButton() {
  return (
    <button className="group relative mt-20 overflow-hidden rounded-full border border-yellow-400 px-10 py-4 cinzel text-yellow-300 transition-all duration-500 hover:scale-105 hover:text-black">
      {/* Gold Background */}
      <span className="absolute inset-0 scale-x-0 origin-left bg-yellow-400 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Moving Shine */}
      <span className="absolute left-[-120%] top-0 h-full w-1/2 -skew-x-12 bg-white/30 transition-all duration-700 group-hover:left-[130%]" />

      {/* Text */}
      <span className="relative z-10">Begin Your Journey</span>
    </button>
  );
}

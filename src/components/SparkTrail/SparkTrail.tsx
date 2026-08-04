export default function SparkTrail() {
  const sparks = Array.from({ length: 18 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((_, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${10 + i * 4}%`,
            top: `${65 - i * 2}%`,
            background: '#FFE66D',
            boxShadow: '0 0 22px #FFE66D',
            opacity: 0.4,
            animation: `twinkle ${1 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

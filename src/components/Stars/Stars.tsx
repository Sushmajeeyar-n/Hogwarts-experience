const stars = Array.from({ length: 120 });

export default function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 5;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animation: `twinkle ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              boxShadow: '0 0 10px rgba(255,255,255,.8)',
            }}
          />
        );
      })}
    </div>
  );
}

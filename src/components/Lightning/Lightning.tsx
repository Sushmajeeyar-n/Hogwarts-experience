import { useEffect, useState } from 'react';

export default function Lightning() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);

      setTimeout(() => {
        setFlash(false);
      }, 180);
    }, 9000 + Math.random() * 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute inset-0 z-10 transition-opacity duration-150 ${
        flash ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background:
          'radial-gradient(circle at top, rgba(255,255,255,.45), rgba(255,255,255,.08), transparent 70%)',
      }}
    />
  );
}

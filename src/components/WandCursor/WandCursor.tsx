import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

type Spark = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export default function WandCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);

      setSparks((prev) => [
        ...prev.slice(-25),
        {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 2,
        },
      ]);
    }

    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          initial={{
            opacity: 1,
            scale: 1,
            x: spark.x,
            y: spark.y,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            y: spark.y - 25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="pointer-events-none fixed left-0 top-0 rounded-full"
          style={{
            width: spark.size,
            height: spark.size,
            background: '#FFD54A',
            boxShadow: '0 0 12px #FFD54A',
            zIndex: 9998,
          }}
        />
      ))}

      {/* Cursor Glow */}
      <motion.div
        style={{
          x,
          y,
          background: '#FFD54A',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full blur-md"
      />

      {/* Wand Tip */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_20px_#FFD54A]"
      />
    </>
  );
}

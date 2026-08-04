import { motion } from 'framer-motion';

const fireflies = Array.from({ length: 10 });

export default function Fireflies() {
  return (
    <>
      {fireflies.map((_, i) => {
        const size = Math.random() * 5 + 2;

        return (
          <motion.div
            key={i}
            className="pointer-events-none absolute rounded-full bg-yellow-300"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 18px rgba(255,220,80,.9)',
            }}
            animate={{
              x: [0, Math.random() * 120 - 60, Math.random() * 120 - 60, 0],
              y: [0, Math.random() * 120 - 60, Math.random() * 120 - 60, 0],
              opacity: [0.2, 1, 0.4, 1, 0.2],
              scale: [0.7, 1.3, 0.8, 1.1, 0.7],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </>
  );
}

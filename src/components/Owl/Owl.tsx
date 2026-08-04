import { motion } from 'framer-motion';

export default function Owl() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[60] overflow-hidden">
      <motion.img
        src="https://cdn.phototourl.com/free/2026-08-03-36143eb3-9296-40c1-8a42-a1543a194e80.png"
        alt="Hedwig"
        className="absolute w-28 drop-shadow-[0_0_18px_rgba(255,255,255,.35)]"
        initial={{
          x: -220,
          y: 180,
          rotate: -5,
          opacity: 0,
        }}
        animate={{
          x: [-220, 250, 700, 1150, 1700],
          y: [180, 140, 180, 120, 170],
          rotate: [-5, 2, -2, 3, 0],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

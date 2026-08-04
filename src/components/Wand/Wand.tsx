import { motion } from 'framer-motion';
import wand from '../../assets/images/wand.png';

export default function Wand() {
  return (
    <motion.img
      src={wand}
      alt="Magic Wand"
      className="pointer-events-none absolute z-40 w-24"
      initial={{
        x: -150,
        y: 420,
        rotate: -25,
        opacity: 0,
      }}
      animate={{
        x: [0, 300, 650, 900, 1200],
        y: [420, 260, 220, 280, 170],
        rotate: [-25, -10, 15, -5, 20],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

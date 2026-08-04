import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  show: boolean;
  color: string;
};

export default function SpellBeam({ show, color }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Background Flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[998]"
            style={{
              background: `${color}22`,
            }}
          />

          {/* Outer Glow Beam */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: '120vw',
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.55,
              ease: 'easeOut',
            }}
            className="fixed left-[-20vw] top-1/2 z-[999] h-[12px]"
            style={{
              background: color,
              boxShadow: `
                0 0 20px ${color},
                0 0 45px ${color},
                0 0 90px ${color},
                0 0 160px ${color}
              `,
            }}
          />

          {/* White Core */}
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: '120vw',
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="fixed left-[-20vw] top-1/2 z-[1000] h-[3px] bg-white"
            style={{
              boxShadow: '0 0 18px white',
            }}
          />

          {/* Beam Flash */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 1],
            }}
            transition={{
              duration: 0.6,
            }}
            className="fixed left-0 top-1/2 z-[997] h-28 w-full -translate-y-1/2"
            style={{
              background: `radial-gradient(circle, ${color}55 0%, transparent 70%)`,
              filter: 'blur(35px)',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}

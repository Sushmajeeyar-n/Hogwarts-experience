import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const houses = [
  {
    name: 'Gryffindor',
    image:
      'https://cdn.phototourl.com/free/2026-08-03-ef52fee9-7893-4c11-b862-15f5fa7bd4c1.png',
    color: '#AE0001',
    message: 'Where dwell the brave at heart.',
  },
  {
    name: 'Ravenclaw',
    image:
      'https://cdn.phototourl.com/free/2026-08-03-ec9c9dc2-c045-4118-b17e-a8376aef7c07.png',
    color: '#0E4B92',
    message: 'Where wisdom and learning flourish.',
  },
  {
    name: 'Hufflepuff',
    image:
      'https://cdn.phototourl.com/free/2026-08-03-7791337d-f59d-44f6-be04-80f7c12ebb8e.png',
    color: '#ECB939',
    message: 'Where loyalty is rewarded.',
  },
  {
    name: 'Slytherin',
    image:
      'https://cdn.phototourl.com/free/2026-08-03-315b5392-8e95-4633-bb88-2f027c320b38.png',
    color: '#1A472A',
    message: 'Where ambition leads to greatness.',
  },
];

const thoughts = [
  'Hmmmmm...',
  'Interesting...',
  'Very Difficult...',
  'I know exactly...',
  'Your destiny is clear...',
];

export default function SortingHat() {
  const [sorting, setSorting] = useState(false);
  const [house, setHouse] = useState<any>(null);
  const [bgColor, setBgColor] = useState('#FFD54A22');
  const [thoughtIndex, setThoughtIndex] = useState(0);

  useEffect(() => {
    if (!sorting) return;

    setThoughtIndex(0);

    const timers = [
      setTimeout(() => setThoughtIndex(1), 1800),
      setTimeout(() => setThoughtIndex(2), 3600),
      setTimeout(() => setThoughtIndex(3), 5400),
      setTimeout(() => setThoughtIndex(4), 7200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [sorting]);

  function startSorting() {
    if (sorting) return;

    setHouse(null);
    setBgColor('#FFD54A22');
    setSorting(true);

    setTimeout(() => {
      const random = houses[Math.floor(Math.random() * houses.length)];

      setHouse(random);
      setBgColor(`${random.color}33`);
      setSorting(false);

      setTimeout(() => {
        document.getElementById('spells')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 3000);
    }, 9000);
  }

  return (
    <div
      className="flex flex-col items-center rounded-[40px] px-12 py-12 transition-all duration-1000"
      style={{
        background: `radial-gradient(circle, ${bgColor}, transparent 70%)`,
      }}
    >
      {/* Sorting Hat */}
      <motion.img
        src="https://files.catbox.moe/6bo61p.png"
        alt="Sorting Hat"
        onClick={startSorting}
        className="w-[220px] md:w-[280px] h-auto object-contain select-none"
        animate={
          sorting
            ? {
                rotate: [-15, 15, -12, 12, -8, 8, 0],
                y: [-10, 10, -10, 10, -6, 6, 0],
                scale: [1, 1.05, 1],
              }
            : {
                y: [-8, 8, -8],
                rotate: [-2, 2, -2],
              }
        }
        transition={{
          duration: sorting ? 3 : 5,
          repeat: sorting ? 0 : Infinity,
          ease: 'easeInOut',
        }}
      />

      {!sorting && !house && (
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="cinzel mt-6 tracking-[5px] text-yellow-300"
        >
          CLICK THE SORTING HAT
        </motion.p>
      )}

      {sorting && (
        <motion.div
          key={thoughtIndex}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 text-center"
        >
          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="cinzel text-3xl tracking-[4px] text-yellow-300"
          >
            {thoughts[thoughtIndex]}
          </motion.p>
        </motion.div>
      )}
      {house && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
          }}
          className="mt-14 rounded-3xl border border-white/10 px-12 py-12 text-center backdrop-blur-xl"
          style={{
            background: `${house.color}22`,
            boxShadow: `0 0 90px ${house.color}`,
          }}
        >
          {/* House Crest */}
          <motion.img
            src={house.image}
            alt={house.name}
            className="mx-auto mb-6 h-24 w-24 object-contain drop-shadow-[0_0_35px_rgba(255,215,120,.6)]"
            animate={{
              scale: [1, 1.04, 1],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* House Name */}
          <motion.h2
            initial={{ scale: 0.6 }}
            animate={{ scale: [0.9, 1.08, 1] }}
            transition={{ duration: 1 }}
            className="cinzel text-5xl font-bold"
            style={{
              color: house.color,
              textShadow: `0 0 35px ${house.color}`,
            }}
          >
            {house.name}
          </motion.h2>

          {/* House Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="garamond mt-6 text-2xl text-gray-300"
          >
            {house.message}
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() =>
              document
                .getElementById('spells')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="cinzel mt-10 rounded-full border border-yellow-400 bg-yellow-400/10 px-10 py-4 text-lg tracking-[2px] text-yellow-300 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          >
            ✨ Enter The Common Room →
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

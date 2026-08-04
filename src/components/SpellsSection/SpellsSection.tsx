import wand from '../../assets/images/wand.png';
import SpellBeam from '../SpellBeam/SpellBeam';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../Reveal/Reveal';

export default function SpellsSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [casting, setCasting] = useState(false);
  const [spellName, setSpellName] = useState('');
  const [spellColor, setSpellColor] = useState('#FFD54A');

  const spells = [
    {
      name: 'Lumos',
      effect: 'Creates light from the tip of the wand.',
      description:
        'Lumos illuminates even the darkest places. Every Hogwarts student learns this spell during their first year.',
      color: '#FFD54A',
      emoji: '💡',
    },
    {
      name: 'Expelliarmus',
      effect: 'Disarms your opponent instantly.',
      description:
        'The famous Disarming Charm. Harry Potter defeated countless enemies using this powerful defensive spell.',
      color: '#ff5c5c',
      emoji: '⚡',
    },
    {
      name: 'Expecto Patronum',
      effect: 'Summons a magical guardian.',
      description:
        'One of the most difficult charms. Only skilled witches and wizards can summon a Patronus.',
      color: '#7fdcff',
      emoji: '🦌',
    },
    {
      name: 'Wingardium Leviosa',
      effect: 'Makes objects float gracefully.',
      description: 'The very first charm Hermione mastered. Swish and Flick!',
      color: '#a78bfa',
      emoji: '🪶',
    },
  ];

  function castSpell(name: string, color: string) {
    setSpellName(name);
    setSpellColor(color);
    setCasting(true);

    setTimeout(() => {
      setCasting(false);
    }, 2500);
  }

  return (
    <Reveal>
      <section
        id="spells"
        className="relative overflow-hidden bg-[#05040b] py-40"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#070611] via-[#05040b] to-black" />

        <div
          className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,215,90,.12), transparent 70%)',
          }}
        />

        <div className="relative z-20 mx-auto max-w-7xl px-8">
          <p className="cinzel text-center text-sm tracking-[12px] text-yellow-300">
            MAGICAL SPELLS
          </p>

          <h2 className="cinzel mt-6 text-center text-5xl font-bold tracking-[2px] text-white md:text-7xl">
            Master The Magic
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="garamond mx-auto mt-8 mb-16 max-w-4xl text-center text-[24px] leading-relaxed text-gray-300">
            Click a spell to learn its magic and cast it yourself.
          </p>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {spells.map((spell, index) => (
              <motion.div
                key={spell.name}
                whileHover={{ y: -10 }}
                onClick={() => setSelected(index)}
                className={`cursor-pointer rounded-[28px] border backdrop-blur-xl transition-all duration-500 ${
                  selected === index
                    ? 'scale-105 border-yellow-400 bg-white/10'
                    : 'border-white/10 bg-white/5'
                } p-6`}
              >
                <motion.img
                  src="https://cdn.phototourl.com/free/2026-08-03-7c71dc66-457c-4f7b-a493-d81a3c8e3110.png"
                  alt="Spell Book"
                  animate={
                    selected === index
                      ? {
                          y: [-12, 8, -12],
                          rotate: [-4, 4, -4],
                          scale: [1, 1.08, 1],
                        }
                      : {
                          y: [-8, 8, -8],
                          rotate: [-2, 2, -2],
                        }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="mx-auto mb-6 h-28 w-28 object-contain drop-shadow-[0_0_18px_rgba(255,215,120,.45)]"
                />

                <h3 className="cinzel text-center text-2xl text-white">
                  {spell.name}
                </h3>

                <div
                  className="mx-auto my-4 h-[2px] w-14"
                  style={{
                    background: spell.color,
                  }}
                />

                <p className="garamond text-center text-lg leading-8 text-gray-300">
                  {spell.effect}
                </p>

                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="garamond mt-5 text-center text-base leading-7 text-gray-400">
                        {spell.description}
                      </p>

                      <div className="mt-6 flex justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            castSpell(spell.name, spell.color);
                          }}
                          className="cinzel rounded-full border border-yellow-400 bg-yellow-400/10 px-7 py-3 tracking-[2px] text-yellow-300 transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
                        >
                          ✨ Cast Spell
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        <SpellBeam show={casting} color={spellColor} />
        {/* Magic Overlay */}
        <AnimatePresence>
          {casting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md"
              style={{
                background: `${spellColor}33`,
              }}
            >
              {/* Expanding Glow */}
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: 18,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                className="absolute h-20 w-20 rounded-full"
                style={{
                  background: spellColor,
                  filter: `blur(20px)`,
                }}
              />

              {/* Spell Name */}
              <motion.div
                initial={{
                  scale: 0.4,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.7,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative flex flex-col items-center overflow-visible"
              >
                <motion.img
                  src={wand}
                  alt="Magic Wand"
                  initial={{
                    x: -180,
                    y: -40,
                    rotate: -30,
                    opacity: 0,
                  }}
                  animate={{
                    x: [-30, 15, -10],
                    y: [-10, 5, -5],
                    rotate: [-30, -18, -24],
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="absolute left-[-85px] top-6 w-20 drop-shadow-[0_0_18px_rgba(255,215,90,.8)]"
                />

                <h1
                  className="cinzel text-7xl font-bold"
                  style={{
                    color: spellColor,
                    textShadow: `0 0 35px ${spellColor}`,
                  }}
                >
                  {spellName}
                </h1>

                <p className="garamond mt-6 text-3xl text-white">
                  Magic flows through your wand...
                </p>

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 320,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="mx-auto mt-8 h-1 rounded-full"
                  style={{
                    background: spellColor,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Reveal>
  );
}

import { motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';

const journey = [
  {
    image:
      'https://cdn.phototourl.com/free/2026-08-03-7b9522f5-19d4-4c28-8a77-6202033f311e.jpg',
    title: 'Receive Your Hogwarts Letter',
  },
  {
    image: 'https://files.catbox.moe/6bo61p.png',
    title: 'Choose Your House',
  },
  {
    image:
      'https://cdn.phototourl.com/free/2026-08-03-7c71dc66-457c-4f7b-a493-d81a3c8e3110.png',
    title: 'Master Powerful Spells',
  },
  {
    image:
      'https://cdn.phototourl.com/free/2026-08-03-b1e5c6e2-92a7-40b5-b84f-2eb2bd69c9dc.png',
    title: 'Graduate As A Legendary Wizard',
  },
];

export default function JourneySection() {
  return (
    <Reveal>
      <section className="relative overflow-hidden bg-[#04030a] py-40">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06040d] via-[#04030a] to-black" />

        {/* Glow */}
        <div
          className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,215,90,.08), transparent 70%)',
          }}
        />

        <div className="relative z-20 mx-auto max-w-5xl px-8">
          <p className="cinzel text-center text-sm tracking-[12px] text-yellow-300">
            YOUR JOURNEY
          </p>

          <h2 className="cinzel text-center text-5xl font-bold tracking-[2px] text-white md:text-5xl">
            EVERY WIZARD STARTS SOMEWHERE
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <div className="mt-24 space-y-8">
            {journey.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: -80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="group cursor-pointer"
              >
                <div className="rounded-full border border-white/10 bg-white/5 px-10 py-7 backdrop-blur-xl transition-all duration-500">
                  <div className="flex items-center gap-8">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      animate={{
                        y: [-5, 5, -5],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="h-16 w-16 object-contain drop-shadow-[0_0_18px_rgba(255,215,120,.45)] group-hover:scale-110 transition-transform duration-300"
                    />

                    <h3 className="cinzel text-2xl text-white transition-all duration-500 group-hover:text-yellow-300">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

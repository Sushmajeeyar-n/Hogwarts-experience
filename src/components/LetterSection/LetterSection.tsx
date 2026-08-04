import Fireflies from '../Fireflies/Fireflies';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LetterSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05040b] px-6"
    >
      <Fireflies />
      {/* Background Glow */}
      <div
        className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[180px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,215,90,.12), transparent 70%)',
        }}
      />

      {!opened ? (
        <motion.div
          initial={{
            y: -250,
            rotate: -10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.04,
            y: -12,
            rotate: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => setOpened(true)}
          className="relative cursor-pointer"
        >
          {/* Envelope Glow */}
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-3xl"
          />

          {/* Envelope */}
          <div className="relative h-72 w-[430px] overflow-hidden rounded-xl bg-[#e8d2aa] shadow-[0_0_90px_rgba(255,215,90,.25)]">
            {/* Border */}
            <div className="absolute inset-0 rounded-xl border-[3px] border-[#b48a52]" />

            {/* Flap */}
            <div
              className="absolute left-0 top-0 h-full w-full"
              style={{
                clipPath: 'polygon(0 0,50% 56%,100% 0)',
                background: '#cfb182',
              }}
            />

            {/* Wax Seal */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  '0 0 12px rgba(180,30,30,.5)',
                  '0 0 30px rgba(255,60,60,.9)',
                  '0 0 12px rgba(180,30,30,.5)',
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute left-1/2 top-[88px] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-[#8b0000]"
            >
              ✉️
            </motion.div>

            {/* Hogwarts */}
            <h2 className="cinzel absolute bottom-16 left-0 w-full text-center text-4xl text-[#5b3810]">
              Hogwarts
            </h2>

            {/* Click */}
            <p className="garamond absolute bottom-8 left-0 w-full text-center text-xl text-[#6c4a22]">
              Click to Open
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative max-w-2xl rounded-[32px] border border-[#d9b56d] bg-[#efe2c2] p-10 text-[#2f2418] shadow-[0_0_120px_rgba(255,215,0,.22)]"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-[32px] opacity-20"
            style={{
              background:
                'radial-gradient(circle at top, rgba(255,215,90,.45), transparent 70%)',
            }}
          />

          {/* Heading */}
          <h1 className="cinzel mb-8 text-center text-4xl text-[#5c3710]">
            Hogwarts School of
            <br />
            Witchcraft & Wizardry
          </h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="garamond mb-6 text-xl"
          >
            Dear Witch/Wizard,
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="garamond text-lg leading-9"
          >
            We are pleased to inform you that you have been accepted to
            <strong> Hogwarts School of Witchcraft and Wizardry.</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="garamond mt-6 text-lg leading-9"
          >
            Prepare yourself for an extraordinary journey filled with magic,
            friendship, bravery and adventure beyond imagination. Within these
            ancient walls, you will uncover powerful spells, discover lifelong
            companions and shape your destiny as a witch or wizard.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="garamond mt-6 text-lg italic text-[#6a4720]"
          >
            We await your arrival on the 1st of September.
          </motion.p>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-10 text-right"
          >
            <p className="garamond text-2xl italic">Minerva McGonagall</p>

            <p className="cinzel text-sm tracking-[4px] text-[#6a4720]">
              Deputy Headmistress
            </p>
          </motion.div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById('houses')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="cinzel rounded-full bg-yellow-400 px-10 py-4 text-lg text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Continue →
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

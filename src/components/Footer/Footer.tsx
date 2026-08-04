import Reveal from '../Reveal/Reveal';

export default function Footer() {
  return (
    <Reveal>
      <footer className="relative overflow-hidden border-t border-white/10 bg-black pt-36 pb-24">
        {/* Magical Glow */}
        <div
          className="absolute left-1/2 top-0 h-60 w-[700px] -translate-x-1/2 blur-[160px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,215,90,.12), transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6">
          {/* Logo */}
          <h2 className="cinzel gold-glow text-5xl font-bold tracking-[8px] text-white">
            HOGWARTS
          </h2>

          {/* Divider */}
          <div className="mt-7 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          {/* Quote */}
          <p className="garamond mt-8 max-w-3xl text-center text-2xl leading-relaxed text-gray-300 italic">
            "Happiness can be found even in the darkest of times, if one only
            remembers to turn on the light."
          </p>

          <p className="mt-4 cinzel text-sm tracking-[5px] text-yellow-300">
            — ALBUS DUMBLEDORE
          </p>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-10">
            <a
              href="#home"
              className="cinzel text-lg tracking-[2px] text-gray-300 transition duration-300 hover:text-yellow-300 hover:scale-110"
            >
              Home
            </a>

            <a
              href="#houses"
              className="cinzel text-lg tracking-[2px] text-gray-300 transition duration-300 hover:text-yellow-300 hover:scale-110"
            >
              Houses
            </a>

            <a
              href="#spells"
              className="cinzel text-lg tracking-[2px] text-gray-300 transition duration-300 hover:text-yellow-300 hover:scale-110"
            >
              Spells
            </a>

            <a
              href="#journey"
              className="cinzel text-lg tracking-[2px] text-gray-300 transition duration-300 hover:text-yellow-300 hover:scale-110"
            >
              Journey
            </a>
          </div>

          {/* Bottom */}
          <p className="mt-14 garamond text-xl text-gray-500">
            Crafted with ✨ Magic & React
          </p>

          <p className="mt-2 text-gray-600">© 2026 Hogwarts Experience</p>
        </div>
      </footer>
    </Reveal>
  );
}

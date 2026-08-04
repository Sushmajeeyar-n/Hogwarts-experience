import Owl from '../Owl/Owl';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import MagicButton from '../MagicButton/MagicButton';
import Parallax from '../Parallax/Parallax';
import SparkTrail from '../SparkTrail/SparkTrail';
import Wand from '../Wand/Wand';
import Lightning from '../Lightning/Lightning';
import Particles from '../Particles/Particles';
import Stars from '../Stars/Stars';
import Fog from '../Fog/Fog';
import castle from '../../assets/images/castle.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#02030d]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030611] via-[#050813] to-black" />

      {/* Mouse Parallax */}
      <Parallax />

      {/* Stars */}
      <Stars />

      {/* Moon Glow */}
      <div
        data-parallax="0.2"
        className="absolute right-12 top-10 h-52 w-52 rounded-full blur-3xl"
        style={{
          background: 'rgba(255,255,255,.10)',
          animation: 'pulseMoon 6s ease-in-out infinite',
        }}
      />

      {/* Moon */}
      <div
        data-parallax="0.4"
        className="absolute right-16 top-14 h-28 w-28 overflow-hidden rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 30%, #ffffff, #ececec 65%, #d7d7d7)',
          boxShadow:
            '0 0 30px rgba(255,255,255,.30),0 0 100px rgba(255,255,255,.12)',
          animation: 'pulseMoon 8s ease-in-out infinite',
        }}
      >
        <div className="absolute left-5 top-6 h-4 w-4 rounded-full bg-gray-300/40" />
        <div className="absolute right-7 top-9 h-5 w-5 rounded-full bg-gray-400/30" />
        <div className="absolute bottom-6 left-8 h-5 w-5 rounded-full bg-gray-300/25" />
      </div>

      {/* Castle */}
      <img
        data-parallax="0.2"
        src={castle}
        alt="Hogwarts Castle"
        className="absolute bottom-[-120px] left-1/2 w-[92%] max-w-[1500px] -translate-x-1/2 select-none"
        style={{
          animation: 'castleReveal 3s ease forwards',
          opacity: 0.45,
          filter: 'brightness(.22) contrast(1.4) saturate(.7)',
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, black 80%, transparent 100%)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Effects */}
      <Fog />
      <Particles />
      <Lightning />
      <Wand />
      <SparkTrail />

      {/* Hero */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-6 cinzel text-sm tracking-[10px] text-yellow-300"
          style={{
            animation: 'fadeUp 1.2s ease forwards',
          }}
        >
          WELCOME TO
        </p>

        <h1
          className="cinzel glow-text text-6xl font-bold tracking-[14px] text-white md:text-8xl"
          style={{
            animation: 'fadeUp 1.6s ease forwards',
          }}
        >
          HOGWARTS
        </h1>

        <h2
          className="mt-4 cinzel text-2xl tracking-[8px] text-gray-300 md:text-3xl"
          style={{
            animation: 'fadeUp 2s ease forwards',
          }}
        >
          AWAITS
        </h2>

        <p
          className="garamond mt-10 max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl"
          style={{
            animation: 'fadeUp 2.3s ease forwards',
          }}
        >
          Every great wizard begins with a single spell...
        </p>

        <div
          style={{
            animation: 'fadeUp 2.6s ease forwards',
          }}
        >
          <MagicButton />
        </div>
      </div>

      <ScrollIndicator />
      <Owl />
    </section>
  );
}

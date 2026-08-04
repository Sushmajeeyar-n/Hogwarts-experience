import Reveal from '../Reveal/Reveal';
import SortingHat from '../SortingHat/SortingHat';

export default function SortingSection() {
  return (
    <Reveal>
      <section
        id="houses"
        className="relative min-h-screen overflow-hidden bg-[#07050d] py-40"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080611] to-black" />

        {/* Center Glow */}
        <div
          className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,215,90,.12), transparent 70%)',
          }}
        />

        {/* Left Glow */}
        <div
          className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full blur-[160px]"
          style={{
            background:
              'radial-gradient(circle, rgba(25,70,170,.10), transparent 70%)',
          }}
        />

        {/* Right Glow */}
        <div
          className="absolute right-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full blur-[160px]"
          style={{
            background:
              'radial-gradient(circle, rgba(170,0,0,.10), transparent 70%)',
          }}
        />

        <div className="relative z-20 mx-auto max-w-6xl px-8">
          {/* Heading */}
          <p className="cinzel text-center text-sm tracking-[12px] text-yellow-300">
            THE SORTING CEREMONY
          </p>

          <h2 className="cinzel mt-6 text-center text-5xl font-bold tracking-[2px] text-white md:text-7xl">
            Choose Your House
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-7 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          {/* Description */}
          <p className="garamond mx-auto mt-8 max-w-4xl text-center text-[26px] leading-relaxed text-gray-300">
            The Sorting Hat knows where you truly belong. Click the hat and let
            fate decide your Hogwarts House.
          </p>

          {/* Sorting Hat */}
          <div className="mt-24 flex justify-center">
            <SortingHat />
          </div>

          {/* Hint */}
          <p className="garamond mt-12 text-center text-2xl italic text-gray-400">
            "The Sorting Hat takes your choice into account..."
          </p>
        </div>
      </section>
    </Reveal>
  );
}

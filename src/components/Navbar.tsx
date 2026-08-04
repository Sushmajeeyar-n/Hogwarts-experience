import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Houses', href: '#houses' },
    { name: 'Spells', href: '#spells' },
    { name: 'Journey', href: '#journey' },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-black/50 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between px-14">
        {/* Logo */}
        <a
          href="#home"
          className="cinzel cursor-pointer text-2xl font-semibold tracking-[7px] text-white transition duration-500 hover:text-yellow-300"
          style={{
            textShadow: '0 0 18px rgba(255,255,255,.15)',
          }}
        >
          HOGWARTS
        </a>

        {/* Navigation */}
        <nav>
          <ul className="hidden items-center gap-12 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group relative overflow-hidden cinzel text-sm tracking-[4px] text-gray-200 transition-all duration-300 hover:scale-105 hover:text-yellow-300"
                >
                  {item.name}

                  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

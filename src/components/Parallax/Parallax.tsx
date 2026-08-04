import { useEffect } from 'react';

export default function Parallax() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.015;
      const y = (e.clientY - window.innerHeight / 2) * 0.015;

      document
        .querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach((el) => {
          const speed = Number(el.dataset.parallax);
          el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    };

    window.addEventListener('mousemove', handleMove);

    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}

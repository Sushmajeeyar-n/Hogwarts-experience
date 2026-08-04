import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function TiltCard({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 18;
    const rotateX = -(y / rect.height - 0.5) * 18;

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  }

  function reset() {
    if (!ref.current) return;

    ref.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
    >
      {children}
    </div>
  );
}

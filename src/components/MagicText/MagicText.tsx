import { useEffect, useState } from 'react';

export default function MagicText() {
  const title = 'HOGWARTS';
  const subtitle = 'AWAITS';

  const [main, setMain] = useState('');
  const [sub, setSub] = useState('');

  useEffect(() => {
    let i = 0;

    const first = setInterval(() => {
      setMain(title.slice(0, i + 1));
      i++;

      if (i === title.length) {
        clearInterval(first);

        let j = 0;

        const second = setInterval(() => {
          setSub(subtitle.slice(0, j + 1));
          j++;

          if (j === subtitle.length) {
            clearInterval(second);
          }
        }, 170);
      }
    }, 170);

    return () => clearInterval(first);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="cinzel glow-text text-6xl font-bold tracking-[14px] text-white md:text-8xl">
        {main}
      </h1>

      <h2 className="mt-4 cinzel text-2xl tracking-[8px] text-gray-300 md:text-3xl">
        {sub}
      </h2>
    </div>
  );
}

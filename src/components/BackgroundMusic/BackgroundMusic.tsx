import { useEffect } from 'react';
import music from '../../assets/audio/hogwarts.mp3';

export default function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio(music);

    audio.loop = true;
    audio.volume = 0.3;

    const play = () => {
      audio.play();
    };

    window.onclick = play;
  }, []);

  return null;
}

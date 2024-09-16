import { useEffect, useRef, useState } from "react";
import useDynamicImport from "../../hooks/useDynamicImport";

export default function EmoteButtons({ emote, setEmote }: { emote: string; setEmote: (emote: string) => void }) {
  const emotesList = ['happy', 'less-happy', 'neutral', 'sad', 'very-sad'];

  const { module, error } = useDynamicImport(emotesList);

  const emoteRef = useRef<HTMLButtonElement>(null);

  const [activeEmote, setActiveEmote] = useState<string | null>(null);
  const [shake, setShake] = useState(false);


  const handleEmotes = (emoteImage: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveEmote(emoteImage);
    setEmote(emoteImage);
  };

  useEffect(() => {
    if (!activeEmote) {
      const shakeInterval = setInterval(() => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }, 3000);

      return () => clearInterval(shakeInterval);
    }
  }, [activeEmote]);

  return (
    <div className="flex flex-wrap">
      {error && <p>Error loading emotes</p>}
      <div className="flex flex-col gap-4 mt-6 w-96">
        <h1 className="font-bold text-lg lg:text-base sm:text-sm text-textColor">Emotes</h1>
        <div className="flex gap-6 sm:gap-3 flex-wrap lg:flex-nowrap sm:grid grid-cols-3 font-semibold">
          {module.map((emoteImage, index) => (
            <button
              key={emotesList[index]}
              className={`emote__button flex items-center justify-center text-center emoji-styles rounded-full ${activeEmote === emotesList[index] ? 'active' : ''}
              ${!activeEmote && shake ? 'shake-animation' : ''}`}
              onClick={handleEmotes(emotesList[index])}
              type="button"
              ref={emoteRef}
            >
              <img src={emoteImage} alt={emotesList[index]} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

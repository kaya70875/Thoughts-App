import useDynamicImport from "../../hooks/useDynamicImport";

export default function EmoteButtons({emote, setEmote} : {emote: string, setEmote: (emote: string) => void}) {

  const emotesList = ['happy' , 'less-happy' , 'neutral' , 'sad' , 'very-sad'];

  const {module , error} = useDynamicImport(emotesList);

  const handleEmotes = (emoteImage: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEmote(emoteImage);
  };

  return (
    <div>
      {error && <p>Error loading emotes</p>}
      <div className="flex flex-col gap-4 mt-6 w-96">
        <h1 className="font-bold text-lg text-textColor">Emotes</h1>
        <div className="flex gap-6 flex-wrap font-semibold">
          {module.map((emoteImage, index) => (
            <button
              key={emotesList[index]}
              className="flex items-center justify-center text-center w-14 h-14 rounded-full"
              onClick={handleEmotes(emotesList[index])}
            >
              <img src={emoteImage} alt={emotesList[index]} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

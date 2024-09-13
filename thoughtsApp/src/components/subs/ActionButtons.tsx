import { useRef } from "react";
import useDynamicImport from "../../hooks/useDynamicImport";

interface ActionButtonProps {
  setActions: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ActionButtons({ setActions }: ActionButtonProps) {
  const actions = ["love", "dizzy", "devil", "angry", "sick"];
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { module: extraEmotes, error } = useDynamicImport(actions);

  const handleActions =
    (index: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      (e.currentTarget as HTMLButtonElement).classList.toggle('active');

      if(e.currentTarget.classList.contains('active')) {
        setActions((prev) => [...prev, index]);
      } else {
        setActions((prev) => prev.filter((action) => action !== index));
      }
    };

  return (
    <div className="flex items-end justify-between mr-6">
      {error && <p>Error loading emotes</p>}
      <div className="flex flex-col gap-4 mt-6 w-96">
        <h1 className="font-bold text-lg text-textColor">Extra Icons</h1>
        <div className="flex gap-6 flex-wrap font-semibold">
          {extraEmotes.map((emoteImage, index) => (
            <button
              key={actions[index]}
              ref={buttonRef}
              className="emote__button flex items-center justify-center text-center w-14 h-14 rounded-full"
              onClick={handleActions(actions[index])}
              type="button"
            >
              <img src={emoteImage} alt={actions[index]} />
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="primary__button w-20 p-2"
        onClick={() => {
          buttonRef.current?.classList.remove("active");
          {/* We don't have to use useForm and useEffect because submit form itself is here */}
        }}
      >
        Submit
      </button>{" "}
    </div>
  );
}

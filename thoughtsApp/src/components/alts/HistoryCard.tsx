import { useEffect, useState } from "react";

interface FormState {
  emote: string;
  text?: string;
  tags?: string[];
  actions?: string[];
  date: string;
}

interface HistoryCardProps {
  form: FormState;
}

export default function HistoryCard({ form }: HistoryCardProps) {
  const [emoteImg, setEmoteImg] = useState<string | null>(null);
  const [actionImgs, setActionImgs] = useState<string[]>([]);

  const currentEmote = form.emote;
  const currentActions = form.actions || [];

  // Load emote image dynamically
  useEffect(() => {
    if (currentEmote) {
      import(`../../assets/${currentEmote}.svg`)
        .then((module) => {
          setEmoteImg(module.default);
        })
        .catch((error) => {
          console.error("Error loading the emote image:", error);
        });
    }
  }, [currentEmote]);

  // Load action images dynamically
  useEffect(() => {
    const loadActionImages = async () => {
      const loadedActionImgs = await Promise.all(
        currentActions.map(async (action) => {
          try {
            const module = await import(`../../assets/${action}.svg`);
            return module.default;
          } catch (error) {
            console.error("Error loading action image:", error);
            return null; // Return null if there's an error
          }
        })
      );

      // Filter out any null values
      setActionImgs(loadedActionImgs.filter((img) => img !== null) as string[]);
    };

    if (currentActions.length > 0) {
      loadActionImages();
    }
  }, [currentActions]);

  return (
    <div className="w-full h-auto bg-textArea border-2 border-primaryBorder flex flex-col justify-between p-4 gap-4">
      {form.tags && form.tags.length > 0 && (
        <div className="tag__section w-full flex gap-4">
          {form.tags.map((tag, index) => (
            <button
              key={index}
              className="bg-tag flex items-center justify-center w-14 lg:w-10 h-8 lg:h-5 p-1 text-textArea font-semibold text-sm lg:text-xs"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {form.text && form.text.length > 0 && (
        <div className="content__section xl:w-auto h-auto flex items-center">
          <p className="text-textColor text-base lg:text-sm font-normal break-words w-80 lg:w-60">
            {form.text}
          </p>
        </div>
      )}

      <div className="emotes__section flex gap-2">
        {emoteImg && (
          <img
            src={emoteImg}
            alt={currentEmote}
            className="w-8 lg:w-6 h-8 lg:h-6"
          />
        )}
        {actionImgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`action-${index}`}
            className="w-8 lg:w-6 h-8 lg:h-6"
          />
        ))}
      </div>
    </div>
  );
}

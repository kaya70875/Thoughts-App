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
              className="bg-tag w-14 p-1 text-textColor font-semibold text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {form.text && form.text.length > 0 &&
        (
          <div className="content__section w-full h-16 flex items-center">
            {form.text}
          </div>
        )}

      <div className="emotes__section flex gap-2">
        {emoteImg && <img src={emoteImg} alt={currentEmote} className="w-8" />}
        {actionImgs.map((img, index) => (
          <img key={index} src={img} alt={`action-${index}`} className="w-8" />
        ))}
      </div>
    </div>
  );
}

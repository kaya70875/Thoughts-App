import { useEffect, useState } from "react";

interface FormState {
  emote: string;
  text?: string;
  tags?: string[];
  actions?: string[];
}

interface HistoryCardProps {
  form: FormState;
}

export default function HistoryCard({ form }: HistoryCardProps) {
  const [emoteImg, setEmoteImg] = useState<string | null>(null);

  const currentEmote = form.emote;

  useEffect(() => {
    if (currentEmote) {
      import(`../../assets/${currentEmote}.svg`)
        .then((module) => {
          setEmoteImg(module.default);
        })
        .catch((error) => {
          console.error("Error loading the module:", error);
        });
    }
  }, [currentEmote]);

  return (
    <div className="w-full h-48 bg-textArea border-2 border-primaryBorder flex flex-col justify-start p-4">
      {form.tags && form.tags.length > 0 && (
        <div className="tag__section w-full h-12 flex gap-4">
          <button>{form.tags}</button>
        </div>
      )}

      <div className="content__section w-full h-16">{form.text}</div>

      <div className="emotes__section">
        {emoteImg && <img src={emoteImg} alt={currentEmote} className="w-12" />}
      </div>
    </div>
  );
}

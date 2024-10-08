import { useEffect, useState } from "react";
import EmoteButtons from "./subs/EmoteButtons";
import QuickTags from "./subs/QuickTags";
import Tag from "./subs/Tag";
import ActionButtons from "./subs/ActionButtons";
import { useForm } from "../context/FormContext";

interface FormState {
  emote: string;
  text?: string;
  tags?: string[];
  actions?: string[];
  date: string;
}

export default function Editor() {
  const [tags, setTags] = useState<string[]>([]);
  const [emote, setEmote] = useState("");
  const [text, setText] = useState<string>("");
  const [actions, setActions] = useState<string[]>([]);

  const { setForm, setSubmittedForms, submittedForms, isSubmitted, setIsSubmitted } = useForm();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(emote.length > 0) {
      setIsSubmitted(true);

      const newForm = {
        emote,
        text,
        tags,
        actions,
        date: new Date().toDateString(),
      };
      setForm(newForm);
  
      setSubmittedForms((prevForms: FormState[]) => [...prevForms, newForm]);
  
      // Reset the form fields
      setEmote("");
      setText("");
      setTags([]);
      setActions([]);
  
      if(isSubmitted) {
        setIsSubmitted(false);
      }
    }

    else{
      alert("Please Select An Emote");
    }
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(submittedForms));
  }, [submittedForms]);

  return (
    <div className="w-5/12 h-full pl-12 pt-12 xl:pt-6">
      <form className="flex flex-col gap-2 h-full overflow-auto" onSubmit={handleSubmit}>
        <Tag tags={tags} setTags={setTags} />
        <textarea
          name="text-area"
          id="txt"
          className="w-full min-h-80 2xl:min-h-40 xl:min-h-32 lg:min-h-28 sm:min-h-12 p-2 border-2 border-primaryBorder outline-none"
          placeholder="Write Your Thoughts..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <QuickTags setTags={setTags} />
        <EmoteButtons emote={emote} setEmote={setEmote} />
        <ActionButtons setActions={setActions} />
      </form>
    </div>
  );
}

import { useState } from 'react'
import EmoteButtons from './subs/EmoteButtons'
import QuickTags from './subs/QuickTags'
import Tag from './subs/Tag'
import ActionButtons from './subs/ActionButtons';
import { useForm } from '../context/FormContext';

interface FormState {
  emote: string;
  text?: string;
  tags?: string[];
  actions?: string[];
}

export default function Editor() {
    const [tags, setTags] = useState<string[]>([]);
    const [emote, setEmote] = useState('');
    const [text, setText] = useState<string>('');
    const [actions , setActions] = useState<string[]>([]);

    const {setForm , setSubmittedForms} = useForm();

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newForm = {emote , text , tags , actions}
      setForm(newForm);

      setSubmittedForms((prevForms : FormState[]) => [...prevForms, newForm]);

      setEmote('');
      setText('');
      setTags([]);
      setActions([]);
    }

  return (
    <div className='w-5/12 h-screen p-12'>
        <form className='flex flex-col gap-2 h-full overflow-hidden' onSubmit={handleSubmit}>
            <Tag tags={tags} setTags={setTags} />
            <textarea name="text-area" id="txt" className='w-full min-h-80 p-2 border-2 border-primaryBorder outline-none' placeholder='Write Your Thoughts...' 
            value={text}
            onChange={handleTextChange}
            >
            
      
            </textarea>
            <QuickTags setTags={setTags}/>
            <EmoteButtons emote={emote} setEmote={setEmote}/>
            <ActionButtons />
        </form>
        
    </div>
  )
}

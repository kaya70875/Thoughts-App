import { useState } from 'react'
import EmoteButtons from './subs/EmoteButtons'
import QuickTags from './subs/QuickTags'
import Tag from './subs/Tag'

export default function Editor() {
    const [tags, setTags] = useState<string[]>([]);

  return (
    <div className='w-5/12 h-screen p-12'>
        <form className='flex flex-col gap-2 h-full overflow-hidden'>
            <Tag tags={tags} setTags={setTags} />
            <textarea name="text-area" id="txt" className='w-full min-h-80 p-2 border-2 border-primaryBorder outline-none' placeholder='Write Your Thoughts...'>

            </textarea>
            <QuickTags setTags={setTags}/>
            <EmoteButtons />
        </form>
        
    </div>
  )
}

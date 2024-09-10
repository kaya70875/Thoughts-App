import Tag from './subs/Tag'

export default function Editor() {
  return (
    <div className='w-1/3 h-screen pl-2 pt-2'>
        <form className='flex flex-col gap-2 h-full overflow-hidden'>
            <Tag />
            <textarea name="text-area" id="txt" className='w-full min-h-screen p-2 border-none outline-none' placeholder='Write Your Thoughts...'>

            </textarea>
        </form>
        
    </div>
  )
}

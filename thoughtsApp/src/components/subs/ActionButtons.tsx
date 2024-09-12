import useDynamicImport from '../../hooks/useDynamicImport'

interface ActionButtonProps {
  setActions : React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ActionButtons({setActions} : ActionButtonProps) {
    const actions = ['love' , 'dizzy' , 'devil' , 'angry' , 'sick']

    const {module : extraEmotes , error} = useDynamicImport(actions);

    const handleActions = (index : string) => (e : React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setActions(prev => [...prev , index]);

    }
  return (
    <div className='flex items-end'>
      {error && <p>Error loading emotes</p>}
      <div className="flex flex-col gap-4 mt-6 w-96">
        <h1 className="font-bold text-lg text-textColor">Extra Icons</h1>
        <div className="flex gap-6 flex-wrap font-semibold">
          {extraEmotes.map((emoteImage, index) => (
            <button
              key={actions[index]}
              className="flex items-center justify-center text-center w-14 h-14 rounded-full"
              onClick={handleActions(actions[index])}
              type='button'
            >
              <img src={emoteImage} alt={actions[index]} />
            </button>
          ))}
        </div>
      </div>
      <button type='submit' className='w-12 text-textColor mb-3 ml-3'>Submit</button>
    </div>
  )
}

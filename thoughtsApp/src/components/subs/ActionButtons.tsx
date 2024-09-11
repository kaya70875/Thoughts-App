import React, { act } from 'react'
import useDynamicImport from '../../hooks/useDynamicImport'

export default function ActionButtons() {
    const actions = ['love' , 'dizzy' , 'devil' , 'angry' , 'sick']
    const {module : extraEmotes , error} = useDynamicImport(actions);
  return (
    <div>
      {error && <p>Error loading emotes</p>}
      <div className="flex flex-col gap-4 mt-6 w-96">
        <h1 className="font-bold text-lg text-textColor">Extra Icons</h1>
        <div className="flex gap-6 flex-wrap font-semibold">
          {extraEmotes.map((emoteImage, index) => (
            <button
              key={actions[index]}
              className="flex items-center justify-center text-center w-14 h-14 rounded-full"
            >
              <img src={emoteImage} alt={actions[index]} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

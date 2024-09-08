import React from 'react'

export default function Message() {
  return (
    <div className='chat chat-end'>

        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-512.png" 
                    alt="Tailwind CSS Chat Bubble" 
                />
            </div>
        </div>

        <div className={`chat-bubble text-white bg-blue-500`}>Hi! Whats up?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>

    </div>
  )
}

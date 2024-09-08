
import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

export default function MessageContainer() {

  const noChatSelected = true;

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelected ?
        (
          <NoChatSelected/>
        )
        :
        (
          <>
            <div className='bg-gray-900 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>
                <span className='text-white font-bold'>John Doe</span>
            </div>

            <Messages/>
            <MessageInput/>
          </>
        )
        
      }
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome user</p>
        <p>select a chat to start message</p>
        <TiMessages/>
      </div>
    </div>
  )
}

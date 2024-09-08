import React from 'react'
import { IoSend } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

export default function MessageInput() {

  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input  type="text" 
                className='border text-sm rounded-lg block w-full p-2.5 border-gray-600 text-white'
                placeholder='Type a message....'
        />

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'> 
          <IoSend className='w-6 h-6'/>
        </button>
      </div>
    </form>
  )
}


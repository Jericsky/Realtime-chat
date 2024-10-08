import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function SearchInput() {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-gray-900 text-white'>
            <IoSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}





// import React from 'react'
// import { IoSearch } from "react-icons/io5";

// export default function SearchInput() {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
//         <button type='submit' className='btn btn-circle bg-gray-900 text-white'>
//             <IoSearch className='w-6 h-6 outline-none'/>
//         </button>
//     </form>
//   )
// }

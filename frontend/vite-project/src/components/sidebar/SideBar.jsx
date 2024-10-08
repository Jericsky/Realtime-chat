import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

export default function SideBar() {
  return (
    <div className='border border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}


// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'

// export default function SideBar() {
//   return (
//     <div>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Conversations/>
//     </div>
//   )
// }
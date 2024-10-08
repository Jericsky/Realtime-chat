import React from 'react'
import GenderCheckBox from './GenderCheckBox'

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup
                <span> ChatNest</span>
            </h1>
            
           <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>First Name</span>
                    </label>
                    <input type="text" placeholder='John' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Last Name</span>
                    </label>
                    <input type="text" placeholder='Doe' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10'/>
                </div>

                <GenderCheckBox/>

                <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                    Already have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2 '>Signup</button>
                </div>
           </form>
        </div>
    </div>
  )
}








// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// export default function SignUp() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 Signup
//                 <span> ChatNest</span>
//             </h1>
            
//            <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>First Name</span>
//                     </label>
//                     <input type="text" placeholder='John' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Last Name</span>
//                     </label>
//                     <input type="text" placeholder='Doe' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder='Confirm password' className='w-full input input-bordered h-10'/>
//                 </div>

//                 <GenderCheckBox/>

//                 <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                     Already have an account?
//                 </a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 '>Signup</button>
//                 </div>
//            </form>
//         </div>
//     </div>
//   )
// }


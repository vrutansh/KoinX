import React from 'react';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <>
      <nav className='min-h-[2vh] w-full bg-white'>
        <div className='flex justify-between h-full m-1 p-3 border-b-2 border-zinc-100'>
          {/* Logo */}
          <a href='#' className='text-xl font-bold text-zinc-900 ml-6'>
            <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="Logo" />
          </a>

          {/* Hamburger Menu for Mobile */}
          <div className='md:hidden'>
            <button className='text-xl mt-5 mr-6 border-b-2 border-zinc-100'>☰</button>
          </div>

          {/* Regular Navigation Links */}
          <div className='hidden md:flex items-center gap-8 mr-2 p-2'>
            {["Crypto Taxes", "Free Tools", "Resource Center"].map((elem, index) => (
              <a key={index} className='text-md font-semibold flex items-center gap-1 mr-1' href='#'>
                {elem}
              </a>
            ))}
            <CustomButton />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


// import React from 'react'
// import CustomButton from './CustomButton'

// const Navbar = () => {
//   return (
//     <>
//       <nav className='min-h-screen w-full'>
//         <div className='flex justify-between h-full m-1 p-3'>

//            <a href='#' className='text-xl font-bold text-zinc-900 ml-6'>
//               <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="" />
//             </a>

//           <div className='flex items-center gap-10 mr-4'>
//           {["Crypto Taxes", "Free Tools","Resource Center"].map((elem, index) =>
//                          <a className='text-md font-semibold flex items-center gap-1' href='#'>
//                             {elem}
//                         </a>
//             )}
//             <CustomButton/>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar
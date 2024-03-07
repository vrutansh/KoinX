import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Menu from './Menu'
function Bitcoinmain() {
  return (
    <>
      <div className='w-full min-h-[900vh] flex px-10 gap-5 bg-zinc-100'>
         <div className='cardcontainer mt-5 h-[75vh] w-4/5'>
            <div className=' relative card rounded-xl w-full h-full bg-pink-300 flex items-center justify-center'>
   
             </div>
          <div className='menu my-12 '>
          <Menu/>
          </div>
        </div>
        
        <div className='cardcontainer flex flex-col flex-nowrap gap-5 w-1/2 h-[75vh] mt-5'>
          <div className=' relative card flex items-center justify-center rounded-xl w-[90%] h-[55%] bg-blue-600'>
               <div className='text-white '>
                <h1 className=' font-bold text-3xl '>Get Started with KoinX </h1>
                <h1 className='font-bold text-3xl ml-20 px-5'>for FREE</h1>
                <h6 className='mt-3 font-md text-zinc-100 '>with Our Range of feature that you can equip for <br /> free, Koinx helps you to be more educated and <br /> aware of tax reports</h6>
                  <button className='bg-slate-100 font-semibold text-black w-48 p-3 flex justify-between items-center rounded-xl mt-6 '>Get Started for FREE <FaArrowRightLong /> </button>
               </div>
               
          </div>

          <div className=' relative card flex  justify-center rounded-xl w-[90%] h-[45%] bg-white'>
               
          </div>
        </div>

    </div>
    
    </>
  )
}

export default Bitcoinmain
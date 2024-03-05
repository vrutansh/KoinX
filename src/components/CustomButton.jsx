import React from 'react'

function CustomButton({title="Get Started"}) {
  return (
    <>
      <div className='bg-blue-600 text-white w-32 p-2 rounded-xl flex items-center justify-center '>
        <span className='text-md  font-semibold'>{title}</span>
        
    </div>
    </>
  )
}

export default CustomButton
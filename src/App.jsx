import React from 'react'
import Navbar from './components/Navbar'
import Bitcoinmain from './components/Bitcoinmain'
import Overview from './components/Overview'



const App = () => {
  return (
    <div className='bg-zinc-100 w-full h-screen'>
      <Navbar/>
      <h1 className='mx-11 text-zinc-600 inline-block '>Cryptocurriences <span className=' inline-block font-semibold text-md '>&gt;&gt; Bitcoin</span></h1>
      <Bitcoinmain/>
      
    </div>
  )
}

export default App
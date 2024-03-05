import React from 'react'
import Navbar from './components/Navbar'
import Bitcoinmain from './components/Bitcoinmain'


const App = () => {
  return (
    <div className='bg-zinc-100'>
      <Navbar/>
      <h1 className='mx-11 text-zinc-600 inline-block '>Cryptocurriences <span className=' inline-block font-semibold text-md '>&gt;&gt; Bitcoin</span></h1>
      <Bitcoinmain/>
    </div>
  )
}

export default App
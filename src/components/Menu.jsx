import React, { useState } from 'react'
import Overview from './Overview';
import Sentiment from './Sentiment';
import About from './About';
import Tokenomics from './Tokenomics';
import Team from './Team';

function Menu() {
    const [selected, setSelected] = useState(null);

    const handleClick = (index) => {
        setSelected(index);
    };
  return (
  <>
       <div className='flex gap-10 items-center px-10 mb-10 w-[61vw] border-b-2 border-gray-300'>
    {["Overview", "Fundamentals", "News Insight", "Sentiments", "Teams", "Technicals", "Tokenomics"].map((elem, index) => (
        <a key={index} className={`text-large font-semibold mr-1 ${selected === index ? 'text-blue-600 '  : 'text-gray-700'}`} href={`#${elem}`} onClick={() => handleClick(index)}>
            {elem}
        </a>
    ))}

    
</div>
  {[<Overview/>,
  <Sentiment/>,
  <About/>,
  <Tokenomics/>,
  <Team/>].map((elem,index) => (
    <div className='h-screen w-full'>
    <div className='bg-purple-200 w-full h-full rounded-xl mt-5'>
       {elem}
    </div>
 </div>
  ))}
  </>
  )
}

export default Menu


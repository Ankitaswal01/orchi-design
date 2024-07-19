import React from 'react'

export default function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl text-black rounded-tr-3xl'>
        <h1 className='font-["Neue_Montreal"] text-[3.4vw] py-4 px-20 leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='border-t-[1px] flex gap-5 border-[#a7c53b] px-10 pt-10 capitalize mt-10'>
            <div className='w-1/2 h-screen'>
            <h1 className='text-7xl '>our approach</h1>
            <button className='px-10 py-6 rounded-full text-white bg-zinc-900 mt-7'> Read More</button>
            
             </div>
            <div className='w-1/2 h-max rounded-3xl cover bg-zinc-800'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"></img>
            </div>
        </div>
      
    </div>
  )
}

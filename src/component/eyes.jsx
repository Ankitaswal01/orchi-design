import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function Eyes() {
  const [rotate,setrotate]=useState()
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX=e.clientX;
      let mouseY=e.clientY;
      let deltaX=mouseX-window.innerWidth/2;
      let deltaY=mouseY-window.innerHeight/2;
      let angle=Math.atan(deltaY,deltaX)*(180/Math.PI);
      setrotate(angle-180);

      
    })
  })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='w-full h-full bg-cover grid  bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className=' flex items-center gap-10 place-items-center mx-auto '>
            <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
              <div className='w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full'>
              <div   style={{transform:` rotate(${rotate}deg) `}} className= 'w-full h-8'>
              <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
              
              </div>
            </div>
            <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100 '>
            <div className='w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full'>
            <div style={{transform:` rotate(${rotate}deg) `}} className='w-full h-8 '>
              <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
            </div>
            </div>

        </div>
       
      
    </div>
  )
}

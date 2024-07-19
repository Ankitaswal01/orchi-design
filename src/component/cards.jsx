import React from 'react'

export default function Cards() {
  return (
    <div className='w-full h-screen relative flex gap-5 item-center justify-center px-[4vh] pt-[30vh]'>
        <div className='w-1/2 h-[50vh] relative  flex justify-center items-center bg-[#004D43]'>
        <img  className="w-32  "src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  ></img>
        <button className='bottom-10 left-10 px-5 py-1 border-2 absolute'>&copy;</button>
        </div>
        
        <div className='w-1/2 flex gap-5'>
        <div className='w-1/2 h-[50vh] rounded-xl relative flex justify-center items-center bg[#212121]'>
        <img  className="w-32  "src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  ></img>
        <button className='bottom-10 left-10 px-5 py-1 border-2 absolute'>&copy;</button></div>
        <div className='w-1/2 h-[50vh] rounded-xl flex relative justify-center items-center bg[#212121]'>
        <img  className="w-32  "src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  ></img>
        <button className='bottom-10 left-10 px-5 py-1 border-2 absolute'>&copy;</button></div>
        </div>
        
      
    </div>
  )
}

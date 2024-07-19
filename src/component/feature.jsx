import React from 'react'
import {motion} from "framer-motion";

export default function Feature() {
  return (
    <div className='w-full py-20'>
      <div>
      
        <div className='text-8xl  px-20 py-10 pb-15 tracking-tighter font-["Neue_Montreal"] border-b-[.1vw]  border-zinc-800'>
            <h1>FEATURE</h1>
            
        </div>
        <div className='w-full h-full flex gap-7 mt-10 px-10'>
       
            <div className='w-1/2 h-[80vh] relative rounded-2xl overflow-hidden'>
           

            <div className='w-full h-full rounded-2xl relative overflow-hidden '>
            <h1 className='absolute text-7xl flex overflow-hidden leading-none left-full top-1/2 -translate-x-1/2 -translate-y-1/2   tracking-tighter'>FYDE</h1>
            {"FYDE".split("").map((item,index)=>(
              <motion.span className='translate-y-full'>{item}</motion.span>
            ))

            }
            
                <img className=" bg-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"></img>
            </div>
            </div>
            <div  className='w-1/2 h-[80vh] rounded-2xl overflow-hidden' >
            <div className='w-full h-full relative rounded-2xl'>
            <h1 className='absolute text-7xl leading-none right-full top-1/2 -translate-x-1/2 translate-y-1/2 z-[9]  tracking-tight'>vise</h1>
            <img className=" bg-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"></img>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

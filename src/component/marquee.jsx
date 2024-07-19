import React from 'react';
import {motion} from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll'

function Marquee() {

  return (
    <div data-scroll data-scroll-speed="-.2" className='w-full py-9 rounded-tl-3xl rounded-tr-3xl bg-[#00434D] '>
        <div className='text border-t-[.1vw] border-b-[.1vw] font-bold border-zinc-200 flex gap-10  overflow-hidden whitespace-nowrap'>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ ease:"linear", repeat:Infinity ,duration:10}} className='text-[14vw]  uppercase flex gap-10 pr-20 font-[Founders_Grotesk_x_Condensed] leading-none -mb-15 -pt-10 '>we are orchi </motion.h1>

        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ ease:"linear",repeat:Infinity,duration:10}} className='text-[14vw]  uppercase flex gap-10 font-[Founders_Grotesk_x_Condensed] leading-none -mb-15  pr-20 -pt-10 '>we are orchi </motion.h1>

        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ ease:"linear",repeat:Infinity,duration:10}} className='text-[14vw]  uppercase flex gap-10 font-[Founders_Grotesk_x_Condensed] leading-none -mb-15  pr-20 -pt-10 '>we are orchi </motion.h1>
            
        </div>
      
    </div>
  )
}

export default Marquee

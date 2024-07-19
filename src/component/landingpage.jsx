import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';
const Landingpage=()=>{
    
    return(
        <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1 ">
            <div className="text-structure mt-40 px-20 " >
               
                    {["we create","eye opning","prenstations"].map((items,index)=>{
                        return( 
                        <div className="masker  ">
                            <div className="w-fit flex items-end overflow-hidden">
                                {index===1 && (<motion.div initial={{width:"0" }} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className="w-[8vw] mr-[1vw] rounded-md  h-[5.7vw] -top-[1.2vw] relativw bg-red-700"></motion.div> )}
                        
                            <h1 className=" key={index} text-[6vw] tracking-tighter uppercase  leading-[6.7vw] font-['Founders_Groteskt_x_Condensed'] font-bold">{items}</h1>
                            </div>
                            </div>
                        )
                    })}
                    
            </div>
            
            <div className= "border-t-[1px] text-sm gap-5 uppercase font-medium border-zinc-800 mt-15 flex justify-between items-center px-25 py-20">
                {["for public and the company","from the first pitch to IPO"].map((item,index)=><p className="text-md font-light tracking-tight leading-none key={index} ">{item}</p>)}
                <div className="start flex item-center text-sm gap-5 uppercase font-medium">
                <div className="px-4 py-2 border-[2px] rounded-full border-zinc-500 text-sm gap-5 uppercase font-medium   border-t-[1px]">
                start the project
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-zinc-500 font-light border-t-[1px] capitalize">
                <span className="rotate-[45deg]">
            <FaArrowUpLong /></span>
            </div>
            </div></div>
           
        </div>
    )
}
export default Landingpage
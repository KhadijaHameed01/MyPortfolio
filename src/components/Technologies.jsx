import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import {motion} from 'framer-motion';

const iconVariants= (duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    },
  }
})
const Technologies = () => {
    return (
      <div
      className="border-b border-neutral-800 pb-24">
        <motion.h1 
         whileInView={{opacity: 1, y:0}}
         initial={{opacity: 0, x: -100 }}
         transition={{duration:1.5}}
        className="my-20 text-center text-4xl pb-4 ml-[40%]">
          Technologies
        </motion.h1>
        <motion.div 
         whileInView={{opacity: 1, x:0}}
         initial={{opacity: 0, x: -100 }}
         transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-[#124559] p-4 shadow-md text-3xl text-blue-300">
            <RiReactjsFill />
          </motion.div>
          <motion.div 
           variants={iconVariants(4)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-[#124559] p-4 shadow-md text-3xl text-cyan-500">
            <RiTailwindCssFill />
          </motion.div>
          <motion.div 
           variants={iconVariants(6)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-[#124559] p-4 shadow-md text-3xl text-purple-500">
            <SiVite />
          </motion.div>
          <motion.div 
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-[#124559] p-4 shadow-md text-3xl text-green-500">
            <IoLogoNodejs />
          </motion.div>
        </motion.div>
      </div>
    );
  };
  
  export default Technologies;
  
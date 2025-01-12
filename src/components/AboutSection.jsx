import { AboutSectionContent } from "../assets/constant"
import { motion } from "framer-motion";

const AboutSection = () => {

    const{image, description}= AboutSectionContent[0];
  return (
    <div className="border-b border-neutral-900 pb-4">
   <h1 className="my-20 text-center text-4xl">
    About
    <span className="text-[#73ba9b]">{} Me</span>
   </h1>
   <div className="flex flex-wrap">
     <motion.div 
     whileInView={{opacity:1,x:0}}
     initial={{opacity:0,x:-100}}
     transition={{duration:0.5}}
     className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img  className='rounded-2xl' src={image} alt="" />
            </div> 
            </motion.div>
            <motion.div 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
            className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="flex justify-center item-center lg:justify-start">
                 <p className="my-2 max-w-xl py-6 font-light text-neutral-300 text-justify">{description}</p>
                </div>
     </motion.div>
   </div>
    </div>
  )
}

export default AboutSection
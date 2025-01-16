import { heroSectionContent } from "../assets/constant";
import { motion } from "framer-motion"; 


const container = (delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition: {duration:0.5,delay: delay},
  }
})

const Hero = () => {

  const { image, description } = heroSectionContent[0];
 
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
              className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl"
            >
              H. Khadija Hameed
            </motion.h1>
            <motion.span 
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
            className="bg-gradient-to-r from-[#124559] via-[#646e6a] to-[#73ba9b] bg-clip-text text-transparent text-4xl">
              Front-end Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tight text-justify">
              {description}
            </motion.p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={image} alt="Hero Section" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

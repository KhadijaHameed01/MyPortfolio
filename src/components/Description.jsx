
import {motion} from "framer-motion"
import { descriptionDetail } from "../assets/constant";
const Description = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 m-10"> 
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">
          Description
        </motion.h1>
        <motion.div
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.8}}
        className="text-neutral-300 font-small"
        >
          {descriptionDetail}
        </motion.div>
      
    
      </div>
    );
  };
  
  export default Description;
  


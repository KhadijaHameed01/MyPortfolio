import { projectsContent } from "../assets/constant"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
   <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
   className="my-20 text-center text-4xl ">
    Projects
   </motion.h2>
   <div>
  {
    projectsContent.map((project,index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:0.5}}
          className="w-full lg:w-1/4">
            <img src={project.image} 
            alt={project.title} 
            width={170}
            height={170}
            className="mb-6 rounded"/>
          </motion.div>
          <motion.div 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:100}}
           transition={{duration:0.5}}
          className="w-full lg:w-3/4 max-w-xl">
           <h6 className="mb-2 font-semibold">{project.title}</h6>
           <p className="mb-4 text-neutral-400">{project.description}</p>
           <p className="flex flex-col justify-evenly">
         <a href={project.github} className="mb-2 font-semibold text-neutral-300">{project.github}</a>
         <a href={project.liveLink} className="mb-2 font-semibold text-neutral-300">{project.liveLink}</a>
           </p>      
           {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 py-1 font-medium inline-block bg-neutral-900 rounded-full text-sm text-purple-800"
                  >
                    {technology}
                  </span>
                ))}
          </motion.div>
        </div>
    ))
  }
   </div>
    </div>
  )
}

export default Projects
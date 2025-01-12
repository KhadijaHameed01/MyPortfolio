

import AboutSection from "./components/AboutSection"
import Contact from "./components/Contact"
import Description from "./components/Description"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"


const App = () => {
  return (
    

  <div className="over-flow-x-hidden text-neutral-300 sm:space-x-2">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="relative h-full w-full bg-[rgb(1,22,30)]"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(1,22,30,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(1,22,30,.15),rgba(255,255,255,0))]"></div>
    </div>
    </div>
    <div className="conatiner mx-auto px-8">
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Technologies/>
      <Description/>
      <Projects/>
      <Contact/>
    </div>
  </div>
   
  )
}

export default App
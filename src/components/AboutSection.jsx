import { AboutSectionContent } from "../assets/constant";
import { motion } from "framer-motion";

const AboutSection = () => {
    const { description } = AboutSectionContent[0];

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-[#73ba9b]"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        {/* Stylish Container for LinkedIn Badge */}
                        <div className="p-6 bg-gradient-to-r  from-[#124559] via-[#646e6a] to-[#73ba9b] rounded-2xl shadow-xl w-80 flex items-center justify-center h-40">
                            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="khadija-hameed-018k" data-version="v1">
                                <a className="badge-base__link LI-simple-link text-white font-semibold" href="https://pk.linkedin.com/in/khadija-hameed-018k?trk=profile-badge" target="_blank" rel="noopener noreferrer">
                                    Click to Connect with me on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center items-center"
                >
                    <div className="flex justify-center items-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light text-neutral-300 text-justify">{description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutSection;

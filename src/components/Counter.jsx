
  import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: 1 },
  { label: "Projects Completed", value: 6 },
  { label: "Technologies Used", value: 5 },
];

const Counter = () => {
  return (
    <motion.div 
    whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
    className="border-b border-neutral-900 pb-4 m-10 rounded-2xl shadow-lg flex flex-wrap justify-center gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.h2
            className="text-4xl font-bold text-teal-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index*0.5 }}
          >
            {stat.value}+
          </motion.h2>
          <p className="text-lg text-gray-300">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Counter;
  


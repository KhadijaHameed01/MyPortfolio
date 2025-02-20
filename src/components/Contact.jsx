import { conctactContent } from "../assets/constant";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="border-b border-neutral-900 pb-20 text-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {conctactContent.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {conctactContent.phoneNo}
        </motion.p>
        <a href="#" className="my-4">
          {conctactContent.email}
        </a>
      </div>
      
      {/* Email Subscription Form */}
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="mt-8">
        <form onSubmit={handleSubscribe} className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-gradient-to-r from-[#124559] via-[#646e6a] to-[#73ba9b]  hover:scale-105 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;

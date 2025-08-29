import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import myImage from "../../assets/sahil0.jpg"; // replace with your image path

const Herosection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-100 px-6">
      
      {/* Background Glow Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center gap-14">
        
        {/* Left Image with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        > <br />
          <motion.img
            src={myImage}
            alt="Founder"
            className="w-80 h-80 md:w-[380px] md:h-[380px] object-cover rounded-3xl "
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-lg font-semibold text-green-600">👋 Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-2 leading-snug">
            Sahil <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">Khan Sehra</span>
          </h1>

          {/* Animated Roles */}
          <TypeAnimation
            sequence={[
              "Founder of CIHS Institute", 2000,
              "Trainer in Safety & Fire", 2000,
              "Industrial Safety Guide", 2000,
              "Motivator & Mentor", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block mt-4 text-2xl font-semibold text-green-700"
          />

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
            At CIHS, we are committed to{" "}
            <span className="font-semibold text-green-500">empowering students</span>  
            with practical expertise in safety, fire training, and industrial knowledge.  
            Our mission is to build professionals who make workplaces <span className="text-green-600 font-semibold">safer</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(34,197,94,0.6)" }}
              className="px-7 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
            >
              About CIHS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(34,197,94,0.3)" }}
              className="px-7 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;

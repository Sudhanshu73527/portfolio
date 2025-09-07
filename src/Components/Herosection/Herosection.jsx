import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import myImage from "../../assets/sahil0.jpg"; // replace with your image path

const Herosection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-50 via-white to-green-100 px-6">
      {/* 🔹 Animated Background Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-green-300/40 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* 🔹 Left Image with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            className="relative rounded-3xl shadow-2xl bg-white/30 backdrop-blur-lg p-3"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={myImage}
              alt="Founder"
              className="w-80 h-80 md:w-[380px] md:h-[380px] object-cover rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-5 -left-5 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🚀 Founder
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 🔹 Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-lg font-semibold text-green-600">
            👋 Hello, I'm
          </h2>

          {/* Main Name with Gradient & Underline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-2 leading-snug relative inline-block">
            Sahil{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
              Khan Sehra
            </span>
            <motion.span
              className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-700 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h1>

          {/* 🔹 Animated Roles */}
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
            <span className="font-semibold text-green-500">
              empowering students
            </span>{" "}
            with practical expertise in safety, fire training, and industrial
            knowledge. Our mission is to build professionals who make workplaces{" "}
            <span className="text-green-600 font-semibold">safer</span>.
          </p>

          {/* 🔹 CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 25px rgba(34,197,94,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow-lg flex items-center gap-2"
            >
              About CIHS <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(34,197,94,0.1)",
                boxShadow: "0px 0px 20px rgba(34,197,94,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 border-2 border-green-600 text-green-600 rounded-full flex items-center gap-2"
            >
              Contact Me <FaArrowRight />
            </motion.button>
          </div> <br />
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;

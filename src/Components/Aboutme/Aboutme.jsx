import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import myImage from "../../assets/sahil0.jpg"; // your image

const Aboutme = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-20 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Container (same width as hero section) */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-green-600">Me</span>
          </h2>

          {/* Typing Role Animation */}
          <TypeAnimation
            sequence={[
              "Founder & Director of CIHS Studies Pvt. Ltd.", 2000,
              "Leader at CIHS Institute", 2000,
              "Industrial Safety Expert", 2000,
              "Mentor & Job Creator", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-xl font-semibold text-green-700 mb-6"
          />

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Hi, I’m <span className="font-bold text-green-700">Sahil Khan Sehra</span>, 
            the proud <span className="text-green-600 font-bold">Founder & Director</span> of 
            <span className="text-green-500 font-semibold"> CIHS Studies Pvt. Ltd.</span>.  
            I lead <span className="font-semibold text-green-500">CIHS Institute</span> with a vision to 
            empower students through world-class education, industry-driven training, and 
            global opportunities.
          </p>

          {/* Highlight Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <GraduationCap className="w-10 h-10 text-green-600" />,
                title: "Qualification",
                desc: "Master in Fire & Safety, Industrial Safety Expert",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-green-600" />,
                title: "Experience",
                desc: "10+ years in Safety Training & Industry Consulting",
              },
              {
                icon: <Award className="w-10 h-10 text-green-600" />,
                title: "Leadership",
                desc: "Leading CIHS & creating career paths for students",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition"
              >
                {item.icon}
                <h3 className="font-semibold text-gray-800 mt-3">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission */}
          <p className="mt-10 text-gray-700 text-base leading-relaxed">
            My mission is not just to <span className="font-semibold text-green-700">educate</span>, 
            but to <span className="font-bold text-green-600">transform lives</span> by 
            creating professionals who are skilled, confident, and ready to lead in 
            workplace safety. Through CIHS, I have proudly created{" "}
            <span className="font-bold text-green-700">job opportunities</span> for 
            hundreds of students across India.
          </p>
        </motion.div>

        {/* Right Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative">
            <motion.img
              src={myImage}
              alt="Founder"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-green-400"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-green-300 animate-ping"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutme;

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, ShieldCheck, Briefcase, Award } from "lucide-react";

const CourseCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition"
  >
    {icon}
    <h3 className="font-semibold text-gray-800 mt-3 text-lg">{title}</h3>
    <p className="text-sm text-gray-500 mt-2">{desc}</p>
  </motion.div>
);

const Aboutcihs = () => {
  const courses = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
      title: "Fire & Safety Engg.",
      desc: "Training in fire prevention, protection & industrial safety.",
    },
    {
      icon: <BookOpen className="w-10 h-10 text-green-600" />,
      title: "Industrial Safety Diploma",
      desc: "Industry-oriented diploma for career growth.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Health & Environment",
      desc: "Focus on workplace health, safety & environment.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-green-600" />,
      title: "Job-Oriented Training",
      desc: "Skill-based programs to make students job-ready.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-white via-green-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            About <span className="text-green-600">CIHS</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            CIHS Studies Pvt. Ltd. is a leading institute dedicated to{" "}
            <span className="font-semibold text-green-700">world-class education</span> 
            in <span className="font-bold text-green-600">Fire Safety, Industrial Safety & Environment</span>.  
            We create industry-ready professionals with global opportunities.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((item, index) => (
            <CourseCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
          <p className="text-gray-600 mt-3">
            To empower students with{" "}
            <span className="font-semibold text-green-700">quality education</span>, 
            <span className="font-semibold text-green-700"> hands-on training</span> & 
            <span className="font-semibold text-green-700"> global opportunities</span>.  
            Making CIHS a trusted name in{" "}
            <span className="font-bold text-green-600">safety education worldwide.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutcihs;

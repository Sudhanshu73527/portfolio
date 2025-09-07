import React from "react";
import { motion } from "framer-motion";

// Example images (replace with your real ones from /assets)
import img1 from "../../assets/cihs1.jpg";
import img2 from "../../assets/cihs2.jpg";
import img3 from "../../assets/cihs3.jpg";
import img4 from "../../assets/cihs4.jpg";
import img5 from "../../assets/cihs5.jpg";

const Collab = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="py-12 bg-gray-50 font-outfit">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800"
        >
          Placement{" "}
          <span className="text-purple-500">Collaborations & Achievements</span>
        </motion.h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          At <span className="font-semibold">CIHS Studies Pvt. Ltd.</span>, we
          are proud of our collaborations with leading organizations that have
          provided excellent placement opportunities for our students.
        </p>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={img}
                alt={`Collaboration ${i + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collab;

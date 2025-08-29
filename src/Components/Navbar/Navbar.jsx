import React from "react";
import { ChevronDown, Code2 } from "lucide-react";
import logo from "../../assets/sahil0.jpg"; // replace with your logo path

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-2xl font-extrabold text-orange-600 tracking-wide">
            Sahil <span className="text-black">Khan</span>  
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
          <a href="#home" className="text-orange-600">Home</a>
          <a href="#resume" className="hover:text-orange-600">Resume</a>

          <div className="flex items-center space-x-1 hover:text-orange-600 cursor-pointer">
            <span>Service</span>
            <ChevronDown size={16} />
          </div>

          <div className="flex items-center space-x-1 hover:text-orange-600 cursor-pointer">
            <span>Portfolio</span>
            <ChevronDown size={16} />
          </div>

          <div className="flex items-center space-x-1 hover:text-orange-600 cursor-pointer">
            <span>Blogs</span>
            <ChevronDown size={16} />
          </div>

          <a href="#contact" className="hover:text-orange-600">Contact</a>
        </div>

        {/* Button */}
        <div>
          <a
            href="#contact"
            className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-full shadow hover:bg-orange-700 transition"
          >
            <Code2 size={18} />
            <span className="text-sm font-semibold uppercase">Need to Talk?</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

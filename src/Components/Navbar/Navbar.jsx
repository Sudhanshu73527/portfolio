import React from "react";
import { ChevronDown, Code2 } from "lucide-react";
import logo from "../../assets/sahil0.jpg"; // replace with your logo path

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-2xl font-extrabold text-orange-600 tracking-wide">
            Sahil <span className="text-black">Khan</span>  
          </span>
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

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Sahil Khan Sehra</h2>
          <p className="text-sm text-gray-400">
            Founder of <span className="text-green-400">CIHS Studies Pvt. Ltd.</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="hover:text-red-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sudhanshu Kumar. All rights reserved.
        <br />
        Powered by{" "}
        <a
          href="https://www.webala.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          Webala
        </a>
      </div>
    </footer>
  );
};

export default Footer;

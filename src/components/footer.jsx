import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">
            Anand Anupam
          </h2>

          <p className="mt-2 text-sm text-gray-400 max-w-md">
            Full Stack Developer passionate about building modern,
            responsive, and scalable web applications with React,
            Node.js, and MongoDB.
          </p>

          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Anand Anupam. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-white font-semibold tracking-wide">
            Connect With Me
          </h3>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-sm text-gray-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
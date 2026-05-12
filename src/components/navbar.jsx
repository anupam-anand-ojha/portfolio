import React from "react";

function Navbar() {
  return (
    <div className="navbar fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 lg:px-12 border-b border-gray-800">
      
      {/* Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold tracking-wide cursor-pointer">
          Anand<span className="text-blue-500">.</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2 text-[15px] font-medium">
          <li>
            <a className="hover:text-blue-400 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a className="hover:text-blue-400 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a className="hover:text-blue-400 transition duration-300">
              Projects
            </a>
          </li>

          <li>
            <a className="hover:text-blue-400 transition duration-300">
              Skills
            </a>
          </li>

          <li>
            <a className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Resume Button */}
      <div className="hidden md:block ml-4">
        <button className="btn btn-primary btn-sm">
          Resume
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-neutral rounded-box w-52"
        >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Skills</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
import React from "react";

function Navbar() {
  return (
   <div className="navbar fixed top-0 left-0 z-50 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg px-6 lg:px-12">
      <div className="flex-1">
        <a href="#home" className="text-2xl font-black">
          Anand<span className="text-primary">.</span>
        </a>
      </div>

      <div className="hidden md:flex">

        <ul className="menu menu-horizontal gap-2">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </div>

      <div className="hidden md:block">

        <a
          href="/resume.pdf"
          target="_blank"
          className="btn btn-primary"
        >
          Resume
        </a>

      </div>

      <div className="dropdown dropdown-end md:hidden">

        <div tabIndex={0} role="button" className="btn btn-ghost">
          ☰
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

    </div>
  );
}

export default Navbar;
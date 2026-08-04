import React from "react";

function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
    <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-120px)] max-w-7xl">
  <div className="navbar flex items-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-6 py-3">

    

    <div className="flex-1 flex justify-center">
      <ul className="menu menu-horizontal gap-3 text-white/95 ">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>



  </div>
</div>

      {/* Mobile Navbar */}

<div className="md:hidden navbar fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg px-auto">
  <div className="flex-1 flex items-center justify-between">

    <a href="#home" className="text-2xl font-black">
      Anand<span className="text-primary">.</span>
    </a>

    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost bg-base-100/70 backdrop-blur-xl border border-base-content/10"
      >
        ☰
      </div>

      {/* Dropdown menu */}
      <ul
            tabIndex={0}
            className="menu dropdown-content mt-3  w-56 rounded-2xl bg-white/20 backdrop-blur-3xl backdrop-saturate-150 shadow-xl border-t border-base-content/10 p-2"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

            <div className="divider my-1"></div>

            <li>
              <a
                href="/Anupam_Anand_Ojha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm w-full"
              >
                Resume
              </a>
            </li>
          </ul>

    </div>

  </div>
</div>
    </>
  );
}

export default Navbar;
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const handlesubmit = () => {
  window.open(
    "https://drive.google.com/file/d/1yrd9_53hlFHyFJhwqVWuh8uM5nmmcw7i/view?usp=sharing",
    "_blank",
  );
};
function Hero() {
  const heroRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-name",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          ".hero-role",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-stats",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          ".hero-image",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1,
          },
          "-=1",
        );
      tl.from(".resume-btn", {
        y: -200,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "bounce.out",
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative bg-base-100 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden md:block ">
        <img className="absolute inset-0 w-full h-full object-cover object-[93%_center] scale-[0.77] origin-top translate-x-[12%] max-[430px]:scale-[0.58] max-[430px]:translate-x-[21%] md:scale-100 md:translate-x-0 lg:scale-100 lg:translate-x-0 lg:origin-center lg:object-center" src="./Hero.jpg" alt="" />

        {/* Overlay */}

        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-35 lg:pt-35 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT */}
        <div className="flex-1 w-full">
          <p className="hero-name text-lg sm:text-xl mb-2 text-primary font-semibold">
            Hello, I'm
          </p>

          <h1 className="hero-role text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
            Anand
            <br />
            Anupam
          </h1>

          <h2 className=" text-2xl lg:text-3xl font-semibold mt-6 lg:mt-4 mb-8 text-white/60">
            Full Stack Developer & AI Enthusiast
          </h2>

          <p className="hero-desc text-xl lg:text-lg text-base-content/70 max-w-2xl">
            I build modern web applications, AI-powered tools, authentication
            systems and real-time platforms using React, Node.js, MongoDB and
            Socket.IO.
          </p>

          <div className="resume-btn flex flex-col sm:flex-row gap-4 mt-20 lg:mt-10 w-full sm:w-auto">
            <a href="#projects" className="btn btn-primary btn-md sm:btn-lg">
              View Projects
            </a>

            <button
              onClick={handlesubmit}
              className="resume-btn btn btn-outline btn-md sm:btn-lg"
            >
              Download Resume
            </button>
          </div>

          {/* STATS */}
          <div className="hero-stats stats stats-vertical lg:stats-horizontal shadow bg-white/10 border border-white/10 mt-30 lg:mt-16  w-full">
            <div className="stat">
              <div className="stat-title">Featured Projects</div>
              <div className="stat-value text-primary text-3xl sm:text-4xl">
                3+
              </div>
              <div className="stat-desc">Production Ready Apps</div>
            </div>

            <div className="stat">
              <div className="stat-title">Stack</div>
              <div className="stat-value text-blue-500 text-3xl sm:text-4xl">
                MERN
              </div>
              <div className="stat-desc">Full Stack Development</div>
            </div>

            <div className="stat">
              <div className="stat-title">Specialization</div>
              <div className="stat-value text-pink-400 text-3xl sm:text-4xl">
                AI
              </div>
              <div className="stat-desc">AI Integration</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex-1 flex justify-center">
          <div className="hero-image relative">
            <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full"></div>

            {/* <img
              src=""
              alt="developer"
              className="relative z-10 w-[350px] lg:w-[450px] rounded-3xl shadow-2xl"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

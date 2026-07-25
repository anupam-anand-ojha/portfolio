import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const handlesubmit = () => {
  window.open(
    "https://drive.google.com/file/d/1GkyDKo3ugAD4pT3txFDwyutGielgr163/view?usp=sharing",
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
      className="bg-base-100 min-h-screen flex items-center"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <img className="w-full h-full object-cover" src="./Hero.jpg" alt="" />

        {/* Overlay */}

        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-24 lg:pt-35 flex flex-col lg:flex-row item-center justify-between gap-12">
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

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 mb-8 text-base-content/80">
            Full Stack Developer & AI Enthusiast
          </h2>

          <p className="hero-desc text-base sm:text-lg text-base-content/70 max-w-2xl">
            I build modern web applications, AI-powered tools, authentication
            systems and real-time platforms using React, Node.js, MongoDB and
            Socket.IO.
          </p>

          <div className="resume-btn flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
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
          <div className="hero-stats stats stats-vertical lg:stats-horizontal shadow bg-base-100 mt-16 w-full">
            <div className="stat">
              <div className="stat-title">Featured Projects</div>
              <div className="stat-value text-primary text-3xl sm:text-4xl">
                3+
              </div>
              <div className="stat-desc">Production Ready Apps</div>
            </div>

            <div className="stat">
              <div className="stat-title">Stack</div>
              <div className="stat-value text-secondary text-3xl sm:text-4xl">
                MERN
              </div>
              <div className="stat-desc">Full Stack Development</div>
            </div>

            <div className="stat">
              <div className="stat-title">Specialization</div>
              <div className="stat-value text-accent text-3xl sm:text-4xl">
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
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
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

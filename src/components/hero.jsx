import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const heroRef = useRef();

  useGSAP(() => {
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
        "-=0.3"
      )
      .from(
        ".hero-role",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        ".hero-desc",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .from(
        ".hero-buttons",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ".hero-stats",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        ".hero-image",
        {
          scale: 0.7,
          opacity: 0,
          duration: 1,
        },
        "-=1"
      );
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      id="home"
      className="bg-base-200 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 pt-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <div className="flex-1">

          <div className="badge badge-primary badge-lg hero-badge mb-6">
            Available For Internship
          </div>

          <p className="hero-name text-xl mb-2 text-primary font-semibold">
            Hello, I'm
          </p>

          <h1 className="hero-role text-6xl lg:text-7xl font-black leading-tight">
            Anand
            <br />
            Anupam
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold mt-4 mb-8 text-base-content/80">
            Full Stack Developer & AI Enthusiast
          </h2>

          <p className="hero-desc text-lg text-base-content/70 max-w-2xl">
            I build modern web applications, AI-powered tools,
            authentication systems and real-time platforms using
            React, Node.js, MongoDB and Socket.IO.
          </p>

          <div className="hero-buttons flex flex-wrap gap-4 mt-10">
            <button className="btn btn-primary btn-lg">
              View Projects
            </button>

            <button className="btn btn-outline btn-lg">
              Download Resume
            </button>
          </div>

          {/* STATS */}
          <div className="hero-stats stats shadow bg-base-100 mt-16">

            <div className="stat">
              <div className="stat-title">
                Featured Projects
              </div>
              <div className="stat-value text-primary">
                3+
              </div>
              <div className="stat-desc">
                Production Ready Apps
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">
                Stack
              </div>
              <div className="stat-value text-secondary">
                MERN
              </div>
              <div className="stat-desc">
                Full Stack Development
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">
                Specialization
              </div>
              <div className="stat-value text-accent">
                AI
              </div>
              <div className="stat-desc">
                AI Integration
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}

        <div className="flex-1 flex justify-center">

          <div className="hero-image relative">

            <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              alt="developer"
              className="relative z-10 w-[350px] lg:w-[450px] rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
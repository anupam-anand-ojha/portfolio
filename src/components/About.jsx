import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef();

  const isMobile = window.innerWidth < 768;

  useGSAP(() => {
    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
        toggleActions: "play reverse play reverse"
      },
        x: isMobile ? 10 : 100,
      opacity: 0,
      duration: 1.2,
    });

    gsap.from(".about-content", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
       toggleActions: "play reverse play reverse"
      },
      y: 60,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%",
        toggleActions: "play reverse play reverse"
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });
  }, { scope: aboutRef });

  return (
    <section
      ref={aboutRef}
      id="about"
      className="hero bg-base-100 min-h-screen py-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-16 max-w-7xl">

        {/* IMAGE */}

        <div className="flex-1 about-image overflow-hidden">
          <img
            src="./H1.png"
            alt="Developer Workspace"
            className="block w-full max-w-sm lg:max-w-lg mx-auto rounded-3xl shadow-2xl"
          />
        </div>

        {/* CONTENT */}

        <div className="flex-1 about-content">

          <div className="badge badge-primary badge-lg mb-6">
            About Me
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            Building Products,
            <br />
            Not Just Projects
          </h1>

          <p className="py-8 text-lg text-base-content/70">
            I'm a Full Stack Developer focused on creating
            real-world applications that solve practical problems.
            I enjoy transforming ideas into complete digital
            products that users can actually use.
          </p>

          <p className="pb-6 text-base-content/70">
            My experience includes AI integrations,
            authentication systems, role-based access control,
            real-time communication using Socket.IO,
            REST APIs, MongoDB database design,
            and deploying production-ready applications.
          </p>

          <p className="pb-10 text-base-content/70">
            Most of my learning comes from building projects.
            Whether it's Resumify, Muzeek or ChatBeez,
            I love turning ideas into scalable web experiences
            that solve real-world problems.
          </p>

          {/* HIGHLIGHTS */}

          <div className="grid grid-cols-2 gap-4 mb-10">

            <div className="card bg-white/10 backdrop-blur-xl border border-white/10  about-card">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-primary">
                  3+
                </h3>
                <p>Featured Projects</p>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-xl border border-white/10 about-card">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-blue-400">
                  MERN
                </h3>
                <p>Full Stack Development</p>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-xl border border-white/10 about-card">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-purple-400">
                  AI
                </h3>
                <p>AI Integration</p>
              </div>
            </div>

            <div className="card bg-white/10 backdrop-blur-xl border border-white/10 about-card">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-green-300">
                  Socket.IO
                </h3>
                <p>Real-Time Systems</p>
              </div>
            </div>

          </div>

          <a href="#projects" className="btn btn-primary btn-lg">
            Explore My Projects
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;
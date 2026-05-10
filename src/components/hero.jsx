import React from "react";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">Anand Anupam</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
            I build modern, scalable, and responsive web applications
            using React, Node.js, Express, and MongoDB.
            Passionate about creating clean UI and smooth user experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary px-8">
              View Projects
            </button>

            <button className="btn btn-outline btn-info px-8">
              Download Resume
            </button>
          </div>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="badge badge-primary badge-lg">React</span>
            <span className="badge badge-secondary badge-lg">Node.js</span>
            <span className="badge badge-accent badge-lg">MongoDB</span>
            <span className="badge badge-info badge-lg">Express</span>
            <span className="badge badge-success badge-lg">Tailwind CSS</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="profile"
            className="w-[320px] md:w-[420px] rounded-3xl border border-gray-800 shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
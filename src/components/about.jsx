import React from "react";

function About() {
  return (
    <section
      id="about"
      className="hero bg-base-100 min-h-screen py-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-16 max-w-7xl">

        {/* IMAGE */}

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900"
            alt="developer workspace"
            className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
          />
        </div>

        {/* CONTENT */}

        <div className="flex-1">

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
            and deploying full-stack applications.
          </p>

          <p className="pb-10 text-base-content/70">
            Most of my learning comes from building projects.
            Whether it's an AI Resume Builder,
            a Role-Based Music Platform,
            or a Real-Time Chat Application,
            I love turning complex ideas into
            scalable web experiences.
          </p>

          {/* HIGHLIGHTS */}

          <div className="grid grid-cols-2 gap-4 mb-10">

            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-primary">
                  3+
                </h3>
                <p>Major Projects</p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-secondary">
                  MERN
                </h3>
                <p>Full Stack Development</p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="font-bold text-2xl text-accent">
                  AI
                </h3>
                <p>Integrated Applications</p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="font-bold text-2xl">
                  Socket.IO
                </h3>
                <p>Real-Time Systems</p>
              </div>
            </div>

          </div>

          <button className="btn btn-primary btn-lg">
            Explore My Projects
          </button>

        </div>
      </div>
    </section>
  );
}

export default About;
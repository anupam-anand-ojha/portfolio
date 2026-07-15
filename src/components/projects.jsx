import React from "react";

function Projects() {
  const projects = [
    {
      title: "Resumify",
      image: "/photo1.png",
      desc:
        "AI-powered resume builder that generates professional resumes from user inputs using AI integration.",
      tech: "React • Node.js • MongoDB • Express • AI API",
      github: "https://github.com/anupam-anand-ojha/resumify-ai-backend",
      live: "https://getresumify.vercel.app",
    },
    {
      title: "Muzeek",
      image: "/photo2.png",
      desc:
        "Role-based music platform where artists upload songs and users enjoy seamless streaming.",
      tech: "React • Express • MongoDB • JWT Auth",
      github: "https://github.com/anupam-anand-ojha/muzeek-app-backend",
      live: "https://playmuzeek.vercel.app",
    },
    {
      title: "ChatBeez",
      image:"/photo3.png",
      desc:
        "Real-time chat application powered by Socket.IO with instant messaging capabilities.",
      tech: "React • Node.js • Socket.IO • MongoDB",
      github: "https://github.com/anupam-anand-ojha/ChatBeez-Frontend",
      live: "https://chatbeez.vercel.app",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-base-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="badge badge-primary badge-lg mb-6">
            Projects
          </div>

          <h2 className="text-5xl lg:text-6xl font-black">
            Featured Projects
          </h2>

          <p className="mt-6 text-base-content/70">
            Some of the applications I've built.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card bg-base-100/10 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:-translate-y-3 hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden group"
            >
              <figure className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="text-base-content/70 leading-7">
                  {project.desc}
                </p>

                <div className="badge badge-outline mt-2 py-4 px-4">
                  {project.tech}
                </div>

                <div className="card-actions justify-end mt-6">
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="btn btn-outline btn-sm hover:scale-105 transition"
                  >
                    GitHub
                  </button>

                  <button
                    onClick={() => window.open(project.live, "_blank")}
                    className="btn btn-primary btn-sm hover:scale-105 transition"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
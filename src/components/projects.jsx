import React from "react";

function Projects() {
  const projects = [
    {
      title: "Resumify",
      image:
        "photo2.png",
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
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900",
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
              className="card bg-base-200 shadow-xl"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>

                <p className="text-base-content/70">
                  {project.desc}
                </p>

                <div className="badge badge-outline mt-2">
                  {project.tech}
                </div>

                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() =>
                      window.open(project.github, "_blank")
                    }
                    className="btn btn-outline btn-sm"
                  >
                    GitHub
                  </button>

                  <button
                    onClick={() =>
                      window.open(project.live, "_blank")
                    }
                    className="btn btn-primary btn-sm"
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
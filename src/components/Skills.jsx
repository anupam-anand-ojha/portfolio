import React from "react";

function Skills() {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "DaisyUI",
    "Socket.IO",
    "JWT Auth",
    "REST API",
    "Git & GitHub",
    "AI Integration",
    "GSAP",
    "Postman ",
    "Cloudinary",
    "Render",
    "Vercel",

  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-base-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="badge badge-primary badge-lg mb-6">
            Skills
          </div>

          <h2 className="text-5xl lg:text-6xl font-black">
            Technologies I Use
          </h2>

          <p className="mt-6 text-base-content/70 max-w-2xl mx-auto">
            Tools and technologies I use to build
            scalable web applications, AI-powered
            products and real-time systems.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="card bg-base-100 shadow-xl hover:scale-105 transition duration-300"
            >
              <div className="card-body items-center text-center">

                <h3 className="font-bold text-xl">
                  {skill}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
function Skills() {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind",
    "DaisyUI",
    "Socket.IO",
    "JWT",
    "Git",
    "GitHub",
    "REST API",
    "AI Integration"
  ];

  return (
    <section className="min-h-screen bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-center mb-12 text-base-content/70">
          Technologies I use to build products.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {skills.map((skill)=>(
            <div
              key={skill}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body items-center">
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
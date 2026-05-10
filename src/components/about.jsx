import React from 'react'

function About() {
  return (
    <div className="bg-base-200 min-h-screen px-6 py-12">

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-72 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://avatars.githubusercontent.com/u/583231?v=4" 
              alt="profile"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hi, I'm Anand 👋
          </h1>

          <p className="text-lg mb-4">
            I'm a passionate Full Stack Developer who loves building modern web applications 
            using React, Node.js and clean UI frameworks.
          </p>

          <p className="mb-6 text-base-content/70">
            I enjoy turning ideas into real products. Currently focused on improving my skills 
            in frontend animations, backend systems and scalable architecture.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-outline">Download Resume</button>
          </div>
        </div>

      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3">
          <span className="badge badge-primary">React</span>
          <span className="badge badge-secondary">Node.js</span>
          <span className="badge badge-accent">MongoDB</span>
          <span className="badge badge-info">JavaScript</span>
          <span className="badge badge-success">Tailwind</span>
        </div>
      </div>

      {/* FAQ / Extra Section */}
      <div className="max-w-3xl mx-auto mt-16 space-y-4">

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title font-semibold">
            Who am I?
          </div>
          <div className="collapse-content text-sm">
            I'm a developer focused on building user-friendly and performant web apps.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold">
            What do I do?
          </div>
          <div className="collapse-content text-sm">
            I build full stack applications, APIs and modern frontend UIs.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold">
            My goal?
          </div>
          <div className="collapse-content text-sm">
            To become a top developer and work on impactful real-world products.
          </div>
        </div>

      </div>

    </div>
  )
}

export default About
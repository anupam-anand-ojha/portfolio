import React from 'react'

function About() {
  return (
 <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <p className="text-sm text-primary font-semibold mb-10">About Me</p>

      <h1 className="text-5xl font-bold leading-tight">
        Are you looking for a Full Stack Developer? <br />
         I can help you build AI-powered web apps
      </h1>

      <p className="py-8 text-base-content/70">
        I build scalable web applications and integrate AI to turn ideas into intelligent, real-world products.
        With hands-on experience across the MERN stack, I handle everything from crafting responsive React interfaces 
        to building robust Node.js backends, managing secure databases, and deploying production-ready applications.
      </p>

      <p className="pb-20 text-base-content/70">
        I focus on solving real problems whether through workflow automation or smarter user experiences powered by AI.
        I care about clean architecture, maintainable code, and building products that are fast, scalable, and genuinely useful.
      </p>

      <button className="btn btn-primary">More About Me</button>
    </div>
  </div>
</div>
  )
}

export default About
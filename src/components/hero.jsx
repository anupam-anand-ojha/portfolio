import React from 'react'

function Hero() {
  return (
    <div className="bg-base-200 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <p className="text-lg mb-2">Hi I am</p>

          <h2 className="text-2xl font-semibold mb-2">
            Anand Anupam
          </h2>

          <h1 className="text-5xl font-bold leading-tight mb-10">
            Full Stack Developer
          </h1>

          <p className="mb-6 text-base-content/70 max-w-xl">
            I build scalable web applications and integrate AI to turn ideas into intelligent, real-world products.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="btn btn-primary">Hire Me</button>
            <button className="btn btn-outline">Download CV</button>
          </div>

          {/* STATS */}
          <div className="stats shadow bg-base-100 mt-16">
            <div className="stat">
              <div className="stat-title">Coding</div>
              <div className="stat-value">4+</div>
              <div className="stat-desc">Years of Experience</div>
            </div>

            <div className="stat">
              <div className="stat-title">Projects</div>
              <div className="stat-value">20+</div>
              <div className="stat-desc">Projects Completed</div>
            </div>

            <div className="stat">
              <div className="stat-title">Clients</div>
              <div className="stat-value">80+</div>
              <div className="stat-desc">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-80 rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
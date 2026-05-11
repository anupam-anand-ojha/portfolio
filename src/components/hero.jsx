import React from 'react'

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />

    <div>
      <h1 className="text-5xl font-bold">Hi, I'm Anupam 👋</h1>

      <p className="py-6">
        I’m a full-stack developer passionate about building modern web apps 
        with clean UI and efficient backend systems. I love turning ideas into 
        real-world projects.
      </p>

      <button className="btn btn-primary">View Projects</button>
    </div>

  </div>
</div>
  )
}

export default Hero
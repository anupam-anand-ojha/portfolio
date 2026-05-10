import React from 'react'

function About() {
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="card card-sm bg-base-200 max-w-60 shadow">
  <figure className="hover-gallery">
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />

    <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
    <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex justify-between">
      My Profile
      <span className="font-normal">Developer</span>
    </h2>
    <p>Passionate MERN stack developer building modern and responsive web apps</p>
  </div>
</div>
    <div>
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">
        I am a self-taught developer focused on creating clean UI and functional backend systems.
        I love working with React, Node.js and building real-world projects.
      </p>
      <button className="btn btn-primary">View Projects</button>
    </div>
  </div>
  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">Who am I?</div>
  <div className="collapse-content text-sm">I am a MERN stack developer who enjoys building full-stack applications.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What technologies do I use?</div>
  <div className="collapse-content text-sm">I work with React, Node.js, Express, MongoDB and modern UI libraries.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">What are my goals?</div>
  <div className="collapse-content text-sm">To become a skilled full-stack developer and build impactful real-world projects.</div>
</div>

</div>


  )
}

export default About
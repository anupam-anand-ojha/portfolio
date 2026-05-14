import React from 'react'

function Contact() {
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />

    <div>
      <h1 className="text-5xl font-bold">Get In Touch</h1>

      <p className="py-6">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new ideas, freelance opportunities, or
        building something amazing together.
      </p>

      {/* CONTACT FORM */}
      <div className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
        />

        <textarea
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <button className="btn btn-primary">Send Message</button>
      </div>
    </div>

  </div>
</div>
  )
}

export default Contact
import React from 'react'

function Contact() {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">

    {/* RIGHT SIDE FORM */}
    <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">

          <div className="flex gap-4">
            <input type="text" className="input w-full" placeholder="Your name" />
            <input type="email" className="input w-full" placeholder="your@email.com" />
          </div>

          <input type="text" className="input mt-4" placeholder="What's this about?" />

          <textarea
            className="textarea mt-4 h-32"
            placeholder="Tell me about your project..."
          ></textarea>

          <button className="btn btn-primary mt-6">
            Send Message
          </button>

        </fieldset>
      </div>
    </div>

    {/* LEFT SIDE CONTENT */}
    <div className="text-center lg:text-left max-w-xl">
      <h1 className="text-5xl font-bold mb-4">
        Get In <span className="text-primary">Touch</span>
      </h1>

      <p className="py-4 text-base-content/70">
        Ready to work together? I'd love to hear from you. Send me a message and
        let's discuss your next project.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Let's Connect
      </h2>

      <p className="text-base-content/70 mb-6">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new ideas or building something amazing together
      </p>

      <div className="space-y-3">
        <p><strong>Email:</strong> theanupamojha999@gmail.com</p>
        <p><strong>Phone:</strong> +91 7970675598</p>
        <p><strong>Location:</strong> India</p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Contact
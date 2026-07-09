import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-base-200 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <div className="badge badge-primary badge-lg mb-6">
            Contact
          </div>

          <h2 className="text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="mt-6 text-base-content/70">
            Open for freelance projects,
            and collaboration opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="card bg-base-100 shadow-xl">

            <div className="card-body">

              <h3 className="card-title text-2xl">
                Contact Information
              </h3>

              <p>
                Email:
                <br />
                <strong>
                  theanupamojha999@gmail.com
                </strong>
              </p>

              <p>
                Location:
                <br />
                <strong>India</strong>
              </p>

              <p>
                Availability:
                <br />
                <strong>
                  Open For Internship & Freelance
                </strong>
              </p>

            </div>

          </div>

          <div className="card bg-base-100 shadow-xl">

            <div className="card-body">

              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
              />

              <textarea
                className="textarea textarea-bordered h-40"
                placeholder="Message"
              />

              <button className="btn btn-primary">
                Send Messages
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
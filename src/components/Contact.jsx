import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


function Contact() {
  const container = useRef(); 

useGSAP(() => {
  // Heading 
gsap.from(".contact-heading", {
  scrollTrigger: {
    trigger: container.current,
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
 }, {scope: container});


  return (
    <section id="contact"
      ref={container}
     className="min-h-screen bg-base-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className=" contact-heading text-center mb-16">
          <div className="badge badge-primary badge-lg mb-6">
            Contact
          </div>

          <h2 className="text-5xl font-black">
            Let's Work Together
          </h2>

          <p className=" contact-heading mt-6 text-base-content/70 max-w-2xl mx-auto">
            Open for internships, freelance projects, and collaboration opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="card glass bg-base-100/20 border border-white/20 backdrop-blur-2xl shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="card-body p-8">

              <h3 className="card-title text-3xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-sm opacity-70 uppercase">
                    Email
                  </p>
                  <p className="font-semibold text-lg">
                    theanupamojha999@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-sm opacity-70 uppercase">
                    Location
                  </p>
                  <p className="font-semibold text-lg">
                    India
                  </p>
                </div>

                <div>
                  <p className="text-sm opacity-70 uppercase">
                    Availability
                  </p>
                  <p className="font-semibold text-lg">
                    Open For Internship & Freelance
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="card glass bg-base-100/20 border border-white/20 backdrop-blur-2xl shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="card-body p-8">

              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-white/20 border-white/20 backdrop-blur-md"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full bg-white/20 border-white/20 backdrop-blur-md"
              />

              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered h-40 w-full bg-white/20 border-white/20 backdrop-blur-md"
              />

              <button className="btn btn-primary w-full">
                Send Message
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
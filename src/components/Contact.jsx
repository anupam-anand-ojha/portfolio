import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const container = useRef();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e22921e9-1fa6-4ddc-9f54-b3e76635f309");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setResult(
      data.success ? "Message Sent Successfully!" : "Something went Wrong!",
    );

    if (data.success) {
      event.target.reset();
    }
  };

  useGSAP(
    () => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="contact"
      ref={container}
      className="min-h-screen bg-base-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="contact-title text-center mb-16">
          <div className="badge badge-primary badge-lg mb-6">Contact</div>

          <h2 className="text-5xl font-black">Let's Work Together</h2>

          <p className="mt-6 text-base-content/70 max-w-2xl mx-auto">
            Open for internships, freelance projects, and collaboration
            opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="contact-info card glass bg-base-100/20 border border-white/20 backdrop-blur-2xl shadow-2xl">
            <div className="card-body p-8">
              <h3 className="card-title text-3xl mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm opacity-70 uppercase">Email</p>

                  <p className="font-semibold text-lg">
                    theanupamojha999@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-sm opacity-70 uppercase">Location</p>

                  <p className="font-semibold text-lg">India</p>
                </div>

                <div>
                  <p className="text-sm opacity-70 uppercase">Availability</p>

                  <p className="font-semibold text-lg">
                    Open For Internship & Freelance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form card bg-base-100/20 border border-white/20 backdrop-blur-2xl shadow-2xl">
            <div className="card-body p-8">
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white/20 border-white/20 backdrop-blur-md"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="input input-bordered w-full bg-white/20 border-white/20 backdrop-blur-md"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  className="textarea textarea-bordered h-40 w-full bg-white/20 border-white/20 backdrop-blur-md"
                />

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>

                <p className="text-center text-sm">{result}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

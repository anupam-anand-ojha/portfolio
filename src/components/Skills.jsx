import React, { useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const [showAll, setShowAll] = useState(false);
 
  const container = useRef();

  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "CRUD",
    "Tailwind CSS",
    "DaisyUI",
    "Socket.IO",
    "WebSockets",
    "JWT Auth",
    "REST API",
    "Git & GitHub",
    "AI Integration",
    "OpenAI API",
    "GSAP",
    "Postman",
    "Cloudinary",
    "Render",
    "Vercel",
    "Gemini AI",

  ];
   const visibleSkills = showAll ? skills : skills.slice(0, 5);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".skill-card");

      gsap.set(cards, {
        opacity: 0,
        scale: 0.7,
        y: 50,
      });

      gsap.to(cards, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2.0,
        ease: "back.out(1.7)",
        stagger: 0.10,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play reset play reset",
        },
      });
    },
    { scope: container }
  );

 return (
  <section
    ref={container}
    id="skills"
    className="min-h-screen bg-base-100 py-24"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="badge badge-primary badge-lg mb-6">
          Skills
        </div>

        <h2 className="text-5xl lg:text-6xl font-black">
          Technologies I Use
        </h2>

        <p className="mt-6 text-base-content/70 max-w-2xl mx-auto">
          Tools and technologies I use to build scalable web applications,
          AI-powered products and real-time systems.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(window.innerWidth < 768 ? visibleSkills : skills).map((skill) => (
          <div
            key={skill}
            className="skill-card card bg-base-200 shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="card-body items-center text-center">
              <h3 className="font-bold text-xl">{skill}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Only Button */}
      <div className="md:hidden flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn btn-primary rounded-full"
        >
          {showAll
            ? "Show Less"
            : `+${skills.length - 5} More Skills`}
        </button>
      </div>
    </div>
  </section>
);
}

export default Skills;
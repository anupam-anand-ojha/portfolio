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
    "REST API",
    "CRUD",
    "Tailwind CSS",
    "DaisyUI",
    "Socket.IO",
    "WebSockets",
    "JWT Auth",
    "Redux Toolkit",
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

useGSAP(() => {
  // Heading 
gsap.from(".skills-heading", {
  scrollTrigger: {
    trigger: ".skills-heading",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
  // Cards 
  gsap.from(".skills-card", {
       scrollTrigger: {
         trigger: container.current,
         start: "top 60%",
         toggleActions: "play reverse play reverse"
       },
       y: 80,
       opacity: 0,
       duration: 0.8,
       stagger: 0.2,
     });
   }, { scope: container });


 return (
  <section
    ref={container}
    id="skills"
    className="min-h-auto lg:min-h-screen bg-base-100 py-20"
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="skills-heading text-center mb-16">
        <div className="badge badge-primary badge-lg mb-6">
          Skills
        </div>

        <h2 className=" skills-heading text-5xl lg:text-6xl font-black">
          Technologies I Use
        </h2>

        <p className=" skills-card card mt-6 text-base-content/70 max-w-2xl mx-auto">
          Tools and technologies I use to build scalable web applications,
          AI-powered products and real-time systems.
        </p>
      </div>

      {/* Skills Grid */}
      <div className=" skills-card grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {(window.innerWidth < 768 ? visibleSkills : skills).map((skill) => (
          <div
            key={skill}
            className=" bg-base-200 shadow-xl hover:scale-105 transition-all duration-300"
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
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";




function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/> 
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
  
   </>
  )
}

export default App
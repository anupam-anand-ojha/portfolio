import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import TextRotate from './components/textRotate'
import Projects from './components/projects'
import Footer from './components/footer'
import Contact from './components/contact'


function App() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/> 
   <TextRotate/>
   <Projects/>
   <Contact/>
   <Footer/>
  
   </>
  )
}

export default App
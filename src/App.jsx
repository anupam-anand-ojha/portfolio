import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/About'
import TextRotate from './components/textRotate'
import Projects from './components/projects'
import Footer from './components/footer'


function App() {
  return (
   <>
   <Navbar/>
   <About/> 
   <Hero/>
   <TextRotate/>
   <Projects/>
   <Footer/>
  
   </>
  )
}

export default App
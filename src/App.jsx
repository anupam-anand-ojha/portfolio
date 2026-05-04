import React from 'react'
import navbar from './components/navbar'
import hero from './components/hero'
import about from './components/about'
import projects from './components/projects'
import footer from './components/footer'
import textRotate from './components/textRotate'


function App() {
  return (
   <>
   <navbar/>
   <hero/>
   <about/> 
   <textRotate/>
   <projects/>
   <footer/>
  
   </>
  )
}

export default App
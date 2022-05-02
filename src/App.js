import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
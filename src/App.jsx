import { useState } from 'react'
import './index.css'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import About from './components/About'
import Services from './components/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Work />
      <Contact />
    </div>
  )
}

export default App

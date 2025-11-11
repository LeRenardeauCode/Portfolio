import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import Header from './components/Header'
import Projects from './components/Projects'
import Formations from './components/Formations'
import Competences from './components/Competences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projets')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <AnimatePresence>{loading && <Loader onFadeOut={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Cursor />
          <NavBar />
          <Header onScrollToProjects={handleScrollToProjects} />
          <Projects />
          <Formations />
          <Competences />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App

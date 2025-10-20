import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Formation from './components/Formation'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

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
          <Header />
          <Presentation />
          <Projects />
          <Formation />
          <Skills />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App

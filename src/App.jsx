import Loader from './components/Loader'
import Header from './components/Header'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Formation from './components/Formation'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) return <Loader />
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Formation />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import { useState, useRef } from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import loaderAnimation from '../images/Logo Assets/Animation - 1760177106591.json'
import PropTypes from 'prop-types'

function Loader({ onFadeOut }) {
  const [fade, setFade] = useState(false)
  const containerRef = useRef(null)

  const handleComplete = () => {
    setFade(true)
    setTimeout(() => {
      if (onFadeOut) onFadeOut()
    }, 1000)
  }

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: fade ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-80 h-80">
        <Lottie
          animationData={loaderAnimation}
          loop={false}
          onComplete={handleComplete}
          // Ne pas relancer l'animation lors de la transition
          isPaused={fade}
        />
      </div>
    </motion.div>
  )
}

Loader.propTypes = {
  onFadeOut: PropTypes.func,
}

export default Loader

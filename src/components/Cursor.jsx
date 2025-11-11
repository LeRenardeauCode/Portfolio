import { useState, useEffect } from 'react'

function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 }) // invisible au début
  const [smoothPosition, setSmoothPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Anim smooth pour créer un lag (déplacement progressif)
  useEffect(() => {
    let animationFrame
    const follow = () => {
      setSmoothPosition((pos) => ({
        x: pos.x + (position.x - pos.x) * 0.2,
        y: pos.y + (position.y - pos.y) * 0.2,
      }))
      animationFrame = requestAnimationFrame(follow)
    }
    follow()
    return () => cancelAnimationFrame(animationFrame)
  }, [position])

  return (
    <div
      style={{
        position: 'fixed',
        left: smoothPosition.x - 15, // décale pour centrer le cercle
        top: smoothPosition.y - 15,
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 204, 0, 0.33)', // jaune semi transparent
        pointerEvents: 'none', // pour laisser passer les clics
        transform: 'translate3d(0, 0, 0)',
        transition: 'background-color 0.3s ease',
        zIndex: 9999,
      }}
    />
  )
}

export default CursorFollower

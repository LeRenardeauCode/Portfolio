import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../images/Logo Assets/logo sans fond (blanc).png'

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'presentation', label: 'Présentation' },
    { id: 'projets', label: 'Projets' },
    { id: 'formations', label: 'Formations' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-black/50 border-b border-gray-800' : 'bg-black'
      }`}
    >
      <div className="mx-auto px-6 py-4 bg-neutral-900/80">
        <div className="flex justify-between items-center">
          {/* Logo à gauche */}
          <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="">
              <img src={logo} alt="Logo" className="h-10 w-10 scale-150" />
            </div>
            <span className="text-[16px] font-normal text-gray-200 font-heading">Ewan POIRET</span>
          </a>

          {/* Menu desktop à droite (caché sur mobile) */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative text-sm font-medium transition-all duration-200
        ${activeLink === link.id ? 'text-teal-500 dark:text-teal-300' : 'text-slate-500 dark:text-gray-300'}
        group px-3 py-1 rounded-md
    `}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveLink(link.id)
                  }}
                >
                  <span className="relative z-10 text-heading text-yellow-400">{link.label}</span>
                  <span
                    className="absolute inset-0 rounded-md opacity-0 scale-95
        group-hover:opacity-100 group-hover:scale-105
        group-hover:bg-orange-400
        transition-all duration-200
        -z-10"
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger menu (visible sur mobile uniquement) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-200 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-200 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-200 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </div>

        {/* Menu mobile (dropdown) */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 pt-6 pb-4 border-t border-gray-800 mt-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block text-sm font-normal transition-colors ${
                    activeLink === link.id
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveLink(link.id)
                    setIsMenuOpen(false)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar

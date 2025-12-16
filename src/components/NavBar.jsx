import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../images/Logo Assets/logo sans fond (blanc).png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('header')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'header', label: 'Accueil' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'formations', label: 'Formations' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900 border-b border-neutral-900 shadow-md'
          : 'bg-neutral-900/0 border-b-0 shadow-none'
      }`}
    >
      <div
        className="mx-auto px-6 py-4 bg-neutral-900/80 animate-fadeInUp"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        onClick={() => setActiveLink('header')}
      >
        <div className="flex justify-between items-center">
          {/* Logo à gauche */}
          <a
            href="#header"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setActiveLink('header')}
          >
            <div className="">
              <img src={logo} alt="Logo" className="h-10 w-10 scale-150" />
            </div>
            <span className="text-[16px] font-normal text-gray-200 font-heading">Ewan POIRET</span>
          </a>

          {/* Menu desktop à droite (caché sur mobile) */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative inline-flex text-sm font-medium transition-all duration-200 px-3 py-1 rounded-md text-yellow-300 group border-b-2 ${
                      activeLink === link.id
                        ? link.id === 'header'
                          ? 'border-transparent'
                          : 'border-yellow-500'
                        : 'border-transparent'
                    }`}
                    onClick={() => {
                      setActiveLink(link.id)
                    }}
                  >
                    <span className="relative z-10 transition-transform group-hover:scale-105">
                      {link.label}
                    </span>
                    <span
                      className="absolute inset-0 rounded-md bg-orange-400 opacity-0 scale-95
              transition-all duration-200 group-hover:opacity-100 group-hover:scale-105
              -z-10"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA réseaux */}
            <div className="flex items-center gap-3 text-yellow-300">
              <a
                href="https://www.linkedin.com/in/ewan-poiret-027b10203/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/LeRenardeauCode"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

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
                  onClick={() => {
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

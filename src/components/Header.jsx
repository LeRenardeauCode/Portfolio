import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ onScrollToProjects }) => {
  return (
    <section
      id="header"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-16 animate-fadeInUp text-white font-heading font-regular">
          Coder aujourd&apos;hui,{' '}
          <span className="font-heading font-semibold text-yellow-300">sécuriser demain</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-slate-500 dark:text-gray-300/70 max-w-2xl mx-auto mb-8 leading-relaxed animate-fadeInUp font-body"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Développeur full-stack passionné par la création d&apos;expériences web modernes et la
          cybersécurité.
        </p>

        {/* CTA Button */}
        <div
          className="flex flex-col items-center gap-3 animate-fadeInUp"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <button
            className="flex flex-col items-center gap-3 cursor-pointer mx-auto animate-fadeInUp group"
            onClick={onScrollToProjects}
          >
            <span className="relative inline-flex items-center justify-center rounded-full p-1">
              <span
                className="absolute inset-0 rounded-full pointer-events-none -z-10
                bg-gradient-to-br from-yellow-300 via-orange-400 to-yellow-500
                blur-md opacity-80 transition-all animate-bounce-slow"
              ></span>
              <span
                className="inline-flex items-center justify-center rounded-full
                bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 p-1
                animate-bounce-slow"
              >
                <span
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-black
                transition-all group-hover:bg-yellow-400 group-hover:text-black"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-yellow-400 group-hover:text-black"
                  >
                    <path
                      d="M12 5V19M12 19L19 12M12 19L5 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

Header.propTypes = {
  onScrollToProjects: PropTypes.func.isRequired,
}

export default Header

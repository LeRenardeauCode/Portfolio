import React from 'react'

const Header = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-16 animate-fadeInUp text-white font-heading font-regular">
          Coder aujourd'hui,{' '}
          <span className="font-heading font-semibold text-yellow-400">sécuriser demain</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-slate-500 dark:text-gray-300/70 max-w-2xl mx-auto mb-8 leading-relaxed animate-fadeInUp font-body"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Développeur full-stack passionné par la création d'expériences web modernes et la
          cybersécurité.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col items-center gap-3 animate-fadeInUp"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <button
            className="flex flex-col items-center gap-3 cursor-pointer mx-auto animate-fadeInUp group"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            onClick={() => {
              const nextSection = document.querySelector('#projets')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 text-yellow-400 transition-all animate-bounce-slow shadow-lg shadow-yellow-400/50 group-hover:bg-yellow-400 group-hover:text-black group-hover:shadow-md group-hover:shadow-yellow-400/70">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header

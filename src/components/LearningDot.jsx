import React from 'react'
import PropTypes from 'prop-types'

const LearningDot = ({ label = 'En cours' }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 animate-pulse-dot" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
      </span>
      {label && <span className="text-xs text-emerald-300">{label}</span>}
    </div>
  )
}

LearningDot.propTypes = {
  label: PropTypes.string,
}

export default LearningDot

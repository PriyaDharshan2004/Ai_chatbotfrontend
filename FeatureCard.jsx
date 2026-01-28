import React from 'react'

const FeatureCard = ({ icon: Icon, title, description, gradient = false }) => {
  return (
    <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      gradient 
        ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white' 
        : 'bg-white shadow-md'
    }`}>
      <div className={`inline-flex p-3 rounded-lg mb-4 ${
        gradient ? 'bg-white/20' : 'bg-primary-100'
      }`}>
        <Icon className={`h-6 w-6 ${gradient ? 'text-white' : 'text-primary-600'}`} />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${gradient ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={gradient ? 'text-white/90' : 'text-gray-600'}>
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import Button from './Button'

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-100 opacity-40"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-900">Powered by Advanced AI</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 animate-slide-up">
            Your Intelligent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              AI Companion
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 mb-10 animate-slide-up animation-delay-200">
            Get instant answers, creative writing, coding help, and more. Powered by cutting-edge artificial intelligence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <Button variant="primary" size="lg" className="group">
              Start Chatting Free
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in animation-delay-600">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white"></div>
                ))}
              </div>
              <span className="ml-3">Join 10,000+ users</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
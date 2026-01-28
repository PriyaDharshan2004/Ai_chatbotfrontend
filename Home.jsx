import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import Button from '../components/Button'
import { 
  Zap, 
  Shield, 
  Globe, 
  Code, 
  Palette, 
  MessageCircle,
  ArrowRight,
  Check
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant responses powered by state-of-the-art AI models with real-time streaming.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your conversations are encrypted and never used to train models. Full privacy guaranteed.',
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: '24/7 availability across all devices. Access your AI assistant whenever you need it.',
    },
    {
      icon: Code,
      title: 'Code Expert',
      description: 'Debug code, write functions, and learn programming concepts with AI-powered assistance.',
    },
    {
      icon: Palette,
      title: 'Creative Writing',
      description: 'Generate stories, poems, marketing copy, and creative content in seconds.',
    },
    {
      icon: MessageCircle,
      title: 'Natural Conversations',
      description: 'Chat naturally with context-aware AI that remembers your conversation history.',
    },
  ]

  const useCases = [
    'Content Creation',
    'Code Development',
    'Learning & Research',
    'Business Writing',
    'Creative Projects',
    'Data Analysis',
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      image: '1',
      quote: 'This AI assistant has transformed my workflow. I can generate ideas and content 10x faster.',
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      image: '2',
      quote: 'The coding assistance is incredible. It helps me debug and write better code every day.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      image: '3',
      quote: 'From email campaigns to social media posts, this tool is now essential to our marketing team.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make AI accessible and useful for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for Every Use Case
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you are a student, developer, marketer, or creative professional, our AI assistant adapts to your needs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </div>
                ))}
              </div>
              <Link to="/use-cases">
                <Button variant="primary" size="lg">
                  Explore Use Cases
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold">You</span>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4 flex-grow">
                      <p className="text-gray-800">Write a Python function to calculate fibonacci numbers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4 flex-grow">
                      <pre className="text-sm text-gray-800 overflow-x-auto">
                        <code>{`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`}</code>
                      </pre>
                      <p className="text-gray-600 mt-2 text-sm">Here is a recursive implementation. Would you like me to explain it or show an optimized version?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our users have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4 text-yellow-500">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users already using AI to boost their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            No credit card required • Free tier available • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
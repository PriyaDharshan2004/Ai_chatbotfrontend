import React, { useState } from 'react'
import { Check, Zap } from 'lucide-react'
import Button from '../components/Button'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying out our AI assistant',
      features: [
        '200 messages per day',
        'Basic AI model',
        'Conversation history (7 days)',
        'Web access',
        'Community support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 10, annual: 96 },
      description: 'For professionals who need more power',
      features: [
        '5,000 messages per day',
        'Advanced AI models (GPT-4)',
        'Unlimited conversation history',
        'Priority support',
        'API access',
        'Custom prompts',
        'Export conversations'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 50, annual: 480 },
      description: 'For teams and organizations',
      features: [
        'Unlimited messages',
        'All AI models',
        'Team collaboration',
        'Dedicated support',
        'Custom integrations',
        'SSO & advanced security',
        'SLA guarantee',
        'Custom deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-colors ${
                !isAnnual ? 'bg-primary-600 text-white' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-colors ${
                isAnnual ? 'bg-primary-600 text-white' : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-center py-2 font-semibold">
                  <Zap className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual / 12 : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && plan.price.annual > 0 && (
                    <div className="text-sm text-gray-500 mt-1">
                      Billed ${plan.price.annual} annually
                    </div>
                  )}
                </div>

                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  fullWidth 
                  className="mb-6"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! You can cancel your subscription at any time. No questions asked.'
              },
              {
                q: 'Is there a free trial?',
                a: 'All paid plans come with a 7-day free trial. No credit card required.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
              },
              {
                q: 'Can I upgrade or downgrade?',
                a: 'Yes, you can change your plan at any time. Changes take effect immediately.'
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
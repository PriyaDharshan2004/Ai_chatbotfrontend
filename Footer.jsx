import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Features', path: '/product' },
      { name: 'Use Cases', path: '/use-cases' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'API Docs', path: '#' },
    ],
    company: [
      { name: 'About', path: '#' },
      { name: 'Blog', path: '#' },
      { name: 'Careers', path: '#' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy', path: '#' },
      { name: 'Terms', path: '#' },
      { name: 'Security', path: '#' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'Email', icon: Mail, url: 'mailto:hello@aiassistant.com' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">AI Assistant</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Empowering conversations with artificial intelligence. Get instant answers, creative content, and coding help.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} AI Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
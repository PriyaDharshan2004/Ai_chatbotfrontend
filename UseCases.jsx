import React from 'react'
import { 
  Code, 
  Palette, 
  TrendingUp, 
  GraduationCap, 
  FileText,
  Users,
  Briefcase,
  BookOpen
} from 'lucide-react'
import FeatureCard from '../components/FeatureCard'

const UseCases = () => {
  const useCases = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Debug code, write functions, learn new frameworks, and get instant coding help across all major programming languages.',
      examples: ['Code review & debugging', 'Algorithm explanation', 'Documentation writing']
    },
    {
      icon: Palette,
      title: 'Content Creation',
      description: 'Generate blog posts, social media content, marketing copy, and creative writing with AI-powered assistance.',
      examples: ['Blog article writing', 'Social media posts', 'Product descriptions']
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Sales',
      description: 'Create compelling marketing campaigns, sales emails, and customer communications that convert.',
      examples: ['Email campaigns', 'Ad copy', 'Sales presentations']
    },
    {
      icon: GraduationCap,
      title: 'Education & Learning',
      description: 'Study assistance, homework help, concept explanations, and personalized tutoring across all subjects.',
      examples: ['Homework assistance', 'Concept explanations', 'Study guides']
    },
    {
      icon: FileText,
      title: 'Business Writing',
      description: 'Draft professional documents, reports, proposals, and business correspondence with confidence.',
      examples: ['Business proposals', 'Reports & memos', 'Meeting notes']
    },
    {
      icon: Briefcase,
      title: 'Productivity',
      description: 'Organize tasks, summarize documents, and automate repetitive writing tasks to boost efficiency.',
      examples: ['Task organization', 'Document summaries', 'Meeting agendas']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Create help articles, FAQ responses, and customer communication templates quickly and easily.',
      examples: ['FAQ creation', 'Support responses', 'Knowledge base']
    },
    {
      icon: BookOpen,
      title: 'Research',
      description: 'Gather information, summarize research papers, and explore complex topics with AI assistance.',
      examples: ['Literature review', 'Data analysis', 'Topic exploration']
    }
  ]

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Endless Possibilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI assistant adapts to your needs across industries and use cases
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <useCase.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {useCase.description}
              </p>
              <div className="space-y-1">
                {useCase.examples.map((example, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-primary-600 mr-2">•</span>
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '10x',
                label: 'Faster Content Creation',
                description: 'Marketing teams report 10x productivity boost'
              },
              {
                metric: '85%',
                label: 'Time Saved',
                description: 'Developers save hours on debugging and documentation'
              },
              {
                metric: '95%',
                label: 'User Satisfaction',
                description: 'Students and educators love our tutoring features'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCases
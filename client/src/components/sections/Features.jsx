import { useState } from 'react';
import { MessageSquare, Scan, AlertTriangle, Smartphone, Video, Activity, ArrowRight } from 'lucide-react';

const featuresList = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description: 'Cybersecurity-related AI assistance available 24/7 to answer your security questions.',
    gradient: 'from-neon-blue/20 to-neon-blue/5',
    borderGradient: 'from-neon-blue to-neon-blue/40',
    iconColor: 'text-neon-blue',
    accent: 'neon-blue',
  },
  {
    icon: Scan,
    title: 'URL Scanner',
    description: 'Scan suspicious websites and links instantly with our advanced threat detection engine.',
    gradient: 'from-neon-orange/20 to-neon-orange/5',
    borderGradient: 'from-neon-orange to-neon-orange/40',
    iconColor: 'text-neon-orange',
    accent: 'neon-orange',
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    description: 'AI-powered threat analysis identifies malware, phishing, and zero-day attacks.',
    gradient: 'from-neon-blue/20 to-neon-blue/5',
    borderGradient: 'from-neon-blue to-neon-blue/40',
    iconColor: 'text-neon-blue',
    accent: 'neon-blue',
  },
  {
    icon: Smartphone,
    title: 'Mobile Security',
    description: 'Smart device protection for iOS and Android with real-time monitoring.',
    gradient: 'from-neon-orange/20 to-neon-orange/5',
    borderGradient: 'from-neon-orange to-neon-orange/40',
    iconColor: 'text-neon-orange',
    accent: 'neon-orange',
  },
  {
    icon: Video,
    title: 'Deepfake Detection',
    description: 'AI-based fake content verification for images, videos, and audio.',
    gradient: 'from-neon-blue/20 to-neon-blue/5',
    borderGradient: 'from-neon-blue to-neon-blue/40',
    iconColor: 'text-neon-blue',
    accent: 'neon-blue',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Live threat alert system with instant notifications and detailed analytics.',
    gradient: 'from-neon-orange/20 to-neon-orange/5',
    borderGradient: 'from-neon-orange to-neon-orange/40',
    iconColor: 'text-neon-orange',
    accent: 'neon-orange',
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Enhanced */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-dark-card/60 backdrop-blur-sm border border-neon-blue/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-neon-blue tracking-wider">CORE CAPABILITIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
            Powerful{' '}
            <span className="bg-gradient-to-r from-neon-blue via-neon-blue to-neon-orange bg-clip-text text-transparent">
              AI Security
            </span>
            <br />
            <span className="text-white">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-orange mx-auto rounded-full mb-5" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to protect your digital assets in one intelligent, AI-driven platform.
          </p>
        </div>

        {/* Features Grid - Unique Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuresList.map((feature, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated gradient border */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.borderGradient} rounded-2xl blur opacity-0 transition duration-500 group-hover:opacity-100`}
                  style={{ transitionDelay: '0.1s' }}
                />
                
                {/* Card Body */}
                <div className="relative bg-dark-card/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 group-hover:border-transparent transition-all duration-300">
                  {/* Icon with animated gradient background */}
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <feature.icon className={`w-7 h-7 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.7} />
                  </div>
                  
                  {/* Title with accent line */}
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    {feature.title}
                    <span className={`w-1.5 h-1.5 rounded-full bg-${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link - appears on hover */}
                  <div className="flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-neon-blue transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 border-b border-r border-neon-blue/30 rounded-br-lg" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card/60 backdrop-blur-sm border border-neon-blue/40 rounded-full text-neon-blue hover:bg-neon-blue/10 transition-all group">
            <span className="font-semibold">View All Security Features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
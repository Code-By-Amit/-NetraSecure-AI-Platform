import { Shield, Brain, Bot, Eye, Smartphone, Users, Sparkles } from 'lucide-react';

export default function Intro() {
  const features = [
    { icon: Brain, title: 'AI-Powered Platform', desc: 'Advanced machine learning algorithms detect threats in real-time with 99.9% accuracy.', accent: 'neon-blue' },
    { icon: Shield, title: 'Smart Protection System', desc: 'Proactive defense against zero-day vulnerabilities and emerging attack vectors.', accent: 'neon-orange' },
    { icon: Eye, title: 'Threat Intelligence', desc: 'Global threat database with instant updates from millions of endpoints worldwide.', accent: 'neon-blue' },
    { icon: Bot, title: 'AI Assistant', desc: '24/7 intelligent security companion for instant guidance and incident response.', accent: 'neon-orange' },
    { icon: Smartphone, title: 'Threat Detection', desc: 'Multi-layered scanning across all devices – cloud, network, and endpoints.', accent: 'neon-blue' },
    { icon: Users, title: 'User-Friendly Experience', desc: 'Intuitive dashboard with actionable insights and one-click remediation.', accent: 'neon-orange' },
  ];

  return (
    <section id="intro" className="relative py-24 md:py-32 overflow-hidden">
    

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header – more refined */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in">
          <div className="inline-flex items-center gap-2 bg-dark-card/60 backdrop-blur-sm border border-neon-blue/30 rounded-full px-5 py-1.5 mb-5 shadow-lg shadow-neon-blue/5">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-neon-blue text-sm font-semibold tracking-wider uppercase">Next-Generation Security</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            What is <span className="neon-text">NetraSecure AI</span>
            <span className="block w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-orange mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            The world's first autonomous cybersecurity platform powered by generative AI, 
            delivering enterprise-grade protection with consumer simplicity.
          </p>
        </div>

        {/* Center AI Security Graphic – enhanced with orbiting rings */}
        <div className="relative flex justify-center mb-24">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Pulsing background rings */}
            <div className="absolute inset-0 rounded-full bg-neon-blue/10 blur-2xl animate-pulse" />
            <div className="absolute inset-8 rounded-full border border-neon-blue/30 animate-pulse-slow" />
            <div className="absolute inset-16 rounded-full border border-neon-orange/20 animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Central AI core */}
            <div className="absolute inset-12 glass-card rounded-full flex items-center justify-center backdrop-blur-md border-2 border-neon-blue/60 shadow-2xl shadow-neon-blue/30 group-hover:scale-105 transition-transform duration-500">
              <Brain className="w-20 h-20 md:w-28 md:h-28 text-neon-blue animate-float" strokeWidth={1.2} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-orange/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Orbiting nodes with improved styling */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-dark-card/90 rounded-2xl flex items-center justify-center border-2 border-neon-blue shadow-lg shadow-neon-blue/30 animate-float" style={{ animationDelay: '0s' }}>
              <Shield className="w-7 h-7 text-neon-orange" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-2 left-2 w-14 h-14 bg-dark-card/90 rounded-2xl flex items-center justify-center border-2 border-neon-orange shadow-lg shadow-neon-orange/30 animate-float" style={{ animationDelay: '1.2s' }}>
              <Bot className="w-7 h-7 text-neon-blue" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-2 right-2 w-14 h-14 bg-dark-card/90 rounded-2xl flex items-center justify-center border-2 border-neon-blue shadow-lg shadow-neon-blue/30 animate-float" style={{ animationDelay: '2.4s' }}>
              <Eye className="w-7 h-7 text-neon-orange" strokeWidth={1.5} />
            </div>
            
            {/* Animated connecting lines with glow */}
            <div className="absolute top-12 left-1/2 w-px h-24 bg-gradient-to-b from-neon-blue via-neon-blue to-transparent transform -translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-12 left-12 w-24 h-px bg-gradient-to-r from-neon-orange via-neon-orange to-transparent animate-pulse" />
            <div className="absolute bottom-12 right-12 w-24 h-px bg-gradient-to-l from-neon-blue via-neon-blue to-transparent animate-pulse" />
          </div>
        </div>

        {/* Feature Cards – premium glassmorphism with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative glass-card p-7 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-neon-blue/10 fade-in border border-gray-800/50 hover:border-neon-blue/40"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Gradient accent line on hover */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${item.accent} to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${item.accent}/20 to-${item.accent}/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                <item.icon className={`w-7 h-7 text-${item.accent}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              
              {/* Decorative dot pattern */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                <div className="w-1.5 h-1.5 rounded-full bg-neon-orange mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom trust indicator with icons */}
      <div className="mt-20 flex justify-center px-4">
  <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400 bg-dark-card/30 backdrop-blur-sm px-4 sm:px-6 py-4 rounded-2xl border border-gray-800 max-w-4xl w-full sm:w-auto">
    
    <span className="flex items-center gap-2">
      <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" />
      <span className="font-medium whitespace-nowrap">
        Real-time detection
      </span>
    </span>

    <span className="hidden md:block w-px h-5 bg-gray-700" />

    <span className="flex items-center gap-2">
      <div
        className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <span className="font-medium whitespace-nowrap">
        AI-driven analysis
      </span>
    </span>

    <span className="hidden md:block w-px h-5 bg-gray-700" />

    <span className="flex items-center gap-2">
      <div
        className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <span className="font-medium whitespace-nowrap">
        Zero-trust architecture
      </span>
    </span>

    <span className="hidden md:block w-px h-5 bg-gray-700" />

    <span className="flex items-center gap-2">
      <div
        className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <span className="font-medium whitespace-nowrap">
        99.9% SLA
      </span>
    </span>

  </div>
</div>
      </div>
    </section>
  );
}
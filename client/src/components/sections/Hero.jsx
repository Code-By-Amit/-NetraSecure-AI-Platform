import { useState, useEffect } from 'react';
import { Shield, Zap, Bot, ArrowRight, Scan, MessageSquare } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import ParticleBackground from '../ui/ParticleBackground';
import ShieldIllustration from "../ui/ShieldIllustration";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0,212,255,0.15) 0%, transparent 60%)`,
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden cyber-grid pt-[56px] sm:pt-[64px] lg:pt-[80px]">
      <ParticleBackground />
      <div className="absolute inset-0 pointer-events-none" style={glowStyle} />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

          {/* LEFT: Text content */}
          <div className="fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-dark-card/50 backdrop-blur-sm border border-neon-blue/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-neon-blue animate-pulse" />
              <span className="text-sm font-medium text-neon-blue">AI-Powered Cybersecurity</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="neon-text">AI-Powered Cybersecurity</span>
              <br />
              <span className="text-white">for the Modern</span>
              <br />
              <span className="bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
                Digital World
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              NetraSecure AI provides intelligent threat detection, real-time URL scanning,
              AI-driven protection, and advanced cybersecurity insights.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <AnimatedButton onClick={() => scrollTo('features')}>
                <span className="flex items-center gap-2">Explore Platform <ArrowRight className="w-4 h-4" /></span>
              </AnimatedButton>
              <AnimatedButton variant="secondary" onClick={() => scrollTo('url-scanner')}>
                <span className="flex items-center gap-2"><Scan className="w-4 h-4" /> Start Scanning</span>
              </AnimatedButton>
              <AnimatedButton variant="outline" onClick={() => scrollTo('chatbot')}>
                <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Try AI Chatbot</span>
              </AnimatedButton>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-neon-blue" />
                <span>99.9% Threat Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-orange" />
                <span>Real-time Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-neon-blue" />
                <span>AI Assistant 24/7</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Shield illustration */}
          <div
            className="fade-in flex justify-center items-center"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
              <div className="absolute inset-0 rounded-full bg-neon-blue/10 blur-3xl animate-pulse pointer-events-none" />
              <ShieldIllustration />
              <div
                className="absolute -top-1 -right-1 w-12 h-12 md:w-14 md:h-14 bg-dark-card/80 rounded-xl flex items-center justify-center border border-neon-blue/50 animate-float z-10"
                style={{ animationDelay: '1s' }}>
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-neon-orange" />
              </div>
              <div
                className="absolute bottom-4 left-4 md:bottom-7 md:left-7 w-14 h-14 md:w-16 md:h-16 bg-dark-card/80 rounded-xl flex items-center justify-center border border-neon-orange/50 animate-float z-10"
                style={{ animationDelay: '2s' }} >
                <Bot className="w-6 h-6 md:w-7 md:h-7 text-neon-blue" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-pulse" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-neon-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
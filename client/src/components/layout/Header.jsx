import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Cpu, Bot, Scan, Mail, Sparkles, ChevronRight } from 'lucide-react';

export default function Header({ setIsChatbotOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafId = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Smooth scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const winScroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
        setScrollProgress(scrolledPercent);
        setScrolled(window.scrollY > 20);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const navItems = [
    { name: 'Features', href: '#features', icon: Cpu },
    { name: 'AI Chatbot', href: '#chatbot', icon: Bot },
    { name: 'URL Scanner', href: '#url-scanner', icon: Scan },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href) => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
       (scrolled || isOpen)
          ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-neon-blue/20 shadow-2xl shadow-neon-blue/5'
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 transition-transform hover:scale-105 duration-300"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-orange rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <Shield className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-neon-blue group-hover:text-neon-orange transition-colors duration-300" strokeWidth={1.8} />
            </div>
            <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight">
              <span className="text-white">Netra</span>
              <span className="neon-text">Secure</span>
              <span className="text-[10px] sm:text-xs text-neon-blue ml-0.5 sm:ml-1 font-mono">AI</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-gray-300 hover:text-neon-blue transition-colors text-xs lg:text-sm font-medium tracking-wide flex items-center gap-1 lg:gap-1.5 py-2 whitespace-nowrap"
              >
                <item.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 opacity-70 group-hover:opacity-100 transition-all group-hover:scale-110" />
                <span className="hidden sm:inline">{item.name}</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-orange transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => setIsChatbotOpen((prev) => !prev)}
              className="group relative px-3 py-1.5 lg:px-5 lg:py-2.5 bg-gradient-to-r from-neon-blue/10 to-neon-orange/10 border border-neon-blue/40 rounded-full text-neon-blue text-xs lg:text-sm font-semibold hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1 lg:gap-2">
                Try AI Assistant <Sparkles className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-orange/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-full bg-dark-card/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center hover:border-neon-blue/50 transition-all duration-300 active:scale-95"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5 text-neon-blue" /> : <Menu className="w-5 h-5 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Navigation Panel - full screen below header */}
        <div
          className={`md:hidden fixed left-0 right-0 bg-dark-bg/95 backdrop-blur-lg transition-all duration-400 ease-in-out z-40 overflow-y-auto ${
            isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
          }`}
          style={{
            top: '88px',
            height: 'calc(100dvh - 56px)',
          }}
        >
          <div className="flex flex-col h-full pb-20">
            <div className="py-4 px-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center justify-between w-full px-4 py-4 text-gray-300 hover:text-neon-blue hover:bg-dark-card/50 rounded-xl transition-all group text-left"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-neon-blue/70 group-hover:text-neon-blue transition-colors" />
                    <span className="font-medium text-base">{item.name}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setIsChatbotOpen((prev) => !prev);
                    setIsOpen(false);
                    document.body.style.overflow = 'auto';
                  }}
                  className="w-full py-4 bg-gradient-to-r from-neon-blue/10 to-neon-orange/10 border border-neon-blue/30 rounded-xl text-neon-blue font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all text-base"
                >
                  <Sparkles className="w-5 h-5" /> Try AI Assistant
                </button>
              </div>
            </div>
            <div className="mt-auto text-center text-xs text-gray-600 py-6">
              <p>Secure AI assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-orange to-neon-blue transition-all duration-200 ease-out will-change-[width]" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </header>
  );
}
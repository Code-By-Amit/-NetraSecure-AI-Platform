import { Send, Brain, BarChart, ShieldCheck, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    icon: Send,
    title: 'Submit',
    subtitle: 'URL or Request',
    description: 'Enter any website link or security question into our intelligent scanner or AI chatbot.',
    number: '01',
    accent: 'from-cyan-400 to-blue-500',
    dotColor: 'bg-cyan-400',
    ringColor: 'ring-cyan-400/20',
  },
  {
    icon: Brain,
    title: 'AI Analyzes',
    subtitle: 'Threats',
    description: 'Our machine learning engine scans for malware, phishing, and suspicious behavioral patterns.',
    number: '02',
    accent: 'from-blue-400 to-indigo-500',
    dotColor: 'bg-blue-400',
    ringColor: 'ring-blue-400/20',
  },
  {
    icon: BarChart,
    title: 'Generate',
    subtitle: 'Insights',
    description: 'Get detailed risk scores, threat levels, and security recommendations in real-time.',
    number: '03',
    accent: 'from-violet-400 to-purple-500',
    dotColor: 'bg-violet-400',
    ringColor: 'ring-violet-400/20',
  },
  {
    icon: ShieldCheck,
    title: 'Receive',
    subtitle: 'Protection',
    description: 'Actionable steps to secure your systems and prevent future attacks automatically.',
    number: '04',
    accent: 'from-emerald-400 to-teal-500',
    dotColor: 'bg-emerald-400',
    ringColor: 'ring-emerald-400/20',
  },
];

function StepCard({ step, index, total }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      {/* ── Desktop connector arrow ── */}
      {index < total - 1 && (
        <div className="hidden lg:flex absolute top-14 -right-5 z-20 items-center">
          <ChevronRight className="w-4 h-4 text-white/15 group-hover:text-white/30 transition-colors duration-300" />
        </div>
      )}

      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm
        overflow-hidden transition-all duration-400
        hover:border-white/[0.12] hover:bg-white/[0.04]"
      >
        {/* Top gradient accent */}
        <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${step.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

        {/* Hover radial glow */}
        <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-b ${step.accent} opacity-0 group-hover:opacity-[0.06] blur-3xl transition-opacity duration-500 pointer-events-none`} />

        <div className="relative p-6 sm:p-7 flex flex-col h-full">
          {/* Step number + icon row */}
          <div className="flex items-center justify-between mb-6">
            <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} p-px`}>
              <div className="w-full h-full rounded-2xl bg-dark-bg flex items-center justify-center group-hover:bg-dark-card transition-colors duration-300">
                <step.icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform" />
              </div>
            </div>

            <span className={`text-4xl font-black tracking-tighter bg-gradient-to-b ${step.accent} bg-clip-text text-transparent opacity-15 group-hover:opacity-25 transition-opacity duration-400 select-none`}>
              {step.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1 leading-tight">
            {step.title}
          </h3>
          <span className={`text-sm font-semibold bg-gradient-to-r ${step.accent} bg-clip-text text-transparent mb-3`}>
            {step.subtitle}
          </span>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-1">
            {step.description}
          </p>

          {/* Bottom progress indicator */}
          <div className="mt-5 pt-4 border-t border-white/[0.04]">
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i <= index
                      ? `${step.dotColor} opacity-60 group-hover:opacity-100`
                      : 'bg-white/[0.06]'
                  }`}
                  style={{ flex: i <= index ? 2 : 1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/15 to-dark-bg pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-violet-500/[0.03] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 sm:mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 border border-neon-blue/20 bg-neon-blue/5 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-neon-blue font-medium">How It Works</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Four steps to
            <br />
            <span className="neon-text">complete protection</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            From scan to solution — our AI-powered pipeline analyzes, detects,
            and protects in real-time.
          </p>
        </div>

        {/* ── Steps grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, idx) => (
            <StepCard key={idx} step={step} index={idx} total={steps.length} />
          ))}
        </div>

        {/* ── Bottom CTA hint ── */}
        <div className={`mt-14 sm:mt-16 text-center transition-all duration-700 delay-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-3">
            <div className="flex -space-x-1">
              {steps.map((s, i) => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${s.dotColor} ring-2 ring-dark-bg`} />
              ))}
            </div>
            <span className="text-sm text-gray-400">
              End-to-end protection in <span className="text-white font-semibold">under 60 seconds</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
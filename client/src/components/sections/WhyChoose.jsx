import { Cpu, ShieldCheck, Layout, Server, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const benefits = [
  {
    icon: Cpu,
    title: 'AI-Driven Platform',
    desc: 'Advanced machine learning algorithms analyze patterns and detect threats with 99.9% accuracy in real-time.',
    accent: 'from-cyan-400 to-blue-500',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
  },
  {
    icon: ShieldCheck,
    title: 'Unified Security Ecosystem',
    desc: 'All security tools — scanner, chatbot, monitoring — unified in one powerful, cohesive dashboard.',
    accent: 'from-blue-400 to-indigo-500',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
  },
  {
    icon: Layout,
    title: 'Intuitive Interface',
    desc: 'Clean, modern design crafted for both beginners and security experts. No learning curve required.',
    accent: 'from-violet-400 to-purple-500',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
  },
  {
    icon: Server,
    title: 'Scalable Infrastructure',
    desc: 'Enterprise-grade architecture that scales seamlessly from startups to global organizations.',
    accent: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
  },
  {
    icon: Lock,
    title: 'Privacy-First Architecture',
    desc: 'End-to-end encryption with zero-knowledge proofs. Your data is never shared, sold, or compromised.',
    accent: 'from-amber-400 to-orange-500',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
  },
  {
    icon: Sparkles,
    title: 'Real-Time AI Insights',
    desc: 'Instant threat alerts with actionable intelligence and automated recommendations to keep you protected.',
    accent: 'from-rose-400 to-pink-500',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
  },
];

const stats = [
  { value: '99.9%', label: 'Detection Rate' },
  { value: '<50ms', label: 'Response Time' },
  { value: '24/7', label: 'Active Monitoring' },
  { value: '10M+', label: 'Threats Blocked' },
];

function BenefitCard({ item, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm
        transition-all duration-500 ease-out ${item.borderHover}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      {/* Top accent gradient line */}
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="p-6 sm:p-7">
        {/* Icon + Number row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`relative w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center
            ring-1 ring-white/[0.06] group-hover:ring-white/[0.12] transition-all duration-300
            group-hover:scale-110 group-hover:shadow-lg`}
          >
            <item.icon className={`w-5 h-5 ${item.iconColor} transition-transform duration-300 group-hover:scale-110`} />
          </div>
          <span className="text-xs font-mono text-white/10 group-hover:text-white/20 transition-colors duration-300 mt-1">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {item.desc}
        </p>

        {/* Bottom link */}
        <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-white/25 group-hover:text-neon-blue transition-all duration-300">
          <span>Learn more</span>
          <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      {/* Hover glow — subtle radial bg */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
}

export default function WhyChoose() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-choose" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/20 to-dark-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neon-blue/[0.02] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section header ── */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 border border-neon-orange/20 bg-neon-orange/5 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-neon-orange font-medium">Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Built for teams who
            <br />
            <span className="neon-text">take security seriously</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            We combine cutting-edge AI with enterprise-grade security infrastructure
            to deliver protection that stays ahead of evolving threats.
          </p>
        </div>

        {/* ── Benefit cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-20">
          {benefits.map((item, idx) => (
            <BenefitCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* ── Stats bar ── */}
        <div className={`relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm
          overflow-hidden transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`relative py-8 sm:py-10 px-6 text-center group
                  ${idx < stats.length - 1 ? 'border-r border-white/[0.04]' : ''}
                  ${idx < 2 ? 'border-b lg:border-b-0 border-white/[0.04]' : ''}`}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-neon-blue/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
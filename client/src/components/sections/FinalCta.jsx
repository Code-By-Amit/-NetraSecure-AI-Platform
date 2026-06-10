import { Shield, ArrowRight, Phone, Sparkles, Lock, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function FinalCta() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/10 to-dark-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-500/[0.03] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* ── Main CTA card ── */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden">

            {/* Top gradient accent */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {/* Corner glow accents */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-500/[0.06] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-violet-500/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div className="relative px-6 py-14 sm:px-12 sm:py-20 md:px-16 md:py-24">

              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest">Start Today</span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight mb-6">
                <span className="text-white">Protect Your</span>
                <br />
                <span className="neon-text">Digital Future</span>
                <span className="text-white"> with AI</span>
              </h2>

              {/* Description */}
              <p className="text-center text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Join thousands of users securing their digital assets with
                NetraSecure AI. Start protecting what matters most.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
                {/* Primary button */}
                <button
                  onClick={() => scrollTo('url-scanner')}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl
                    bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm
                    shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40
                    hover:from-cyan-400 hover:to-blue-500
                    transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>

                {/* Secondary button */}
                <button
                  onClick={() => scrollTo('contact')}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl
                    border border-white/[0.1] bg-white/[0.03] text-white font-semibold text-sm
                    hover:border-white/[0.2] hover:bg-white/[0.06]
                    transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  Contact Team
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-500/70" />
                  No credit card required
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-700" />
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-amber-500/70" />
                  Free 14-day trial
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-700" />
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-cyan-500/70" />
                  Cancel anytime
                </span>
              </div>
            </div>

            {/* Bottom gradient accent */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
          </div>

          {/* ── Decorative bottom glow bar ── */}
          <div className="mt-4 flex justify-center">
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
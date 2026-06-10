import {
  ShieldCheck,
  Lock,
  Database,
  Building2,
  Award,
  CheckCircle,
  Globe,
  Users,
  Zap,
} from "lucide-react";

export default function TrustSecurity() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "AI-Powered Security",
      desc: "Advanced machine learning continuously detects threats in real time.",
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      desc: "Every request is verified before access is granted.",
    },
    {
      icon: Database,
      title: "End-to-End Encryption",
      desc: "Data protected at rest and in transit with enterprise-grade security.",
    },
    {
      icon: Building2,
      title: "Enterprise Ready",
      desc: "Designed to scale from startups to global organizations.",
    },
  ];

  const stats = [
    { value: "99.99%", label: "System Uptime" },
    { value: "50K+", label: "Protected Users" },
    { value: "5K+", label: "Security Teams" },
    { value: "<50ms", label: "Threat Detection" },
  ];

  return (
    <section
      id="trust"
      className="relative py-24 overflow-hidden"
    >


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            Enterprise Security
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-5">
            Built on a Foundation of
            <span className="block bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
              Trust & Protection
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Secure infrastructure, AI-powered defense, and enterprise-grade
            reliability trusted by organizations worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-2">
                {item.value}
              </h3>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:border-neon-blue/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-neon-blue/10 to-neon-orange/10" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-neon-blue" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Panel */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-dark-card/80 to-dark-card/40 backdrop-blur-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Compliance & Certifications
              </h3>

              <p className="text-gray-400 mb-6">
                Our platform follows strict security standards and compliance
                frameworks to ensure your data remains protected.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "ISO 27001",
                  "GDPR Ready",
                  "MCA Registered",
                  "Startup India",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 text-center">
                <Award className="w-8 h-8 text-neon-orange mx-auto mb-3" />
                <h4 className="text-white font-semibold">
                  Certified
                </h4>
              </div>

              <div className="glass-card p-5 text-center">
                <Globe className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                <h4 className="text-white font-semibold">
                  Global Coverage
                </h4>
              </div>

              <div className="glass-card p-5 text-center">
                <Users className="w-8 h-8 text-neon-orange mx-auto mb-3" />
                <h4 className="text-white font-semibold">
                  50K+ Users
                </h4>
              </div>

              <div className="glass-card p-5 text-center">
                <Zap className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                <h4 className="text-white font-semibold">
                  Real-Time AI
                </h4>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="text-center mt-12">
          <p className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-neon-blue/20 bg-neon-blue/5 text-gray-300">
            <ShieldCheck className="w-5 h-5 text-neon-blue" />
            Trusted by security teams across startups, enterprises, and government sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { 
    name: 'Rahul Verma', 
    role: 'CTO, SecureStack', 
    text: 'NetraSecure AI helped us identify vulnerabilities before they became threats. The URL scanner is incredibly fast and accurate.', 
    rating: 5, 
    avatar: 'RV',
    accent: 'neon-blue'
  },
  { 
    name: 'Ananya Singh', 
    role: 'Security Lead, FinTech Corp', 
    text: 'The AI assistant is incredibly useful and easy to use. It guides our team through complex security decisions daily.', 
    rating: 5, 
    avatar: 'AS',
    accent: 'neon-orange'
  },
  { 
    name: 'Vikrant Patel', 
    role: 'Founder, CyberShield', 
    text: 'A powerful cybersecurity platform with excellent monitoring features. Real-time alerts have saved us multiple times.', 
    rating: 4, 
    avatar: 'VP',
    accent: 'neon-blue'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/10 to-dark-bg" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-dark-card/60 backdrop-blur-sm border border-neon-orange/30 rounded-full px-4 py-1.5 mb-5">
            <Quote className="w-4 h-4 text-neon-orange" />
            <span className="text-xs font-semibold text-neon-orange tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Trusted by <span className="neon-text">Security Professionals</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Don't just take our word for it — hear from security experts worldwide.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-orange to-neon-blue mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials Grid - Unique Layout with varying positions */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* First testimonial - spans top left */}
            <div className="md:col-span-1 transform md:translate-y-4">
              <TestimonialCard testimonial={testimonials[0]} />
            </div>
            
            {/* Second testimonial - top right, slightly higher */}
            <div className="md:col-span-1 transform md:-translate-y-2">
              <TestimonialCard testimonial={testimonials[1]} />
            </div>
            
            {/* Third testimonial - centered below, wider */}
            <div className="md:col-span-2 max-w-2xl mx-auto md:mt-4">
              <TestimonialCard testimonial={testimonials[2]} wide />
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xs text-gray-500 tracking-wider">TRUSTED BY LEADING TEAMS</div>
            <div className="flex flex-wrap gap-6">
              {['SecureStack', 'FinTech Corp', 'CyberShield', 'DataGuard', 'NetProtect'].map((company, idx) => (
                <span key={idx} className="text-sm text-gray-400 font-mono">{company}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual testimonial component with unique styling
const TestimonialCard = ({ testimonial, wide = false }) => {
  const { name, role, text, rating, avatar, accent } = testimonial;
  
  return (
    <div className={`group relative ${wide ? 'py-4' : 'py-2'}`}>
      {/* Floating quote mark - visible on hover */}
      <div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -rotate-12 group-hover:rotate-0">
        <Quote className={`w-12 h-12 text-${accent}/20`} strokeWidth={1} />
      </div>
      
      <div className="relative bg-dark-card/30 backdrop-blur-sm rounded-2xl p-6 border-b-2 border-l border-r border-gray-800/50 hover:border-l-transparent transition-all duration-300"
           style={{ borderBottomColor: accent === 'neon-blue' ? '#00D4FF' : '#FF7A00' }}>
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
          ))}
        </div>
        
        {/* Text */}
        <p className={`text-gray-300 leading-relaxed mb-5 ${wide ? 'text-base' : 'text-sm'}`}>
          "{text}"
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-full bg-gradient-to-br from-${accent}/30 to-${accent}/10 flex items-center justify-center font-bold text-white text-sm shadow-lg`}>
            {avatar}
          </div>
          <div>
            <div className="font-bold text-white">{name}</div>
            <div className="text-xs text-gray-400">{role}</div>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>
    </div>
  );
};
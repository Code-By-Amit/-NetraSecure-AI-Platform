import { useState, useEffect, useRef } from 'react';

/* ─── Inline keyframes for device showcase animations ─── */
const showcaseStyles = `
  @keyframes sc-float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes sc-float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
  @keyframes sc-float3 { 0%,100%{transform:translateY(-4px)} 50%{transform:translateY(6px)} }
  @keyframes sc-pulse  { 0%,100%{opacity:.4} 50%{opacity:.9} }
  @keyframes sc-orbit  { from{transform:rotate(0)} to{transform:rotate(360deg)} }
  @keyframes sc-orbit-r{ from{transform:rotate(360deg)} to{transform:rotate(0)} }
  @keyframes sc-scan   { 0%{transform:translateY(-100%);opacity:0} 10%{opacity:.7} 90%{opacity:.3} 100%{transform:translateY(100%);opacity:0} }
  @keyframes sc-blink  { 0%,100%{opacity:1} 50%{opacity:.15} }
  @keyframes sc-dash   { to{stroke-dashoffset:-40} }
  .sc-float1{animation:sc-float1 5s ease-in-out infinite}
  .sc-float2{animation:sc-float2 6s ease-in-out infinite 1s}
  .sc-float3{animation:sc-float3 5.5s ease-in-out infinite 2s}
  .sc-pulse{animation:sc-pulse 3s ease-in-out infinite}
  .sc-orbit{animation:sc-orbit 20s linear infinite;transform-origin:480px 300px}
  .sc-orbit-r{animation:sc-orbit-r 15s linear infinite;transform-origin:480px 300px}
  .sc-scan{animation:sc-scan 4.5s linear infinite}
  .sc-blink{animation:sc-blink 2s ease-in-out infinite}
  .sc-blink2{animation:sc-blink 2s ease-in-out infinite .6s}
  .sc-blink3{animation:sc-blink 2s ease-in-out infinite 1.2s}
  .sc-dash{animation:sc-dash 3s linear infinite}
`;

/* ─── Device SVG Illustration ─── */
function DeviceIllustration() {
  const laptopImage = "/laptop_preview.png";
  const tabletImage = "/tablet_preview.png";
  const phoneImage  = "/mobile_preview.png";

  return (
    <svg
      width="100%"
      viewBox="0 0 960 620"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="Platform showcase — laptop, tablet, smartphone"
    >
      <defs>
        <radialGradient id="sc-glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#00AEEF" stopOpacity=".25" />
          <stop offset="100%" stopColor="#00AEEF" stopOpacity="0"   />
        </radialGradient>
        <radialGradient id="sc-glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FF7A00" stopOpacity=".15" />
          <stop offset="100%" stopColor="#FF7A00" stopOpacity="0"   />
        </radialGradient>
        <linearGradient id="sc-deviceFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1a2540" />
          <stop offset="100%" stopColor="#0d1520" />
        </linearGradient>
        <linearGradient id="sc-screenBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#0a0f1a" />
          <stop offset="100%" stopColor="#060b14" />
        </linearGradient>
        <linearGradient id="sc-bezel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#1e2d45" />
          <stop offset="50%"  stopColor="#141e30" />
          <stop offset="100%" stopColor="#0d1520" />
        </linearGradient>
        <linearGradient id="sc-edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#00AEEF" stopOpacity=".6" />
          <stop offset="50%"  stopColor="#1E90FF" stopOpacity=".3" />
          <stop offset="100%" stopColor="#FF7A00" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id="sc-lineH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#00AEEF" stopOpacity="0"  />
          <stop offset="50%"  stopColor="#00AEEF" stopOpacity=".6" />
          <stop offset="100%" stopColor="#00AEEF" stopOpacity="0"  />
        </linearGradient>
        <linearGradient id="sc-lineO" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#FF7A00" stopOpacity="0"  />
          <stop offset="50%"  stopColor="#FF7A00" stopOpacity=".5" />
          <stop offset="100%" stopColor="#FF7A00" stopOpacity="0"  />
        </linearGradient>

        {/* ── Clip paths ── */}
        <clipPath id="sc-laptopClip">
          <rect x="248" y="108" width="464" height="290" rx="4" />
        </clipPath>
        <clipPath id="sc-tabletClip">
          <rect x="62" y="195" width="195" height="268" rx="6" />
        </clipPath>
        <clipPath id="sc-phoneClip">
          <rect x="762" y="228" width="126" height="232" rx="6" />
        </clipPath>
      </defs>

      {/* ===== BACKGROUND EFFECTS ===== */}
      <ellipse cx="480" cy="320" rx="380" ry="240" fill="url(#sc-glow1)" className="sc-pulse" />
      <ellipse cx="480" cy="320" rx="200" ry="150" fill="url(#sc-glow2)" className="sc-pulse" />

      <g className="sc-orbit" opacity=".15">
        <ellipse cx="480" cy="300" rx="340" ry="60" fill="none" stroke="#00AEEF" strokeWidth=".5" strokeDasharray="8 20" />
      </g>
      <g className="sc-orbit-r" opacity=".1">
        <ellipse cx="480" cy="300" rx="280" ry="45" fill="none" stroke="#FF7A00" strokeWidth=".5" strokeDasharray="5 25" />
      </g>

      <g opacity=".08">
        <line x1="120" y1="100" x2="280" y2="200" stroke="#00AEEF" strokeWidth=".6" />
        <line x1="280" y1="200" x2="480" y2="150" stroke="#00AEEF" strokeWidth=".6" />
        <line x1="480" y1="150" x2="700" y2="180" stroke="#1E90FF" strokeWidth=".6" />
        <line x1="700" y1="180" x2="850" y2="120" stroke="#00AEEF" strokeWidth=".6" />
        <line x1="180" y1="480" x2="350" y2="440" stroke="#FF7A00" strokeWidth=".5" />
        <line x1="350" y1="440" x2="600" y2="470" stroke="#FF7A00" strokeWidth=".5" />
        <line x1="600" y1="470" x2="800" y2="500" stroke="#FF7A00" strokeWidth=".5" />
      </g>

      {/* ===== LAPTOP ===== */}
      <g className="sc-float1">
        <ellipse cx="480" cy="430" rx="250" ry="12" fill="#000" opacity=".3" />
        {/* Frame */}
        <rect x="235" y="92"  width="490" height="318" rx="12" fill="url(#sc-bezel)" />
        <rect x="235" y="92"  width="490" height="318" rx="12" fill="none" stroke="url(#sc-edgeGlow)" strokeWidth="1.5" />
        {/* Screen background */}
        <rect x="248" y="108" width="464" height="290" rx="4"  fill="url(#sc-screenBg)" />
        {/* ✅ Image INSIDE clipPath group */}
        <g clipPath="url(#sc-laptopClip)">
          <image
            href={laptopImage}
            x="248" y="108" width="464" height="290"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* scan line on top of image */}
          <rect className="sc-scan" x="248" y="250" width="464" height="2" fill="#00AEEF" opacity=".4" />
        </g>
        <circle cx="480" cy="100" r="2"  fill="#1a3050" />
        <circle cx="480" cy="100" r="1"  fill="#00AEEF" opacity=".4" className="sc-blink2" />
        <path d="M 200 410 L 235 410 L 235 410 L 725 410 L 760 410 L 780 434 Q 780 442 772 442 L 188 442 Q 180 442 180 434 Z" fill="url(#sc-bezel)" />
        <path d="M 200 410 L 780 410 L 780 434 Q 780 442 772 442 L 188 442 Q 180 442 180 434 Z" fill="none" stroke="url(#sc-edgeGlow)" strokeWidth=".8" />
        <rect x="435" y="418" width="90" height="6" rx="3" fill="#0d1a2a" opacity=".6" />
        <line x1="300" y1="410" x2="660" y2="410" stroke="#00AEEF" strokeWidth=".4" opacity=".3" />
      </g>

      {/* ===== TABLET ===== */}
      <g className="sc-float2">
        <ellipse cx="160" cy="478" rx="100" ry="8" fill="#000" opacity=".25" />
        <rect x="48"  y="182" width="224" height="296" rx="14" fill="url(#sc-bezel)" />
        <rect x="48"  y="182" width="224" height="296" rx="14" fill="none" stroke="url(#sc-edgeGlow)" strokeWidth="1.2" />
        <rect x="62"  y="195" width="195" height="268" rx="6"  fill="url(#sc-screenBg)" />
        {/* ✅ Image INSIDE clipPath group */}
        <g clipPath="url(#sc-tabletClip)">
          <image
            href={tabletImage}
            x="62" y="195" width="195" height="268"
            preserveAspectRatio="xMidYMid slice"
          />
          <rect className="sc-scan" x="62" y="320" width="195" height="2" fill="#00AEEF" opacity=".3" />
        </g>
        <circle cx="160" cy="188" r="1.5" fill="#00AEEF" opacity=".3" className="sc-blink" />
      </g>

      {/* ===== SMARTPHONE ===== */}
      <g className="sc-float3">
        <ellipse cx="825" cy="478" rx="70" ry="6" fill="#000" opacity=".25" />
        <rect x="750" y="216" width="150" height="260" rx="18" fill="url(#sc-bezel)" />
        <rect x="750" y="216" width="150" height="260" rx="18" fill="none" stroke="url(#sc-edgeGlow)" strokeWidth="1.2" />
        <rect x="800" y="222" width="50"  height="8"   rx="4"  fill="#060b14" />
        <rect x="762" y="228" width="126" height="232" rx="6"  fill="url(#sc-screenBg)" />
        {/* ✅ Image INSIDE clipPath group */}
        <g clipPath="url(#sc-phoneClip)">
          <image
            href={phoneImage}
            x="762" y="228" width="126" height="232"
            preserveAspectRatio="xMidYMid slice"
          />
          <rect className="sc-scan" x="762" y="340" width="126" height="1.5" fill="#FF7A00" opacity=".35" />
        </g>
        <rect x="805" y="468" width="40" height="3" rx="1.5" fill="#1a2540" opacity=".6" />
      </g>

      {/* ===== FLOATING ICONS & PARTICLES ===== */}
      <g className="sc-float3" opacity=".5">
        <path d="M 830 100 L 855 112 L 855 135 Q 855 152 830 160 Q 805 152 805 135 L 805 112 Z" fill="none" stroke="#00AEEF" strokeWidth="1" />
        <path d="M 830 108 L 848 117 L 848 134 Q 848 147 830 153 Q 812 147 812 134 L 812 117 Z" fill="#00AEEF" opacity=".06" />
        <circle cx="830" cy="132" r="6" fill="none" stroke="#00AEEF" strokeWidth=".6" opacity=".5" />
        <text x="830" y="135" textAnchor="middle" fontSize="8" fill="#00AEEF" opacity=".7" fontFamily="Arial">✓</text>
      </g>

      <g className="sc-float1" opacity=".4">
        <rect x="82" y="102" width="22" height="16" rx="3" fill="none" stroke="#FF7A00" strokeWidth=".8" />
        <path d="M 88 102 L 88 95 Q 88 88 93 88 Q 98 88 98 95 L 98 102" fill="none" stroke="#FF7A00" strokeWidth=".8" />
        <circle cx="93" cy="110" r="2" fill="#FF7A00" opacity=".6" />
      </g>

      <g className="sc-float2" opacity=".35">
        <circle cx="340" cy="55" r="14" fill="none" stroke="#1E90FF" strokeWidth=".8" />
        <circle cx="340" cy="55" r="8"  fill="none" stroke="#00AEEF" strokeWidth=".5" strokeDasharray="3 3" />
        <circle cx="340" cy="55" r="3"  fill="#00AEEF" opacity=".5" />
        <line x1="340" y1="41" x2="340" y2="35" stroke="#00AEEF" strokeWidth=".5" opacity=".4" />
        <line x1="354" y1="55" x2="360" y2="55" stroke="#00AEEF" strokeWidth=".5" opacity=".4" />
        <line x1="326" y1="55" x2="320" y2="55" stroke="#00AEEF" strokeWidth=".5" opacity=".4" />
        <line x1="340" y1="69" x2="340" y2="75" stroke="#00AEEF" strokeWidth=".5" opacity=".4" />
      </g>

      <g className="sc-float1" opacity=".3">
        <circle cx="900" cy="420" r="12" fill="none" stroke="#FF7A00" strokeWidth=".6" />
        <line x1="900" y1="408" x2="900" y2="414" stroke="#FF7A00" strokeWidth=".6" />
        <line x1="900" y1="426" x2="900" y2="432" stroke="#FF7A00" strokeWidth=".6" />
        <line x1="888" y1="420" x2="894" y2="420" stroke="#FF7A00" strokeWidth=".6" />
        <line x1="906" y1="420" x2="912" y2="420" stroke="#FF7A00" strokeWidth=".6" />
        <circle cx="900" cy="420" r="2" fill="#FF7A00" opacity=".5" className="sc-blink3" />
      </g>

      <g className="sc-pulse" opacity=".6">
        {[
          [135,160,'#00AEEF',2],[870,170,'#FF7A00',2.5],[50,400,'#1E90FF',1.8],
          [920,350,'#00AEEF',2],[200,80,'#FF7A00',1.5],[750,90,'#00AEEF',2],
          [640,540,'#FF7A00',1.8],[320,530,'#00AEEF',2],[480,50,'#1E90FF',1.5],
          [100,320,'#FF7A00',1.2],[890,260,'#00AEEF',1.5],[380,580,'#1E90FF',1.2],
        ].map(([cx,cy,fill,r],i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={fill} />
        ))}
      </g>

      <g opacity=".08">
        <path d="M 260 330 Q 290 310 310 300" fill="none" stroke="#00AEEF" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M 680 310 Q 710 320 740 330" fill="none" stroke="#FF7A00" strokeWidth="1" strokeDasharray="4 6" />
      </g>

      <rect x="180" y="510" width="600" height="1"  rx=".5" fill="url(#sc-lineH)" opacity=".4" />
      <rect x="280" y="520" width="400" height=".8" rx=".4" fill="url(#sc-lineO)" opacity=".3" />

      <text x="480" y="555" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Arial,sans-serif" fill="#3a6a90" letterSpacing="5" opacity=".6">
        MULTI-PLATFORM
      </text>
      <text x="480" y="570" textAnchor="middle" fontSize="8" fontWeight="400" fontFamily="Arial,sans-serif" fill="#2a4a60" letterSpacing="3" opacity=".5">
        SECURITY ECOSYSTEM
      </text>
    </svg>
  );
}

/* ─── Main Showcase Section ─── */
export default function Showcase() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <style>{showcaseStyles}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/15 to-dark-bg pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-cyan-500/[0.02] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className={`text-center max-w-2xl mx-auto mb-14 sm:mb-18 transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 border border-neon-orange/20 bg-neon-orange/5 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-neon-orange font-medium">Platform Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            See <span className="neon-text">NetraSecure AI</span>
            <br />
            <span className="text-white">in action</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            A unified security platform built for every device — desktop dashboard,
            tablet monitoring, and mobile protection.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          <DeviceIllustration />
        </div>

        <div className={`mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 transition-all duration-700 delay-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { label: 'Desktop Dashboard',  color: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5'   },
            { label: 'Tablet Monitoring',  color: 'border-blue-500/20 text-blue-400 bg-blue-500/5'   },
            { label: 'Mobile Protection',  color: 'border-orange-500/20 text-orange-400 bg-orange-500/5' },
          ].map((pill, i) => (
            <div key={i} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium tracking-wide ${pill.color}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-blue-400' : 'bg-orange-400'}`} />
              {pill.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
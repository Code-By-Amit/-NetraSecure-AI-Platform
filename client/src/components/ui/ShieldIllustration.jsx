import React from "react";

const ShieldIllustration = () => {
  return (
    <div className="relative w-full">
        {/* Inline CSS animations */}
        <style>{`
          @keyframes nexus-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes nexus-spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          @keyframes nexus-float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
          @keyframes nexus-float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
          @keyframes nexus-float3 { 0%, 100% { transform: translateY(-5px); } 50% { transform: translateY(7px); } }
          @keyframes nexus-pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
          @keyframes nexus-shield-pulse { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
          @keyframes nexus-nglow {
            0%, 100% { filter: drop-shadow(0 0 4px #1a8fff) drop-shadow(0 0 12px rgba(26,143,255,0.53)); }
            50% { filter: drop-shadow(0 0 10px #5fb8ff) drop-shadow(0 0 28px rgba(26,143,255,0.8)); }
          }
          @keyframes nexus-scan {
            0% { transform: translateY(-130px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 0.6; }
            100% { transform: translateY(130px); opacity: 0; }
          }
          @keyframes nexus-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
          .nexus-ring-spin { animation: nexus-spin 8s linear infinite; transform-origin: 340px 270px; }
          .nexus-ring-spin-rev { animation: nexus-spin-rev 12s linear infinite; transform-origin: 340px 270px; }
          .nexus-ring-slow { animation: nexus-spin 20s linear infinite; transform-origin: 340px 270px; }
          .nexus-ring-fast { animation: nexus-spin 6s linear infinite; transform-origin: 340px 270px; }
          .nexus-platform-rot { animation: nexus-spin 15s linear infinite; transform-origin: 340px 540px; }
          .nexus-shield-pulse { animation: nexus-shield-pulse 3s ease-in-out infinite; }
          .nexus-float1 { animation: nexus-float1 4s ease-in-out infinite; }
          .nexus-float2 { animation: nexus-float2 5s ease-in-out infinite 1s; }
          .nexus-float3 { animation: nexus-float3 4.5s ease-in-out infinite 2s; }
          .nexus-float1b { animation: nexus-float1 5s ease-in-out infinite 1s; }
          .nexus-float2b { animation: nexus-float2 6s ease-in-out infinite 1.5s; }
          .nexus-glow-pulse { animation: nexus-pulse 2.5s ease-in-out infinite; }
          .nexus-nglow { animation: nexus-nglow 3s ease-in-out infinite; }
          .nexus-scan { animation: nexus-scan 4s linear infinite; }
          .nexus-blink { animation: nexus-blink 1.5s ease-in-out infinite; }
          .nexus-blink2 { animation: nexus-blink 1.5s ease-in-out infinite 0.5s; }
          .nexus-blink3 { animation: nexus-blink 1.5s ease-in-out infinite 0.8s; }
        `}</style>

        <svg
          width="100%"
          viewBox="0 0 680 700"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Nexus Shield cybersecurity illustration"
        >
          <defs>
            <radialGradient id="ns-glowBlue" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a8fff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0a3a6e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ns-glowOrange" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#7a2d00" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ns-platformGlow" cx="50%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#1a8fff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0a3a6e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ns-shieldFill" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#0d2a50" />
              <stop offset="100%" stopColor="#060f1e" />
            </radialGradient>
            <linearGradient id="ns-shieldEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a8fff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#5fb8ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="ns-lineBlue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a8fff" stopOpacity="0" />
              <stop offset="50%" stopColor="#1a8fff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1a8fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ns-lineOrange" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff7a1a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
            </linearGradient>
            <clipPath id="ns-shieldClip">
              <path d="M340 120 L460 160 L460 280 Q460 360 340 420 Q220 360 220 280 L220 160 Z" />
            </clipPath>
          </defs>

          {/* Ambient glow background */}
          <ellipse cx="340" cy="300" rx="260" ry="220" fill="url(#ns-glowBlue)" className="nexus-glow-pulse" />
          <ellipse cx="340" cy="300" rx="160" ry="140" fill="url(#ns-glowOrange)" className="nexus-glow-pulse" />

          {/* Outer orbit ring */}
          <g className="nexus-ring-slow" opacity="0.3">
            <circle cx="340" cy="270" r="215" fill="none" stroke="#1a8fff" strokeWidth="0.5" strokeDasharray="6 18" />
          </g>

          {/* Rotating ring 1 — blue ellipse */}
          <g className="nexus-ring-spin">
            <ellipse cx="340" cy="270" rx="170" ry="42" fill="none" stroke="#1a8fff" strokeWidth="1.2" strokeDasharray="8 14" opacity="0.7" />
          </g>
          {/* Rotating ring 2 — orange reverse */}
          <g className="nexus-ring-spin-rev">
            <ellipse cx="340" cy="270" rx="155" ry="35" fill="none" stroke="#ff7a1a" strokeWidth="0.8" strokeDasharray="4 20" opacity="0.55" />
          </g>
          {/* Rotating ring 3 — outer segments */}
          <g className="nexus-ring-fast" opacity="0.4">
            <ellipse cx="340" cy="270" rx="190" ry="48" fill="none" stroke="#1a8fff" strokeWidth="0.6" strokeDasharray="30 60" />
          </g>

          {/* Holographic platform */}
          <g>
            <ellipse cx="340" cy="540" rx="130" ry="22" fill="url(#ns-platformGlow)" opacity="0.9" />
            <g className="nexus-platform-rot">
              <ellipse cx="340" cy="540" rx="130" ry="22" fill="none" stroke="#1a8fff" strokeWidth="0.8" strokeDasharray="12 8" opacity="0.6" />
            </g>
            <ellipse cx="340" cy="540" rx="95" ry="15" fill="#060f1e" opacity="0.6" />
            <ellipse cx="340" cy="540" rx="95" ry="15" fill="none" stroke="#1a8fff" strokeWidth="1.5" opacity="0.7" />
            <line x1="245" y1="540" x2="435" y2="540" stroke="#1a8fff" strokeWidth="0.5" opacity="0.4" />
            <line x1="340" y1="525" x2="340" y2="555" stroke="#1a8fff" strokeWidth="0.5" opacity="0.4" />
            {/* Beam */}
            <rect x="338" y="460" width="4" height="80" fill="url(#ns-glowBlue)" opacity="0.6" />
          </g>

          {/* === SHIELD === */}
          <g className="nexus-float1">
            {/* Outer glow */}
            <path
              d="M340 120 L460 160 L460 280 Q460 360 340 420 Q220 360 220 280 L220 160 Z"
              fill="url(#ns-glowBlue)" opacity="0.35"
              style={{ filter: "blur(10px)" }}
              transform="scale(1.08) translate(-25.5,-20)"
            />
            {/* Shield body */}
            <path
              d="M340 120 L460 160 L460 280 Q460 360 340 420 Q220 360 220 280 L220 160 Z"
              fill="url(#ns-shieldFill)"
              className="nexus-shield-pulse"
            />
            {/* Shield border */}
            <path
              d="M340 120 L460 160 L460 280 Q460 360 340 420 Q220 360 220 280 L220 160 Z"
              fill="none" stroke="url(#ns-shieldEdge)" strokeWidth="2.5"
            />
            {/* Inner shield ring */}
            <path
              d="M340 148 L440 180 L440 278 Q440 342 340 392 Q240 342 240 278 L240 180 Z"
              fill="none" stroke="#1a8fff" strokeWidth="0.8" opacity="0.4"
            />
            {/* Grid overlay */}
            <g clipPath="url(#ns-shieldClip)" opacity="0.12">
              {[200, 240, 280, 320, 360].map((y) => (
                <line key={y} x1="220" y1={y} x2="460" y2={y} stroke="#1a8fff" strokeWidth="0.5" />
              ))}
              {[270, 310, 370, 410].map((x) => (
                <line key={x} x1={x} y1="120" x2={x} y2="420" stroke="#1a8fff" strokeWidth="0.5" />
              ))}
            </g>
            {/* Scan line */}
            <g clipPath="url(#ns-shieldClip)">
              <rect className="nexus-scan" x="220" y="280" width="240" height="3" fill="#1a8fff" opacity="0.6" rx="1" />
            </g>
            {/* N logo */}
            <g className="nexus-nglow">
              <text
                x="340" y="300"
                textAnchor="middle" dominantBaseline="middle"
                fontSize="96" fontWeight="700"
                fontFamily="'Arial', sans-serif"
                fill="#1a8fff" opacity="0.95"
              >
                N
              </text>
              <line x1="295" y1="330" x2="385" y2="330" stroke="url(#ns-lineBlue)" strokeWidth="2" />
            </g>
            {/* Corner accent dots */}
            <circle cx="340" cy="130" r="4" fill="#1a8fff" opacity="0.9" />
            <circle cx="454" cy="164" r="3" fill="#ff7a1a" opacity="0.8" className="nexus-blink" />
            <circle cx="454" cy="164" r="7" fill="none" stroke="#ff7a1a" strokeWidth="0.8" opacity="0.4" />
            <circle cx="226" cy="164" r="3" fill="#1a8fff" opacity="0.8" className="nexus-blink2" />
          </g>

          {/* === STATUS CARD 1 — System Protected (top-left) === */}
          <g className="nexus-float2">
            <rect x="45" y="148" width="158" height="72" rx="10" fill="#080f1d" stroke="#1a8fff" strokeWidth="1" opacity="0.92" />
            <rect x="45" y="148" width="158" height="72" rx="10" fill="#1a8fff" opacity="0.06" />
            <circle cx="70" cy="170" r="5" fill="#00e676" className="nexus-blink" />
            <circle cx="70" cy="170" r="9" fill="none" stroke="#00e676" strokeWidth="0.8" opacity="0.4" />
            <text x="84" y="174" fontSize="11" fontWeight="600" fontFamily="Arial,sans-serif" fill="#5fb8ff">System Status</text>
            <text x="70" y="196" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif" fill="#e8f4ff">Protected</text>
            <rect x="70" y="206" width="100" height="3" rx="1.5" fill="#0d2a50" />
            <rect x="70" y="206" width="88" height="3" rx="1.5" fill="#1a8fff" opacity="0.8" />
            <line x1="203" y1="184" x2="228" y2="212" stroke="#1a8fff" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.5" />
          </g>

          {/* === STATUS CARD 2 — Real-Time Monitoring (top-right) === */}
          <g className="nexus-float3">
            <rect x="474" y="138" width="162" height="82" rx="10" fill="#080f1d" stroke="#ff7a1a" strokeWidth="1" opacity="0.92" />
            <rect x="474" y="138" width="162" height="82" rx="10" fill="#ff7a1a" opacity="0.05" />
            <circle cx="496" cy="158" r="5" fill="#ff7a1a" className="nexus-blink3" />
            <circle cx="496" cy="158" r="9" fill="none" stroke="#ff7a1a" strokeWidth="0.8" opacity="0.4" />
            <text x="510" y="162" fontSize="11" fontWeight="600" fontFamily="Arial,sans-serif" fill="#ffb07a">Monitoring</text>
            <text x="496" y="185" fontSize="12" fontWeight="700" fontFamily="Arial,sans-serif" fill="#e8f4ff">Real-Time Active</text>
            <polyline
              points="496,202 504,196 512,204 520,192 528,204 536,198 544,202 552,194 560,202 568,198 576,202 584,196 592,202 600,199 608,202 616,197 624,202 632,196"
              fill="none" stroke="#ff7a1a" strokeWidth="1.2" opacity="0.8"
            />
            <line x1="474" y1="179" x2="454" y2="204" stroke="#ff7a1a" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.5" />
          </g>

          {/* === STATUS CARD 3 — Threats Blocked (bottom-left) === */}
          <g className="nexus-float1b">
            <rect x="36" y="368" width="148" height="74" rx="10" fill="#080f1d" stroke="#1a8fff" strokeWidth="1" opacity="0.9" />
            <text x="56" y="391" fontSize="11" fontWeight="600" fontFamily="Arial,sans-serif" fill="#5fb8ff">Threats Blocked</text>
            <text x="56" y="418" fontSize="22" fontWeight="700" fontFamily="Arial,sans-serif" fill="#e8f4ff">1,247</text>
            <text x="110" y="430" fontSize="10" fontFamily="Arial,sans-serif" fill="#ff7a1a">▲ 12%</text>
            <line x1="56" y1="428" x2="170" y2="428" stroke="#1a8fff" strokeWidth="0.4" opacity="0.3" />
            <line x1="184" y1="405" x2="224" y2="368" stroke="#1a8fff" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.5" />
          </g>

          {/* === STATUS CARD 4 — Encryption (bottom-right) === */}
          <g className="nexus-float2b">
            <rect x="496" y="368" width="148" height="74" rx="10" fill="#080f1d" stroke="#ff7a1a" strokeWidth="1" opacity="0.9" />
            <text x="516" y="391" fontSize="11" fontWeight="600" fontFamily="Arial,sans-serif" fill="#ffb07a">Encryption</text>
            <text x="516" y="414" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif" fill="#e8f4ff">AES-256 Active</text>
            <rect x="516" y="422" width="90" height="4" rx="2" fill="#0d2a50" />
            <rect x="516" y="422" width="90" height="4" rx="2" fill="#ff7a1a" opacity="0.7" />
            <circle cx="624" cy="410" r="12" fill="none" stroke="#ff7a1a" strokeWidth="1.2" opacity="0.5" />
            <text x="624" y="414" textAnchor="middle" fontSize="13" fontFamily="Arial,sans-serif" fill="#ff7a1a">🔒</text>
            <line x1="496" y1="405" x2="456" y2="368" stroke="#ff7a1a" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.5" />
          </g>

          {/* Energy particles */}
          <g className="nexus-glow-pulse" opacity="0.7">
            {[
              { cx: 216, cy: 260, r: 2.5, fill: "#1a8fff" },
              { cx: 464, cy: 250, r: 2, fill: "#1a8fff" },
              { cx: 335, cy: 118, r: 2, fill: "#5fb8ff" },
              { cx: 360, cy: 425, r: 2.5, fill: "#ff7a1a" },
              { cx: 320, cy: 428, r: 1.8, fill: "#1a8fff" },
              { cx: 475, cy: 310, r: 2, fill: "#ff7a1a" },
              { cx: 205, cy: 305, r: 2, fill: "#1a8fff" },
              { cx: 400, cy: 130, r: 1.8, fill: "#ff7a1a" },
              { cx: 280, cy: 135, r: 1.5, fill: "#1a8fff" },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.fill} />
            ))}
          </g>

          {/* Decorative glow lines */}
          <rect x="130" y="460" width="420" height="1.5" rx="1" fill="url(#ns-lineBlue)" opacity="0.6" />
          <rect x="200" y="474" width="280" height="1" rx="1" fill="url(#ns-lineOrange)" opacity="0.4" />

          {/* Bottom label */}
          <text x="340" y="582" textAnchor="middle" fontSize="13" fontWeight="700"
            fontFamily="Arial,sans-serif" fill="#5fb8ff" letterSpacing="4">
            NEXUS SHIELD
          </text>
          <text x="340" y="600" textAnchor="middle" fontSize="10" fontWeight="400"
            fontFamily="Arial,sans-serif" fill="#3a6080" letterSpacing="3">
            ACTIVE PROTECTION LAYER
          </text>
          <rect x="240" y="608" width="200" height="0.8" rx="0.4" fill="url(#ns-lineBlue)" opacity="0.5" />
        </svg>
      </div>
  );
};

export default ShieldIllustration;

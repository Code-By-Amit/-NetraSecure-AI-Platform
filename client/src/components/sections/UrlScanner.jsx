import { useState, useEffect, useRef } from 'react';
import { Scan, Shield, AlertTriangle, CheckCircle, Loader2, ExternalLink, Globe, Lock, ArrowRight } from 'lucide-react';
import { scanUrl } from '../../services/api';

export default function UrlScanner() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScan = async () => {
    if (!url.trim()) {
      setError('Please enter a URL');
      inputRef.current?.focus();
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await scanUrl(url);
      // Map backend response to UI expected format
      const backend = res.data;
      let displayStatus = 'Safe Website';
      let displayRisk = 'Low Risk';
      
      if (backend.status === 'dangerous') {
        displayStatus = 'Dangerous Website';
        displayRisk = 'High Risk';
      } else if (backend.status === 'suspicious') {
        displayStatus = 'Suspicious Link';
        displayRisk = 'Medium Risk';
      } else if (backend.status === 'safe') {
        displayStatus = 'Safe Website';
        displayRisk = 'Low Risk';
      }
      
      // Also handle direct risk mapping if backend sends risk as string
      if (backend.risk === 'high') displayRisk = 'High Risk';
      else if (backend.risk === 'medium') displayRisk = 'Medium Risk';
      else if (backend.risk === 'low') displayRisk = 'Low Risk';
      
      setResult({
        status: displayStatus,
        risk: displayRisk,
        message: backend.message,
        scannedUrl: backend.scannedUrl || url,
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Scan failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) handleScan();
  };

  const getStatusConfig = (status) => {
    if (status === 'Safe Website') return {
      color: 'emerald',
      icon: CheckCircle,
      bg: 'bg-emerald-500/[0.08]',
      border: 'border-emerald-500/20',
      iconColor: 'text-emerald-400',
      glowColor: 'shadow-emerald-500/10',
      dotColor: 'bg-emerald-400',
      label: 'No threats detected. This URL appears secure.',
    };
    if (status === 'Suspicious Link') return {
      color: 'amber',
      icon: AlertTriangle,
      bg: 'bg-amber-500/[0.08]',
      border: 'border-amber-500/20',
      iconColor: 'text-amber-400',
      glowColor: 'shadow-amber-500/10',
      dotColor: 'bg-amber-400',
      label: 'Caution advised. This link shows suspicious patterns.',
    };
    return {
      color: 'red',
      icon: Shield,
      bg: 'bg-red-500/[0.08]',
      border: 'border-red-500/20',
      iconColor: 'text-red-400',
      glowColor: 'shadow-red-500/10',
      dotColor: 'bg-red-400',
      label: 'Immediate risk detected. Do not proceed.',
    };
  };

  const getRiskConfig = (risk) => {
    if (risk === 'Low Risk') return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' };
    if (risk === 'Medium Risk') return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' };
    return { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' };
  };

  return (
    <section id="url-scanner" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/20 to-dark-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/[0.03] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 border border-neon-orange/20 bg-neon-orange/5 rounded-full px-4 py-1.5 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-neon-orange font-medium">Security Tool</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              URL <span className="neon-text">Security Scanner</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Instantly check any website for malware, phishing, or suspicious
              activity with our AI-powered engine.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Globe className="w-4 h-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors duration-200" />
                    </div>
                    <input
                      ref={inputRef}
                      type="text"
                      value={url}
                      onChange={(e) => { setUrl(e.target.value); setError(''); }}
                      onKeyDown={handleKeyDown}
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-11 pr-4 py-3.5
                        text-white text-sm placeholder:text-gray-500
                        focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20
                        transition-all duration-200"
                    />
                  </div>
                  <button
                    onClick={handleScan}
                    disabled={loading}
                    className="group/btn relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl
                      bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm
                      shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35
                      hover:from-cyan-400 hover:to-blue-500
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-cyan-500/20
                      transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
                      whitespace-nowrap"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Scanning…
                      </>
                    ) : (
                      <>
                        <Scan className="w-4 h-4" />
                        Scan URL
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-200" />
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
                  <Lock className="w-3 h-3" />
                  <span>All scans are encrypted and private. We never store your URLs.</span>
                </div>
              </div>

              {error && (
                <div className="mx-6 sm:mx-8 mb-6 sm:mb-8 p-4 rounded-xl bg-red-500/[0.06] border border-red-500/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-sm text-red-300">{error}</span>
                </div>
              )}

              {result && (() => {
                const status = getStatusConfig(result.status);
                const risk = getRiskConfig(result.risk);
                const StatusIcon = status.icon;
                return (
                  <div className="mx-6 sm:mx-8 mb-6 sm:mb-8">
                    <div className={`rounded-xl ${status.bg} border ${status.border} overflow-hidden shadow-lg ${status.glowColor}`}>
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-11 h-11 rounded-xl ${status.bg} border ${status.border} flex items-center justify-center flex-shrink-0`}>
                            <StatusIcon className={`w-5 h-5 ${status.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2.5 mb-2">
                              <h3 className={`text-lg font-bold ${status.iconColor}`}>{result.status}</h3>
                              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${risk.bg} ${risk.text} ${risk.border}`}>
                                {result.risk}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed mb-3">{result.message}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{result.scannedUrl}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`px-5 sm:px-6 py-3 border-t ${status.border} bg-white/[0.02] flex items-center justify-between`}>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full ${status.dotColor} animate-pulse`} />
                          <span>Scan complete</span>
                        </div>
                        <span className="text-xs text-gray-500 font-mono">{new Date().toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
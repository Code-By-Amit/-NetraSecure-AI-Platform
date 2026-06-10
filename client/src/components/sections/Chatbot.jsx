
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, Minus, MessageSquareCode, ChevronUp } from 'lucide-react';
import { useChatbot } from '../../hooks/useChatbot';

const SUGGESTIONS = [
  {
    label: '🔐 Password Security',
    text: 'How can I secure my passwords?'
  },
  {
    label: '🎣 Phishing Protection',
    text: 'How do I identify phishing emails?'
  },
  {
    label: '🛡️ Malware Defense',
    text: 'How can I protect against malware?'
  },
  {
    label: '📡 Network Security',
    text: 'How can I secure my WiFi network?'
  },
  {
    label: '🔍 Data Breach Check',
    text: 'What should I do after a data breach?'
  },
  {
    label: '🤖 Deepfake Detection',
    text: 'How can I detect deepfakes?'
  }
];
export default function Chatbot({ isOpen, setIsOpen }) {
  const { messages, loading, sendMessage } = useChatbot();
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  const handleSend = async (text) => {
    const msg = text || input;
    if (!msg.trim() || loading) return;
    setShowSuggestions(false);
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    await sendMessage(msg);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const autoResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };

  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // FAB button when closed
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-13 right-13 z-50 group"
        aria-label="Open AI Chatbot"
      >
        <div className="relative w-25 h-18 rounded-full bg-[#1E2128] border-2 border-[#00C8FF]/40 hover:border-[#00C8FF]/80 flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200">
          <Bot className="w-7 h-7 text-[#00C8FF]" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-[#FF6B2B] rounded-full border-2 border-[#0D0F14] animate-pulse" />
        </div>
      </button>
    );
  }

  // Minimized bar
  if (isMinimized) {
    return (
      <div
        className="fixed bottom-13 right-13 z-50 w-80 bg-[#1E2128] rounded-2xl border border-[#00C8FF]/25 p-3 flex items-center justify-between cursor-pointer hover:border-[#00C8FF]/50 transition-colors shadow-2xl"
        onClick={() => setIsMinimized(false)}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/30 flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#00C8FF]" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">NetraSecure AI</p>
            <p className="text-xs text-gray-500">Click to expand</p>
          </div>
        </div>
        <ChevronUp className="w-4 h-4 text-gray-500" />
      </div>
    );
  }

  // Full chat window
  return (
    <div className="fixed bottom-13 right-13 z-50 w-139  max-w-[calc(100vw-2rem)]">
      <div className="flex flex-col rounded-2xl overflow-hidden h-200 shadow-2xl border border-[#00C8FF]/25 bg-[#161920]">

        {/* Header */}
        <div className="flex-shrink-0 bg-[#1E2128] border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-[#00C8FF]/10 border-[1.5px] border-[#00C8FF]/40 flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#00C8FF]" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#1E2128]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">NetraSecure AI</p>
              <p className="text-xs text-gray-500">Online · responds instantly</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-gray-200 transition-colors"
              title="Minimize"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-gray-200 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4  bg-[#0D0F14]/40 scrollbar-thin scrollbar-thumb-white/10">

          {/* Welcome message */}
          <div className="flex gap-2.5 items-end">
            <div className="w-7 h-7 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/30 flex items-center justify-center flex-shrink-0">
              <Bot className="w-3.5 h-3.5 text-[#00C8FF]" />
            </div>
            <div>
              <div className="max-w-[80%] bg-[#1E2128] border border-white/5 text-[#cbd5e1] text-sm px-4 py-3 rounded-2xl rounded-bl-md leading-relaxed">
                Hi there! 👋 I'm the NetraSecure AI assistant. I can help you with security audits, threat detection, vulnerability reports, and more. What can I help you with?
              </div>
              <p className="text-[11px] text-gray-600 mt-1 ml-1">{now}</p>
            </div>
          </div>

          {/* Quick suggestion chips */}
          {showSuggestions && (
            <div className="flex flex-wrap gap-2 pl-9">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.text}
                  onClick={() => handleSend(s.text)}
                  className="px-3 py-1.5 text-xs rounded-full bg-[#00C8FF]/8 border border-[#00C8FF]/20 text-[#00C8FF] hover:bg-[#00C8FF]/15 transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"
                }`}
            >
              {/* Bot Avatar */}
              {msg.role === "assistant" && (
                <div className="w-9 h-9 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-[#00C8FF]" />
                </div>
              )}

              <div
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"
                  }`}
              >
                <div
                  className={`
          px-4 py-3 rounded-2xl text-sm leading-relaxed
          max-w-[85%] sm:max-w-md break-words
          transition-all duration-200
          ${msg.role === "user"
                      ? "bg-gradient-to-r from-[#00C8FF] to-[#00AEEF] text-white rounded-br-md shadow-lg shadow-cyan-500/10"
                      : "bg-[#171A21]/80 backdrop-blur-md border border-white/10 text-slate-200 rounded-bl-md shadow-lg"
                    }
        `}
                >
                  {msg.content}
                </div>

                <span className="text-[10px] text-gray-500 mt-1 px-2">
                  {msg.timestamp}
                </span>
              </div>

              {/* User Avatar */}
              {msg.role === "user" && (
                <div className="w-9 h-9 rounded-full bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-4 h-4 text-[#FF6B2B]" />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex gap-2.5 items-end">
              <div className="w-7 h-7 rounded-full bg-[#00C8FF]/10 border border-[#00C8FF]/30 flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5 text-[#00C8FF]" />
              </div>
              <div className="bg-[#1E2128] border border-white/5 px-4 py-3.5 rounded-2xl rounded-bl-md">
                <div className="flex gap-1.5 items-center">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-2 h-2 rounded-full bg-[#00C8FF]/60 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="flex-shrink-0 bg-[#1E2128] border-t border-white/5 p-3">
          <div className="flex gap-2.5 items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => { setInput(e.target.value); autoResize(e); }}
              onKeyDown={handleKeyPress}
              placeholder="Ask about security, threats, audits…"
              rows={1}
              className="flex-1 overflow-y-hidden bg-[#0D0F14] border border-[#00C8FF]/18 focus:border-[#00C8FF]/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 resize-none focus:outline-none transition-colors min-h-[44px] max-h-[120px]"
              style={{ lineHeight: '1.5' }}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="w-11 h-11 rounded-xl bg-[#00C8FF] flex items-center justify-center flex-shrink-0 hover:opacity-85 active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-4 h-4 text-[#0a1520]" />
            </button>
          </div>
          <p className="text-[11px] text-gray-600 text-center mt-2">Enter to send · Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  );
}
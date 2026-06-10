import { Shield, Code2, Share2, Mail, Phone, MapPin, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-card/50 border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-neon-blue" />
              <span className="font-bold text-xl">
                Netra<span className="neon-text">Secure</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered cybersecurity platform protecting businesses and individuals from modern threats.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('#features')} className="text-gray-400 hover:text-neon-blue transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('#how-it-works')} className="text-gray-400 hover:text-neon-blue transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollToSection('#chatbot')} className="text-gray-400 hover:text-neon-blue transition-colors">AI Chatbot</button></li>
              <li><button onClick={() => scrollToSection('#url-scanner')} className="text-gray-400 hover:text-neon-blue transition-colors">URL Scanner</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-neon-blue transition-colors">Contact Us</button></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">API Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-3">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-neon-blue" /> hello@netrasecure.ai</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-neon-blue" /> +1 (800) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neon-blue" /> Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} NetraSecure AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
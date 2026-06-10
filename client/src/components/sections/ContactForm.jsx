import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Shield, Lock, Mail, User, MessageSquare, Sparkles } from 'lucide-react';
import { submitContact } from '../../services/api';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSuccess('');
    try {
      await submitContact(data);
      setSuccess('Message sent successfully! We\'ll reply within 24 hours.');
      reset();
      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to send. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-card/30 to-dark-bg" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-orange/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-dark-card/60 backdrop-blur-sm border border-neon-blue/30 rounded-full px-4 py-1.5 mb-5">
              <Lock className="w-4 h-4 text-neon-blue" />
              <span className="text-xs font-semibold text-neon-blue tracking-wider">SECURE CONNECTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Get in <span className="neon-text">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Have questions? Our AI-powered security experts are here to assist you 24/7.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-orange mx-auto rounded-full mt-4" />
          </div>

          {/* Form Container - Split Layout for Desktop */}
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left Side - Info & Security Badges */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-neon-blue/20">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-neon-blue" />
                  <h3 className="text-xl font-bold text-white">Secure Communication</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Your data is encrypted with AES-256 and never shared. All messages are protected by our AI security layer.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Lock className="w-3 h-3 text-neon-orange" />
                  <span>End-to-end encrypted</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <Shield className="w-3 h-3 text-neon-orange" />
                  <span>GDPR compliant</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/30 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-neon-blue/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email us</p>
                    <p className="text-sm text-white">hello@netrasecure.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-card/30 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-neon-orange/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-neon-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Live chat</p>
                    <p className="text-sm text-white">Available 24/7 via AI assistant</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-neon-blue/5 to-neon-orange/5 border border-neon-blue/20">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-neon-orange mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400">AI Response Time</p>
                    <p className="text-lg font-bold text-white">&lt; 2 minutes</p>
                    <p className="text-xs text-gray-500">Average response for security queries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:col-span-3">
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-neon-blue/30 shadow-xl shadow-neon-blue/10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-1">
                      <User className="w-3.5 h-3.5 text-neon-blue" />
                      Full Name <span className="text-neon-orange">*</span>
                    </label>
                    <input
                      {...register('fullName', { required: 'Name is required' })}
                      className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><Shield className="w-3 h-3" />{errors.fullName.message}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-1">
                      <Mail className="w-3.5 h-3.5 text-neon-blue" />
                      Email <span className="text-neon-orange">*</span>
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                      })}
                      className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      placeholder="hello@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><Shield className="w-3 h-3" />{errors.email.message}</p>}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-1">
                      <MessageSquare className="w-3.5 h-3.5 text-neon-blue" />
                      Subject <span className="text-neon-orange">*</span>
                    </label>
                    <input
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                      placeholder="Security inquiry, partnership, support..."
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><Shield className="w-3 h-3" />{errors.subject.message}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-1">
                      Message <span className="text-neon-orange">*</span>
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows="4"
                      className="w-full bg-dark-bg border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                      placeholder="How can we help you today?"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><Shield className="w-3 h-3" />{errors.message.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-neon-blue to-neon-orange text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">Sending <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /></span>
                    ) : (
                      <><Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Send Secure Message</>
                    )}
                  </button>

                  {/* Success Message */}
                  {success && (
                    <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm animate-fadeIn">
                      <CheckCircle className="w-4 h-4" />
                      {success}
                    </div>
                  )}

                  {/* Security Footer */}
                  <div className="text-center pt-4">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                      <Lock className="w-3 h-3" />
                      Protected by AI security
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <Shield className="w-3 h-3" />
                      256-bit encryption
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
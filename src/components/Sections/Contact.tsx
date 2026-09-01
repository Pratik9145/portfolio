import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import GlassCard from '../Ui/GlassCard';
import { UIVal } from '../Ui/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock form submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 font-semibold tracking-wider uppercase text-sm"
        >
          Get In Touch
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display"
        >
          Let's Work Together
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          <GlassCard className="space-y-6 border border-white/5" hoverEffect={false}>
            <h3 className="text-xl font-bold text-white tracking-tight">Contact Information</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Have an exciting project or internship opportunity? Drop me a message or connect with me on socials. I typically reply within 24 hours.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <UIVal.Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-semibold">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <UIVal.MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase font-semibold">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <span className="block text-xs text-gray-500 uppercase font-semibold">Connect on Socials</span>
              <div className="flex gap-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-semibold text-gray-300 hover:text-white"
                >
                  <UIVal.Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  <UIVal.Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </GlassCard>

        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard className="border border-white/5 relative" hoverEffect={false}>
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-500 flex items-center gap-1"><UIVal.AlertCircle className="w-3.5 h-3.5" />{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 flex items-center gap-1"><UIVal.AlertCircle className="w-3.5 h-3.5" />{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    errors.subject ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                  }`}
                  placeholder="Internship / Freelance / Consultation"
                />
                {errors.subject && <span className="text-xs text-red-500 flex items-center gap-1"><UIVal.AlertCircle className="w-3.5 h-3.5" />{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-white/10 focus:border-blue-500'
                  }`}
                  placeholder="Hey Pratik, let's discuss details about a frontend project..."
                />
                {errors.message && <span className="text-xs text-red-500 flex items-center gap-1"><UIVal.AlertCircle className="w-3.5 h-3.5" />{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <UIVal.Check className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success Overlay Dialog */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
                    <UIVal.CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-sm text-gray-400 max-w-sm">
                      Thank you for reaching out. Your message has been received, and I'll get back to you shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};
export default Contact;

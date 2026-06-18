import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd341bf3d-d8fa-4822-953d-ac9ae66592a1',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 animate-gradient">
            Get in Touch
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-slate-400 text-center max-w-md mx-auto mb-16 text-sm md:text-base">
            Have a project in mind? Let's work together and create something amazing!
          </p>

          <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Side - Info Card */}
            <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:border-purple-500/30 transition-all duration-300 flex flex-col">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                  <span className="text-xs font-semibold text-purple-300">Available for Work</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  I'm always excited to collaborate on innovative projects, discuss technology, or explore new opportunities. Feel free to reach out anytime!
                </p>
              </div>

              <div className="space-y-5 mt-auto">
                <div className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 rounded-xl flex items-center justify-center group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-slate-500 font-semibold tracking-wider uppercase">Email</span>
                    <a href="mailto:bavinduyeshan@example.com" className="text-slate-300 hover:text-purple-400 transition-colors font-medium">
                      bavinduyeshan@example.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 rounded-xl flex items-center justify-center group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-slate-500 font-semibold tracking-wider uppercase">Location</span>
                    <span className="text-slate-300 font-medium">Colombo, Sri Lanka</span>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-400 rounded-xl flex items-center justify-center group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-slate-500 font-semibold tracking-wider uppercase">Response Time</span>
                    <span className="text-slate-300 font-medium">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-slate-800/60">
                <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase block mb-3">Connect with me</span>
                <div className="flex space-x-3">
                  <a
                      href="https://www.linkedin.com/in/bavindu-yeshan-3a26052a7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-800/50 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/50 border border-slate-700 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.5 0H4.5C2.015 0 0 2.015 0 4.5v15C0 21.985 2.015 24 4.5 24h15c2.485 0 4.5-2.015 4.5-4.5v-15C24 2.015 21.985 0 19.5 0zM7.5 20.25H4.875V9H7.5v11.25zM6.188 7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.312 12.75H16.875V14.625c0-1.035-.018-2.368-1.44-2.368-1.44 0-1.662 1.125-1.662 2.287V20.25H11.25V9h2.625v1.512c.37-.576 1.035-1.395 2.52-1.395 2.692 0 3.188 1.773 3.188 4.08v6.053z" />
                    </svg>
                  </a>
                  <a
                      href="https://github.com/Bavinduyeshan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-800/50 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/50 border border-slate-700 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 3.803c1.02.002 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.429.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-slate-800/50 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/50 border border-slate-700 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-6">Fill in the details and I'll get back to you soon!</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-slate-200 placeholder-slate-500 transition-all duration-300 focus:outline-none hover:border-slate-700"
                      required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-slate-200 placeholder-slate-500 transition-all duration-300 focus:outline-none hover:border-slate-700"
                      required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Your Message</label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-slate-200 placeholder-slate-500 transition-all duration-300 h-32 resize-none focus:outline-none hover:border-slate-700"
                      required
                  ></textarea>
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-3 rounded-xl flex items-center gap-2 animate-fade-in">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm font-medium">Something went wrong. Please try again.</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative overflow-hidden w-full px-6 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 ${
                        isSubmitting
                            ? 'bg-slate-700 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]'
                    }`}
                >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                  ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                  )}
                </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="border-t border-slate-800/60 text-center py-6 mt-20">
          <div className="container mx-auto px-6">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Bavindu Yeshan. Crafted with
              <span className="text-purple-400 mx-1">❤</span>
              using React & Tailwind CSS
            </p>
            <p className="text-slate-600 text-xs mt-1">All rights reserved.</p>
          </div>
        </footer>
      </section>
  );
}
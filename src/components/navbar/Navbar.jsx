import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'Projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dynamic Scroll Observer to highlight active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Add shadow/background when scrolled
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
              ? 'bg-[#05070d]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-transparent backdrop-blur-none'
      }`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between py-3 md:py-4">
          {/* Left: Logo block with enhanced gradient */}
          <a href="#home" className="flex items-center space-x-3 group select-none">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
            <span className="font-bold text-xl text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            Bavindu
          </span>
          </a>

          {/* Center: Navigation Links for Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {NavbarLinks.map((e) => {
              const isSectionActive = activeSection === e.link.substring(1);
              return (
                  <a
                      key={e.id}
                      href={e.link}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isSectionActive
                              ? 'text-white'
                              : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {isSectionActive && (
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]"></span>
                    )}
                    <span className="relative z-10">{e.name}</span>
                    {isSectionActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
                    )}
                  </a>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
                href="https://www.linkedin.com/in/bavindu-yeshan-3a26052a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              LinkedIn
            </a>

            <a
                href="https://github.com/Bavinduyeshan"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 hover:border-purple-400/50 text-white text-sm font-medium rounded-lg px-4 py-2 transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 3.803c1.02.002 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.429.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="relative z-10">GitHub</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
                onClick={toggleMenu}
                className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                aria-label="Toggle menu"
            >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown with enhanced styling */}
        {isOpen && (
            <div className="md:hidden bg-[#05070d]/98 backdrop-blur-xl border-b border-white/5 px-6 py-6 shadow-2xl space-y-4">
              {NavbarLinks.map((e) => {
                const isSectionActive = activeSection === e.link.substring(1);
                return (
                    <a
                        key={e.id}
                        href={e.link}
                        className={`relative block py-2.5 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                            isSectionActive
                                ? 'text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                      {e.name}
                      {isSectionActive && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"></span>
                      )}
                    </a>
                );
              })}
              <hr className="border-white/5 my-3" />
              <div className="flex items-center justify-between pt-2 gap-4">
                <a
                    href="https://www.linkedin.com/in/bavindu-yeshan-3a26052a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white text-base font-medium transition-all duration-300 flex-1 text-center py-2 rounded-lg hover:bg-white/5"
                >
                  LinkedIn
                </a>
                <a
                    href="https://github.com/Bavinduyeshan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-white text-sm font-medium rounded-lg px-4 py-2 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                    onClick={() => setIsOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 3.803c1.02.002 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.429.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
        )}
      </header>
  );
}
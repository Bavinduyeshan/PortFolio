import React, { useState, useEffect, useRef } from 'react';
import hosimg from '../../assets/Untitled-1.png';
import weatherWEb from '../../assets/weatherc.jpg';
import eims from '../../assets/eimsc.jpg';
import railway2 from '../../assets/railwayc.jpg';
import chatbot from '../../assets/chatbotc.jpg';
import chatbotcshrape from '../../assets/cht.jpg';
import unist from '../../assets/unist.jpeg';
import weatherf from '../../assets/weatherappf.jpeg';
import patientmedical from '../../assets/patientmedical.jpeg';
import mediguide from '../../assets/mdeiguide.jpeg';
import tictac from '../../assets/tictac.jpeg';

// Featured projects for carousel
const featuredProjects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A desktop application for managing hospital operations with integrated patient records, appointment scheduling, and billing systems.",
    image: hosimg,
    github: "https://github.com/Bavinduyeshan/Hospital-Management-system.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7266091865416839169",
    tech: ["C#", "WinForms", "MySQL"]
  },
  {
    id: 3,
    title: "Educational Institute Management System",
    description: "A comprehensive Java Swing-based system for managing student enrollments, course scheduling, and academic records.",
    image: eims,
    github: "https://github.com/Bavinduyeshan/Educational-Institute-Management-System.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282806142282440704",
    tech: ["Java", "Swing", "MySQL"]
  },
  {
    id: 5,
    title: "Voice-Activated Chatbot",
    description: "An intelligent Python chatbot with voice activation capabilities using speech recognition and natural language processing.",
    image: chatbot,
    github: "https://github.com/Bavinduyeshan/Chatbot-with-Voice.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275227024758059008",
    tech: ["Python", "Speech API", "AI"]
  },
  {
    id: 10,
    title: "Advanced Patient-Medical Record System",
    description: "A robust web-based solution using React and Spring Boot microservices for secure patient data management.",
    image: patientmedical,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7322837235370729473/",
    tech: ["React", "Spring Boot", "Microservices"]
  },
  {
    id: 12,
    title: "Medi-Guide",
    description: "A global platform helping people search medicines and get reliable information with real-time data.",
    image: mediguide,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7329592696581292033/",
    tech: ["React", "Spring Boot", "CSS"]
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Smooth transition to next slide
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProjects.length) % featuredProjects.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Auto-play carousel with smooth transitions
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 4500);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isTransitioning]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resumeAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 4500);
  };

  // Get visible projects (3 at a time)
  const getVisibleProjects = () => {
    const total = featuredProjects.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    return {
      prev: featuredProjects[prevIndex],
      current: featuredProjects[currentIndex],
      next: featuredProjects[nextIndex]
    };
  };

  const visibleProjects = getVisibleProjects();

  // Animation classes for smooth transitions
  const getAnimationClass = (position) => {
    if (isTransitioning) {
      if (position === 'current') {
        return direction === 'next'
            ? 'animate-slide-in-from-right'
            : 'animate-slide-in-from-left';
      } else if (position === 'prev') {
        return direction === 'next'
            ? 'animate-slide-out-to-left'
            : 'animate-slide-out-to-right';
      }
    }
    return '';
  };

  return (
      <div>
        <section id='home' className='relative flex flex-col lg:flex-row items-center justify-center w-full px-6 md:px-12 lg:px-24 pt-32 md:pt-40 pb-16 z-10 gap-12'>
          <div data-aos='fade-up' className='flex-1 lg:text-left text-center lg:max-w-xl'>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-pulse backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
              <span>🚀 Available for Opportunities</span>
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 animate-gradient leading-tight'>
              Bavindu Yeshan
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-4">
              Undergraduate Software Engineer
            </h2>
            <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0'>
              👋 Hello! I'm Bavindu, a dedicated software engineering student at NIBM. I thrive on creating innovative, modern solutions and clean, scalable code. Let's build something exceptional together!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                  type='button'
                  className='relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full px-8 py-3.5 text-lg transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] w-full sm:w-auto'
                  onClick={scrollToContact}
              >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get in Touch
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              </button>
              <a
                  href="#projects"
                  className="px-6 py-3.5 text-slate-300 hover:text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 text-lg w-full sm:w-auto text-center border border-slate-800 hover:border-purple-500/50"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Project Carousel Section */}
          <div data-aos='fade-up' data-aos-delay='600' className='flex-1 w-full lg:max-w-2xl'>
            <div className="relative w-full">
              <div
                  ref={carouselRef}
                  className="relative overflow-hidden"
                  onMouseEnter={pauseAutoPlay}
                  onMouseLeave={resumeAutoPlay}
              >
                <div className="flex items-center justify-center min-h-[420px] md:min-h-[480px] py-8 px-2">
                  {/* Previous Project (Blurred) */}
                  <div className="hidden md:block absolute left-0 w-1/4 opacity-40 blur-sm scale-90 transition-all duration-700 z-0">
                    <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl overflow-hidden">
                      <img
                          src={visibleProjects.prev.image}
                          alt={visibleProjects.prev.title}
                          className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="text-white text-xs font-semibold truncate">{visibleProjects.prev.title}</h4>
                      </div>
                    </div>
                  </div>

                  {/* Current Project (Center - Main) */}
                  <div className={`relative z-10 w-full md:w-1/2 mx-auto transition-all duration-700 transform ${
                      isTransitioning ? 'scale-95' : 'scale-100'
                  }`}>
                    <div className="group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 hover:border-purple-400/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(139,92,246,0.2)] transition-all duration-500">
                      <div className="overflow-hidden h-56 md:h-64 relative">
                        <img
                            src={visibleProjects.current.image}
                            alt={visibleProjects.current.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                                isTransitioning ? 'scale-110' : 'scale-100'
                            }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-70"></div>

                        {/* Tech tags overlay */}
                        <div className="absolute bottom-16 left-4 right-4 flex flex-wrap gap-1.5">
                          {visibleProjects.current.tech.map((t, idx) => (
                              <span key={idx} className="bg-purple-500/20 backdrop-blur-sm text-purple-200 border border-purple-500/30 text-[10px] px-2 py-0.5 rounded-full font-medium">
                            {t}
                          </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-5 relative z-10 -mt-8">
                        <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          {visibleProjects.current.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                          {visibleProjects.current.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <a
                              href={visibleProjects.current.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium py-1.5 px-4 rounded-full transition-all duration-300 text-xs gap-1.5 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 3.803c1.02.002 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.429.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                          </a>
                          {visibleProjects.current.linkedin && (
                              <a
                                  href={visibleProjects.current.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-white font-medium py-1.5 px-4 rounded-full transition-all duration-300 text-xs gap-1.5 hover:bg-slate-800"
                              >
                                <svg className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19.5 0H4.5C2.015 0 0 2.015 0 4.5v15C0 21.985 2.015 24 4.5 24h15c2.485 0 4.5-2.015 4.5-4.5v-15C24 2.015 21.985 0 19.5 0zM7.5 20.25H4.875V9H7.5v11.25zM6.188 7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.312 12.75H16.875V14.625c0-1.035-.018-2.368-1.44-2.368-1.44 0-1.662 1.125-1.662 2.287V20.25H11.25V9h2.625v1.512c.37-.576 1.035-1.395 2.52-1.395 2.692 0 3.188 1.773 3.188 4.08v6.053z" />
                                </svg>
                                Post
                              </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Project (Blurred) */}
                  <div className="hidden md:block absolute right-0 w-1/4 opacity-40 blur-sm scale-90 transition-all duration-700 z-0">
                    <div className="bg-slate-900/60 border border-slate-800/60 rounded-xl overflow-hidden">
                      <img
                          src={visibleProjects.next.image}
                          alt={visibleProjects.next.title}
                          className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="text-white text-xs font-semibold truncate">{visibleProjects.next.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Navigation Controls */}
              <div className="flex items-center justify-between mt-6 px-4">
                <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full bg-slate-900/60 border border-slate-700 hover:border-purple-500/50 text-slate-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] disabled:opacity-50"
                    disabled={isTransitioning}
                    aria-label="Previous project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Navigation Dots */}
                <div className="flex gap-2">
                  {featuredProjects.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`h-2 rounded-full transition-all duration-500 ${
                              index === currentIndex
                                  ? 'w-8 bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                                  : 'w-2 bg-slate-600 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to project ${index + 1}`}
                      />
                  ))}
                </div>

                <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-slate-900/60 border border-slate-700 hover:border-purple-500/50 text-slate-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] disabled:opacity-50"
                    disabled={isTransitioning}
                    aria-label="Next project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* View All Projects Button */}
              <div className="flex justify-center mt-6">
                <button
                    onClick={scrollToProjects}
                    className="relative group inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900/60 border border-slate-700 hover:border-purple-500/50 rounded-full text-slate-300 hover:text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                >
                  <span>View All Projects</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Add animation keyframes to your global CSS */}
        <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(30px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-30px) scale(0.95);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideOutToLeft {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-30px) scale(0.95);
            opacity: 0;
          }
        }
        
        @keyframes slideOutToRight {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(30px) scale(0.95);
            opacity: 0;
          }
        }
        
        .animate-slide-in-from-right {
          animation: slideInFromRight 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-in-from-left {
          animation: slideInFromLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-out-to-left {
          animation: slideOutToLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slide-out-to-right {
          animation: slideOutToRight 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
      </div>
  );
}
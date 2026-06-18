import React, { useState } from 'react';
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

const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    description: "A desktop application for managing hospital operations.",
    image: hosimg,
    github: "https://github.com/Bavinduyeshan/Hospital-Management-system.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7266091865416839169",
    tech: ["C#", "WinForms", "MySQL"],
    category: "desktop"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather app created using HTML, CSS, and JavaScript.",
    image: weatherWEb,
    github: "https://github.com/Bavinduyeshan/Weather-App.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7252038693815738371",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "web"
  },
  {
    id: 3,
    title: "Educational Institute Management System",
    description: "A Java Swing-based system for educational institute management.",
    image: eims,
    github: "https://github.com/Bavinduyeshan/Educational-Institute-Management-System.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282806142282440704",
    tech: ["Java", "Swing", "MySQL"],
    category: "desktop"
  },
  {
    id: 4,
    title: "Railway Management System",
    description: "A C# WinForms project to manage railway operations.",
    image: railway2,
    github: "https://github.com/Bavinduyeshan/Railway-mangement-system.git",
    linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_managementsystem-activity-7176607728205803520-wWgy?utm_source=share&utm_medium=member_desktop",
    tech: ["C#", "WinForms", "SQL Server"],
    category: "desktop"
  },
  {
    id: 5,
    title: "Voice-Activated Chatbot",
    description: "A Python chatbot with voice activation capabilities.",
    image: chatbot,
    github: "https://github.com/Bavinduyeshan/Chatbot-with-Voice.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275227024758059008",
    tech: ["Python", "Speech API", "AI"],
    category: "ai"
  },
  {
    id: 6,
    title: "Python Weather App",
    description: "A weather app developed using Python.",
    image: weatherWEb,
    github: "https://github.com/Bavinduyeshan/Weather-App-Python.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7208151037424123904",
    tech: ["Python", "Tkinter", "Requests"],
    category: "desktop"
  },
  {
    id: 7,
    title: "Hospital Chatbot",
    description: "A C# WinForms chatbot for hospital management systems.",
    image: chatbotcshrape,
    github: "https://github.com/Bavinduyeshan/Chatbot_HMS.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7267264105005146113",
    tech: ["C#", "WinForms", "NLP"],
    category: "ai"
  },
  {
    id: 8,
    title: "University Student Management System",
    description: "A C# WinForms system for automating university student management.",
    image: unist,
    github: "https://github.com/Bavinduyeshan/UniversityStudentManagementSystem.git",
    linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_sql-softwaredevelopment-studentmanagementsystem-activity-7247354873631907842-lhhI?utm_source=share&utm_medium=member_desktop",
    tech: ["C#", "WinForms", "MySQL"],
    category: "desktop"
  },
  {
    id: 9,
    title: "Flutter Weather App",
    description: "A simple weather app created using Flutter.",
    image: weatherf,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_flutter-dart-mobileapp-activity-7285670784084144128-P5t1?utm_source=share&utm_medium=member_desktop",
    tech: ["Flutter", "Dart", "OpenWeather"],
    category: "mobile"
  },
  {
    id: 10,
    title: "Advanced Patient-Medical Record Management System",
    description: "A robust web-based solution built using React for a dynamic frontend and Spring Boot microservices for a scalable and secure backend.",
    image: patientmedical,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7322837235370729473/",
    tech: ["React", "Spring Boot", "Microservices", "REST API"],
    category: "web"
  },
  {
    id: 11,
    title: "Swift iOS Tic Tac Toe App",
    description: "A simple Tic Tac Toe app created using Swift.",
    image: tictac,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7336467861994991619/",
    tech: ["Swift", "SwiftUI", "iOS"],
    category: "mobile"
  },
  {
    id: 12,
    title: "Medi-Guide",
    description: "A platform that helps people around the world search medicines and get reliable information.",
    image: mediguide,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7329592696581292033/",
    tech: ["React", "Spring Boot", "CSS", "JSON Data"],
    category: "web"
  }
];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterCategories = [
    { key: 'all', name: 'All Projects' },
    { key: 'web-mobile', name: 'Web & Mobile' },
    { key: 'desktop', name: 'Desktop & Systems' },
    { key: 'ai', name: 'AI & Chatbots' }
  ];

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'web-mobile') {
      return project.category === 'web' || project.category === 'mobile';
    }
    if (selectedFilter === 'desktop') return project.category === 'desktop';
    if (selectedFilter === 'ai') return project.category === 'ai';
    return true;
  });

  return (
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 animate-gradient">
            My Projects
          </h2>
          <p className="text-slate-400 text-center max-w-md mx-auto mb-12 text-sm md:text-base">
            Explore a curated selection of systems, mobile applications, and web services I have designed and built.
          </p>

          {/* Filter bar */}
          <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-3 mb-16">
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat.key;
              return (
                  <button
                      key={cat.key}
                      onClick={() => setSelectedFilter(cat.key)}
                      className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 active:scale-95 ${
                          isActive
                              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-transparent shadow-[0_0_30px_rgba(139,92,246,0.3)]'
                              : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-white hover:border-purple-500/50'
                      }`}
                  >
                    {cat.name}
                  </button>
              );
            })}
          </div>

          {/* Projects Grid - All projects in a single grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
                <div
                    key={project.id}
                    className="group bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:border-purple-500/40 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="overflow-hidden h-56 relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                    {/* Tech tags */}
                    {project.tech && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((t, idx) => (
                              <span key={idx} className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs px-2.5 py-0.5 rounded-full font-medium">
                        {t}
                      </span>
                          ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-slate-950 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 text-slate-300 hover:text-white font-medium py-2 px-4 rounded-full transition-all duration-300 text-xs gap-1.5"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 3.803c1.02.002 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.429.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                      {project.linkedin && (
                          <a
                              href={project.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-slate-950 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 text-slate-300 hover:text-white font-medium py-2 px-4 rounded-full transition-all duration-300 text-xs gap-1.5"
                          >
                            <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.5 0H4.5C2.015 0 0 2.015 0 4.5v15C0 21.985 2.015 24 4.5 24h15c2.485 0 4.5-2.015 4.5-4.5v-15C24 2.015 21.985 0 19.5 0zM7.5 20.25H4.875V9H7.5v11.25zM6.188 7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.312 12.75H16.875V14.625c0-1.035-.018-2.368-1.44-2.368-1.44 0-1.662 1.125-1.662 2.287V20.25H11.25V9h2.625v1.512c.37-.576 1.035-1.395 2.52-1.395 2.692 0 3.188 1.773 3.188 4.08v6.053z" />
                            </svg>
                            Post
                          </a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
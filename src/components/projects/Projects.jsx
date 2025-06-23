// import React from 'react'
// import hosimg from '../../assets/Untitled-1.png'
// import weatherWEb from '../../assets/weatherc.jpg'
// import eims from '../../assets/eimsc.jpg'
// import railway2 from '../../assets/railwayc.jpg'
// import chatbot from '../../assets/chatbotc.jpg'
// import chatbotcshrape from '../../assets/cht.jpg'
// import unist from '../../assets/unist.jpeg'
// import weatherf from '../../assets/weatherappf.jpeg'


// const projects = [
//     {
//       id: 1,
//       title: "Hospital Management System",
//       description: "A desktop application for managing hospital operations.",
//       image: hosimg,
//       github: "https://github.com/Bavinduyeshan/Hospital-Management-system.git",
//       linkedin: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7266091865416839169", 
//     },
//     {
//       id: 2,
//       title: "Weather App",
//       description: "A Weather app created using HTML,CSS,JS",
//       image: weatherWEb,
//       github: "https://github.com/Bavinduyeshan/Weather-App.git",
//       linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7252038693815738371" ,

//     },
//     {
//       id: 3,
//       title: "Educational Institute Management System",
//       description: "A Java Swing-based EIMS ",
//       image: eims,
//       github: "https://github.com/Bavinduyeshan/Educational-Institute-Management-System.git",
//       linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282806142282440704",

//     },
//     {
//         id: 4,
//         title: "Railway Management System",
//         description: "A C# winForms project created to manage railway system",
//         image: railway2,
//         github: "https://github.com/Bavinduyeshan/Railway-mangement-system.git",
//         linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_managementsystem-activity-7176607728205803520-wWgy?utm_source=share&utm_medium=member_desktop", 

//       },
//       {
//         id: 5,
//         title: "Chatbot",
//         description: "A Python Chatbot Activated with voice ",
//         image: chatbot,
//         github: "https://github.com/Bavinduyeshan/Chatbot-with-Voice.git",
//         linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275227024758059008", 

//       },
     
//       {
//         id: 6,
//         title: "Weather App",
//         description: "A Weather app created using Python",
//         image: weatherWEb,
//         github: "https://github.com/Bavinduyeshan/Weather-App-Python.git",
//         linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7208151037424123904" ,

//       },
//       {
//         id: 7,
//         title: "Chatbot",
//         description: "A C# winforms  Chatbot   that made for hospital management system project",
//         image: chatbotcshrape,
//         github: "https://github.com/Bavinduyeshan/Chatbot_HMS.git",
//         linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7267264105005146113" ,

//       },
//       {
//         id: 8,
//         title: "University Student Management System",
//         description: "A C# winforms University Student Management System   that made for automate uni student managements",
//         image: unist,
//         github: "https://github.com/Bavinduyeshan/UniversityStudentManagementSystem.git",
//         linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_sql-softwaredevelopment-studentmanagementsystem-activity-7247354873631907842-lhhI?utm_source=share&utm_medium=member_desktop"

//       },
//       {
//         id: 9,
//         title: "Flutter Weather App",
//         description: "A simple weather app created using Flutter ",
//         image: weatherf,
//         github: "https://github.com/yourusername/library-management-system",
//         linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_flutter-dart-mobileapp-activity-7285670784084144128-P5t1?utm_source=share&utm_medium=member_desktop",

//       },
//     // Add more projects here
//   ];

// export default function Projects() {
//   return (
//      <section id="projects" className="py-16 ">
//       <div  data-aos='fade-up' data-aos-delay='300' className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
//         <div  data-aos='fade-up' data-aos-delay='800' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden "
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div  data-aos='fade-up'  className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-gray-700 mb-4">{project.description}</p>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-blue-500 text-white font-semibold py-2 px-1 rounded hover:bg-blue-600 mr-2"
//                 >
//                   View Source Code
//                 </a>

//                 {project.linkedin && (
//                   <a
//                     href={project.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-green-500 text-white font-semibold py-2 px-1 rounded hover:bg-green-600"
//                   >
//                     View LinkedIn Post
//                   </a>
//                 )}
//               </div>

              
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react';
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
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather app created using HTML, CSS, and JavaScript.",
    image: weatherWEb,
    github: "https://github.com/Bavinduyeshan/Weather-App.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7252038693815738371",
  },
  {
    id: 3,
    title: "Educational Institute Management System",
    description: "A Java Swing-based system for educational institute management.",
    image: eims,
    github: "https://github.com/Bavinduyeshan/Educational-Institute-Management-System.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282806142282440704",
  },
  {
    id: 4,
    title: "Railway Management System",
    description: "A C# WinForms project to manage railway operations.",
    image: railway2,
    github: "https://github.com/Bavinduyeshan/Railway-mangement-system.git",
    linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_managementsystem-activity-7176607728205803520-wWgy?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    title: "Voice-Activated Chatbot",
    description: "A Python chatbot with voice activation capabilities.",
    image: chatbot,
    github: "https://github.com/Bavinduyeshan/Chatbot-with-Voice.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7275227024758059008",
  },
  {
    id: 6,
    title: "Python Weather App",
    description: "A weather app developed using Python.",
    image: weatherWEb,
    github: "https://github.com/Bavinduyeshan/Weather-App-Python.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7208151037424123904",
  },
  {
    id: 7,
    title: "Hospital Chatbot",
    description: "A C# WinForms chatbot for hospital management systems.",
    image: chatbotcshrape,
    github: "https://github.com/Bavinduyeshan/Chatbot_HMS.git",
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:share:7267264105005146113",
  },
  {
    id: 8,
    title: "University Student Management System",
    description: "A C# WinForms system for automating university student management.",
    image: unist,
    github: "https://github.com/Bavinduyeshan/UniversityStudentManagementSystem.git",
    linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_sql-softwaredevelopment-studentmanagementsystem-activity-7247354873631907842-lhhI?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 9,
    title: "Flutter Weather App",
    description: "A simple weather app created using Flutter.",
    image: weatherf,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/posts/bavindu-yeshan-3a26052a7_flutter-dart-mobileapp-activity-7285670784084144128-P5t1?utm_source=share&utm_medium=member_desktop",
  },
    {
    id: 10,
    title: "Advanced Patient-Medical Record Management System ",
    description: " robust web-based solution built using React for a dynamic frontend and Spring Boot microservices for a scalable and secure backend. It streamlines patient data handling, appointment scheduling, and medical history management, enabling efficient healthcare delivery with a modern microservices architecture.",
    image: patientmedical,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7322837235370729473/",
  },
    {
    id: 11,
    title: "Swift iOS  Tic Tac Toe App",
    description: "A simple Tic Tac Toa app created using Swift.",
    image: tictac,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7336467861994991619/",
  },
   {
    id: 12,
    title: "Medi-Guide ",
    description: "A platform that helps people around the world search medicines and get reliable Information",
    image: mediguide,
    github: "https://github.com/Bavinduyeshan/Flutter-Weather-App.git",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7329592696581292033/",
    }
];

export default function Projects() {
  return (
    <section id="projects" >
      {/* className="relative py-16 bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden" */}
      {/* Background gradient circles matching Skills */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full -top-48 -left-48 transform rotate-12 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full top-96 right-0 transform -rotate-45"></div>
      </div> */}

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-12">
          My Projects
        </h2>
        <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 3.803c1.02.002 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.429.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                  {project.linkedin && (
                    <a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 0H4.5C2.015 0 0 2.015 0 4.5v15C0 21.985 2.015 24 4.5 24h15c2.485 0 4.5-2.015 4.5-4.5v-15C24 2.015 21.985 0 19.5 0zM7.5 20.25H4.875V9H7.5v11.25zM6.188 7.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.312 12.75H16.875V14.625c0-1.035-.018-2.368-1.44-2.368-1.44 0-1.662 1.125-1.662 2.287V20.25H11.25V9h2.625v1.512c.37-.576 1.035-1.395 2.52-1.395 2.692 0 3.188 1.773 3.188 4.08v6.053z" />
                      </svg>
                      LinkedIn Post
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
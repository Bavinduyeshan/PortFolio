// import React from 'react';
// import fullstack from '../../assets/undergradc.png';
// import linkedinLogo from '../../assets/linkedin.png';
// import githubLogo from '../../assets/github.png';
// import javaLogo from '../../assets/javalogo.jpg'; // Replace with the actual path
// import pythonLogo from '../../assets/pythonlogo.png'; // Replace with the actual path
// import clogo from '../../assets/clogo.png';
// import htmllogo from '../../assets/htmllogo.png';
// import csslogo from '../../assets/csslogo.png';
// import springlogo from '../../assets/spring.jpeg';
// import reactlogo from '../../assets/react.jpeg';
// import vitelogo from '../../assets/vite.png';
// import postmanlogo from '../../assets/postman.png';
// import mysqllogo from '../../assets/mysql.jpeg';
// import sqllogo from '../../assets/sql.jpeg';
// import firebaselogo from '../../assets/firebase.jpeg';

// export default function Skills() {
//   const programmingLanguages = [
//     { id: 1, name: 'Java', logo: javaLogo },
//     { id: 2, name: 'Python', logo: pythonLogo },
//     { id: 3, name: 'HTML', logo: htmllogo },
//     { id: 4, name: 'C-language', logo: clogo },
//     { id: 5, name: 'CSS', logo: csslogo },
//   ];

//   const frameworksandtools = [
//     { id: 1, name: 'Springboot', logo: springlogo },
//     { id: 2, name: 'React', logo: reactlogo },
//     { id: 3, name: 'Vite', logo: vitelogo },
//     { id: 4, name: 'MySQL', logo: mysqllogo },
//     { id: 5, name: 'SQL', logo: sqllogo },
//     { id: 6, name: 'Postman', logo: postmanlogo },
//     { id: 7, name: 'Firebase', logo: firebaselogo },
//   ];

//   return (
//     <section id="skills" className="py-16">
//       <div data-aos="fade-up" data-aos-delay="300" className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
//       </div>
//       <div className="max-w-4xl mx-auto grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
//         <div
//           data-aos="fade-up"
//           data-aos-delay="300"
//           className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
//         >
//           <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-3xl">Undergraduate Software Engineer</h1>
//         </div>

//         {/* <div
//           data-aos="fade-up"
//           data-aos-delay="300"
//           className="grid gap-8 col-start-1 col-end-3 row-start-1 sm:mb-8 sm:grid-cols-4 lg:gap-10 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
//         >
//           <img
//             src={fullstack}
//             alt=""
//             className="w-full h-96 object-cover rounded-lg sm:h-80 sm:col-span-2 lg:col-span-full"
//             loading="lazy"
//           />
//         </div> */}

//         <div
//           data-aos="fade-up"
//           data-aos-delay="300"
//           className="mt-4 md:col-start-1 md:row-start-3 self-center lg:mt-2 lg:col-start-1 lg:row-start-3 lg:row-end-4"
//         >
//           <div className="flex space-x-4">
//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/bavindu-yeshan-3a26052a7/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center"
//             >
//               <img src={linkedinLogo} alt="LinkedIn" className="w-15 h-10 object-contain" />
//               <span className="text-black">LinkedIn</span>
//             </a>

//             {/* GitHub */}
//             <a
//               href="https://github.com/Bavinduyeshan"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center"
//             >
//               <img src={githubLogo} alt="GitHub" className="w-20 h-10 object-contain" />
//               <span className="text-black">GitHub</span>
//             </a>
//           </div>
//         </div>

//         <p
//           data-aos="fade-up"
//           data-aos-delay="600"
//           className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 text-blue-950 lg:col-span-1"
//         >
//           I am an undergraduate student currently pursuing a Diploma in Software Engineering at the National Institute of
//           Business Management. My academic journey has equipped me with a strong foundation in software development,
//           algorithms, data structures, and object-oriented programming (OOP). I have gained hands-on experience in a variety
//           of programming languages, including Java, C#, and web technologies, and have worked on several projects that showcase
//           my skills in both front-end and back-end development.
//         </p>

//         <div data-aos="fade-up" className="mt-6 text-center">
//           <h2 className="text-2xl font-bold text-blue-950 mb-4">Programming Languages</h2>
//           <div data-aos="fade-up" className="flex flex-wrap justify-center gap-6">
//             {programmingLanguages.map((lang) => (
//               <div key={lang.id} className="flex flex-col items-center space-y-2">
//                 <img src={lang.logo} alt={lang.name} className="w-12 h-12 object-contain" />
//                 <span className="text-sm font-medium text-blue-900">{lang.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div data-aos="fade-up" className="mt-6 text-center">
//           <h2 className="text-2xl font-bold text-blue-950 mb-4">Frameworks and tools</h2>
//           <div data-aos="fade-up" className="flex flex-wrap justify-center gap-6">
//             {frameworksandtools.map((tool) => (
//               <div key={tool.id} className="flex flex-col items-center space-y-2">
//                 <img src={tool.logo} alt={tool.name} className="w-12 h-12 object-contain" />
//                 <span className="text-sm font-medium text-blue-900">{tool.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';
import javaLogo from '../../assets/javalogo.jpg';
import pythonLogo from '../../assets/pythonlogo.png';
import clogo from '../../assets/clogo.png';
import htmllogo from '../../assets/htmllogo.png';
import csslogo from '../../assets/csslogo.png';
import springlogo from '../../assets/spring.jpeg';
import reactlogo from '../../assets/react.jpeg';
import vitelogo from '../../assets/vite.png';
import postmanlogo from '../../assets/postman.png';
import mysqllogo from '../../assets/mysql.jpeg';
import sqllogo from '../../assets/sql.jpeg';
import firebaselogo from '../../assets/firebase.jpeg';

export default function Skills() {
  const programmingLanguages = [
    { id: 1, name: 'Java', logo: javaLogo },
    { id: 2, name: 'Python', logo: pythonLogo },
    { id: 3, name: 'HTML', logo: htmllogo },
    { id: 4, name: 'C', logo: clogo },
    { id: 5, name: 'CSS', logo: csslogo },
  ];

  const frameworksAndTools = [
    { id: 1, name: 'Spring Boot', logo: springlogo },
    { id: 2, name: 'React', logo: reactlogo },
    { id: 3, name: 'Vite', logo: vitelogo },
    { id: 4, name: 'MySQL', logo: mysqllogo },
    { id: 5, name: 'SQL', logo: sqllogo },
    { id: 6, name: 'Postman', logo: postmanlogo },
    { id: 7, name: 'Firebase', logo: firebaselogo },
  ];

  return (
    <section id="skills" className='mt-28'>
      {/* className="relative py-16 bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden" */}
      {/* Background gradient circles */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full -top-48 -left-48 transform rotate-12 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full top-96 right-0 transform -rotate-45"></div>
      </div> */}

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-12">
          My Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Description and Social Links */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Undergraduate Software Engineer
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              I'm pursuing a Diploma in Software Engineering at the National Institute of Business Management. My academic journey has built a solid foundation in software development, algorithms, data structures, and OOP. With hands-on experience in Java, C#, and web technologies, I've worked on projects showcasing both front-end and back-end skills.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/bavindu-yeshan-3a26052a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="w-6 h-6 mr-2 object-contain" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Bavinduyeshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <img src={githubLogo} alt="GitHub" className="w-6 h-6 mr-2 object-contain" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div data-aos="fade-up" data-aos-delay="600" className="space-y-8">
            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Programming Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {programmingLanguages.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex flex-col items-center p-4 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-indigo-600/50 hover:to-purple-600/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <img src={lang.logo} alt={lang.name} className="w-12 h-12 object-contain mb-2" />
                    <span className="text-sm font-medium text-white">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks and Tools */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Frameworks & Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frameworksAndTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="flex flex-col items-center p-4 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-indigo-600/50 hover:to-purple-600/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <img src={tool.logo} alt={tool.name} className="w-12 h-12 object-contain mb-2" />
                    <span className="text-sm font-medium text-white">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
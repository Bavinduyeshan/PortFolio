// import React from 'react';
// import Navbar from '../navbar/Navbar';
// import me from '../../assets/myimg2.jpg';
// import Skills from '../skills/Skills';
// import Projects from '../projects/Projects';
// import Contact from '../contact/Contact';

// export default function Hero() {

//   const scrollToContact = () => {
//     const contactSection = document.getElementById('contact');
//     contactSection.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="relative overflow-hidden min-h-screen sm:min-h-[650px] flex flex-col items-center">
//       {/* Background gradient circle */}
//       <div className="md:h-[690px] h-[880px] md:w-[1800px] w-[900px] bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 absolute rounded-full transform rotate-6 -top-32 opacity-70"></div>

//       <section id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-16 lg:px-52 pb-4 md:pt-32 md:pb-24 mt-24 md:mt-0 z-10'>
//         <div data-aos='fade-up' className='flex-1 md:text-left mt-10 md:mt-0'>
//           <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Bavindu Yeshan</h1>
//           <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg text-gray-300 mb-6'>
//             👋 Hello! I'm Bavindu Yeshan, a dedicated and enthusiastic software engineering student with a passion for technology and innovation. Currently pursuing my diploma in Software Engineering at NIBM, I thrive in environments where I can apply my problem-solving skills to create impactful solutions.
//           </p>
//           <button 
//             type='button' 
//             className='text-gray-950 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center' 
//             onClick={scrollToContact}
//           >
//             Contact
//           </button>
//         </div>

//         <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-end mt-0 md:mt-0'>
//           {/* <img 
//             src={me} 
//             alt="my image" 
//             className='h-[300px] sm:h-[400px] md:h-[450px] w-[450px] sm:w-[360px] object-cover rounded-lg' 
//           /> */}
//           <img 
//   src={me} 
//   alt="my image" 
//   className="h-[330px] w-[330px] object-cover rounded-full"
// />

//         </div>
//       </section>

//       {/* Optional: Navbar, Skills, Projects, and Contact sections */}
//       {/* <Navbar />
//       <Skills />
//       <Projects />
//       <Contact /> */}
//     </div>
//   );
// }

import React from 'react';
import Navbar from '../navbar/Navbar';
import me from '../../assets/myimg2.jpg';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
     {/* <div className="relative overflow-hidden min-h-screen flex flex-col items-center bg-gradient-to-b from-indigo-900 via-gray-900 to-black">
      Background gradient circles */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full -top-96 -left-96 transform rotate-12 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full top-32 right-0 transform -rotate-45"></div>
      </div> */}

      <section id='home' className='relative flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-16 xl:px-32 pt-24 md:pt-32 pb-12 z-10'>
        <div data-aos='fade-up' className='flex-1 md:text-left mt-12 md:mt-0 text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-4 animate-gradient'>
            Bavindu Yeshan
          </h1>
          <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed'>
            👋 Hi there! I'm Bavindu Yeshan, a passionate software engineering student at NIBM. I love tackling challenges and building innovative solutions with code. Let's create something extraordinary together!
          </p>
          <button
            type='button'
            className='bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full px-6 py-3 text-lg hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg'
            onClick={scrollToContact}
          >
            Get in Touch
          </button>
        </div>

        <div data-aos='fade-up' data-aos-delay='600' className='flex-1 flex justify-center md:justify-end mt-8 md:mt-0'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-75 animate-pulse'></div>
            <img
              src={me}
              alt="Bavindu Yeshan"
              className='relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px] object-cover rounded-full border-4 border-white/90 shadow-xl transform hover:scale-105 transition-all duration-500'
            />
          </div>
        </div>
      </section>

      {/* Optional: Include other sections if needed */}
      {/* <Navbar />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
}
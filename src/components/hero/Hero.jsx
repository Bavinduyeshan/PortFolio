import React from 'react';
import Navbar from '../navbar/Navbar';
import me from '../../assets/myimg.png';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

export default function Hero() {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden min-h-screen sm:min-h-[650px] flex flex-col items-center">
      {/* Background gradient circle */}
      <div className="md:h-[690px] h-[880px] md:w-[1800px] w-[900px] bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 absolute rounded-full transform rotate-6 -top-32 opacity-70"></div>

      <section id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-16 lg:px-52 pb-4 md:pt-32 md:pb-24 mt-24 md:mt-0 z-10'>
        <div data-aos='fade-up' className='flex-1 md:text-left mt-10 md:mt-0'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Bavindu Yeshan</h1>
          <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg text-gray-300 mb-6'>
            👋 Hello! I'm Bavindu Yeshan, a dedicated and enthusiastic software engineering student with a passion for technology and innovation. Currently pursuing my diploma in Software Engineering at NIBM, I thrive in environments where I can apply my problem-solving skills to create impactful solutions.
          </p>
          <button 
            type='button' 
            className='text-gray-950 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center' 
            onClick={scrollToContact}
          >
            Contact
          </button>
        </div>

        <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-end mt-0 md:mt-0'>
          <img 
            src={me} 
            alt="my image" 
            className='h-[300px] sm:h-[400px] md:h-[450px] w-[450px] sm:w-[360px] object-cover rounded-lg' 
          />
        </div>
      </section>

      {/* Optional: Navbar, Skills, Projects, and Contact sections */}
      {/* <Navbar />
      <Skills />
      <Projects />
      <Contact /> */}
    </div>
  );
}

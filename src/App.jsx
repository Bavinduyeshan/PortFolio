import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

export default function 
() {

  useEffect(()=>{
     Aos.init({
      duration:1000,
     });
  },[])
  return (
   
   <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden">
      {/* Common background gradient circles for the entire website */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full -top-48 -left-48 transform rotate-12 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full top-96 right-0 transform -rotate-45"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

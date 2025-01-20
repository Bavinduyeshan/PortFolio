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
   
   <main>
    <Hero />
    {/* <Navbar /> */}
    <Navbar/>
    <Skills/>
    <Projects/>
    <Contact/>

   </main>
  )
}

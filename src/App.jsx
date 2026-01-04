// import React, { useEffect } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import Hero from './components/hero/Hero'
// import Navbar from './components/navbar/Navbar';
// import Skills from './components/skills/Skills';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';

// export default function 
// () {

//   useEffect(()=>{
//      Aos.init({
//       duration:1000,
//      });
//   },[])
//   return (
   
//    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden">
//       {/* Common background gradient circles for the entire website */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full -top-48 -left-48 transform rotate-12 animate-pulse"></div>
//         <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full top-96 right-0 transform -rotate-45"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10">
//         <Navbar />
//         <Hero />
//         <Skills />
//         <Projects />
//         <Contact />
//       </div>
//     </div>
//   )
// }

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

export default function App() {
  useEffect(()=>{
     Aos.init({
      duration:1000,
     });
  },[])
  
  return (
    <>
      <Helmet>
        <title>Bavindu Yeshan - Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Bavindu Yeshan, a skilled full-stack developer specializing in React, Node.js, and modern web technologies. View my projects and get in touch." />
        <meta name="keywords" content="Bavindu Yeshan, web developer, full stack developer, React developer, JavaScript developer, Node.js, portfolio, Sri Lanka developer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bavinduyeshan-web.netlify.app/" />
        <meta property="og:title" content="Bavindu Yeshan - Full Stack Developer" />
        <meta property="og:description" content="Portfolio showcasing web development projects and skills in React, Node.js, and modern technologies" />
        <meta property="og:image" content="https://bavinduyeshan-web.netlify.app/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bavinduyeshan-web.netlify.app/" />
        <meta property="twitter:title" content="Bavindu Yeshan - Full Stack Developer" />
        <meta property="twitter:description" content="Portfolio showcasing web development projects and skills" />
        <meta property="twitter:image" content="https://bavinduyeshan-web.netlify.app/og-image.jpg" />
        
        <link rel="canonical" href="https://bavinduyeshan-web.netlify.app/" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Bavindu Yeshan",
            "url": "https://bavinduyeshan-web.netlify.app",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer specializing in React, Node.js and modern web technologies",
            "sameAs": [
              "https://github.com/bavinduyeshan",
              "https://linkedin.com/in/bavinduyeshan"
            ]
          })}
        </script>
      </Helmet>
   
      <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full -top-48 -left-48 transform rotate-12 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full top-96 right-0 transform -rotate-45"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}
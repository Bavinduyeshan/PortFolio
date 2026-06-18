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
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

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

        <div className="relative min-h-screen bg-[#05070d] text-slate-100 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors duration-300">
          {/* Signature background: graph-paper grid + glowing nodes (dark mode only) */}
          <div className="absolute inset-0 pointer-events-none bg-mesh"></div>

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
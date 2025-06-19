// import React, { useState } from 'react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const NavbarLinks = [
//     { id: 1, name: 'Home', link: '#home' },
//     { id: 2, name: 'Skills', link: '#skills' },
//     { id: 3, name: 'Projects', link: '#projects' },
//     { id: 4, name: 'Contact', link: '#contact' },
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header data-aos='fade-up' className='absolute top-0 w-full body-font z-10'>
//       <div className='container mx-auto flex justify-between items-center p-5'>
//         {/* Logo Section */}
//         <a className='flex title-font font-medium text-gray-900 mb-4 md:mb-0'>
//           <span className='ml-3 mr-11 font-bold text-white text-3xl sm:text-4xl'>Portfolio</span>
//         </a>

//         {/* Navbar Links for Desktop */}
//         <nav className='hidden md:flex items-center text-base text-white space-x-7'>
//           {NavbarLinks.map((e) => (
//             <a
//               key={e.id}
//               href={e.link}
//               className='relative hover:text-blue-100 group'
//             >
//               {e.name}
//               <span className="absolute left-0 bottom-[-10px] bg-white h-[3px] w-0 group-hover:w-full transition-all duration-300"></span>
//             </a>
//           ))}
//         </nav>

//         {/* Hamburger Button for Mobile */}
//         <div className='md:hidden flex items-center'>
//           <button
//             onClick={toggleMenu}
//             className='text-white focus:outline-none'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M4 6h16M4 12h16M4 18h16'
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900 p-4`}
//       >
//         {NavbarLinks.map((e) => (
//           <a
//             key={e.id}
//             href={e.link}
//             className='block text-white py-2 px-4 hover:bg-blue-700'
//           >
//             {e.name}
//           </a>
//         ))}
//       </div>
//     </header>
//   );
// }
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'Projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Trigger expansion animation on mount
  useEffect(() => {
    setIsExpanded(true);
  }, []);

  return (
    <header data-aos='fade-up' className='fixed top-4 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 relative'>
        {/* Left Icon */}
        <div className='absolute top-0 left-4 z-40'>
          <a href='#home' className='text-white'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Right Icon */}
        <div className='absolute top-0 right-4 z-40'>
          <a href='#contact' className='text-white'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Navbar Container with transition */}
        <div className='flex justify-center items-center'>
          <nav
            className={`flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-lg py-2 px-6 backdrop-blur-sm bg-opacity-90 transition-all duration-500 ${
              isExpanded ? 'scale-100' : 'scale-75 opacity-0'
            }`}
          >
            {/* Logo Section */}
            <a href='#home' className='flex items-center mr-8'>
              <span className='font-bold text-white text-2xl sm:text-3xl'>Portfolio</span>
            </a>

            {/* Navbar Links for Desktop */}
            <div className='hidden md:flex items-center space-x-4'>
              {NavbarLinks.map((e) => (
                <a
                  key={e.id}
                  href={e.link}
                  className='text-white px-4 py-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 relative group'
                >
                  {e.name}
                  <span className='absolute left-1/2 bottom-0 h-0.5 w-0 bg-white group-hover:w-1/2 transition-all duration-300 origin-center'></span>
                  <span className='absolute right-1/2 bottom-0 h-0.5 w-0 bg-white group-hover:w-1/2 transition-all duration-300 origin-center'></span>
                </a>
              ))}
            </div>

            {/* Hamburger Button for Mobile */}
            <div className='md:hidden flex items-center'>
              <button
                onClick={toggleMenu}
                className='text-white focus:outline-none p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'
                aria-label='Toggle menu'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gradient-to-b from-indigo-600 to-purple-600 rounded-2xl mt-2 mx-4 shadow-lg overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {NavbarLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className='block text-white py-3 px-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300'
              onClick={() => setIsOpen(false)}
            >
              {e.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
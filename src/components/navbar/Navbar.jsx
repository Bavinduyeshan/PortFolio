import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'Projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header data-aos='fade-up' className='absolute top-0 w-full body-font z-10'>
      <div className='container mx-auto flex justify-between items-center p-5'>
        {/* Logo Section */}
        <a className='flex title-font font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='ml-3 mr-11 font-bold text-white text-3xl sm:text-4xl'>Portfolio</span>
        </a>

        {/* Navbar Links for Desktop */}
        <nav className='hidden md:flex items-center text-base text-white space-x-7'>
          {NavbarLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className='relative hover:text-blue-100 group'
            >
              {e.name}
              <span className="absolute left-0 bottom-[-10px] bg-white h-[3px] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Hamburger Button for Mobile */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
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
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900 p-4`}
      >
        {NavbarLinks.map((e) => (
          <a
            key={e.id}
            href={e.link}
            className='block text-white py-2 px-4 hover:bg-blue-700'
          >
            {e.name}
          </a>
        ))}
      </div>
    </header>
  );
}

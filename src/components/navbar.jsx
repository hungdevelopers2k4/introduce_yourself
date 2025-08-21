import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import NavbarMobile from './navbarmobile.jsx'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu');
      const menuButton = document.querySelector('.mobile-menu-button');
      
      if (isMenuOpen && menu && !menu.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className='flex items-center justify-between gap-6 p-4 w-full max-w-full container-narrow lg:rounded-lg sticky top-4 left-auto right-auto z-50 bg-white/50 dark:bg-black/20 backdrop-blur-xl'>
        <div className="flex gap-2 items-center text-2xl font-bold">
          <img src={logo} alt="" className='h-8 w-8  rounded-4xl' />
           Hồ sơ
        </div>
        <div className='hidden md:flex items-center gap-6'>
          <button 
            onClick={() => handleSmoothScroll('about')}
            className="transition-colors hover:opacity-55 font-medium text-black"
          >
            Giới thiệu
          </button>
          <button 
            onClick={() => handleSmoothScroll('work')}
            className="transition-colors hover:opacity-55 font-medium text-black"
          >
            Làm việc
          </button>
          <button 
            onClick={() => handleSmoothScroll('skills')}
            className="transition-colors hover:opacity-55 font-medium text-black"
          >
            Kỹ năng
          </button>
          <button 
            onClick={() => handleSmoothScroll('contact')}
            className="transition-colors hover:opacity-55 font-medium text-black"
          >
            Liên hệ
          </button>
        </div>
        <div className='md:hidden'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='mobile-menu-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-3'
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-menu h-6 w-6 mr-2">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            Menu
          </button>
        </div>
      </header>
      
      <NavbarMobile 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        handleSmoothScroll={handleSmoothScroll}
      />
    </>
  );
}

export default Navbar;
import { useEffect } from 'react';
import logo from '../assets/logo.png';
const NavbarMobile = ({ isMenuOpen, setIsMenuOpen, handleSmoothScroll }) => {
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
    }, [isMenuOpen, setIsMenuOpen]);
    return (
        <div 
            id="mobile-menu"
            className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <div 
                className="absolute inset-0 bg-black/30"
                onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className={`absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex gap-2 items-center text-xl font-bold">
                        <img src={logo} alt="" className='h-8 w-8 rounded-4xl' />
                        Profile
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <nav className="p-5 flex flex-col space-y-4">
                    <button 
                        onClick={() => handleSmoothScroll('about')}
                        className="text-left py-3 px-4 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-black dark:text-gray-200"
                    >
                        Giới thiệu
                    </button>
                    <button 
                        onClick={() => handleSmoothScroll('work')}
                        className="text-left py-3 px-4 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-black dark:text-gray-200"
                    >
                        Làm việc
                    </button>
                    <button 
                        onClick={() => handleSmoothScroll('skills')}
                        className="text-left py-3 px-4 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-black dark:text-gray-200"
                    >
                        Kỹ năng
                    </button>
                    <button 
                        onClick={() => handleSmoothScroll('contact')}
                        className="text-left py-3 px-4 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-black dark:text-gray-200"
                    >
                        Liên hệ
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default NavbarMobile;
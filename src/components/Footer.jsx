import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Footer = () => {
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="mt-auto w-full bg-gradient-to-r bg-primary-100/20 dark:bg-primary-900/10">
        <div className="flex flex-col gap-4 justify-between items-center w-full p-6">
            <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-12  p-6 max-w-full container-wide">
                <div className="w-full flex flex-col gap-4 md:max-w-xs lg:max-w-sm">
                    <Link to="/" className="">
                        <div className="flex items-center text-primary-900 dark:text-primary-100 gap-3">
                            <img src={logo} alt="PixelProfile logo" className='h-8 w-8 rounded-full'/>
                            Profile
                        </div>
                    </Link>
                    <div className="text-lg font-semibold">
                        Profile
                    </div>
                    <p className='text-sm opacity-70'>Xây dựng những trang web đẹp mắt, tiện dụng và mang lại kết quả..</p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 items-start mt-6 md:mt-0">
                    <div className="flex flex-col gap-4 justify-center w-full text-xs">
                        <p className='text-slate-900 dark:text-slate-100 font-light text-base'>
                            Navigation
                        </p>
                        <div className='flex flex-col flex-wrap gap-4 justify-center w-full'>
                            <button 
                              onClick={() => handleSmoothScroll('about')}
                              className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500 text-left'
                            >
                                Giới thiệu
                            </button>
                            <button 
                              onClick={() => handleSmoothScroll('work')}
                              className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500 text-left'
                            >
                                Làm việc
                            </button>
                            <button 
                              onClick={() => handleSmoothScroll('skills')}
                              className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500 text-left'
                            >
                               Kỹ năng
                            </button>
                            <button 
                              onClick={() => handleSmoothScroll('contact')}
                              className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500 text-left'
                            >
                                Liên hệ
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center w-full text-xs">
                        <p className='text-slate-900 dark:text-slate-100 font-light text-base'>
                            Projects
                        </p>
                        <div className='flex flex-col flex-wrap gap-4 justify-center w-full'>
                            <Link to="" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                E-commerce
                            </Link>
                            <Link to="" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                Portfolio
                            </Link>
                            <Link to="" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                SaaS Dashboard
                            </Link>
                            <Link to="" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                Mobile App
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center w-full text-xs">
                        <p className='text-slate-900 dark:text-slate-100 font-light text-base'>
                            Connect
                        </p>
                        <div className='flex flex-col flex-wrap gap-4 justify-center w-full'>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/hưng-hà-văn-48821a330" target="_blank" rel="noopener noreferrer" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                LinkedIn
                            </a>
                            <a href="https://www.facebook.com/share/164z8vMgz2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                Facebook
                            </a>
                            <a href="mailto:alex@pixelprofile.com" className='transition-colors text-xs text-gray-900 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500'>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <hr className='w-full h-0.5 my-4 border-0 bg-gradient-to-r from-white/5 via-black/10 to-white/5 dark:from-black/5 dark:via-white/30 darK:to-black/5'/>
            <div className='py-8 px-2 flex flex-col items-center'>
                <div className='w-full text-center lg:flex lg:justify-center p-4 mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400'>
                    <div className='text-center p-6'>
                        © 2025 PixelProfile. All rights reserved. Built with care by Alex.
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
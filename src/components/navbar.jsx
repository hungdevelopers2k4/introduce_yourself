import { Link } from 'react-router';
import logo from '../assets/logo.webp';
const navbar = () => {
  return (
    <header className='flex items-center justify-between gap-6 p-4 w-full max-w-full container-narrow lg:rounded-lg sticky top-4 left-auto right-auto z-50 bg-white/50 dark:bg-black/20 backdrop-blur-xl'>
      <div className="flex gap-2 items-center text-2xl font-bold">
        <img src={logo} alt="" className='h-8 w-8 rounded-4xl' />
        PixelProfile
      </div>
      <div className='hidden md:flex items-center gap-6'>
        <Link to="" className="transition-colors font-medium text-black dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500">
            About
        </Link>
        <Link to="" className="transition-colors font-medium text-black dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500">
            Work
        </Link>
        <Link to="" className="transition-colors font-medium text-black dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500">
            Skills
        </Link>
        <Link to="" className="transition-colors font-medium text-black dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500">
            Contact
        </Link>
      </div>
    </header>
  )
}

export default navbar

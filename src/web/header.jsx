import image from '../assets/logo.webp'
import { Link } from 'react-router';
const Header = () => {
  return (
    <section className='relative  header w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16'>
      <div className='overflow-hidden header__allLine absolute inset-0 h-full w-full pointer-events-none'>
        <div className='header__background'>
          <div className='header__line header__line--1'></div>
          <div className='header__line header__line--2'></div>
          <div className='header__line header__line--3'></div>
          <div className='header__line header__line--4'></div>
        </div>
      </div>
      <div className="w-full header__content p-6 gap-8 relative grid lg:grid-cols-2 max-w-full container-wide items-center">
        <div className="flex flex-col gap-4 justify-center relative z-10">
            <h1 className='font-normal text-2xl md:text-3xl lg:text-4xl leading-tight md:max-w-2xl'>
                Hi, I'm Alex. I build <span className='font-semibold px-2 underline decoration-primary-500 decoration-4'>
                fast, friendly
                </span> websites
            </h1>
            <p className='md:text-lg md:max-w-xl'>
                Let me help you with your next project.
            </p>
            <div className='flex flex-wrap gap-4 mt-2 justify-start'>
                <Link to='' className='inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background  text-white bg-gray-900 hover:bg-black/80 dark  h-12 rounded-md px-6 sm:px-10 text-md transition-all'>
                View My Work
                </Link>
                <Link to='' className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all  hover:bg-black/80 hover:text-white border hover:border-black  h-12 rounded-md px-6 sm:px-10 text-md">
                Contact Me
                </Link>
            </div>
        </div>
        <img src={image} alt="" className='w-full rounded-md relative z-10 shadow-md my-4'/>
      </div>
    </section>
  );
};

export default Header;
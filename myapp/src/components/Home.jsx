import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name= "home" className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* Text */}
        <p className='text-[#fca311]'>
          Hello, I'm 
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ian Kiguru</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a FullStack developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a full stack developer specializing in building exceptional applications.
          Currently I'm focused on building responsive full stack web applications.
        </p>
        <div>
        <Link  to='contact' smooth={true} duration={500}>
          <button className=' text-white px-4 py-2 rounded-lg flex items-center my-2 border-2 hover:bg-[#fca311] hover:text-[#0a192b] hover:border-[#0a192b]'>
            Contact Me 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight  className='ml-2'/>
            </span>
          </button>
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default Home;

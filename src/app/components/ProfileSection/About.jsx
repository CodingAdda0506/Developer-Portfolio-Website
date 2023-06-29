import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <div className="">
            <Image src="https://avatars.githubusercontent.com/u/80524895?v=4" alt='GithubImage' width={500} height={500} className='w-[315px]'/>
        </div>

        <div className="text-white font-firaCode font-bold text-[30px]">
            Aditya Trivedi 
        </div>

        <a href="./Resume.pdf" target='_blank' className='text-center w-[200px] font-firaCode bg-[#444c56] text-[#ADBAC7] py-2 rounded-xl border-2 border-[#768390]'>
            Resume
        </a>
    </section>
  )
}

export default About;

